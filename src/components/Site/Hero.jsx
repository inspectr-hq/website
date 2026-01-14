import React, { useEffect, useState } from 'react';

import IconArrowRight from '../../assets/icons/icon_arrow_right.svg?react';
import IconGithub from '../../assets/icons/icon_github.svg?react';
import IconBook from '../../assets/icons/icon_book.svg?react';

export default function Hero() {
  const words = ['API', 'Webhook', 'MCP Server'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(words[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeoutId;

    if (!isDeleting && charIndex < current.length) {
      timeoutId = window.setTimeout(() => setCharIndex((value) => value + 1), 85);
    } else if (!isDeleting && charIndex === current.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = window.setTimeout(() => setCharIndex((value) => value - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((value) => (value + 1) % words.length);
      }, 250);
    }

    return () => window.clearTimeout(timeoutId);
  }, [charIndex, isDeleting, wordIndex, words]);

  const displayWord = words[wordIndex].slice(0, charIndex) || '\u00a0';

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src="/brand/brand_logo_name.png" alt="Inspectr Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 md:leading-[1.2]">
            Simplifying{' '}
            <span className="word-rotator" aria-live="polite">
              <span className="word-rotator__word">{displayWord}</span>
              <span className="word-rotator__cursor" aria-hidden="true"></span>
            </span>{' '}
            Debugging
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Inspect API requests, webhook events and MCP traffic in real-time.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4">
            No signup or account required -{'>'} just one command to start.
          </p>
          <p className="text-m md:text-l text-gray-400 max-w-3xl mx-auto mb-8">
            No more digging through logs or guessing what's happening - instantly see requests &
            responses. Easily expose your local API and MCP server to test integrations and capture webhook events
            from remote systems.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#get-started">
              <button className="bg-brand-primary hover:bg-brand-secondary text-brand-dark px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                Get Started <IconArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a
              href="/docs/"
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
          {/*<img src="/screens/inspectr-new.png" alt="Inspectr App" className="w-full" />*/}
          <img src="/screens/inspectr-app-v150.png" alt="Inspectr App" className="w-full" />
        </div>
      </div>
    </div>
  );
}
