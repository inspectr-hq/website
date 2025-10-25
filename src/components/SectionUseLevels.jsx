import React from 'react';

export default function UseCaseLevels({ useCases = [] }) {
  const featuredSlugs = [
    'level-0-catch-requests',
    'level-2-test-webhooks',
    'level-5-share-live-docs',
  ];
  const featuredLevels = useCases
    .filter((useCase) => featuredSlugs.includes(useCase.slug))
    .sort((a, b) => a.level - b.level);

  return (
    <div id="use-cases" className="py-24 bg-gradient-to-b from-brand-dark to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary/70">
            From first request to full observability
          </p>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            Build your path through Inspectr's use case levels
          </h2>
          <p className="text-sm text-gray-300 sm:text-base">
            Each level solves a concrete developer pain. Adopt the capabilities you need today and come
            back for the rest when you are ready.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredLevels.map((useCase) => (
            <a
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}/`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-gray-800 bg-black/70 p-6 transition-colors transition-transform hover:-translate-y-1 hover:border-brand-primary/70 hover:bg-black"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  Level {useCase.level}
                </span>
                <h3 className="text-xl font-semibold leading-snug text-white group-hover:text-brand-primary">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-400">{useCase.excerpt}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary">
                <span>See details</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/use-cases/"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/50 px-5 py-3 text-sm font-semibold text-brand-primary transition-all hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-secondary"
          >
            Explore all 9 levels
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
