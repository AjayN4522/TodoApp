import React from 'react'


const SearchItem = ({search,setSearch}) => {

  return (

        <div className="Search py-3 col-12">
          <form action="" onSubmit={e=>e.preventDefault()}>
            <input type="text"  onChange={(e)=>{setSearch(e.target.value)}} className="form-control p-2" placeholder="Search The Task"  />
          </form>
          
        </div>

  )
}

export default SearchItem
