import type { ReactNode } from "react";

type ContactInfoCardProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

export default function ContactInfoCard({
  icon,
  label,
  children,
}: ContactInfoCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-mint text-primary-dark">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {label}
        </p>
        <div className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </div>
  );
}