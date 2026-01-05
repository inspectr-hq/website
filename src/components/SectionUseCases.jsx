import React from 'react';
import IconZap from '../assets/icons/icon_zap.svg?react';
import IconSearch from '../assets/icons/icon_search.svg?react';
import IconAlert from '../assets/icons/icon_octagon-alert.svg?react';
import IconWebhook from '../assets/icons/icon_webhook.svg?react';
import IconOpenApi from '../assets/icons/icon_openapi_mono.svg?react';
import IconGlobe from '../assets/icons/icon_globe.svg?react';
import IconHistory from '../assets/icons/icon_history.svg?react';
import IconShield from '../assets/icons/icon_shield.svg?react';
import IconBot from '../assets/icons/icon_bot.svg?react';
import IconCode from '../assets/icons/icon_code.svg?react';

export default function UseCasesSection() {
  return (
    <div id="solutions" className="py-24 bg-gradient-to-b from-brand-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Simple for every Development Workflow
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <section className="p-6 rounded-lg bg-black/30 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                Debugging During Development
              </h3>
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
            </section>

            <section className="p-6 rounded-lg bg-black/30 border border-gray-800">
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
            </section>
            <section className="p-6 rounded-lg bg-black/30 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-brand-primary">OpenAPI Mocking</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <IconCode className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Zero coding — mock service auto-generated from OpenAPI</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconZap className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Test edge cases: errors, timeouts, large payloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconOpenApi className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Prototype against your API spec</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="p-6 rounded-lg bg-black/30 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                Tunnel Local Service
              </h3>
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
            </section>

            <section className="p-6 rounded-lg bg-black/30 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                Frontend Development
              </h3>
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
            </section>

            <section className="p-6 rounded-lg bg-black/30 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-brand-primary">Response Simulation</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <IconHistory className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Simulate network latency and timeouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconAlert className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Force HTTP status codes (e.g. 404, 500)</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconSearch className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Pick specific OpenAPI examples on the fly</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
