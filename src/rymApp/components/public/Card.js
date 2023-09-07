import React from 'react'
import { Link } from 'react-router-dom';
import "./css/Card.css"

export const Card = ({mascota}) => {
  
  return (
    <div className='card-RM position'>
      { mascota ? (
        <div className="col">
          <div className="card shadow-sm">
            <Link to={"details/"+mascota.id}>
              <img width="100%" src={mascota.image} alt='img'/>
            </Link>

              <h3 className="mb-0 text-dark text-center"> {mascota.name} </h3>
              <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to={"details/"+mascota.id} className='btn btn-sm btn-outline-secondary'>View</Link>
                  </div>
                  <small className="text-body-secondary">Estado: 
                    {(() => {
                      if (mascota.status=="Alive") {
                        return <span style={{color: "green"}}> Vivo</span>;
                      } else if (mascota.status=="Dead") {
                        return <span style={{color: "red"}}> Muerto</span>;
                      } else {
                        return <span style={{color: "grey"}}> Desconocido</span>;
                      }
                    })()}
                  </small>
              </div>
              </div>
          </div>
        </div>
      ) : 
      (
        <div className="card" aria-hidden="true">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
          </div>
        </div>
      )
      }
        
    </div>
  )
}
