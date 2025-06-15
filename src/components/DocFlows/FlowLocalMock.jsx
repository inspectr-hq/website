import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow } from '../Flow/FlowBuilder.jsx';

import serviceIcon from '../../assets/icons/openapi.svg?react';


export default function FlowLocalMock() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        end: { label: 'Inspectr Mock', icon: serviceIcon },
        mode:'mock'
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