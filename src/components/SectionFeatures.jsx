import React from 'react';
import IconSearch from '../assets/icon_search.svg?react';
import IconWebhook from '../assets/icon_webhook.svg?react';
import IconSafe from '../assets/icon_safe.svg?react';
import IconCode from '../assets/icon_code.svg?react';
// import IconCode from '../assets/icon_code.svg?react'
import IconOpenApi from '../assets/icon_openapi_mono.svg?react';
// import IconProxy from '../assets/icon_arrow-left-right.svg?react'
import IconLogging from '../assets/icon_logging.svg?react';
import IconHistory from '../assets/icon_history.svg?react';
import IconGlobe from '../assets/icon_globe.svg?react';
import { FeaturesList } from './FeaturesCard.jsx';

const features = [
  {
    icon: <IconSearch className="w-6 h-6" />,
    title: 'Inspect API Requests',
    description:
      'View headers, query parameters, request bodies, and response details in real-time.'
  },
  {
    icon: <IconWebhook className="w-6 h-6" />,
    title: 'Analyze Webhook Events',
    description: 'Capture and review webhook payloads from third-party services with ease.'
  },
  // {
  //   icon: <IconProxy className="w-6 h-6" />,
  //   title: 'API Proxy',
  //   description: 'Forward incoming requests to your backend service and inspect the complete flow.',
  // },
  {
    icon: <IconOpenApi className="w-6 h-6" />,
    title: 'Mock APIs from OpenAPI',
    description: 'Generate a full mock backend from any OpenAPI spec in seconds.'
  },
  {
    icon: <IconLogging className="w-6 h-6" />,
    title: 'Real-time Logging',
    description: 'Monitor incoming requests as they happen in your terminal and UI.'
  },
  // {
  //   icon: <IconHistory className="w-6 h-6" />,
  //   title: 'History & Replay',
  //   description: 'Review past requests with filtering and search, replay them as needed.'
  // },
  {
    icon: <IconSafe className="w-6 h-6" />,
    title: 'Full Data Privacy & Control',
    description: 'Requests and responses are only processed & stored locally.'
  },
  {
    icon: <IconGlobe className="w-6 h-6" />,
    title: 'Public Exposure',
    description: 'Expose local services with secure, custom subdomains for testing and demos.'
  }
];

export default function FeaturesSection() {
  return (
    <div>
      <FeaturesList heading="Everything you need for API & Webhook debugging" features={features} />
    </div>
  );
}
