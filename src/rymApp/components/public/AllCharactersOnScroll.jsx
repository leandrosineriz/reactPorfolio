import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const AllCharactersOnScroll = () => {
  const [mascotas, setMascotas] = useState([]);
  const [page, setPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  let cardsList = [];
  let lastCardObserver;
  let moreCards = document.querySelector(".moreCards");

  useEffect(() => {
    const controller = new AbortController();

    if (!mounted) {
      let charactersStorage = JSON.parse(localStorage.getItem("mascotas"));
      let pageStorage = parseInt(localStorage.getItem("page"));

      if (charactersStorage == null) {
        localStorage.setItem("mascotas", JSON.stringify([]));
        charactersStorage = JSON.parse(localStorage.getItem("mascotas"));
      }

      if (isNaN(pageStorage)) {
        localStorage.setItem("page", parseInt(1));
        pageStorage = parseInt(localStorage.getItem("page"));
      }

      setMascotas(charactersStorage);
      setPage(pageStorage);
      setMounted(true);
      return;
    } 
    
    if (page == parseInt(localStorage.getItem("page")) && page != 1) {
      lastCardObserver.observe(moreCards);
      return;
    }

    RickAndMortyService.getCharactersByPage(page, {
      signal: controller.signal,
    })
    .then((data) => {
      
      if (data.error) { //Ultima pagina
        lastCardObserver.unobserve(moreCards);
        return;
      }

      setMascotas((prevMascotas) => {
        localStorage.setItem("mascotas", JSON.stringify([...prevMascotas, ...data.results]));
        return [...prevMascotas, ...data.results];
      });

      lastCardObserver.observe(moreCards);
      localStorage.setItem("page", parseInt(page));
    })
    .catch((error) => console.log(error));


    return () => {
      controller.abort();
    };
  }, [page, mounted]);

  //Looks for ".moreCards" div to carge a new page of characters
  lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    setPage((prev) => prev + 1);
    lastCardObserver.unobserve(lastCard.target);
  });

  cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />);

  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Rick and Morty</h1>
            <p className="lead text-body-secondary">
              Detalles de los personajes de Rick and Morty. <br />
              Los personajes de cargan a medida que se baja.
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          {mascotas.length != 0 ? (
            <div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {cardsList}
              </div>
            </div>
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
          <div
            className="moreCards"
            hidden={mascotas.length != 0 ? false : true}
          >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Card mascota={null} key={"t1"} />
              <Card mascota={null} key={"t2"} />
              <Card mascota={null} key={"t3"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
