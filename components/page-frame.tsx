export function PageFrame({
  children,
  footer
}: {
  children: React.ReactNode;
  footer: string;
}) {
  return (
    <div className="glass-frame">
      <div className="glass-inner">{children}</div>
      <footer className="glass-footer">{footer}</footer>
    </div>
  );
}
