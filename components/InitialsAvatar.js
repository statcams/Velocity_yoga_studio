function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function InitialsAvatar({ name, className = "" }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-primary ${className}`}
      role="img"
      aria-label={`Placeholder avatar for ${name}`}
    >
      <span className="font-display text-4xl font-semibold text-accent">
        {getInitials(name)}
      </span>
    </div>
  );
}
