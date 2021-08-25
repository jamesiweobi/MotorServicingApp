
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import servicesAsync from "../../redux/actions/servicesAction";
import loader from "../images/loader.gif"



const Services = ()=>  {
  const dispatch = useDispatch()

  const state = useSelector((state) => state.services);
  const servicesDisplay = state.data
  const loading = state.isLoading
  const error = state.error

  useEffect(() => {
   dispatch(servicesAsync)
  }, [dispatch])
   
  return (
    <div >
      { loading 

      ? <img src={loader} alt='Loading...' />

      :(servicesDisplay.map((item) => {
        const id = item.id;
        return (
          <div key={id} >
            {/* <Link to={`/details/${id}`}> */}
              {/* <img
                src={}
                alt="Display Image"
               
              /> */}
             
            {/* </Link> */}
            
          </div>
        );
      }))
    }
      ;
    </div>

  )

}
  

export default Services;
