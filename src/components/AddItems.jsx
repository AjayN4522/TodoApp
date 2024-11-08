import React from 'react'
import { FaPlus } from "react-icons/fa";

const AddItems = ({items,setItems,task,setTask}) => {

    const handleAddItem = ()=>{
        const newitem = {
          id:items.length ? items[items.length-1]['id']+1 : 1,
          item:task,
          checked:false
        }
        setItems([...items,newitem])
      }

  return (
      <div className="input d-flex col-12 ">
          <input type="text" required value={task} onChange={e =>setTask(e.target.value)} className="form-control p-2 me-3" placeholder="Enter The Task" />
          <FaPlus type="button" onClick={handleAddItem} className="bg-primary fs-1 text-light p-2" />
        </div>
  )
}

export default AddItems
