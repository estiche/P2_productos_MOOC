import Header from "./header";
import SearchPage from "./searchpage";


export default function Home({productos, carga}){

    setTimeout(()=>carga(),2000)

    return<div>
        <Header />
        <SearchPage productos={productos}/>
        
    </div>
    
    }