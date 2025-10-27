import React from 'react';

function LevelsDiagram() {
  return (
    <>
      <section className="bg-brand-dark text-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gradient">Inspectr Capability Flow</h2>
            <p className="mt-2 text-white/70">Each level adds capability — adopt one, or climb progressively.</p>
          </header>

          {/* Rail */}
          <div className="relative">
            <div className="absolute inset-x-0 top-6 h-1 bg-gradient-to-r from-brand-primary/60 to-brand-secondary/60 rounded-full"></div>

            {/* Nodes */}
            <ul className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6">
              {/* Item template */}
              {/* Level 0 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">0</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Catch requests</p>
                  <p className="text-xs text-white/60">Accept & inspect without a backend</p>
                </div>
              </li>

              {/* Level 1 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">1</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Review traffic</p>
                  <p className="text-xs text-white/60">See requests ↔ responses, replay</p>
                </div>
              </li>

              {/* Level 2 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">2</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Public exposure</p>
                  <p className="text-xs text-white/60">Secure public URL for webhooks</p>
                </div>
              </li>

              {/* Level 3 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">3</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">OpenAPI mocks</p>
                  <p className="text-xs text-white/60">Realistic responses from your spec</p>
                </div>
              </li>

              {/* Level 4 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">4</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Perf & stability</p>
                  <p className="text-xs text-white/60">Latency & error trends</p>
                </div>
              </li>

              {/* Level 5 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">5</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Docs & collections</p>
                  <p className="text-xs text-white/60">Share what actually works</p>
                </div>
              </li>

              {/* Level 6 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">6</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Automation rules</p>
                  <p className="text-xs text-white/60">Simulate, validate, enforce</p>
                </div>
              </li>

              {/* Level 7 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">7</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">Endpoint insights</p>
                  <p className="text-xs text-white/60">Traces & hotspots</p>
                </div>
              </li>

              {/* Level 8 */}
              <li className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#002e35] ring-2 ring-brand-primary shadow-lg grid place-content-center">
                    <span className="text-lg font-bold text-brand-primary">8</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/90">AI via MCP</p>
                  <p className="text-xs text-white/60">Summarize, suggest, generate</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default LevelsDiagram;