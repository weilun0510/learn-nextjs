import { type ReactElement } from 'react';

import ThemeToggle from './components/ThemeToggle';

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />

      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <video autoPlay style={{ width: 200, height: 200 }}>
          <source
            src="https://xyszr.oss-cn-hangzhou.aliyuncs.com/md-platform/video/f1261e55-0e2d-407c-bbd2-584263378f09.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}

export default Home;
