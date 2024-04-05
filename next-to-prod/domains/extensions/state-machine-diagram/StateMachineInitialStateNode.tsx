'use client';


import React from 'react';
import { ClassNodeProps } from '../models/ClassNode';
import styles from "./StateMachineInitialStateNode.module.css";


import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

const StateMachineInitialStateNode = ({ data, isConnectable }: any) => {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, []);
    
    return (
        <>
            <div className={styles.initialStateNode} >
                <Handle type="target" position={Position.Right} />
            </div>
            <div className={styles.initialStateText}>{data.name}</div>
        </>
        
    );
};

export default StateMachineInitialStateNode;