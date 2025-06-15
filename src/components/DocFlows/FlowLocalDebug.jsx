import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow } from '../Flow/FlowBuilder.jsx';

import serviceIcon from '../../assets/icons/layers.svg?react';


export default function FlowLocalDebug() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        end: { label: 'Backend service', icon: serviceIcon }
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