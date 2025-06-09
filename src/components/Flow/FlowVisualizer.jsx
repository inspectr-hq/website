import React, { useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
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

  return (
    <div className="w-full h-full flow-container" style={style}>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          defaultEdgeOptions={{
            animated: true,
            labelBgPadding: [8, 4],
            labelBgBorderRadius: 4,
            zIndex: 10,
            labelBgStyle: { fill: 'var(--label-bg-color, #fff)' },
            labelStyle: { fontWeight: 600, fill: 'var(--label-text-color, #000)' }
          }}

          fitView
          // fitBounds
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          connectionLineType={ConnectionLineType.SmoothStep}
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
