export interface QuestionNode {
  id: string;
  part: 'application' | 'medical';
  text: string;
  type: 'text' | 'number' | 'date' | 'select' | 'radio';
  options?: string[];
  key: string;
  notes?: string;
  metadata?: Record<string, any>;
  position: { x: number; y: number };
}

export interface ConditionEdge {
  id: string;
  source: string;
  target: string;
  condition?: string;
}

export interface InterviewGraph {
  nodes: QuestionNode[];
  edges: ConditionEdge[];
}
