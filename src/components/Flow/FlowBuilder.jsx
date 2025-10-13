// src/components/Flow/flowBuilder.jsx
import { bigArrow } from './FlowVisualizer.jsx';
import { MarkerType } from '@xyflow/react';


// default icons
import ZapIcon from '../../assets/icons/zap.svg?react';
import ServiceIcon from '../../assets/icons/stack.svg?react';
import ShieldIcon from '../../assets/icons/shield.svg?react';

/**
 * @typedef NodeMeta
 * @property {string} id
 * @property {string} label
 * @property {React.ComponentType} [icon]
 * @property {boolean} [showIcon]
 * @property {boolean} [showLeft]
 * @property {boolean} [showRight]
 * @property {boolean} [showTop]
 * @property {boolean} [showBottom]
 * @property {number} [width]
 */


/** Default start = “Client” with ZapIcon */
const DEFAULT_START = {
  id: '0',
  label: 'Client',
  icon: ZapIcon,
  showIcon: true,
  showLeft: false,
  width: 100
};

/** Default end = “Backend Service” with ServiceIcon */
const DEFAULT_END = {
  id: '3',
  label: 'Backend Service',
  icon: ServiceIcon,
  showIcon: true,
  showRight: false
};

const MODE_LABEL = {
  proxy: 'Inspectr Proxy',
  mock:  'Inspectr Mock',
  catch: 'Inspectr Catch',
};

// -----------------------------------------------------------------------------
// Ingress Flow
// -----------------------------------------------------------------------------
/**
 * Build ingress flow (with two static group nodes).
 * You can override the first/last nodes via `start`/`end`.
 *
 * @param {{
 *   start?: Partial<NodeMeta>,
 *   end?:   Partial<NodeMeta>
 *   mode?:  string|null,
 *   overrides?: Record<string, Partial<NodeMeta>>
 * }} opts
 */
export function buildIngressFlow({
                                   start = {},
                                   end = {},
                                   mode = null,
                                    badge = null,
                                   overrides = {}
                                 } = {}) {

  const startMeta = { ...DEFAULT_START, ...start };
  const endMeta = { ...DEFAULT_END, ...end };

  // helper to merge per-node overrides
  const applyOverride = (node) => {
    const override = overrides[node.id] || {};
    return {
      ...node,
      data: {
        ...node.data,
        ...override         // allow label, icon, showIcon, etc
      },
      style: { ...node.style, ...override.style }
    };
  };

  const ModeLabel = mode ? MODE_LABEL[mode] : MODE_LABEL['proxy'];
  const BadgeLabel = badge ? badge : null;

  const rawNodes = [
    // ─────── Group Nodes ───────
    {
      id: 'group_public',
      type: 'group',
      data: { label: 'https://hello.in-spectr.dev' },
      position: { x: 225, y: 5 },
      style: { width: 210, height: 100 }
    },
    {
      id: 'group_local',
      type: 'group',
      data: { label: 'Local Setup' },
      position: { x: 520, y: 5 },
      style: { width: 520, height: 220 }
    },

    // ─────── Start Node ───────
    {
      id: startMeta.id,
      type: 'proxy',
      data: startMeta,
      position: { x: 0, y: 30 },
      parentNode: 'group_public',
      extent: 'parent'
    },

    // ─────── Ingress Node ───────
    {
      id: '1',
      type: 'proxy',
      data: { label: 'Inspectr Ingress', iconFrom: '#26ff00', iconTo: '#9fe491' },
      position: { x: 250, y: 30 },
      parentNode: 'group_public',
      extent: 'parent'
    },

    // ─────── Core Proxy ───────
    {
      id: '2',
      type: 'proxy',
      data: { label: ModeLabel, showBottom: true, badge: BadgeLabel},
      position: { x: 550, y: 30 },
      parentNode: 'group_local',
      extent: 'parent'
    },

    // ─────── End Node ───────
    {
      id: endMeta.id,
      type: 'proxy',
      data: endMeta,
      position: { x: 850, y: 30 },
      parentNode: 'group_local',
      extent: 'parent'
    },

    // ─────── Inspectr App ───────
    {
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
      position: { x: 550, y: 145 },
      parentNode: 'group_local',
      extent: 'parent'
    }
  ];

  const nodes = rawNodes.map(applyOverride);

  const edges = [
    {
      id: `e-${startMeta.id}-1`,
      source: startMeta.id, sourceHandle: 'outRight',
      target: '1', targetHandle: 'inLeft',
      label: 'Request',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: `e-1-${startMeta.id}`,
      source: '1', sourceHandle: 'outLeft',
      target: startMeta.id, targetHandle: 'inRight',
      label: 'Response', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-a-in1',
      source: '1', sourceHandle: 'outRight',
      target: '2', targetHandle: 'inLeft',
      label: 'Event', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-b-in2',
      source: '2', sourceHandle: 'outLeft',
      target: '1', targetHandle: 'inRight',
      label: 'Event', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-a-pr1',
      source: '2', sourceHandle: 'outRight',
      target: endMeta.id, targetHandle: 'inLeft',
      label: 'Request',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-b-px2',
      source: endMeta.id, sourceHandle: 'outLeft',
      target: '2', targetHandle: 'inRight',
      label: 'Response', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-2-app',
      source: '2', sourceHandle: 'bottom',
      target: '5', targetHandle: 'top',
      label: 'Server-Sent Event',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    }
  ];

  return { nodes, edges };
}

