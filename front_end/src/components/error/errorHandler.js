import React from 'react'
import { useEffect, useState } from 'react'

const ErrorHandler = (props) => {
    const {errorHandler} = props

    //setError handler to false
    const [show, setShow] = useState(false)

    // useEffect(() => {
    //     // setShow(false)
    //     if(errorHandler.isError){
    //         setShow(true)
    //     }
    // }, [])



    return (
        <div>
            {/* {console.log(errorHandler.isError)} */}
            {show 
                ? (<h1 style={{color:'black'}}> 
                
                {/* {errorHandler.message} */}

                </h1>) : 
                ('')
            }

        </div>
    )
}

export default ErrorHandler
