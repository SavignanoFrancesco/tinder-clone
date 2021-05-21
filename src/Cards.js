import React, {useState} from 'react';
import './Cards.css';
import TinderCard from "react-tinder-card";


function Cards(){

    const [people, setPeople] = useState([
        {
            name: 'Adam Jones',
            url: 'https://lh3.googleusercontent.com/proxy/Z757meKL54RXjdM2CR9jKABJIz_1ySOESfoKbOij1korRPfcTMFKBmAgVRxvdvmN9gbqTUUOUX0_tQRFnS8X45BIL23cdcalY-DURhmhGojAybrmJ99XSPOX6UsYTH8n3XX7w1Vj7-Ei'
        },
        {
            name: 'Janis Joplin',
            url: 'https://i0.wp.com/stonemusic.it/wp-content/uploads/2020/04/janisjoplin3-.jpg?fit=1024%2C683&ssl=1'
        },
        {
            name: 'Amy Winehouse',
            url: 'https://lh3.googleusercontent.com/proxy/U8T1l6qIvmuP-VecvlsHI_5-1LOxmb8_O1OvCZTMvgThvoEapqKgCMMdQx7ETQx8AnMydeyNjLLATSnzShb_Hh2fOLZehcbLdqgWtuoyNgsJq069MO3UBAQPDevQo89cqFF39UD5xBiH7ylBplV3bA'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log(nameToDelete + ' deleted!');
    }
    const outOfFrame = (name) => {
        console.log(name + ' out of screen!!');
    }

    return (
        <div className="cards">
            <div className="cards-container">
                {
                    people.map((person) =>(
                        <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                            style={{backgroundImage: 'url(' + person.url + ')'}}
                            className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;