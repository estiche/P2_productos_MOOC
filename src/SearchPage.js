import Formulario from "./formulario";
import Header from "./Header";
import Lista from "./lista";
import { useState } from "react";

export default function SearchPage(props){
const [datos, setDatos]= useState(props.theproducts);


function carga_Cat(category){      
  if(category === 'All'){
    setDatos(props.theproducts);
  }else{
    setDatos(props.theproducts.filter((e)=>e.category === category))
  }
} 
function carga_Title(t){
  setDatos( props.theproducts.filter(e=>RegExp(t, 'i').test(JSON.stringify(e.title)))) 
}

  return <div>
  {props.theproducts && <div>
        <Header/>
        <Formulario cargaT={carga_Title} cargaC={carga_Cat} productos={props.theproducts}/>
        <Lista data={datos}/>
    </div>
  }
    </div>
  }

