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
  },
  {
    icon: <IconTrace className="h-6 w-6" />,
    title: 'MCP flow visibility',
    description: 'Follow the real execution flow, not fragmented log lines.',
  },
  {
    icon: <IconBookmark className="h-6 w-6" />,
    title: 'Call classification',
    description: 'Know whether tools, prompts, or resources were invoked.',
  },
  {
    icon: <IconMcp className="h-6 w-6" />,
    title: 'Token usage estimates',
    description: 'Identify expensive flows and unexpected token spikes.',
  },
  {
    icon: <IconFolderArrow className="h-6 w-6" />,
    title: 'Exportable JSON sessions',
    description: 'Share, review, or investigate MCP sessions offline.',
  },
  {
    icon: <IconBot className="h-6 w-6" />,
    title: 'Guided MCP analysis',
    description: 'Surface patterns, anomalies, and behavior changes fast.',
  },
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
