import React from 'react';
import IconShield from '../assets/icons/icon_shield.svg?react';

export default function PrivacyTrustSection() {
  return (
    // <section className="border-y border-cyan-400/10 bg-gradient-to-b from-brand-dark to-black py-8 text-white sm:py-10" aria-labelledby="privacy-trust-heading">
    <section className="border-y border-cyan-400/10 bg-brand-dark py-8 text-white sm:py-10" aria-labelledby="privacy-trust-heading">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-cyan-700/15 bg-white/70 p-1 shadow-sm">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-blue-900 text-white shadow-inner">
              <IconShield className="h-6 w-6" />
              <span className="text-[9px] font-bold tracking-[0.2em]">ZDR</span>
            </div>
          </div>

          <div className="max-w-4xl text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Privacy by architecture</p>
            <h2 id="privacy-trust-heading" className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Zero Data Retention
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
              Inspectr forwards requests and responses to your environment. It does not store the
              payloads it relays.
            </p>
            <a href="/data-privacy/" className="mt-4 inline-flex text-lg font-semibold text-brand-primary hover:underline">
              Read Data Privacy &amp; Zero Retention <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
