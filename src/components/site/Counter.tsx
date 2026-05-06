import { useEffect, useRef, useState } from "react";

export function Counter({ to, suffix = "", duration = 2600 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setVal(Math.floor(easeOut(p) * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref} className="tabular-nums inline-block">{val.toLocaleString()}{suffix}</span>;
}