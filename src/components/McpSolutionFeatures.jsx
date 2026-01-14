import React from 'react';
import { FeatureCard } from './FeaturesCard.jsx';
import IconTrace from '../assets/icons/chart-gantt.svg?react';
import IconBot from '../assets/icons/icon_bot.svg?react';
import IconArrows from '../assets/icons/right-left-arrows.svg?react';
import IconBookmark from '../assets/icons/bookmark.svg?react';
import IconMcp from '../assets/icons/mcp.svg?react';
import IconFolderArrow from '../assets/icons/folder-arrorw.svg?react';

const features = [
  {
    icon: <IconArrows className="h-6 w-6" />,
    title: 'Full capture of MCP requests',
    description: 'See exactly what was sent and returned across every MCP operation.',
    href: '/docs/features/inspectr-mcp-insights/#mcp-details-per-operation'
  },
  {
    icon: <IconTrace className="h-6 w-6" />,
    title: 'MCP flow visibility',
    description: 'Follow the real execution flow, not fragmented log lines.',
    href: '/docs/features/inspectr-tracing-insights/#trace-timeline'
  },
  {
    icon: <IconBookmark className="h-6 w-6" />,
    title: 'Call classification',
    description: 'Know whether tools, prompts, or resources were invoked.',
    href: '/docs/features/inspectr-mcp-insights/#mcp-details-per-operation'
  },
  {
    icon: <IconMcp className="h-6 w-6" />,
    title: 'Token usage estimates',
    description: 'Identify expensive flows and unexpected token spikes.',
    href: '/docs/features/inspectr-mcp-insights/#trace-view---usage-insights-and-token-estimates'
  },
  {
    icon: <IconFolderArrow className="h-6 w-6" />,
    title: 'Exportable JSON sessions',
    description: 'Share, review, or investigate MCP sessions offline.',
    href: '/docs/features/inspectr-export/#export-file-format'
  },
  {
    icon: <IconBot className="h-6 w-6" />,
    title: 'Guided MCP analysis',
    description: 'Surface patterns, anomalies, and behavior changes fast.',
    href: '/docs/features/inspectr-mcp-server/#example-conversations'
  }
];

export default function McpSolutionFeatures() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}
