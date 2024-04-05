import BasicDiagram from "@/components/BasicDiagram";
import CodeEditor from "@/components/CodeEditor";
import ClassNodeFlow from "@/domains/extensions/class-diagram/ClassNodeFlow";
import StateMachineFlow from "@/domains/extensions/state-machine-diagram/StateMachineFlow";

export default function DashboardPage() {
    return (
        <>
            {/* <div style={{ width: '400px', height: '300px', display: 'flex'}}>
                <BasicDiagram />
            </div> */}
            {/* <div style={{ width: '400px', height: '300px', display: 'flex'}}>
                <CodeEditor />
            </div> */}
            <div style={{ width: '400px', height: '300px', display: 'flex'}}>
                <ClassNodeFlow/>
            </div>
            <div style={{ width: '400px', height: '300px', display: 'flex'}}>
                <StateMachineFlow/>
            </div>
        </>
        

    ) 
}