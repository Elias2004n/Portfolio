import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (side) => {
    setIsFlipped(side === 'skills');
  };

  return (
    <>
      <div>
        <div className='main-div'>
          <div className='___holder'>
            <div>
              <img src='https://media.licdn.com/dms/image/v2/D4D03AQGEAhfI94Fvog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725365572616?e=1730937600&v=beta&t=USKkqTlHcXqXLFUMaaqVy01DClvoMArnVSr6vegpMh0' width="70px" className='__profile__img' alt='profile_image'/>
            </div>

            <div className={`contact-card-container ${isFlipped ? 'flipped' : ''}`}>
              <div className='contact-card card-front'>
                <h1>Elias Luzwehimana</h1>
                <span className='__helllo__'>loramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloramloram</span>
                
                <div className='__infor_sse'>
                  <div>
                    <img src='https://www.svgrepo.com/show/349378/gmail.svg' width="20px" />
                    <span>eliasnhunzwe@gmail.com</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/448234/linkedin.svg' width="20px" />
                    <span>EliasNhunzwe</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/512317/github-142.svg' width="20px" />
                    <span>Elias2004n</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/497827/call-received.svg' width="20px" />
                    <span>+46 727759188</span>
                  </div>
                </div>
              </div>

              <div className='contact-card card-back'>
                <h1>Skills List</h1>
                <p>Here is a list of skills:</p>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  {/* Add more skills as needed */}
                </ul>
              </div>
            </div>

            <div className='__card-change__'>
              <div>
                <button onClick={() => handleFlip('contact')}>Contact Info</button>
              </div>
              <div>
                <button onClick={() => handleFlip('skills')}>Skills List</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
