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