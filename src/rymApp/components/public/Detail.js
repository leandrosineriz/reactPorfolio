import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

  const [mascota, setMascota] = useState(null);

  const {id} = useParams();
  let {page} = useParams();

  const {pathname} = useLocation();

  if (page == undefined) {
    page = 1;
  }

  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => {
      setMascota(data);
    })
    .catch((err) => console.log(err));
  }, [id])

  // const results = [];
  
  // for (let i = 0; i < episodes.length; i++) {
  //   results.push(
  //     <span key={i}>
  //       <br />
  //       {episodes[i]}
  //     </span>,
  //   );
  // };

  return (
    <div className='container-fluid'>
      <div>
        
      </div>
      <div className="card mb-3">
      {/* <Link to={"/"+page} className='mt3 btn btn-primary btn-lg' style={{"position": "absolute"}}>
          Volver
        </Link> */}
        
        { mascota ? (
          <div className="row g-4">
          <div className="col-md-6 position-relative">
            <Link to={"/rym/"+page} style={{"position": "absolute"}}>
              <svg  className="img-fluid" xmlns="http://www.w3.org/2000/svg" id='arrowBack' height="2rem" viewBox="0 0 448 512" style={{marginLeft:"0.5rem"}}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
            </Link>
            <img src={mascota.image} className="img-fluid rounded mx-auto d-block" alt="img" style={{marginTop:"2rem", height:"25rem"}}></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title fs-1">{mascota.name}</h5>
              <p className="card-text fs-4">Status: {mascota.status}</p>
              <p className="card-text fs-4">Species: {mascota.species}</p>
              <p className="card-text fs-4">Type: { mascota.type==="" ? ("unknown"):(mascota.type)}</p>
              <p className="card-text fs-4">Gender: {mascota.gender}</p>
              <p className="card-text fs-4">Origin: {mascota.origin.name}</p>
              <p className="card-text fs-4">Location: {mascota.location.name}</p>
              <p className="card-text fs-4">Episodes: {mascota.episode.length}</p>
              <p className="card-text fs-4"><small className="text-body-secondary">Created: {mascota.created}</small></p>
            </div>
          </div>
        </div>
        ) : (
          <p> Loading... </p>
        )
        }
      </div>
      
      
    </div>
  )
}
