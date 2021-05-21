import React, {useState} from 'react';
import './Cards.css';
import TinderCard from "react-tinder-card";


function Cards(){

    const [people, setPeople] = useState([
        {
            name: 'Adam Jones',
            url: 'https://www.ultimate-guitar.com/static/article/news/4/96314_0_meta_ver1567264515.jpg'
        },
        {
            name: 'Janis Joplin',
            url: 'https://www.periodicodaily.com/wp-content/uploads/2019/10/janis-joplin-morte.jpg'
        },
        {
            name: 'Amy Winehouse',
            url: 'https://www.rockarchive.com/media/1016/amy-winehouse-amyw001mmaw.jpg?crop=0,0.046048722519310754,0,0.28550207961972673&cropmode=percentage&width=480&height=480&rnd=131147896120000000'
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