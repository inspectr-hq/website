import React, { useMemo } from 'react';
import { MarkerType } from '@xyflow/react';
import FlowVisualizer, { bigArrow } from '../Flow/FlowVisualizer.jsx';
import { buildBaseFlow, buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/claude-color.svg?react';
import serviceIcon from '../../assets/icons/mcp.svg?react';

export function FlowBase() {
  const { nodes, edges } = useMemo(
    () =>
      buildBaseFlow({
        start: { label: 'Claude', icon: clientIcon },
        end: { label: 'MCP Server', icon: serviceIcon, width: 140 }
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
        overrides: {'group_public': { label: 'mcp-demo.in-spectr.dev'}},
        start: { label: 'Claude', icon: clientIcon },
        end: { label: 'MCP Server', icon: serviceIcon, width: 140 }
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

export function FlowSimple() {
  const { nodes, edges } = useMemo(() => {
    const nodes = [
      {
        id: '0',
        type: 'proxy',
        data: { label: 'Claude', icon: clientIcon, showLeft: false, width: 120 },
        position: { x: 0, y: 30 }
      },
      {
        id: '1',
        type: 'proxy',
        data: { label: 'Inspectr', showBottom: false },
        position: { x: 260, y: 30 }
      },
      {
        id: '2',
        type: 'proxy',
        data: { label: 'MCP Server', icon: serviceIcon, showRight: false, width: 150 },
        position: { x: 520, y: 30 }
      }
    ];

    const edges = [
      {
        id: 'e-0-1',
        source: '0',
        sourceHandle: 'outRight',
        target: '1',
        targetHandle: 'inLeft',
        label: 'Request',
        markerEnd: bigArrow(MarkerType.ArrowClosed)
      },
      {
        id: 'e-1-0',
        source: '1',
        sourceHandle: 'outLeft',
        target: '0',
        targetHandle: 'inRight',
        label: 'Response',
        markerEnd: bigArrow(MarkerType.ArrowClosed)
      },
      {
        id: 'e-1-2',
        source: '1',
        sourceHandle: 'outRight',
        target: '2',
        targetHandle: 'inLeft',
        label: 'Request',
        markerEnd: bigArrow(MarkerType.ArrowClosed)
      },
      {
        id: 'e-2-1',
        source: '2',
        sourceHandle: 'outLeft',
        target: '1',
        targetHandle: 'inRight',
        label: 'Response',
        markerEnd: bigArrow(MarkerType.ArrowClosed)
      }
    ];

    return { nodes, edges };
  }, []);

  return (
    <FlowVisualizer nodeData={nodes} edgeData={edges} style={{ width: '100%', height: '180px' }} />
  );
}
