import React from 'react'
import { useParams } from "react-router-dom";
const para = () => {
 const { id } = useParams();

  return (
    <div>para: {id}</div>
  )
}

export default para