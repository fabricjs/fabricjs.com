import { useEffect, useState } from 'react';

export const generateExample = (codeFunc, id) => {
    return ({ hideCode, canvasStyle }) => {
        const [codestring, setCode] = useState()
        useEffect(() => {
            codeFunc(id);
            const code = codeFunc.toString();
            const matching = code.match(/function[^{]+\{\n([\s\S]*)\}$/);
            setCode(matching?.[1] || code);
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