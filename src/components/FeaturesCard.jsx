// FeaturesCard.jsx
import React from 'react';

export function FeatureCard({ icon, title, description, href }) {
  const Wrapper = href ? 'a' : 'div';
  const Icon = icon;

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="block p-6 rounded-lg bg-black/30 border border-gray-800 hover:border-brand-primary transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary">
        {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : null}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Wrapper>
  );
}

export function FeaturesList({ heading = 'Features', features, className = '' }) {
  const lgColsClass =
    features.length === 2 || features.length === 4 ? 'lg:grid-cols-2' : 'lg:grid-cols-4';

  return (
    <section id="features" className={`py-24 bg-black/20 ${className}`}>
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">{heading}</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${lgColsClass} gap-8`}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
