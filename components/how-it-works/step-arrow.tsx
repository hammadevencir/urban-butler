type StepArrowProps = {
  className?: string;
};

export function StepArrow({ className }: StepArrowProps) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <line
        x1="0"
        y1="6"
        x2="108"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M112 6L106 2.5V9.5L112 6Z"
        fill="currentColor"
      />
    </svg>
  );
}
