import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icon_github.svg?react';
import serviceIcon from '../../assets/icons/stack.svg?react';


export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Github CI', icon: clientIcon },
        end: { label: 'Backend Service', icon: serviceIcon, width: 120 }
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
        overrides: {'group_public': { label: 'ci-tests.in-spectr.dev'}, 'group_local': { label: 'Inspectr'}},
        start: { label: 'Github CI', icon: clientIcon, width: 130 },
        end: { label: 'api.staging.com', icon: serviceIcon, width: 170 }
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