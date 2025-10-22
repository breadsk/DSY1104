import { useState , useEffect , type FC , type KeyboardEvent, use } from "react";

interface Props{
    placeHolder:string;
    onQuery: (query:string) => void;
}


export const SearchBar:FC<Props> = ({ placeHolder , onQuery}) => {

  const [ query , setQuery ] = useState('');

  useEffect(()=> {
    
    const timeOutId = setTimeout(()=> {
      onQuery(query)
    },700)

    return () => {
      //mont & dismount
      clearTimeout(timeOutId) // debounce 
    }

  },[query , onQuery])
  
  
  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }

  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      handleSearch()
    }
  }

  return (
    <div className="search-container">      
        <input
          type="text" 
          placeholder={ placeHolder }
          value={ query }

          onChange={( event ) => {
            setQuery(event.target.value)
          }}

          onKeyDown={
            handleKeyDown            
          }          
          />
        <button
          onClick={ handleSearch }
        >Buscar</button>
    </div>
  )
}
