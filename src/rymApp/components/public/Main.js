import React from 'react'
import { Cards } from './Cards';
import { useParams } from 'react-router-dom';
import "./css/Main.css"

export const Main = () => {
    const mascotas = [];
    let {page} = useParams();

    return (
        <main className="main">
            <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Rick and Morty</h1>
                            <p className="lead text-body-secondary">Detalles de los personajes de Rick and Morty. <br/>
                            Se separan los personajes en paginas de 20.</p>
                        </div>
                    </div>
                </section>
            <Cards mascotas={mascotas} page={page} key={1} />
        </main>
)
}


// export class Main extends Component {
    
//     constructor (props) {
//         super(props);
//         this.state = { mascotas : [] };
//     }

//     componentDidMount() {
        
//     }

//     render() {
//         //console.log("Hola desde el render");
//         return (
//             <main>
//                 <section className="py-5 text-center container">
//                     <div className="row py-lg-5">
//                     <div className="col-lg-6 col-md-8 mx-auto">
//                         <h1 className="fw-light">Rick and Morty</h1>
//                         <p className="lead text-body-secondary">Detalles de los personajes de Rick and Morty.</p>
//                     </div>
//                     </div>
//                 </section>
//                 <Cards mascotas={this.state.mascotas} />
//             </main>
//         )
//     }
// }

// export default Main