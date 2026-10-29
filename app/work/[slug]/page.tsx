import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ShotView from '@/components/ShotView';
import { cases, categories, profile } from '@/content/site';

// Anything still marked TODO in content/site.ts is hidden, so the site stays presentable.
const ready = (s: string) => !s.startsWith('TODO');

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return { title: c ? `${c.title} · ${profile.name}` : profile.name, description: c?.oneLiner };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const i = cases.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const c = cases[i];
  const next = cases[(i + 1) % cases.length];
  const cat = categories.find((x) => x.id === c.category)!;
  const meta = [
    ['Role', c.role],
    ['Team', c.team],
    ['When', c.year],
    ['Tools', c.tools.filter(ready).join(', ')],
  ].filter(([, v]) => v && ready(v));
  const sections = c.sections
    .map((s) => ({ ...s, body: s.body.filter(ready) }))
    .filter((s) => s.body.length > 0);
  const gallery = c.gallery.filter((g) => g.src);

  return (
    <article>
      <header className="case-hero">
        <div className="wrap">
          <a href={`/#${c.category}`} className="back">← {cat.label}</a>
          <h1>{c.title}</h1>
          <p className="sub">{c.oneLiner}</p>
          <dl className="meta">
            {meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          {c.facts.length > 0 && (
            <div className="facts">
              {c.facts.map((f) => (
                <div key={f.label} className="fact"><div className="v">{f.value}</div><div className="l">{f.label}</div></div>
              ))}
            </div>
          )}
          {c.links.length > 0 && (
            <div className="ctas">
              {c.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn primary">{l.label} ↗</a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="wrap">
        <ShotView shot={c.cover} ratio="16 / 10" />
      </div>

      {sections.length > 0 && (
        <div className="story">
          <div className="wrap">
            {sections.map((s) => (
              <section key={s.heading} className="story-sec">
                <h2>{s.heading}</h2>
                <div className="body">{s.body.map((p, k) => <p key={k}>{p}</p>)}</div>
              </section>
            ))}
          </div>
        </div>
      )}

      {gallery.length > 0 && (
        <div className="wrap">
          <div className="gallery">
            {gallery.map((g) => (
              <figure key={g.label} className={g.wide ? 'wide' : ''}>
                <ShotView shot={g} />
                {g.caption && <figcaption>{g.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
      )}

      <div className="wrap">
        <Link href={`/work/${next.slug}/`} className="next">
          <span className="next-label">Next</span>
          <h2>{next.title} →</h2>
        </Link>
      </div>
    </article>
  );
}
