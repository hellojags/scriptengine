import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export const QuestionNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="p-2 rounded bg-white shadow-md border">
      <div className="font-medium text-sm">{data.text}</div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};
