import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
            <h1 className="gradient__text">
           
                
           Cravar wow som uti helvete, Echo Fanboy since the beginning. reppa fraggo, gignig naowh.
            </h1>
            <p>RACE TO WORLD FIRST UPCOMMING. 9.2 WILL BE SLAUGHTERED </p>
            <div className="gpt3__header-content__input">
            <input type="email" placeholder="Logga in för att fanboya" />
            <button type="button"> 
             Logga in med din email
            </button>
            </div>
            <div className="gpt3__header-content__people">
            <img src={people} alt="people"/>
            <p>1000000 miljoner andra nördar som fanboyar</p>
            </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai"/>
            </div>
        </div>
    )
}

export default Header;
