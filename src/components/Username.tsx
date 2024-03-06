import React from 'react'
interface Iprops {
    data: any
}

const Username = ({ data }: Iprops) => {
    console.log(data, 'hello')
    return (
        <div>
            <h2> {data}</h2>
        </div>
    )
}

export default Username
