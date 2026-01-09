// InspectrChecker.jsx
import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal.jsx';
import { FeaturesList } from './FeaturesCard.jsx';

import IconLogging from '../assets/icons/icon_logging.svg?react';
import IconGlobe from '../assets/icons/icon_globe.svg?react';
import IconZap from '../assets/icons/icon_zap.svg?react';
import IconGithub from '../assets/icons/icon_github.svg?react';

export default function InspectrChecker() {
  const [status, setStatus] = useState('checking');
  const [openapiUrl, setOpenapiUrl] = useState('https://inspectr.dev/demo/hello.openapi.yaml');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('openapi');
    setOpenapiUrl(q || 'https://inspectr.dev/demo/hello.openapi.yaml');
  }, []);

  // Probe the local server by loading favicon
  useEffect(() => {
    const img = new Image();
    img.src = `http://localhost:4004/api/favicon.ico?ts=${Date.now()}`;
    img.onload = () => setStatus('up');
    img.onerror = () => setStatus('down');
  }, []);

  // Redirect when up
  useEffect(() => {
    if (status === 'up') {
      fetch('https://ingress.inspectr.dev/api/metrics/launch').catch(() => {
        /* fail silently */
      });
      const target = `http://localhost:4004/?openapi=${encodeURIComponent(openapiUrl)}`;
      setTimeout(() => {
        window.location.href = target;
      }, 2000);
    }
  }, [status, openapiUrl]);

  const whyInspectr = [
    {
      icon: <IconGithub className="w-6 h-6" />,
      title: 'Open Source',
      description: 'Install the OSS Inspectr binary - no signup or trial needed.'
    },
    {
      icon: <IconZap className="w-6 h-6" />,
      title: 'Zero-Config Mocking',
      description: 'Spin up a mock server from any OpenAPI spec with one command.'
    },
    {
      icon: <IconLogging className="w-6 h-6" />,
      title: 'Real-time Logging',
      description: 'Monitor incoming requests as they happen in your terminal and UI.'
    },
    {
      icon: <IconGlobe className="w-6 h-6" />,
      title: 'Public Exposure',
      description: 'Expose local services with secure custom domains for testing.'
    }
  ];

  // Hero-style wrapper + status UI
  return (
    <div className="relative overflow-hidden pt-16 bg-brand-dark text-white min-h-screen">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src="/brand/brand_logo_name.png" alt="Inspectr Logo" className="h-20 w-auto" />
          </div>
          {/*<h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 md:leading-[1.2]">*/}
          {/*Kickstart Mocking with OpenAPI*/}
          {/*Mock APIs in a Click*/}
          {/*</h1>*/}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
            {/*Easily spin up a mock backend from any OpenAPI spec—no config required.*/}
            Spin up a mock backend from any OpenAPI—zero config.
          </p>
          <p className="text-m md:text-l text-gray-400 max-w-3xl mx-auto mb-8">
            {/*Inspectr lets you inspect API requests and webhook events in real-time from your terminal or UI.*/}
            {/*Whether you’re building an SDK, testing webhook integrations, or just want to see exactly what your frontend is sending, Inspectr gives you a one-click mock server based on your OpenAPI document.*/}
            Inspectr captures API calls and webhooks live in your terminal or UI. Instantly generate
            a mock server from your OpenAPI spec—perfect for SDK dev, webhook tests, or debugging
            frontend requests.
          </p>
        </div>
      </div>

      <div id="get-started" className="py-10 bg-black/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*<h2 className="text-3xl font-bold text-center mb-12 text-white">*/}
          {/*  Mock APIs in a Click*/}
          {/*</h2>*/}
          <ol className="list-decimal list-inside space-y-12 text-gray-300">
            <li className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Launch Inspectr with a Mock Backend from OpenAPI
              </h3>
              <div className="max-w-5xl mx-auto">
                <Terminal
                  command={`npx @inspectr/inspectr --mock-backend="${openapiUrl}"`}
                  prompt="$"
                  showCopyButton
                />
              </div>
              <p className="text-sm text-gray-500">
                Generates a mocked API on <code>http://localhost:8080</code>
              </p>
            </li>

            <li className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">Inspect &amp; Iterate</h3>
              <p className="max-w-l mx-auto">
                Open the UI at{' '}
                <a
                  href="http://localhost:4004"
                  className="text-brand-primary hover:underline"
                  rel="nofollow noopener noreferrer"
                >
                  http://localhost:4004
                </a>{' '}
                to watch requests live, replay history, and refine your spec.
              </p>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => window.open('https://inspectr.dev/docs/guides/mocking/', '_blank')}
            className="bg-brand-primary hover:bg-brand-secondary text-brand-dark px-6 py-2 rounded-lg font-medium transition"
          >
            Learn More
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Detect Running Inspectr
          </button>
        </div>
      </div>

      <FeaturesList heading="Why Inspectr?" features={whyInspectr} />
    </div>
  );
}
