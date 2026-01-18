import React, { useState, useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  ConnectionLineType,
  Handle,
  Position, useNodesState, useEdgesState
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// React Flow nodes
import EventNode from './Nodes/EventNode.jsx';
import ProxyNode from './Nodes/ProxyNode.jsx';
import GroupNode from './Nodes/GroupNode.jsx';

// Custom node render
const CustomNode = ({ data }) => (
  <div className="relative flex items-center bg-white dark:bg-gray-800 p-2 rounded-lg shadow dark:shadow-gray-700">
    <Handle
      type="target"
      position={Position.Left}
      style={{ background: 'transparent', left: 0 }}
    />
    {data.icon}
    <span className="ml-2 text-sm font-medium dark:text-gray-200">{data.label}</span>
    <Handle
      type="source"
      position={Position.Right}
      style={{ background: 'transparent', right: 0 }}
    />
  </div>
);

const nodeTypes = { custom: CustomNode, event: EventNode, proxy: ProxyNode, group:GroupNode };

export default function FlowVisualizer({ nodeData, edgeData, style }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [rfInstance, setRfInstance] = useState(null);

  // const onConnect = useCallback(
  //   (params) =>
  //     setEdges((eds) =>
  //       addEdge({ ...params, animated: true }, eds),
  //     ),
  //   [],
  // );

  useEffect(() => {
      setNodes(nodeData);
      setEdges(edgeData);
  }, [nodeData,edgeData]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsMobile(window.matchMedia('(max-width: 1023px)').matches);
  }, []);

  const isDark = style && style.theme === 'dark';
  const containerClass = isDark ? 'flow-theme-dark' : '';
  const edgeDefaults = {
    animated: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    zIndex: 10,
    labelBgStyle: { fill: isDark ? '#1f2937' : '#fff' },
    labelStyle: { fontWeight: 600, fill: isDark ? '#e5e7eb' : '#000' },
    style: { stroke: isDark ? '#9ca3af' : '#1f2937' }
  };

  const fitViewOptions = {
    padding: isMobile ? 0.2 : 0.2,
    minZoom: isMobile ? 0.32 : 0.8,
    maxZoom: 1.5
  };

  useEffect(() => {
    if (!rfInstance) return;
    rfInstance.fitView(fitViewOptions);
  }, [rfInstance, fitViewOptions, nodes.length, edges.length]);

  return (
    <div className={`w-full h-full flow-container ${containerClass}`} style={style}>
      <ReactFlowProvider>
        <ReactFlow
          className={isDark ? 'flow-theme-dark' : undefined}
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          defaultEdgeOptions={edgeDefaults}

          fitView
          fitViewOptions={fitViewOptions}
          minZoom={fitViewOptions.minZoom}
          maxZoom={fitViewOptions.maxZoom}
          // fitBounds
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          connectionLineType={ConnectionLineType.SmoothStep}
          onInit={setRfInstance}
        >
          {/*<Background gap={16} size={1} color="#f5f5f5" />*/}
                    <Background gap={16} color="var(--background-dot-color, #f1f1f1)" />

          {/*<Controls showInteractive={true} />*/}
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export function bigArrow(type) {
  return {
    type,
    width: 20,
    height: 20,
    markerUnits: 'userSpaceOnUse',
    color: '#333'
  };
};
