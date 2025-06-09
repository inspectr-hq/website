import React, { useMemo } from 'react';
import FlowVisualizer, { bigArrow } from '../Flow/FlowVisualizer.jsx';
import { buildIngressFlow } from '../Flow/FlowBuilder.jsx';

import clientIcon from '../../assets/icons/brand-stripe.svg?react';
import serviceIcon from '../../assets/icons/n8n.svg?react';
import ZapIcon from '../../assets/icons/zap.svg';
import ServiceIcon from '../../assets/icons/stack.svg';
import { MarkerType } from '@xyflow/react';


export default function FlowIngressStripe() {
  const nodes = [
    // ─────── Group Nodes ───────
    {
      id: 'group_public',
      type: 'group',
      data: { label: 'stripe-webhooks.in-spectr.dev' },
      position: { x: 310, y: 5 },
      style: { width: 230, height: 100 }
    },
    {
      id: 'group_local',
      type: 'group',
      data: { label: 'Local Setup' },
      position: { x: 650, y: 5 },
      style: { width: 220, height: 220 }
    },

    // ─────── Regular Nodes ───────
    {
      id: '0',
      type: 'proxy',
      data: { label: 'Stripe Webhook', icon: clientIcon, showLeft: false, width: 160 },
      position: { x: 0, y: 30 }
    }, {
      id: '1',
      type: 'proxy',
      data: { label: 'Inspectr Ingress', iconFrom: '#26ff00', iconTo: '#9fe491' },
      position: { x: 340, y: 30 },
      parentNode: 'group_public',
      extent: 'parent'
    }, {
      id: '2',
      type: 'proxy',
      data: { label: 'Inspectr Catch', showBottom: true, showRight: false, mode:'catch' },
      position: { x: 680, y: 30 },
      parentNode: 'group_local',
      extent: 'parent'
    }, {
      id: '5',
      type: 'proxy',
      data: {
        label: 'Inspectr App',
        iconFrom: '#ff8c00',
        iconTo: '#ffd700',
        showTop: true,
        showLeft: false,
        showRight: false
      },
      position: { x: 680, y: 145 },
      parentNode: 'group_local',
      extent: 'parent'
    }
  ];

  const edges = [
    {
      id: 'e-a-cl1',
      source: '0',
      sourceHandle: 'outRight',
      target: '1',
      targetHandle: 'inLeft',
      label: 'Webhook',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-b-cl2',
      source: '1',
      sourceHandle: 'outLeft',
      target: '0',
      targetHandle: 'inRight',
      label: 'Response 200 OK',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-a-in1',
      source: '1',
      sourceHandle: 'outRight',
      target: '2',
      targetHandle: 'inLeft',
      label: 'Event',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-b-in2',
      source: '2',
      sourceHandle: 'outLeft',
      target: '1',
      targetHandle: 'inRight',
      label: 'Event 200 OK',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-a-pr1',
      source: '2',
      sourceHandle: 'outRight',
      target: '3',
      targetHandle: 'inLeft',
      label: 'Request',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-b-px2',
      source: '3',
      sourceHandle: 'outLeft',
      target: '2',
      targetHandle: 'inRight',
      label: 'Response',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-2-app',
      source: '2',
      sourceHandle: 'bottom',
      target: '5',
      targetHandle: 'top',
      label: 'Server-Sent Event',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    }
  ];

  return (
    <FlowVisualizer
      nodeData={nodes}
      edgeData={edges}
      style={{ width: '100%', height: '300px' }}
    />
  );
}
