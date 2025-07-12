import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { useGraphStore } from '../store/graphStore';
import { QuestionNode } from './QuestionNode';

const nodeTypes = { question: QuestionNode };

export const Canvas: React.FC = () => {
  const { nodes, edges } = useGraphStore();

  return (
    <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};
