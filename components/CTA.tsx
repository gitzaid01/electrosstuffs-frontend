"use client";

import { useState } from "react";

type Channel = "whatsapp" | "email" | null;
type Status = "idle" | "sending" | "sent" | "error";

const WHATSAPP_NUMBER = "918960747216";
const CONTACT_EMAIL = "electrostuffs@gmail.com";

export default function CTA() {
  const [channel, setChannel] = useState<Channel>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit = name.trim() && contact.trim() && details.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !channel || status === "sending") return;

    if (channel === "whatsapp") {
      const message = [
        `Hi ElectroStuffs, I'd like a quote.`,
        ``,
        `Name: ${name}`,
        `Contact: ${contact}`,
        budget ? `Budget: ${budget}` : null,
        ``,
        `Project details:`,
        details,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // email: actually send it via our API route instead of relying on mailto:
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, budget, details }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send. Try again."
      );
    }
  }

  return (
    <section
      id="contact"
      className="container-px py-32 border-t border-border text-center"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        Next Step
      </span>
      <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 max-w-3xl mx-auto leading-tight">
        Let&apos;s Build Something{" "}
        <span className="text-accent">Extraordinary</span>
      </h2>

      {!channel ? (
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Continue with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setChannel("whatsapp")}
              className="rounded-full bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setChannel("email")}
              className="rounded-full border border-border px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-accent transition-colors"
            >
              Email
            </button>
          </div>
          <span className="font-mono text-xs text-muted mt-2">
            or reach us directly at {CONTACT_EMAIL}
          </span>
        </div>
      ) : status === "sent" ? (
        <div className="mt-10 max-w-lg mx-auto  border-accent bg-surface p-8 text-center">
          <p className="font-display text-2xl uppercase text-accent">
            Request Sent
          </p>
          <p className="text-sm text-muted mt-3">
            Thanks, {name.split(" ")[0]}   we&apos;ll get back to you at{" "}
            {contact} soon.
          </p>
          <button
            type="button"
            onClick={() => {
              setChannel(null);
              setStatus("idle");
              setName("");
              setContact("");
              setDetails("");
              setBudget("");
            }}
            className="mt-6 font-mono text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors"
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-lg mx-auto text-left rounded-lg border border-border bg-surface p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Request a Quote · {channel === "whatsapp" ? "WhatsApp" : "Email"}
            </span>
            <button
              type="button"
              onClick={() => {
                setChannel(null);
                setStatus("idle");
              }}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors"
            >
              Change
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-accent outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2"
              >
                {channel === "whatsapp" ? "Phone number" : "Email address"}
              </label>
              <input
                id="contact"
                type={channel === "whatsapp" ? "tel" : "email"}
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-accent outline-none"
                placeholder={
                  channel === "whatsapp" ? "+91 98765 43210" : "you@company.com"
                }
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2"
              >
                Budget <span className="normal-case text-muted/70">(optional)</span>
              </label>
              <input
                id="budget"
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-accent outline-none"
                placeholder="e.g. $5,000 – $10,000"
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2"
              >
                Project details
              </label>
              <textarea
                id="details"
                required
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-accent outline-none resize-none"
                placeholder="What are you looking to build?"
              />
            </div>
          </div>

          {status === "error" && (
            <p className="mt-4 font-mono text-xs text-accent">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={!canSubmit || status === "sending"}
            className="w-full mt-6 rounded-full bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {channel === "whatsapp"
              ? "Send on WhatsApp"
              : status === "sending"
              ? "Sending..."
              : "Send Email"}
          </button>
        </form>
      )}
    </section>
  );
}