import React from 'react'
import "./Navbar.css"
import data from "../data/data.json"
import { useState } from 'react'
export default function Navbar() {


    const [price, setPrice] = useState([data]);

    const [sortDown, setSortDown] = useState(true)

    const functionLow = () => {


        const copy = [...price]

        if(sortDown){

            copy.sort(function(a,b) {

                return a.price - b.price
            })
        }

        console.log(copy);

        setPrice(copy);

    }

    const functionHigh = () => {

    }





    return (
        <div className="navbarcontainer">

        <button onClick={functionLow}>Low-High</button>
        <button onClick={functionHigh}>High-Low</button>
            
        </div>
    )
}
