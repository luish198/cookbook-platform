import React from 'react';
//import clsx from 'clsx';
import { Panel, PanelGroup, Nav, Icon } from 'rsuite';
import { FlexboxGrid, Col } from 'rsuite';
import './list.css';



export default function List({ recipes }) {

    console.log("result in list")
    console.log(recipes)

    const showRecipies = () => {

        recipes.map((recipes) => {
            console.log(recipes.title)
        }

        )
    }

    showRecipies()






    return (



        recipes ? (
            <>



                {
                    recipes.map((result) => (

                        <>





                            <container className="rescon">
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                <img src={result.picture} alt="Recipe img missing" height="240" />
                                <Panel header={result.title} >
                                    <p>
                                        <small>{result.description}</small>
                                    </p>
                                </Panel>
                            </Panel>
                            </container>











                        </>

                    )
                    )
                }

            </>
        ) : (
            <h1>Loading...</h1>
        )


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

/*<FlexboxGrid.Item componentClass={Col} colspan={6} md={6}>

                                        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                            <img src={result.picture} alt="Recipe img missing" height="240" />
                                            <Panel header={result.title} >
                                                <p>
                                                    <small>{result.description}</small>
                                                </p>
                                            </Panel>
                                        </Panel>


                                    </FlexboxGrid.Item>*/



