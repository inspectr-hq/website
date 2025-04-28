import { useState } from 'react';
import IconSearch from './assets/icon_search.svg?react';
import IconWebhook  from './assets/icon_webhook.svg?react';
import IconGlobe  from './assets/icon_globe.svg?react';
import IconLogging  from './assets/icon_logging.svg?react';
import IconHistory  from './assets/icon_history.svg?react';
import IconShield  from './assets/icon_shield.svg?react';
import IconZap from './assets/icon_zap.svg?react';
import IconArrowRight from './assets/icon_arrow_right.svg?react';
import IconProxy from './assets/icon_arrow-left-right.svg?react';
import IconCode  from './assets/icon_code.svg?react';
import IconBot  from './assets/icon_bot.svg?react';
import IconAlert  from './assets/icon_octagon-alert.svg?react';
import IconGithub from './assets/icon_github.svg?react';
import IconMenu  from './assets/icon_menu.svg?react';
import IconClose  from './assets/icon_close.svg?react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/inspectr_brand_logo.png"
                   alt="Inspectr Logo"
                   className="h-8 w-auto" />
              <span className="font-bold text-xl">Inspectr</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-brand-primary transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-300 hover:text-brand-primary transition-colors">Use Cases</a>
              {/*<a href="https://docs.inspectr.dev" className="text-gray-300 hover:text-brand-primary transition-colors">Documentation</a>*/}
              <a href="https://github.com/inspectr-hq/inspectr" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-brand-primary transition-colors">GitHub</a>
              <a href="https://github.com/inspectr-hq/inspectr?tab=readme-ov-file#-quick-start" target="_blank" rel="noopener noreferrer">
              <button className="bg-brand-primary hover:bg-brand-secondary text-brand-dark px-4 py-2 rounded-lg font-medium transition-all">
                Get Started
              </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-brand-primary transition-colors">Features</a>
              <a href="#use-cases" className="block text-gray-300 hover:text-brand-primary transition-colors">Use Cases</a>
              {/*<a href="https://docs.inspectr.dev" className="block text-gray-300 hover:text-brand-primary transition-colors">Documentation</a>*/}
              <a href="https://github.com/inspectr-hq/inspectr" target="_blank" rel="noopener noreferrer"
                 className="block text-gray-300 hover:text-brand-primary transition-colors">GitHub</a>
              <button className="w-full bg-brand-primary hover:bg-brand-secondary text-brand-dark px-4 py-2 rounded-lg font-medium transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img src="/brand_logo_name.png"
                   alt="Inspectr Logo" 
                   className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 md:leading-[1.2]">
              {/*Real-time API and Webhook Debugging Made Easy*/}
              Simplifying API Debugging
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
              Inspect API requests and webhook events in real-time.
            </p>
            <p className="text-m md:text-l text-gray-400 max-w-3xl mx-auto mb-8">
              No more digging through logs or guessing what's happening — instantly see requests & responses.
              Easily expose your local API to test integrations and capture webhook events from remote systems.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/inspectr-hq/inspectr?tab=readme-ov-file#-quick-start" target="_blank" rel="noopener noreferrer">
              <button className="bg-brand-primary hover:bg-brand-secondary text-brand-dark px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                Get Started <IconArrowRight className="w-4 h-4" />
              </button>
              </a>
              <a href="https://github.com/inspectr-hq/inspectr" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-8 py-3 rounded-lg border border-gray-700 hover:border-brand-primary transition-all">
                <IconGithub className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* App Screenshot */}
          {/*<div className="rounded-lg overflow-hidden shadow-2xl border border-gray-800">*/}
          <div className="">
            <img src="/inspectr-new.png"
                 alt="Inspectr App"
                 className="w-full" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Everything you need for API debugging</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <IconSearch className="w-6 h-6" />,
                title: "Inspect API Requests",
                description: "View headers, query parameters, request bodies, and response details in real-time."
              },
              {
                icon: <IconWebhook className="w-6 h-6" />,
                title: "Analyze Webhook Events",
                description: "Capture and review webhook payloads from third-party services with ease."
              },
              {
                icon: <IconProxy className="w-6 h-6" />,
                title: "API Proxy",
                description: "Forward incoming requests to your backend service and inspect the complete flow."
              },
              {
                icon: <IconLogging className="w-6 h-6" />,
                title: "Real-time Logging",
                description: "Monitor incoming requests as they happen in your terminal and UI."
              },
              {
                icon: <IconHistory className="w-6 h-6" />,
                title: "History & Replay",
                description: "Review past requests with filtering and search, replay them as needed."
              },
              {
                icon: <IconGlobe className="w-6 h-6" />,
                title: "Public Exposure",
                description: "Expose local services with secure, custom subdomains for testing and demos."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-black/30 border border-gray-800 hover:border-brand-primary transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Preview */}
{/*      <div id="terminal" className="py-24 bg-black/90">*/}
{/*        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
{/*          <div className="flex flex-col lg:flex-row">*/}
{/*            /!* Text Section on the Left *!/*/}
{/*            <div className="lg:w-1/2 flex flex-col justify-center bg-gray-800">*/}
{/*              <h2 className="text-3xl font-bold text-white m-4 text-left">*/}
{/*                Monitor Your Setup in Real-Time*/}
{/*              </h2>*/}
{/*              <p className="text-gray-300 text-lg text-left">*/}
{/*                With Inspectr, you can effortlessly monitor your API and webhook activity.*/}
{/*                Our intuitive terminal commands provide real-time feedback during installation and configuration,*/}
{/*                ensuring you’re always in control.*/}
{/*              </p>*/}
{/*            </div>*/}

