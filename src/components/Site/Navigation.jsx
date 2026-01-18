import React, { useState } from 'react';
import IconMenu from '../../assets/icons/icon_menu.svg?react';
import IconClose from '../../assets/icons/icon_close.svg?react';
import IconGithub from '../../assets/icons/icon_github.svg?react';
import IconDiscord from '../../assets/icons/icon_discord.svg?react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src="/brand/inspectr_brand_logo.png" alt="Inspectr Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl">Inspectr</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a
              href="/#features"
              className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/#solutions"
              className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="/use-cases/"
              className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              Use Cases
            </a>
            <a
              href="/docs/"
              className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              Documentation
            </a>
            <a
              href="/pricing/"
              className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              Pricing
            </a>
            <a href="/#get-started">
              <button className="bg-brand-primary hover:bg-brand-secondary text-brand-dark px-4 py-2 rounded-lg font-medium transition-all">
                Get Started
              </button>
            </a>
            <a
                href="https://github.com/inspectr-hq/inspectr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              <IconGithub className="w-6 h-6" />
            </a>
            <a
                href="https://discord.gg/AA5nRgwngs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              <IconDiscord className="w-6 h-6" />
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a
              href="/#features"
              className="block text-gray-300 hover:text-brand-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/#solutions"
              className="block text-gray-300 hover:text-brand-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="/use-cases/"
              className="block text-gray-300 hover:text-brand-primary transition-colors"
            >
              Use Cases
            </a>
            <a
              href="/docs/"
              className="block text-gray-300 hover:text-brand-primary transition-colors"
            >
              Documentation
            </a>
            <a
              href="/pricing/"
              className="block text-gray-300 hover:text-brand-primary transition-colors"
            >
              Pricing
            </a>
            <a href="/#get-started" className="block">
              <button className="w-full bg-brand-primary hover:bg-brand-secondary text-brand-dark px-4 py-2 rounded-lg font-medium transition-all">
                Get Started
              </button>
            </a>

<div className="flex items-center justify-center gap-4">
            <a
                href="https://github.com/inspectr-hq/inspectr?tab=readme-ov-file#-quick-start"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              <IconGithub className="w-6 h-6" />
            </a>
            <a
                href="https://discord.gg/AA5nRgwngs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-primary transition-colors"
            >
              <IconDiscord className="w-6 h-6" />
            </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
