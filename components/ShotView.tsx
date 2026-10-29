'use client';

import { useState } from 'react';
import type { Shot } from '@/content/site';

// Shows the image, or a labelled placeholder if the file is missing.
// `focus` and `fit` on the shot control how it is cropped into its box.
export default function ShotView({ shot, ratio }: { shot: Shot; ratio?: string }) {
  const [broken, setBroken] = useState(false);
  const style = ratio ? { aspectRatio: ratio } : undefined;

  if (shot.src && !broken) {
    const contain = shot.fit === 'contain';
    return (
      <div className={`shot${contain ? ' contain' : ''}`} style={style}>
        <img
          src={shot.src}
          alt={shot.label}
          loading="lazy"
          onError={() => setBroken(true)}
          style={{ objectFit: contain ? 'contain' : 'cover', objectPosition: shot.focus ?? 'center' }}
        />
      </div>
    );
  }
  return (
    <div className="shot ph" style={style} role="img" aria-label={`Placeholder: ${shot.label}`}>
      <span className="ph-label">{shot.src ? `Missing ${shot.src}` : shot.label}</span>
    </div>
  );
}
