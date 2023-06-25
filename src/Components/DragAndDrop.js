import React, { useRef } from 'react'
import { useState } from 'react'
import  './DragAndDrop.css'
import UploadImageIcon from '../Images/cloud-computing.png'

const DragAndDrop = () => {
    const [file,setfile]=useState(null);
    const inputRef=useRef()

  function handleDragOver(event){
    event.preventDefault()
  }

  function handleDrop(event){
    event.preventDefault()
    setfile(event.dataTransfer.files);
  }

  if(file){
    return <div>
      <ul>
        {Array.from(file).map((file,idx)=><li key={idx}>{file.name}</li>)}
      </ul>
      {/* <div>
        <button onClick={setfile(null)}>Cancel</button>
        <button>Upload</button>
      </div> */}
    </div>
  }

  return (
    <div className='container'>
      {!file && (
        <div className='dropzone' onDragOver={handleDragOver} onDrop={handleDrop}>
          <img className='uploadimg' src={UploadImageIcon} alt=''/>
          <h2>Drag And Drop to upload the file</h2>
        <h3>OR</h3>
        <input type='file' multiple onChange={(event)=>{setfile(event.target.files)}} hidden ref={inputRef} />
        <button onClick={()=>inputRef.current.click()} id='selectbtn'>Browse file</button>
        </div>
      )}
    </div>
  )
}

export default DragAndDrop
