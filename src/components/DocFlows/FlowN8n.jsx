import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/browser.svg?react';
import serviceIcon from '../../assets/icons/n8n.svg?react';


export default function FlowN8n() {
  const { nodes, edges } = useMemo(
    () =>
      buildIngressFlow({
        start: { label: 'Client', icon: clientIcon },
        end: { label: 'n8n workflow', icon: serviceIcon }
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