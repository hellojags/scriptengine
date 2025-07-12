import { create } from 'zustand';
import { InterviewGraph, QuestionNode, ConditionEdge } from '../types/interview';

interface GraphState extends InterviewGraph {
  addNode: (node: QuestionNode) => void;
  updateNode: (node: QuestionNode) => void;
  removeNode: (id: string) => void;
  addEdge: (edge: ConditionEdge) => void;
  updateEdge: (edge: ConditionEdge) => void;
  removeEdge: (id: string) => void;
  setGraph: (graph: InterviewGraph) => void;
}

export const useGraphStore = create<GraphState>((set) => ({
  nodes: [],
  edges: [],
  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
  updateNode: (node) =>
    set((state) => ({
      nodes: state.nodes.map((n) => (n.id === node.id ? node : n)),
    })),
  removeNode: (id) =>
    set((state) => ({ nodes: state.nodes.filter((n) => n.id !== id) })),
  addEdge: (edge) => set((state) => ({ edges: [...state.edges, edge] })),
  updateEdge: (edge) =>
    set((state) => ({
      edges: state.edges.map((e) => (e.id === edge.id ? edge : e)),
    })),
  removeEdge: (id) =>
    set((state) => ({ edges: state.edges.filter((e) => e.id !== id) })),
  setGraph: (graph) => set(() => graph),
}));
