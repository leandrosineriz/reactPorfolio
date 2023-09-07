import React, { Component, useEffect, useState } from 'react'
import { Card } from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { API_RM } from '../../constants/Api.constants';
import { useParams, Link, redirect } from 'react-router-dom';

export const Cards = () => {
  
  const [mascotas, setMascotas] = useState([]);
  const [maxPages, setMaxPages] = useState(42);
  let {page} = useParams();

  let cardsList=[];
  let buttons = [];

  
  useEffect(() => {
    RickAndMortyService.getCharactersByPage(page)
    .then((data) => {
      setMaxPages(data.info.pages);
      setMascotas(data.results);
    })
    .catch((error) => console.log(error));

    buttons = [];

    return () => {
      buttons = [];
      console.log("clear!");
    };
  }, [page]);
  
  
  if (page == undefined) {
    page = 1;
  }

  //Buttons creation
  let limit = parseInt(page)+3;

  if (limit > maxPages) {
    limit = maxPages;
  }

  let flagInicio = true;
  let flagFinal = true;

  for (var i = parseInt(page)-3; i <= limit; i++) {
    if (i > 0) {
      if (i == maxPages) {
        flagFinal = false;
      }
      if (i == parseInt(page)) {
        flagInicio = false;
        buttons.push(<Link to={"/rym/"+i} className="btn btn-primary" key={i} style={{margin: 0.15 + 'rem'}}>{i}</Link>);
        continue;
      }

      if (i > 1 && flagInicio) {
        buttons.push(<Link to={"/rym/1"} className="btn btn-secondary" key={1} style={{margin: 0.15 + 'rem'}}>{1}</Link>);
        if (i > 2) {
          buttons.push(<button className="btn btn-secondary" key="separador1" style={{margin: 0.15 + 'rem'}}>...</button>);
        }
        flagInicio = false;
      }

      flagInicio = false;
      buttons.push(<Link to={"/rym/"+i} className="btn btn-secondary" key={i} style={{margin: 0.15 + 'rem'}}>{i}</Link>);
    }
  }

  if (flagFinal) {
    if (maxPages - i >= 1) {
      buttons.push(<button className="btn btn-secondary" key="separador2" style={{margin: 0.15 + 'rem'}}>...</button>);
    }
    buttons.push(<Link to={"/rym/"+maxPages} className="btn btn-secondary" key={maxPages} style={{margin: 0.15 + 'rem'}}>{maxPages}</Link>);
  }

  //Creación de cartas
  cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />);

  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          { mascotas.length!=0 ? (
              <div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {cardsList}
                </div>
                <hr></hr>
                <div className="position-relative">
                  <div className="position-absolute top-50 start-50 translate-middle" style={{margin: 1 + 'rem'}}>
                    {buttons}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
