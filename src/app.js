import React from "react";

//components
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Data from "./data.js"

export default function App (){
    const data = Data.map(items =>{
        return(
            <Main 
                {...items}
            />
        )
    })
    return(
        <div>
            <Navbar />
            {data}
        </div>
    )
}

/*<Main 
                img = "https://source.unsplash.com/WLxQvbMyfas"
            />*/