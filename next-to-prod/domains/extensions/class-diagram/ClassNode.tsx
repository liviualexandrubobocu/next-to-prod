'use client';

import React from 'react';
import { ClassNodeProps } from '../models/ClassNode';
import styles from "./ClassNode.module.css";


import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

const ClassNode = ({ data, isConnectable }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className={styles.classNode} >
        <Handle type="target" position={Position.Top} />
        <div className={styles.className}>{data.name}</div>
        <div className={styles.classAttributes}>
            {data.attributes.map((attr: any, index: any) => (
                <div key={index} className={styles.classAttribute}>{attr}</div>
            ))}
        </div>
        <div className={styles.classMethod}>
        {data.methods.map((method, index) => (
            <div key={index} className={styles.classMethod}>{method}</div>
        ))}
        </div>
        <Handle type="source" type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
        position={Position.Bottom} />
    </div>
  );
}

export default ClassNode;