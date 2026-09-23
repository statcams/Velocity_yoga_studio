export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <video
        src="/Video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-primary/40" />
    </div>
  );
}
