import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Open Source',
      price: 'FREE',
      description: 'Perfect for developers, working on a local setup',
      features: [
        'Unlimited API requests & Webhooks',
        // 'No time limits',
        'Public expose with preferred URLs',
        'Request inspection & replay',
        'Basic statistics',
        'OpenAPI Mocking',
        'SSL/TLS Encryption',
        'Community support (Discord)',
      ],
      ctaText: 'Get Started',
      ctaVariant: 'invert',
      ctaLink: '/#get-started',
    },
    {
      name: 'Pro',
      price: '$5',
      description: 'For professional developers, with a domain',
      features: [
        'Everything in Open Source',
        'Custom domains and subdomains',
        'Reserved subdomains',
        'Advanced analytics',
        'Inspectr AI MCP Server (coming soon)',
        'Priority support (email)',
      ],
      isPopular: true,
      ctaText: 'Schedule a Call',
      ctaLink: 'https://forms.gle/httYMeu7arsfpeuZA',
      ctaVariant: 'default'
    },
    // {
    //   name: 'Teams',
    //   price: '$8',
    //   description: 'For small teams',
    //   features: [
    //     'Everything in Pro',
    //     'Custom domains and subdomains',
    //     'Reserved subdomains',
    //     'Priority support',
    //     'Advanced analytics',
    //     'MCP Server capabilities',
    //   ],
    //   isPopular: true,
    //   ctaText: 'Contact Sales',
    //   ctaVariant: 'default'
    // },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Pro',
        'Advanced security & compliance',
        'Self-hosted deployment',
        'Priority feature requests',
        // 'Advanced reporting (coming soon)',
        'Dedicated support',
      ],
      ctaText: 'Schedule a Call',
      ctaLink: 'https://forms.gle/httYMeu7arsfpeuZA',
      ctaVariant: 'outline'
    }
  ];

  return (
    <div className="bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
              ctaVariant={plan.ctaVariant}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}

      <div className="mt-20 py-20 text-center bg-gradient-to-b from-brand-dark to-black">
        <h3 className="text-2xl font-bold text-white mb-12">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="font-semibold text-white mb-3">Can I change plans anytime?</h4>
            <p className="text-white/70 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take
              effect immediately.</p>
          </div>
          {/*<div className="text-left">*/}
          {/*  <h4 className="font-semibold text-white mb-3">Is there a free trial?</h4>*/}
          {/*  <p className="text-white/70 text-sm">Yes, we offer a 14-day free trial for all paid plans. No credit card*/}
          {/*    required.</p>*/}
          {/*</div>*/}
          <div className="text-left">
            <h4 className="font-semibold text-white mb-3">What payment methods do you accept?</h4>
            <p className="text-white/70 text-sm">We accept all major credit cards and invoice payments. <a href="https://forms.gle/httYMeu7arsfpeuZA" target="_blank">Contact us</a> for more details.</p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-white mb-3">Do you offer refunds?</h4>
            <p className="text-white/70 text-sm">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;