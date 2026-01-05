// components/LaunchCards.jsx
import React from 'react';

// If your PNGs live in /public/icons/* you can reference them by absolute path.
const PngIcon = ({ src, alt, className = '' }) => (
  <img
    src={src}
    alt={alt}
    className={`h-7 w-7 object-contain ${className}`}
    loading="lazy"
    decoding="async"
    width={28}
    height={28}
  />
);

// Your Scalar SVG, React-ified
const ScalarIcon = ({ className = '', ...props }) => (
  <svg
    viewBox="0 0 593 593"
    aria-label="Scalar"
    role="img"
    className={`h-7 w-7 ${className}`}
    {...props}
  >
    <path
      d="M347 0c6 0 12 5 12 12v134l94-95c5-5 13-5 17 0l72 72c4 4 5 12 0 16v1l-95 94h134c7 0 12 5 12 12v101c0 7-5 12-12 12H447l95 94c4 5 5 13 0 17l-72 72c-4 4-12 5-16 0h-1l-94-95v134c0 7-5 12-12 12H246c-7 0-12-5-12-12v-70c0-22 9-43 24-59l130-130c14-14 14-37 0-51L259 142a84 84 0 0 1-25-59V12c0-7 5-12 12-12zM138 52h1l219 219c14 14 14 37 0 51L139 542c-4 5-12 5-17 0l-71-70c-4-5-5-12 0-17l95-96H12c-7 0-12-5-12-12V246c0-7 5-12 12-12h134l-95-94c-4-5-4-12 0-17l71-71c4-5 12-5 16 0"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// Update these paths to wherever you placed the PNGs
const items = [
  {
    name: 'Museum API',
    brand: 'Redocly',
    docsUrl: 'https://redocly.com/demo/openapi/museum-api',
    launchUrl:
      'https://inspectr.dev/launch?openapi=https://inspectr.dev/demo/museum.openapi.yaml',
    // PNG icon
    icon: <PngIcon src="/icons/redocly.png" alt="Redocly" className="rounded-md" />
  },
  {
    name: 'Train Travel API',
    brand: 'Bump.sh',
    docsUrl: 'https://bump.sh/bump-examples/doc/train-travel-api/',
    launchUrl:
      'https://inspectr.dev/launch?openapi=https://inspectr.dev/demo/train-travel-api-openapi-source.yaml',
    // PNG icon
    icon: <PngIcon src="/icons/bump_sh.png" alt="Bump.sh" className="rounded-md" />
  },
  {
    name: 'Galaxy API',
    brand: 'Scalar',
    docsUrl: 'https://galaxy.scalar.com/',
    launchUrl:
      'https://inspectr.dev/launch?openapi=https://inspectr.dev/demo/galaxy.openapi.yaml',
    // SVG icon with tailwind color
    // icon: <ScalarIcon className="text-indigo-600" />,
    icon: <ScalarIcon />
  }
];

export default function LaunchCards() {
  return (
    // make grid items stretch & give implicit rows a uniform height
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch [grid-auto-rows:1fr]">
      {items.map(({ name, brand, docsUrl, launchUrl, icon }) => (
        <div
          key={name}
          className="h-full rounded-2xl border border-gray-200 bg-white p-5 mt-0 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-neutral-900"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              {/* Fixed-size icon box for consistent alignment */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 p-1.5 dark:bg-neutral-800">
                {icon}
              </div>
              <div>
                <a
                  href={docsUrl}
                  className="text-base font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-gray-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
                <div className="text-sm text-gray-500 dark:text-gray-400">by {brand}</div>
              </div>
            </div>

            {/* footer pinned to bottom, always same vertical position */}
            <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
              <a
                href={launchUrl}
                className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-neutral-800"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Launch in Inspectr
                <svg viewBox="0 0 24 24" className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href={launchUrl}
                className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Visit the Direct URL
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
