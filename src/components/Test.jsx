import React from 'react'

export const Test = () => {

    const [color, setColor] = React.useState(false)

    const category = () => {
        const act = 'blue';
        const inact = 'red';

        if (!color) {
            return <h1 style={{ color: `${act}` }} onClick={() => setColor(!color)}>
                Test
            </h1>

        }
        return <h1 style={{ color: `${inact}` }} onClick={() => setColor(!color)}>
            Test
        </h1>

    }

    return (

        <>
            {category}
        </>

    )
}
