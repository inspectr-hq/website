import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/postman.svg?react';
import serviceIcon from '../../assets/icons/node_js.svg?react';


export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Client', icon: clientIcon },
        end: { label: 'Express API', icon: serviceIcon, width: 140 }
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
        overrides: {'group_public': { label: 'express-demo.in-spectr.dev'}},
        start: { label: 'Client', icon: clientIcon },
        end: { label: 'Express API', icon: serviceIcon, width: 140 }
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