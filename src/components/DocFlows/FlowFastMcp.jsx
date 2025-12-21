import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/claude-color.svg?react';
import serviceIcon from '../../assets/icons/mcp.svg?react';

export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Claude', icon: clientIcon, width: 140 },
        end: { label: 'FastMCP Server', icon: serviceIcon, width: 160 }
      }),
    []
  );

  return (
    <FlowVisualizer
      nodeData={nodes}
      edgeData={edges}
      style={{ width: '100%', height: '210px' }}
    />
  );
}

export function FlowIngress() {
  const { nodes, edges } = useMemo(
    () =>
      buildIngressFlow({
        overrides: {'group_public': { label: 'my-fastmcp.in-spectr.dev'}},
        start: { label: 'Claude', icon: clientIcon },
        end: { label: 'FastMCP Server', icon: serviceIcon, width: 160 }
      }),
    []
  );

  return (
    <FlowVisualizer
      nodeData={nodes}
      edgeData={edges}
      style={{ width: '100%', height: '210px' }}
    />
  );
}
