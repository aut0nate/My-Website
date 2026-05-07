export function PageFrame({
  children,
  footer,
  className
}: {
  children: React.ReactNode;
  footer: string;
  className?: string;
}) {
  return (
    <div className={["glass-frame", className].filter(Boolean).join(" ")}>
      <div className="glass-inner">{children}</div>
      <footer className="glass-footer">{footer}</footer>
    </div>
  );
}
