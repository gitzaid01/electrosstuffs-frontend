"use client";

import { useMemo, useState } from "react";
import { configuratorPhases, type ConfiguratorOption } from "@/lib/data";
import ConfiguratorIcon from "./ConfiguratorIcon";

const WHATSAPP_NUMBER = "918960747216";

const COMPLEXITY_RANK: Record<string, number> = {
  Simple: 0,
  Standard: 1,
  Elevated: 2,
  Enterprise: 3,
};
const COMPLEXITY_LABEL = ["Simple", "Standard", "Elevated", "Enterprise"];

type Selections = {
  [phaseId: string]: string | string[] | undefined;
};

// default: first option of every single-select phase, nothing for multi-select
const initialSelections: Selections = Object.fromEntries(
  configuratorPhases.map((p) => [
    p.id,
    p.type === "single" ? p.options[0].id : [],
  ])
);

function getSelectedOptions(
  phaseId: string,
  selections: Selections
): ConfiguratorOption[] {
  const phase = configuratorPhases.find((p) => p.id === phaseId)!;
  const selected = selections[phaseId];

  if (phase.type === "multi") {
    const ids = Array.isArray(selected) ? selected : [];
    return phase.options.filter((o) => ids.includes(o.id));
  }

  const id = typeof selected === "string" ? selected : undefined;
  const opt = phase.options.find((o) => o.id === id);
  return opt ? [opt] : [];
}

export default function ProjectConfigurator() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [selections, setSelections] = useState<Selections>(initialSelections);

  const activePhase = configuratorPhases[activePhaseIndex];

  function selectSingle(phaseId: string, optionId: string) {
    setSelections((prev) => ({ ...prev, [phaseId]: optionId }));
  }

  function toggleMulti(phaseId: string, optionId: string) {
    setSelections((prev) => {
      const current = Array.isArray(prev[phaseId])
        ? (prev[phaseId] as string[])
        : [];
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [phaseId]: next };
    });
  }

  const estimate = useMemo(() => {
    let price = 0;
    let days = 0;
    let intensity = 0;
    let complexityRank = 0;

    for (const phase of configuratorPhases) {
      const chosen = getSelectedOptions(phase.id, selections);
      for (const opt of chosen) {
        price += opt.price;
        days += opt.days;
        intensity += opt.intensity;
        if (opt.complexity) {
          complexityRank = Math.max(
            complexityRank,
            COMPLEXITY_RANK[opt.complexity]
          );
        }
      }
    }

    return {
      price,
      days: Math.max(days, 14),
      intensity: Math.min(intensity, 100),
      complexity: COMPLEXITY_LABEL[complexityRank],
    };
  }, [selections]);

  const summaryLines = useMemo(() => {
    return configuratorPhases
      .map((phase) => {
        const chosen = getSelectedOptions(phase.id, selections);
        if (chosen.length === 0) return null;
        return `${phase.shortLabel}: ${chosen.map((o) => o.title).join(", ")}`;
      })
      .filter(Boolean)
      .join("\n");
  }, [selections]);

  function handleStartProject() {
    const message = [
      `Hi ElectroStuffs, I configured a project and I'd like to start.`,
      ``,
      summaryLines,
      ``,
      `Estimated investment: $${estimate.price.toLocaleString()}`,
      `Timeline: ~${estimate.days} days`,
      `Complexity: ${estimate.complexity}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleDiscoveryCall() {
    const message = `Hi ElectroStuffs, I'd like to book a discovery call about a project I'm planning.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_320px] gap-8">
      {/* phase sidebar */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
        {configuratorPhases.map((phase, i) => {
          const isActive = i === activePhaseIndex;
          const hasSelection =
            getSelectedOptions(phase.id, selections).length > 0;
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActivePhaseIndex(i)}
              className={`shrink-0 lg:shrink flex items-center gap-3 rounded-md border px-3 py-3 text-left transition-colors ${
                isActive
                  ? "border-accent bg-surface"
                  : "border-border bg-transparent hover:border-border/80"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[11px] ${
                  isActive
                    ? "bg-accent text-cream"
                    : hasSelection
                    ? "border border-accent text-accent"
                    : "border border-border text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-mono text-xs uppercase tracking-widest ${
                  isActive ? "text-cream" : "text-muted"
                }`}
              >
                {phase.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* active phase options */}
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Phase {String(activePhaseIndex + 1).padStart(2, "0")}
        </p>
        <h2 className="font-display text-2xl md:text-3xl uppercase mt-2">
          {activePhase.title}
        </h2>
        <p className="text-sm text-muted mt-2 mb-8">{activePhase.desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activePhase.options.map((opt) => {
            const selected =
              activePhase.type === "multi"
                ? (
                    (selections[activePhase.id] as string[] | undefined) ??
                    []
                  ).includes(opt.id)
                : selections[activePhase.id] === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() =>
                  activePhase.type === "multi"
                    ? toggleMulti(activePhase.id, opt.id)
                    : selectSingle(activePhase.id, opt.id)
                }
                className={`text-left rounded-lg border p-5 transition-colors ${
                  selected
                    ? "border-accent bg-surface"
                    : "border-border bg-transparent hover:border-border/80"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    selected
                      ? "bg-accent text-cream"
                      : "bg-surface-2 text-muted"
                  }`}
                >
                  <ConfiguratorIcon name={opt.icon} />
                </span>
                <p className="font-display text-base uppercase mt-4">
                  {opt.title}
                </p>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {opt.desc}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            disabled={activePhaseIndex === 0}
            onClick={() => setActivePhaseIndex((i) => Math.max(0, i - 1))}
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
          <button
            type="button"
            disabled={activePhaseIndex === configuratorPhases.length - 1}
            onClick={() =>
              setActivePhaseIndex((i) =>
                Math.min(configuratorPhases.length - 1, i + 1)
              )
            }
            className="font-mono text-xs uppercase tracking-widest text-accent hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next Phase →
          </button>
        </div>
      </div>

      {/* live estimate panel */}
      <div className="lg:sticky lg:top-24 h-fit rounded-lg border border-border bg-surface p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Estimated Investment
        </p>
        <p className="font-display text-4xl mt-2">
          <span className="text-accent">$</span>
          {estimate.price.toLocaleString()}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Timeline
            </p>
            <p className="text-sm mt-1">{estimate.days} Days</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Complexity
            </p>
            <p className="text-sm mt-1">{estimate.complexity}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Resource Intensity
            </p>
            <span className="font-mono text-[10px] text-muted">
              {estimate.intensity}%
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300"
              style={{ width: `${estimate.intensity}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleStartProject}
          className="w-full mt-8 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
        >
          Start Project
        </button>
        <button
          type="button"
          onClick={handleDiscoveryCall}
          className="w-full mt-3 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-accent transition-colors"
        >
          Discovery Call
        </button>

        <div className="flex items-center gap-2 mt-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Engineers Online: 1
          </span>
        </div>
      </div>
    </div>
  );
}