import React from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { useState, useEffect } from 'react';
import { Card } from './Card';
import "./css/Main.css"

export const AllCharactersCards = () => {
    const [characters, setCharacters] = useState([]);
    let cardsList=[];

    useEffect(() => {
        RickAndMortyService.getAllCharactersPages(42)
        .then((list) => {
            setCharacters(list);
        })
        .catch((error) => console.log(error));

        return () => {
            console.log("clear!");
        };
    }, []);
    
    cardsList = characters.map((m) => <Card mascota={m} key={m.id} />);
    
    return (
        <div className='main'>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Rick and Morty</h1>
                        <p className="lead text-body-secondary">Detalles de los personajes de Rick and Morty. <br/>
                        Todos los personajes de cargan al mismo tiempo.</p>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    { characters.length>0 ? (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {cardsList}
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
