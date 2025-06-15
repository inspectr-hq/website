import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow } from '../Flow/FlowBuilder.jsx';

export default function FlowProxy() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow(),
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