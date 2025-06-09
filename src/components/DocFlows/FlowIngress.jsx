import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildIngressFlow } from '../Flow/FlowBuilder.jsx';

export default function FlowIngress() {
  const { nodes, edges } = useMemo(
    () =>
      buildIngressFlow(),
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