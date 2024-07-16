import { useState } from "react";
import './SearchBar.css';

function SearchBar({gimmeTerm}){
  
  const[term, setTerm] = useState('');

  const onChangeInput = (event) => {
    // read from input and update, 
    // therefore these steps causing rerender the components
    setTerm(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    gimmeTerm(term);
  }
  
  return (
  <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label>Enter search term</label>
      <input value={term} onChange={onChangeInput}/>
    </form>
  </div>

)};

export default SearchBar;