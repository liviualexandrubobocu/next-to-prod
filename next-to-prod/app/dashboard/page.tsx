import BasicDiagram from "@/components/BasicDiagram";
import CodeEditor from "@/components/CodeEditor";

export default function DashboardPage() {
    return (
        <>
            <div style={{ width: '400px', height: '300px', display: 'flex'}}>
                <BasicDiagram />
            </div>
            <div style={{ width: '400px', height: '300px', display: 'flex'}}>
                <CodeEditor />
            </div>
        </>
        

    ) 
}