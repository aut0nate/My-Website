import type { ReactNode } from "react";

export function QuickLink({
  label,
  icon
}: {
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="quick-link">
      <span className="quick-link-label">{label}</span>
      <span aria-hidden="true" className="quick-link-icon">
        {icon}
      </span>
    </div>
  );
}
