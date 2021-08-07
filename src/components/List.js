import React from 'react';
import clsx from 'clsx';





export default function List({ result }) {

    const showRecipies = () => {

        result.map((result) => {
            console.log(result.title)
        }

        )
    }

    showRecipies()



    return (
        <>
            
            <h1>....</h1>




        </>
    )



}



// First working list with pic and info for each recipe


/*{result.map((result) => (
                <div>
                    <img src={result.picture} alt="Recipe img missing" />
                    <ul>
                    <li>{result.title}</li>
                    <li>{result.description}</li>
                    <li>{result.picture}</li>
                    <li>{result.vegetarian? "Veg" : "Meet"}</li>

                </ul>
                </div>
            ))}*/


//<FavoriteIcon />



