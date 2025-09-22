import React from 'react';

import IconNode from '../assets/icons/node_js.svg?react';
import IconFastAPI from '../assets/icons/fastapi.svg?react';
import IconPython from '../assets/icons/python.svg?react';
import IconSpring from '../assets/icons/java_spring_boot.svg?react';
import IconDotnet from '../assets/icons/microsoft_dotnet.svg?react';
import IconLaravel from '../assets/icons/php_laravel.svg?react';
import IconPhp from '../assets/icons/php.svg?react';
import IconMcp from '../assets/icons/mcp.svg?react';
import IconN8n from '../assets/icons/n8n_white.svg?react';
import IconOllama from '../assets/icons/ollama_white.svg?react';
import IconWebhooks from '../assets/icons/webhook.svg?react';

const stacks = [
  {
    name: 'Node.js',
    href: '/docs/examples/using-with-express/',
    Icon: IconNode
  },
  {
    name: 'FastAPI',
    href: '/docs/examples/using-with-python-fastapi/',
    Icon: IconFastAPI
  },
  {
    name: 'Python',
    href: '/docs/examples/using-with-python-django/',
    Icon: IconPython
  },
  {
    name: 'Java Spring Boot',
    href: '/docs/examples/using-with-java-spring/',
    Icon: IconSpring
  },
  {
    name: '.NET',
    href: '/docs/examples/using-with-dotnet/',
    Icon: IconDotnet
  },
  {
    name: 'Laravel',
    href: '/docs/examples/using-with-laravel-php/',
    Icon: IconLaravel
  },
  {
    name: 'PHP',
    href: '/docs/examples/using-with-laravel-php/',
    Icon: IconPhp
  },
  {
    name: 'MCP',
    href: '/docs/examples/expose-mcp-server/',
    Icon: IconMcp
  },
  {
    name: 'Ollama',
    href: '/docs/examples/examples/expose-ollama/',
    Icon: IconOllama
  },
  {
    name: 'N8N',
    href: '/docs/examples/expose-n8n-workflow/',
    Icon: IconN8n
  }
  ,
  {
    name: 'Webhooks',
    href: '/docs/examples/handling-generic-webhooks/',
    Icon: IconWebhooks
  }
];

export default function TechStacksSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">
            Learn how to use Inspectr with your favorite stack and tools
          </h2>
          <p className="mt-4 text-gray-400">
            Follow step-by-step guides to integrate Inspectr with the frameworks and tools your team
            already uses.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
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
