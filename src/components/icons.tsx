type IconProps = { size?: number; className?: string };

export function GithubIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-3.5a3.36 3.36 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.1-3.75s-1.22-.37-4 1.43a13.79 13.79 0 0 0-7.2 0C4.91 1.02 3.69 1.39 3.69 1.39a5.07 5.07 0 0 0-.1 3.75A5.44 5.44 0 0 0 2.09 8.9c0 5.42 3.3 6.61 6.44 7A3.36 3.36 0 0 0 7.59 18.5V22" />
      <path d="M9 20c-3 .9-5.5 0-7-3" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5 5 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
