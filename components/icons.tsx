import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M4.75 20.25c0-3.55 2.9-6.25 7.25-6.25s7.25 2.7 7.25 6.25" />
    </IconBase>
  );
}

export function RssIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M4.75 10.5a8.75 8.75 0 0 1 8.75 8.75" />
      <path d="M4.75 4.75A14.5 14.5 0 0 1 19.25 19.25" />
    </IconBase>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.76.5 12.25c0 5.2 3.3 9.61 7.88 11.17.58.11.8-.26.8-.58 0-.29-.01-1.05-.02-2.07-3.2.72-3.88-1.58-3.88-1.58-.52-1.36-1.28-1.72-1.28-1.72-1.05-.73.08-.72.08-.72 1.16.09 1.77 1.22 1.77 1.22 1.03 1.82 2.71 1.29 3.38.99.1-.76.4-1.29.72-1.58-2.55-.3-5.23-1.3-5.23-5.79 0-1.28.45-2.32 1.19-3.14-.12-.3-.52-1.51.11-3.15 0 0 .97-.32 3.19 1.2a10.8 10.8 0 0 1 5.81 0c2.21-1.52 3.18-1.2 3.18-1.2.63 1.64.24 2.85.12 3.15.74.82 1.19 1.86 1.19 3.14 0 4.5-2.69 5.48-5.26 5.77.41.37.78 1.11.78 2.23 0 1.61-.01 2.91-.01 3.3 0 .32.21.7.81.58A11.77 11.77 0 0 0 23.5 12.25C23.5 5.76 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM2.75 9.75h4.5v11.75h-4.5V9.75ZM10.15 9.75h4.31v1.6h.06c.6-1.14 2.07-1.85 4.26-1.85 4.55 0 5.39 3.08 5.39 7.09v4.91h-4.49v-4.35c0-1.04-.02-2.37-1.41-2.37-1.41 0-1.63 1.14-1.63 2.3v4.42h-4.49V9.75Z" />
    </svg>
  );
}
