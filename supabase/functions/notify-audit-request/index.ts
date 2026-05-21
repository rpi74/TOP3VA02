import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log("Webhook payload received:", JSON.stringify(body));

    const record = body?.record;

    if (!record) {
      throw new Error("Missing record in webhook payload");
    }

    console.log("Record extracted:", JSON.stringify(record));

    const name = record.name?.trim() || "Unknown";
    const email = record.email?.trim() || "No email provided";
    const website = record.website?.trim() || "Not provided";
    const goals = record.goals?.trim() || "Not provided";
    const createdAt = record.created_at || new Date().toISOString();

    const formattedCreatedAt = new Date(createdAt).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Lima",
    });

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY secret");
    }

    const safeGoals = goals.replace(/\n/g, "<br />");

    console.log("Preparing Resend request", {
      name,
      email,
      website,
      goals,
      createdAt,
    });

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TOP3 VA <contact@top3va.com>",
        to: ["contact@top3va.com"],
        reply_to: email,
        subject: `New TOP3 VA audit lead — ${name}`,
        html: `
          <div style="margin:0; padding:24px; background-color:#f4f4f5; font-family:Arial, sans-serif; color:#111827;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
              <tr>
                <td style="padding:24px 24px 16px 24px; background:#111827; color:#ffffff;">
                  <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; opacity:0.8;">TOP3 VA</div>
                  <h1 style="margin:8px 0 0 0; font-size:24px; line-height:1.2; font-weight:700;">New audit request</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 20px 0; font-size:15px; line-height:1.6; color:#374151;">
                    A new lead submitted the audit form on the website.
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; width:160px; font-size:14px; font-weight:700; color:#111827;">Name</td>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; font-size:14px; color:#374151;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; width:160px; font-size:14px; font-weight:700; color:#111827;">Email</td>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; font-size:14px; color:#374151;">${email}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; width:160px; font-size:14px; font-weight:700; color:#111827;">Website</td>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; font-size:14px; color:#374151;">${website}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; width:160px; font-size:14px; font-weight:700; color:#111827; vertical-align:top;">Goals</td>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; font-size:14px; color:#374151;">${safeGoals}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; width:160px; font-size:14px; font-weight:700; color:#111827;">Submitted</td>
                      <td style="padding:12px 0; border-top:1px solid #e5e7eb; font-size:14px; color:#374151;">${formattedCreatedAt}</td>
                    </tr>
                  </table>

                  <div style="margin-top:24px;">
                    <a href="mailto:${email}?subject=Re:%20TOP3%20VA%20audit%20request" style="display:inline-block; padding:12px 18px; background:#111827; color:#ffffff; text-decoration:none; border-radius:8px; font-size:14px; font-weight:700;">
                      Reply to lead
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        `,
      }),
    });

    const resendData = await resendResponse.json();
    console.log("Resend response:", JSON.stringify(resendData));

    if (!resendResponse.ok) {
      throw new Error(
        resendData?.message ||
          resendData?.error ||
          "Failed to send email with Resend"
      );
    }

    return new Response(
      JSON.stringify({ success: true, resend: resendData }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(
      "notify-audit-request error:",
      error instanceof Error ? error.message : error
    );

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});