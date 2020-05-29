import React from 'react';
import './Ninjas.css';

// class Ninjas extends Component{
    //making functional component:
    //dectrukcja poczytyaj o tym
    const Ninjas = ({ninjas, deleteNinja}) => {
    
        // console.log(this.props)
        // const {ninjas} = props;
        const ninjaList = ninjas.map(ninja => {
            if (ninja.age > 5){
                return(
                <div className="ninja" key={ninja.id}>
                {/* /* <div>Name: Ryu</div>
                <div>Age: 30</div>
                <div>Belt: Black</div> */ }
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age} </div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete ninja</button>
            </div>

            )
           } else{
               return null
           }
        })

   //lekcja 16 poucz się jeszcze 
        return(
         <div className="ninja-list">
         {ninjaList}
            {/* ninjas.map(ninja => { */}
            {/* return ninja.age>10 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age} </div>
                <div>Belt: {ninja.belt}</div>
            </div> */}
            {/* ) : null;
          } */}
          </div>
          )
        }


export default Ninjas;