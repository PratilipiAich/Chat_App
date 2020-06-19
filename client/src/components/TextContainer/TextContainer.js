import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';
import image from '../../icons/logo1.png';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1><img
              src={image}
              alt="VanillaChat"
              style={{ height: 50, width: 50, position: "relative" }}
            /> VanillaChat</h1>
      <h5>Let's chat it out!</h5>
      {/* <span role="img" aria-label="emoji">❤️</span> */}
      {/* <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
    </div>
    {
      users
        ? (
          <div>
            <h3>Chatting With <span role="img" aria-label="emoji">💬</span></h3>
            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;