{/*            /!* Terminal Preview Section on the Right *!/*/}
{/*            <div className="lg:w-1/2 bg-black/90">*/}
{/*              <div className="mt-16 rounded-lg bg-gray-900 p-4 max-w-3xl mx-auto overflow-hidden">*/}
{/*                <div className="flex items-center gap-2 mb-3">*/}
{/*                  <div className="w-3 h-3 rounded-full bg-red-500" />*/}
{/*                  <div className="w-3 h-3 rounded-full bg-yellow-500" />*/}
{/*                  <div className="w-3 h-3 rounded-full bg-green-500" />*/}
{/*                </div>*/}
{/*                <pre className="font-mono text-sm text-gray-300">*/}
{/*          <code>{`$ npm install @inspectr/inspectr*/}

{/*✨ Installing Inspectr client...*/}
{/*✨ Configuration generated*/}
{/*✨ Ready to monitor your database!*/}

{/*$ npx inspectr --backend="http://localhost:3000" --expose*/}
{/*Starting Inspectr monitoring...*/}
{/*Connected to database*/}
{/*Dashboard available at http://localhost:3000`}</code>*/}
{/*        </pre>*/}
{/*              </div>*/}
{/*            </div>*/}
{/*          </div>*/}
{/*        </div>*/}


        {/*        <div className="mt-16 rounded-lg bg-gray-900 p-4 max-w-3xl mx-auto overflow-hidden">*/}
{/*          <div className="flex items-center gap-2 mb-3">*/}
{/*            <div className="w-3 h-3 rounded-full bg-red-500" />*/}
{/*            <div className="w-3 h-3 rounded-full bg-yellow-500" />*/}
{/*            <div className="w-3 h-3 rounded-full bg-green-500" />*/}
{/*          </div>*/}
{/*          <pre className="font-mono text-sm text-gray-300">*/}
{/*              <code>{`$ npm install @inspectr/inspectr*/}

{/*✨ Installing Inspectr client...*/}
{/*✨ Configuration generated*/}
{/*✨ Ready to monitor your database!*/}

{/*$ npx inspectr --backend="http://localhost:3000" --expose*/}
{/*Starting Inspectr monitoring...*/}
{/*Connected to database*/}
{/*Dashboard available at http://localhost:3000`}</code>*/}
{/*            </pre>*/}
{/*        </div>*/}
{/*      </div>*/}

      {/* Use Cases Section */}
      <div id="use-cases" className="py-24 bg-gradient-to-b from-brand-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Simple for every Development Workflow</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-black/30 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">Debugging During Development</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <IconZap className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Real-time request monitoring and inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconSearch className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Quick identification of malformed requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconAlert className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Error correlation with request data</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-black/30 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">Webhook Testing</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <IconWebhook className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Real-time webhook monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconGlobe className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Expose local endpoints for webhook testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconHistory className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Capture and replay webhook events</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-black/30 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">Local Service Exposure</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <IconShield className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Secure public endpoints for local services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconGlobe className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Custom subdomains for easy sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconBot className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Perfect for AI services and demos</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-black/30 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">Frontend Development</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <IconCode className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Zero-config integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconSearch className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Transparent request debugging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconHistory className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Complete request history</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/inspectr_brand_logo.png" alt="Inspectr Logo"
                     className="h-8 w-auto" />
                <span className="font-bold text-xl">Inspectr</span>
              </div>
              <p className="text-gray-400">Simplifying API and Webhook debugging for developers.</p>
            </div>

            <div></div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-brand-primary transition-colors">Features</a></li>
                <li><a href="#use-cases" className="text-gray-400 hover:text-brand-primary transition-colors">Use Cases</a></li>
                {/*<li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Pricing</a></li>*/}
                {/*<li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Changelog</a></li>*/}
              </ul>
            </div>

            {/*<div>*/}
            {/*  <h3 className="font-semibold text-lg mb-4">Resources</h3>*/}
            {/*  <ul className="space-y-2">*/}
            {/*    <li><a href="https://docs.inspectr.dev" className="text-gray-400 hover:text-brand-primary transition-colors">Documentation</a></li>*/}
            {/*    <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">API Reference</a></li>*/}
            {/*    <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Blog</a></li>*/}
            {/*    <li><a href="http://ingress.inspectr.dev/api/health" className="text-gray-400 hover:text-brand-primary transition-colors">Status</a></li>*/}
            {/*  </ul>*/}
            {/*</div>*/}

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/inspectr-hq/inspectr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors">GitHub</a></li>
                {/*<li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Twitter</a></li>*/}
                <li><a href="https://discord.gg/VrW2tBHE" className="text-gray-400 hover:text-brand-primary transition-colors">Discord</a></li>
                {/*<li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Contact</a></li>*/}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Inspectr. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {/*<a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Privacy Policy</a>*/}
              {/*<a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Terms of Service</a>*/}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;