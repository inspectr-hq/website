import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/openai_black.svg?react';
import serviceIcon from '../../assets/icons/mcp.svg?react';

export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'ChatGPT', icon: clientIcon },
        end: { label: 'MCP Server', icon: serviceIcon, width: 140 }
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
  const { nodes, edges } = useMemo(() => {
    const flow = buildIngressFlow({
      overrides: { 'group_public': { label: 'mcp-demo.in-spectr.dev' },'group_local': { style: { height: 100 } }  },
      start: { label: 'ChatGPT', icon: clientIcon },
      end: { label: 'MCP Server', icon: serviceIcon, width: 140 }
    });
    // filter out Inspectr App (id = '5')
    return {
      nodes: flow.nodes.filter(n => n.id !== '5'),
      edges: flow.edges.filter(e => e.source !== '5' && e.target !== '5')
    };
  }, []);

  return (
    <FlowVisualizer
      nodeData={nodes}
      edgeData={edges}
      style={{ width: '100%', height: '120px' }}
    />
  );
}