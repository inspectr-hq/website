import React, { useMemo } from 'react';
import FlowVisualizer from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/browser.svg?react';
import serviceIcon from '../../assets/icons/braces-line.svg?react';


export default function FlowLocalBrowser() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Front-end JS', icon: clientIcon, width: 160},
        end: { label: 'API service', icon: serviceIcon }
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