import { Node, Edge } from 'reactflow';

const mapToFlow = (nodes: any[], edges: any[]): { rfNodes: Node[], rfEdges: Edge[] } => {
    
    let rfNodes: Node[] = [];
    let rfEdges: Edge[] = [];

    if(nodes) {
      rfNodes = Object.entries(nodes).map(([key, node], index) => ({
        id: node.id,
        type: 'default',
        data: { label: key },
        position: { x: Math.random() * 400, y: Math.random() * 400 } // Random positioning, customize this
      }));

      rfEdges = edges.map(edge => ({
        id: `e${edge.start}-${edge.end}`,
        source: edge.start,
        target: edge.end,
        type: 'straight'
      }));
    }

    return { rfNodes, rfEdges };
}

export default mapToFlow;