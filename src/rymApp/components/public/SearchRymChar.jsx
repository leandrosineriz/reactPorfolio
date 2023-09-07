import React, { useEffect, useState } from 'react'
import  RickAndMortyService from '../../services/RickAndMorty.service'
import './css/SearchRymChar.css'
import { Link } from 'react-router-dom';

export const SearchRymChar = () => {
  const [characters, setCharacters] = useState([]); //info que traigo de la api
  const [input, setInput] = useState(""); //valor del input

  let searchList=[]; //guardo los links de los resultados
  let searchListRym = document.getElementById("searchList"); // Result container
  let searchBar = document.getElementById("searchBarRym"); // Input

  useEffect(() => {
    const controller = new AbortController();

    RickAndMortyService.getAllCharactersPages(42, {signal: controller.signal})
    .then((data) => {
      setCharacters(data);
    })
    .catch((error) => {console.log(error);})
  
    return () => {
      controller.abort();
    }
  }, [input])
    

  //Funcionalidad al escribir en la barra
  function handleChange(){
    if (searchBar.value == "") {
      searchListRym.classList.add("hidden");
    } else {
      setInput(searchBar.value);
      searchListRym.classList.remove("hidden");
      //console.log("handleChange");
    }
    searchListRym.scrollTop = 0;
    //searchList.classList.add("searchDrop");
  }

  //funcionalidad al darle click a la barra o al link
  function handleClickChar(){
    if (searchBar.value != "") {
      searchListRym.classList.toggle("hidden");
    }
  }

  characters.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  //Agrego los links a la barra de busqueda
  searchList = characters.map((char) => {
    if(char.name.toLowerCase().includes(input.toLocaleLowerCase())){
      return <Link to={"details/"+char.id} className='containerItem' key={char.id} onClick={handleClickChar}><span id={char.id} className='item'>{char.name}</span></Link>
    }
  });


  return (
    <div>
        <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" id="searchBarRym"className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" 
            onInput={handleChange} onClick={handleClickChar} />
        </div>
        <div className='searchDrop hidden' id='searchList' >
          {searchList}
        </div>
        
        
    </div>
    
  )
}
