import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/zap.svg?react';
import serviceIcon from '../../assets/icons/stack.svg?react';


export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Client', icon: clientIcon },
        end: { label: '.Net App', icon: serviceIcon, width: 120 }
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
        overrides: {'group_public': { label: 'internal-api.in-spectr.dev'}, 'group_local': { label: 'On-prem - intranet.local'}},
        start: { label: 'Client', icon: clientIcon },
        end: { label: 'Internal API', icon: serviceIcon, width: 140 }
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