// -----------------------------------------------------------------------------
// Base Flow (no ingress, no groups)
// -----------------------------------------------------------------------------
/**
 * Build a simple flow with no ingress and no groups.
 * @param {{
 *   start?: Partial<NodeMeta>,
 *   end?:   Partial<NodeMeta>
 *   mode?:  string|null,
 *   overrides?: Record<string, Partial<NodeMeta>>
 * }} opts
 */
export function buildBaseFlow({
                                start = {},
                                end = {},
                                mode = null,
                                overrides = {}
                              } = {}) {
  const startMeta = { ...DEFAULT_START, ...start };
  const endMeta = { ...DEFAULT_END, ...end };

  // helper to merge per-node overrides
  const applyOverride = (node) => {
    const override = overrides[node.id] || {};
    return {
      ...node,
      data: {
        ...node.data,
        ...override         // allow label, icon, showIcon, etc
      }
    };
  };

  const ModeLabel = mode ? MODE_LABEL[mode] : MODE_LABEL['proxy'];

  const rawNodes = [
    // ─────── Start Node ───────
    {
      id: startMeta.id,
      type: 'proxy',
      data: startMeta,
      position: { x: 0, y: 30 }
    },
    // ─────── Core Proxy ───────
    {
      id: '1',
      type: 'proxy',
      data: { label: ModeLabel, showBottom: true, mode: mode },
      position: { x: 300, y: 30 }
    },

    // ─────── End Node ───────
    {
      id: endMeta.id,
      type: 'proxy',
      data: endMeta,
      position: { x: 650, y: 30 }
    },

    // ─────── Inspectr App ───────
    {
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
      position: { x: 300, y: 145 }
    }
  ];

  const nodes = rawNodes.map(applyOverride);

  const edges = [
    {
      id: `e-${startMeta.id}-1`,
      source: startMeta.id, sourceHandle: 'outRight',
      target: '1', targetHandle: 'inLeft',
      label: 'localhost:8080', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-1-0',
      source: '1', sourceHandle: 'outLeft',
      target: startMeta.id, targetHandle: 'inRight',
      label: 'Response', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-1-2',
      source: '1', sourceHandle: 'outRight',
      target: endMeta.id, targetHandle: 'inLeft',
      label: 'Request',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-2-1',
      source: endMeta.id, sourceHandle: 'outLeft',
      target: '1', targetHandle: 'inRight',
      label: 'Response', markerEnd: bigArrow(MarkerType.ArrowClosed)
    },
    {
      id: 'e-1-5',
      source: '1', sourceHandle: 'bottom',
      target: '5', targetHandle: 'top',
      label: 'Server-Sent Event',
      markerEnd: bigArrow(MarkerType.ArrowClosed)
    }
  ];

  return { nodes, edges };
}
