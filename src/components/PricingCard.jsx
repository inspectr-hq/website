// src/components/PricingCard.jsx

import React from 'react';
import Check from '../assets/icon_check.svg?react';
import Button from './Buttons.jsx';
import Badge from './Badge.jsx';

const PricingCard = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaVariant = 'default', // one of 'default' | 'outline' | 'primary' | 'ghost' | 'invert'
  ctaLink,
  oldPrice
}) => {
  const shouldOpenInNewTab = ctaLink && ctaLink.includes('http');

  // pick the right classes based on variant (isPopular overrides everything)
  const variantClasses = isPopular
    ? // always the "brand" look for your most‑popular card
      'bg-brand-primary hover:bg-brand-secondary text-brand-dark border-0'
    : (() => {
        switch (ctaVariant) {
          case 'outline':
            return 'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50';
          case 'primary':
            return 'bg-brand-primary hover:bg-brand-secondary text-brand-dark border-0';
          case 'ghost':
            return 'bg-transparent text-white hover:underline border-transparent';
          case 'invert':
            return 'bg-white text-black border border-gray-200 hover:bg-brand-secondary';
          case 'default':
          default:
            return 'bg-white/10 hover:bg-white/20 text-white border border-white/20';
        }
      })();

  return (
    <div
      className={`relative flex flex-col justify-between h-full rounded-xl border px-8 py-8 transition-all duration-300 hover:shadow-lg backdrop-blur-sm ${
        isPopular
          ? 'border-brand-primary/50 bg-white/5 shadow-brand-primary/10 shadow-lg'
          : 'border-white/20 bg-white/5 hover:border-white/30'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-brand-dark">
            Most Popular
          </span>
        </div>
      )}

      {/* content area */}
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-white mb-2">
          {/*<Badge variant='solid'>{name}</Badge>*/}
          {name}
        </h3>
        <div className="mb-4">
          {oldPrice && <span className="text-white/60 mr-2 text-m">🚀 launch promo</span>}
          <span className="text-2xl font-bold text-white">{price}</span>
          {price !== 'FREE' && price !== 'Contact Us' && (
            <span className="text-white/60 ml-0">/month</span>
          )}
          {oldPrice && (
            <>
              <span className="text-xl text-white/60 line-through ml-2">{oldPrice}</span>
              <span className="text-white/60 line-through ml-0">/month</span>
            </>
          )}
        </div>
        <p className="text-white/70 mb-8 text-sm">{description}</p>

        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, idx) => {
            const isEverything = feature.toLowerCase().includes('everything');
            return (
              <li key={idx} className="flex items-start text-sm">
                <Check className="h-4 w-4 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <span
                  className={`text-white/80 ${isEverything ? 'font-extrabold text-white' : ''}`}
                >
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA */}
      {ctaLink ? (
        <a
          href={ctaLink}
          {...(shouldOpenInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="cursor-pointer"
        >
          <Button
            className={`w-full py-2.5 px-6 rounded-lg font-medium transition-all duration-200 ${variantClasses}`}
            variant={ctaVariant}
          >
            {ctaText}
          </Button>
        </a>
      ) : (
        <Button
          as="button"
          className={`w-full py-2.5 px-6 rounded-lg font-medium transition-all duration-200 ${variantClasses}`}
          variant={ctaVariant}
        >
          {ctaText}
        </Button>
      )}
    </div>
  );
};

export default PricingCard;
