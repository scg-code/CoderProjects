import React from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = () => {
    const params = useParams();
    console.log(params);
    
  return (
    <h3>New entry in category {params.cat_id}</h3>
  )
}

export default NewEntry