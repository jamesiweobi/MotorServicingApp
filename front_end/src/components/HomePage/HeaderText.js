import React from 'react'

const HeaderText = ({text1 , text2}) => {
   
    return (
        <h1 style={{textTransform: 'capitalize'}}>
            {text1} <br/> {text2}
        </h1>
    )
}

export default HeaderText

