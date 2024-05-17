import { useEffect, useState } from 'react';

export const generateExample = (code, id) => {
    return ({ hideCode, canvasStyle }) => {
        const [codestring, setCode] = useState()
        useEffect(() => {
            code(id);
            setCode(code.toString().match(/function[^{]+\{\n([\s\S]*)\}$/)[1]);
        }, []);
        return <>
            {hideCode || 
                (<pre style={{overflowX: 'scroll'}}>
                    <code>{codestring}</code>
                </pre>)
            }
            <div style={canvasStyle} >
                <canvas width="400" height="300" id={id} />
            </div>
        </>
    }
}