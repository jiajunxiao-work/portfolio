import Link from 'next/link';
import ShotView from '@/components/ShotView';
import WorkGrid from '@/components/WorkGrid';
import { about, awards, cases, education, experience, profile, skills, smallProjects } from '@/content/site';

const heroPicks = ['godirect', 'embrace', 'vegan-restaurant', 'cafe-lighting'];

export default function Home() {
  const picks = heroPicks.map((s) => cases.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-text">
            <p className="kicker">{profile.location}</p>
            <h1>Jiajun Xiao<br /><span className="soft">{profile.role.toLowerCase()}.</span></h1>
            <p className="intro">{profile.intro}</p>
            <p className="status">{profile.status}</p>
            <div className="ctas">
              <Link href="#work" className="btn primary">See the work</Link>
              <a href={profile.cv} className="btn ghost" target="_blank" rel="noreferrer">CV (PDF)</a>
            </div>
          </div>
          <div className="mosaic">
            {picks.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}/`} aria-label={c.title}>
                <ShotView shot={c.cover} ratio="1 / 1" />
                <span>{c.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="work">
        <div className="wrap">
          <h2 className="section-title">Work</h2>
          <WorkGrid />
          <div className="small">
            {smallProjects.map((p) => (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="small-item">
                <span className="small-label">Also built</span>
                <h4>{p.title} ↗</h4>
                <p>{p.desc}</p>
                <p className="stack">{[p.note, ...p.stack].join(' · ')}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="experience">
        <div className="wrap">
          <h2 className="section-title">Experience</h2>
          <div className="rows">
            {experience.map((e) => (
              <div key={e.org} className="row">
                <div className="when">{e.when}</div>
                <div>
                  <h4>{e.role}</h4>
                  <div className="org">{e.org}</div>
                  <p>{e.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="about">
        <div className="wrap">
          <h2 className="section-title">About</h2>
          <div className="about">
            <div className="prose">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
            <aside className="side">
              <h4>Education</h4>
              <ul>{education.map((e) => <li key={e.what}>{e.what}<span>{e.where}</span></li>)}</ul>
              <h4>Recognition</h4>
              <ul>{awards.map((a) => <li key={a}>{a}</li>)}</ul>
              <h4>Tools</h4>
              <ul>{skills.map((g) => <li key={g.group}>{g.group}<span>{g.items.join(', ')}</span></li>)}</ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="block contact" id="contact">
        <div className="wrap">
          <h2>Say hello.</h2>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.behance} target="_blank" rel="noreferrer">Behance</a>
            <a href={profile.cv} target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
