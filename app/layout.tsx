import type { Metadata } from 'next';
import Link from 'next/link';
import { profile } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} · Frontend Engineer`,
  description: `${profile.name}, frontend engineer with a UI/UX foundation, based in Dublin. React, TypeScript and AI products.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="top">
          <div className="wrap">
            <Link href="/" className="logo">Jiajun Xiao<span>.</span></Link>
            <nav className="nav" aria-label="Main">
              <a href="/#product">Product &amp; UX</a>
              <a href="/#code">AI &amp; Code</a>
              <a href="/#spatial" className="hide-sm">Spatial</a>
              <a href="/#about" className="hide-sm">About</a>
              <a href={profile.cv} target="_blank" rel="noreferrer">CV</a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer>
          <div className="wrap">
            <span>© 2026 {profile.name} · Designed and coded by me</span>
            <a href="#main">Back to top ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
