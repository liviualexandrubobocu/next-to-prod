'use client';
import ReactFlow, { MiniMap, Controls, useNodesState,
    useEdgesState,
    addEdge, applyEdgeChanges, applyNodeChanges,
    Elements } from 'reactflow';
import ClassNode from './ClassNode';

import React, { useCallback, useState } from 'react';
import 'reactflow/dist/style.css';


const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'classNode', position: { x: 0, y: 0 }, data: { attributes: ['+foo'], methods: ['bar()'] } },
  { id: 'node-2', type: 'classNode', position: { x: 100, y: 0 }, data: { attributes: ['+foo'], methods: ['bar()'] } }
];
const initialEdges = [
    { id: 'e1', source: 'node-1', target: 'node-2', type: 'smoothstep', label: 'contains 4' },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { classNode: ClassNode };

const ClassNodeFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
    />
  );
}

export default ClassNodeFlow;
