import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow } from '../Flow/FlowBuilder.jsx';

import pythonIcon from '../../assets/icons/python.svg?react';
import serviceIcon from '../../assets/icons/mcp.svg?react';

export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'FastMCP Server', icon: pythonIcon, width: 160 },
        end: { label: 'MCP Client', icon: serviceIcon, width: 140 }
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
