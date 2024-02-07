import React from 'react'


const ShowEntry = ({ entry }) => { // destructure entry from props
  return entry ? ( // if entry is not null
    <>
        <h5>{entry.content}</h5> 
        <p>Posted in {entry.category?.name}</p> 
    </>
  ) : (
    <h3>No entry found</h3>) // if entry is null
}

export default ShowEntry