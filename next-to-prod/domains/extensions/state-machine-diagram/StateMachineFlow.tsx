'use client';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';

import React, { useCallback, useState } from 'react';
import 'reactflow/dist/style.css';
import StateMachineInitialStateNode from './StateMachineInitialStateNode';
import StateMachineFinalStateNode from './StateMachineFinalStateNode';


const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'initialStateNode', position: { x: 0, y: 0 }, data: { name: "Initial State"} },
  { id: 'node-2', type: 'finalStateNode', position: { x: 100, y: 0 }, data: { name: "Final State"} }
];
const initialEdges = [
    { id: 'e1', source: 'node-1', target: 'node-2', type: 'smoothstep', label: 'contains 4' },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { 
    initialStateNode: StateMachineInitialStateNode,
    finalStateNode: StateMachineFinalStateNode
 };

const StateMachineFlow = () => {
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

export default StateMachineFlow;
