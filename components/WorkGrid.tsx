'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ShotView from '@/components/ShotView';
import { cases, categories, type Category } from '@/content/site';

type Filter = Category | 'all';

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('all');

  // The header links to /#product, /#code, /#spatial; pick up the filter from the hash.
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (categories.some((c) => c.id === h)) {
        setFilter(h as Category);
        document.getElementById('work')?.scrollIntoView();
      }
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const shown = filter === 'all' ? cases : cases.filter((c) => c.category === filter);
  const blurb = categories.find((c) => c.id === filter)?.blurb;

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter work">
        {[{ id: 'all' as Filter, label: 'All' }, ...categories].map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={filter === c.id}
            className={filter === c.id ? 'on' : ''}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
            <span className="count">{c.id === 'all' ? cases.length : cases.filter((x) => x.category === c.id).length}</span>
          </button>
        ))}
      </div>
      <p className="filter-blurb">{blurb ?? 'Design work and things I built, side by side.'}</p>
      <div className="work">
        {shown.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}/`} className="card">
            <ShotView shot={c.cover} ratio="16 / 10" />
            <div className="card-meta">
              <span>{categories.find((x) => x.id === c.category)?.label}</span>
              <span>{c.year.startsWith('TODO') ? '' : c.year.split(' – ').pop()}</span>
            </div>
            <h3>{c.title}</h3>
            <p>{c.oneLiner}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
