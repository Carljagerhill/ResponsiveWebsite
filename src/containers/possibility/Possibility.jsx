import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
              <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
             <h4>Why we participating in Race to world first</h4>
             <h1 className="gradient__text"> The possibility of world first race is beyond your imagination</h1>
             <p>
             Echo Esports is a professional gaming organisation founded in 2020 by the most successful World of Warcraft players of all time.

             Challenging ourselves to compete at the highest levels is at the centre of what Echo does. We don’t cut corners. We respect each other and reject toxicity within our team and in our community.

             Continuing the standard of excellence set by our founding raid team, we integrate our approach into our business practices, driving our focus for Echo as an organisation.

            We are more than just an Esports team. We pride ourselves on our ability to use our platform to help generate meaningful change. Working with charities such as Rise Above the Disorder and INHOPE has allowed us to champion causes close to our hearts.
             </p>
             <h4>More info</h4>
            </div>
        </div>
    )
}

export default Possibility;
