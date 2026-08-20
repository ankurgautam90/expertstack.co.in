import { Icon } from "@/components/icons/Icon";
import type { ProcessStep } from "@/lib/data/home";

/** Numbered process step. The rule on the left connects steps into a track. */
export function ServiceCard({ step }: { step: ProcessStep }) {
  return (
    <div className="group relative h-full rounded-xl border border-navy-100 bg-white p-7 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-4xl font-extrabold leading-none text-navy-100 transition-colors duration-500 group-hover:text-accent-200">
          {step.number}
        </span>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-muted text-navy-800 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
          <Icon name={step.icon} size={21} />
        </span>
      </div>

      <h3 className="mt-6 font-display text-lg font-bold text-navy-900">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-accent-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}
