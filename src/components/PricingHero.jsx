import React from 'react';
import Badge from './Badge.jsx';

const PricingHero = () => {
  return (
    <div className="relative overflow-hidden bg-brand-dark px-6 py-20 sm:py-24 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark"></div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/*<div*/}
        {/*  className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/20 mb-8 backdrop-blur-sm">*/}
        {/*  <span>Pricing</span>*/}
        {/*</div>*/}
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src="/brand/inspectr_brand_logo.png" alt="Inspectr Logo" className="h-20 w-auto" />
          <span className="font-bold text-5xl">Inspectr</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Simple, <span className="text-gradient">transparent</span> pricing
        </h1>

        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          {/*Choose the plan that's right for you. Start free, scale as you grow.*/}
          Choose the plan that's right for you. Just start, scale as you grow.
        </p>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mt-2">
          <Badge variant="outline">No signup or account needed</Badge>
        </p>
      </div>
    </div>
  );
};

export default PricingHero;
