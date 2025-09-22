import React from 'react';

import IconNode from '../assets/icons/node_js.svg?react';
import IconFastAPI from '../assets/icons/fastapi.svg?react';
import IconPython from '../assets/icons/python.svg?react';
import IconSpring from '../assets/icons/java_spring_boot.svg?react';
import IconDotnet from '../assets/icons/microsoft_dotnet.svg?react';
import IconLaravel from '../assets/icons/php_laravel.svg?react';

const stacks = [
  {
    name: 'Node.js (Express)',
    href: '/docs/examples/using-with-express',
    Icon: IconNode,
  },
  {
    name: 'Python (FastAPI)',
    href: '/docs/examples/using-with-python-fastapi',
    Icon: IconFastAPI,
  },
  {
    name: 'Python (Django)',
    href: '/docs/examples/using-with-python-django',
    Icon: IconPython,
  },
  {
    name: 'Java Spring Boot',
    href: '/docs/examples/using-with-java-spring',
    Icon: IconSpring,
  },
  {
    name: '.NET',
    href: '/docs/examples/using-with-dotnet',
    Icon: IconDotnet,
  },
  {
    name: 'Laravel (PHP)',
    href: '/docs/examples/using-with-laravel-php',
    Icon: IconLaravel,
  },
];

export default function TechStacksSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Learn how to use Inspectr with your stack</h2>
          <p className="mt-4 text-gray-400">
            Follow step-by-step guides to integrate Inspectr with the frameworks your team already uses.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-12">
          {stacks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-800 bg-black/40 transition group-hover:border-brand-primary/80 group-hover:bg-black/60">
                <Icon className="h-12 w-12" aria-hidden="true" />
              </span>
              <span className="mt-4 text-base font-medium text-white transition group-hover:text-brand-primary">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
