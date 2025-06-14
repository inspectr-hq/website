import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/brand/inspectr_brand_logo.png"
                alt="Inspectr Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">Inspectr</span>
            </div>
            <p className="text-gray-400">Simplifying API and Webhook debugging for developers.</p>
          </div>

          <div />

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-brand-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-brand-primary">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-brand-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-brand-primary">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/inspectr-hq/inspectr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/58rbCxdr8Z"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-brand-primary">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Inspectr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
