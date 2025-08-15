import { useState } from "react"

function SearchBar({searchValue, setSearchValue}) {

  

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value)

    // props.setAllProducts((state) => {
    //   const filteredState = state.filter((eachProduct) => {
    //     return eachProduct.name.includes(event.target.value)
    //   })
    //   return filteredState
    // })
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleChangeSearch} value={searchValue}/>

    </div>
  )
}

export default SearchBar