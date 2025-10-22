import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/browser.svg?react';
import serviceIcon from '../../assets/icons/eventcatalog.svg?react';

export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Client', icon: clientIcon },
        end: { label: 'EventCatalog', icon: serviceIcon, width: 140 }
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
      overrides: { 'group_public': { label: 'event-catalog.in-spectr.dev' },'group_local': { style: { height: 100 } }  },
      start: { label: 'User', icon: clientIcon },
      end: { label: 'EventCatalog', icon: serviceIcon, width: 140 }
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