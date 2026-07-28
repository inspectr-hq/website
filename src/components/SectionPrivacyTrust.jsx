import React from 'react';

const trustSignals = ['Real-time pass-through', 'Processing in memory', '0 bytes retained on Ingress'];

export default function PrivacyTrustSection() {
  return (
    <section className="border-y border-cyan-400/10 bg-black/20 py-12" aria-labelledby="privacy-trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Privacy by architecture
            </p>
            <h2 id="privacy-trust-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Inspectr Ingress stores no payloads.
            </h2>
            <p className="mt-3 leading-7 text-gray-400">
              Inspectr Ingress forwards payloads to your environment and does not persist them on the Ingress
              side.
            </p>
            <a href="/data-privacy/" className="mt-4 inline-flex font-semibold text-brand-primary hover:underline">
              Read Data Privacy &amp; Zero Retention <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>

          <div className="grid shrink-0 gap-3 sm:grid-cols-3 lg:w-[42%] lg:grid-cols-1 xl:grid-cols-3">
            {trustSignals.map((signal) => (
              <div key={signal} className="rounded-lg border border-cyan-300/15 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-200">
                {signal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
