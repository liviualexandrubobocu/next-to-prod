import create from 'zustand';
import {Node, Edge} from 'reactflow';

interface RFStore {
    nodes: Node[];
    edges: Edge[];
    addNode: (node: Node) => void;
    removeNode: (id: string) => void;
    addEdge: (edge: Edge) => void;
    removeEdge: (id: string) => void;
    setNodes: (nodes: Node[]) => void;
    getNodes: () => Node[];
  }

export const useRFMappings = create<RFStore>((set: Function, get: Function) => ({
  nodes: [],
  edges: [],
  addNode: (node: Node) => set((state: RFStore) => ({ nodes: [...state.nodes, node] })),
  removeNode: (id: string) => set((state: RFStore) => ({ nodes: state.nodes.filter((n) => n.id !== id) })),
  addEdge: (edge: Edge) => set((state: RFStore) => ({ edges: [...state.edges, edge] })),
  removeEdge: (id: string) => set((state: RFStore) => ({ edges: state.edges.filter((e: Edge) => e.id !== id) })),
  setNodes: (nodes: Node[]) => set(() => ({ nodes })),
  getNodes: () => get().nodes,
  setEdges: (edges: Edge[]) => set(() => ({ edges })),
  getEdges: () => get().edges,
}));