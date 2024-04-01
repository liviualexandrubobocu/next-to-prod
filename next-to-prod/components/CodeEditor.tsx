'use client';

import MonacoEditor from 'react-monaco-editor';
import { parse }  from '@mermaid-js/parser';

import mermaid from 'mermaid';
import mapToFlow from '../services/mapToFlow';
import { useRFMappings } from '@/domains/mappings/state/reactFlowMappings';

function traverse(vertex: any, visited: any, vertices: any, edges: any): any {
    if (visited[vertex]) {
      return visited[vertex];
    }
  
    const currentVertex = vertices[vertex];
    const args = Object.values(edges)
      .filter((edge: any) => edge.start === vertex)
      .map((edge: any) => `${traverse(edge.end, visited, vertices, edges)}`)
      .join(', ');
  
    visited[vertex] = `out_${vertex.toLowerCase()}`;
    return `${visited[vertex]} = ${currentVertex.id}(${args})`;
}

const parseGraph = async (mermaidText: string) => {
    // Configure Mermaid to use the desired settings
    mermaid.initialize({
        startOnLoad: false,
    });

    const parser = (
       await mermaid.mermaidAPI.getDiagramFromText(mermaidText)
    ).getParser().yy;
    return {
        vertices: parser.getVertices(),
        edges: parser.getEdges()
    }
}

const CodeEditor = () => {
    const code = 'graph TD;\n' +
    'A[Start] --> B{Is it working?};\n' +
   'B -->|Yes| C[Keep Doing Whatever];\n' +
    'C -->|No| D[Fix it];\n' + 
    'D --> A;\n';
    const options = {
        selectOnLineNumbers: true
      };
    
    const { setNodes, setEdges } = useRFMappings();
    

    return (
            <MonacoEditor
              width="800"
              height="600"
              language="javascript"
              theme="vs-dark"
              value={code}
              options={options}
              onChange={async (code: string)  => {
                  const {vertices, edges} = await parseGraph(code);
                  const { rfNodes, rfEdges } = mapToFlow(vertices, edges);
                  setNodes(rfNodes);
                  setEdges(rfEdges);
              }}
            />
    )
};

export default CodeEditor;