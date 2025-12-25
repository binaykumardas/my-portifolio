import React from 'react';

export const AboutTab: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-y-auto font-sans max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-vscode-activity text-vscode-text">README.md</h1>

      <div className="space-y-6 text-vscode-text">
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## About Me</h2>
          <p className="leading-7">
            Hi, I'm Binay Kumar Das. I am a software engineer based in Bhubaneswar, India.
            I have a deep passion for Software Engineering.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## What I Do</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>🔗 Passionate about building products that solve real user problems.</li>
            <li>🌐 Build high-performance web applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## Tech Stack</h2>
          <div className="font-mono text-sm bg-vscode-sidebar p-4 rounded-md border border-vscode-activity">
            <div><span className="text-vscode-keyword">Frontend</span>: [Angular, Bootstrap,React, Tailwind, Redux]</div>
            <div><span className="text-vscode-keyword">Backend</span>: [Node.js, Express]</div>
            <div><span className="text-vscode-keyword">Tools</span>: [Git, Webpack, VS Code]</div>
          </div>
        </section>

      </div>
    </div>
  );
};
