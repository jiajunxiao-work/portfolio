'use client';

import { useState } from 'react';
import type { Shot } from '@/content/site';

// Shows the image, or a labelled placeholder if the file is missing.
export default function ShotView({ shot, ratio }: { shot: Shot; ratio?: string }) {
  const [broken, setBroken] = useState(false);
  const style = ratio ? { aspectRatio: ratio } : undefined;

  if (shot.src && !broken) {
    return (
      <div className="shot" style={style}>
        <img src={shot.src} alt={shot.label} loading="lazy" onError={() => setBroken(true)} />
      </div>
    );
  }
  return (
    <div className="shot ph" style={style} role="img" aria-label={`Placeholder: ${shot.label}`}>
      <span className="ph-label">{shot.src ? `Missing ${shot.src}` : shot.label}</span>
    </div>
  );
}
