import React from 'react';

import IconArrowRight from '../../assets/icon_arrow_right.svg?react';
import IconGithub from '../../assets/icon_github.svg?react';
import IconBook from '../../assets/icon_book.svg?react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src="/brand/brand_logo_name.png" alt="Inspectr Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 md:leading-[1.2]">
            Simplifying API Debugging
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
            Inspect API requests and webhook events in real-time.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4">
            No signup or account required&nbsp;&mdash; start instantly.
          </p>
          <p className="text-m md:text-l text-gray-400 max-w-3xl mx-auto mb-8">
            No more digging through logs or guessing what's happening — instantly see requests &
            responses. Easily expose your local API to test integrations and capture webhook events
            from remote systems.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#get-started">
              <button className="bg-brand-primary hover:bg-brand-secondary text-brand-dark px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                Get Started <IconArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a
              href="/docs"
              // href="https://github.com/inspectr-hq/inspectr"
              // target="_blank"
              // rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-lg border border-gray-700 hover:border-brand-primary transition-all"
            >
              <IconBook className="w-5 h-5" />
              Docs
            </a>
            <a
              href="https://github.com/inspectr-hq/inspectr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-lg border border-gray-700 hover:border-white transition-all"
            >
              <IconGithub className="w-5 h-5" />
              Github
            </a>
          </div>
        </div>
        <div>
          <img src="/screens/inspectr-new.png" alt="Inspectr App" className="w-full" />
        </div>
      </div>
    </div>
  );
}
