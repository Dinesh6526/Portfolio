import { useEffect, useState, useRef, type MouseEvent } from "react";

interface ProfileAvatar360Props {
  photo: string;
  name: string;
  title?: string;
}

export function ProfileAvatar360({ photo, name, title = "Full-Stack Developer" }: ProfileAvatar360Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [canTilt, setCanTilt] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Only enable pointer tilt when the device supports hover and motion is allowed.
    const updateTiltPreference = () => {
      setCanTilt(finePointer.matches && !reducedMotion.matches);
    };

    updateTiltPreference();
    finePointer.addEventListener("change", updateTiltPreference);
    reducedMotion.addEventListener("change", updateTiltPreference);

    return () => {
      finePointer.removeEventListener("change", updateTiltPreference);
      reducedMotion.removeEventListener("change", updateTiltPreference);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !canTilt) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    const maxTilt = 8;

    // Cap the angle so the portrait follows naturally without a sharp flip.
    setMouseTilt({
      x: Math.max(-maxTilt, Math.min(maxTilt, -y * maxTilt)),
      y: Math.max(-maxTilt, Math.min(maxTilt, x * maxTilt)),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        {/* Warm Golden-Amber Studio Spotlight matching reference UI mockup */}
        <div
          className={`portrait-glow pointer-events-none absolute -inset-10 sm:-inset-24 md:-inset-32 rounded-full transition-opacity duration-1000 ${
            isHovered ? "opacity-100 scale-105" : "opacity-90"
          }`}
          style={{
            background:
              "radial-gradient(circle at 50% 36%, rgba(220, 145, 65, 0.42) 0%, rgba(165, 100, 38, 0.22) 34%, rgba(65, 35, 12, 0.05) 62%, transparent 75%)",
            filter: "blur(65px)",
          }}
        />

        {/* 3D Perspective Container - FREE STANDING FIGURE, NO BOX, NO BORDERS, NO CARD */}
        <div
          className="relative flex items-center justify-center select-none"
          style={{ perspective: "1500px" }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* The portrait tilts toward the pointer and eases back on leave. */}
          <div
            className="relative flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg) scale(${isHovered && canTilt ? 1.02 : 1})`,
              transition:
                mouseTilt.x === 0 && mouseTilt.y === 0
                  ? "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)"
                  : "transform 100ms ease-out",
            }}
          >
            {photo ? (
              <div className="hero-portrait-frame relative overflow-visible">
                <img
                  src={photo}
                  alt={name}
                  className="profile-portrait h-full w-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                  loading="eager"
                />
              </div>
            ) : (
              <div className="flex h-96 w-80 items-center justify-center font-display text-8xl font-black text-white/30">
                DG
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}
