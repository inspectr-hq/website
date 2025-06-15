import React from 'react';
import Terminal from './Terminal.jsx';

import IconArrowRight from '../assets/icon_arrow_right.svg?react';

export default function GettingStartedSection() {
  return (
    <div id="get-started" className="py-20 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get Started with 1 command
        </h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div />
            <div className="text-gray-400">
              <h3 className="text-xl font-semibold mb-2 text-white">1. Start Your Local Service</h3>
              <p>
                Run your app locally on <code>http://localhost:3000</code>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Terminal
              command='npx @inspectr/inspectr --backend="http://localhost:3000"'
              prompt="$"
              showCopyButton
            />
            <div className="text-gray-400">
              <h3 className="text-xl font-semibold mb-2 text-white">2. Launch Inspectr</h3>
              <p>Start Inspectr and expose your service.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div />
            <div className="text-gray-400">
              <h3 className="text-xl font-semibold mb-2 text-white">3. Open the Dashboard</h3>
              <p>
                Visit{' '}
                <a href="http://localhost:4004" className="text-brand-primary hover:underline">
                  http://localhost:4004
                </a>{' '}
                to view the Inspectr UI.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Terminal command="curl http://localhost:8080" prompt="$" showCopyButton />
            <div className="text-gray-400">
              <h3 className="text-xl font-semibold mb-2 text-white">4. Make API Requests</h3>
              <p>
                Send requests to <code>http://localhost:8080</code> and see them live.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/docs"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-primary hover:underline font-medium"
            >
              Learn more from our Docs
              <IconArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
