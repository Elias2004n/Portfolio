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
                <p>Skills that i have learnt over 4 years</p>

                <div className='___skills___list'>
                  <div>
                    <img src='https://www.svgrepo.com/show/303206/javascript-logo.svg' alt='' />
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/452091/python.svg' alt='' />
                    <span>Python</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/374032/reactjs.svg' alt='' />
                    <span>React.Js</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/373554/django.svg' alt='' />
                    <span>Django-PY</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/530439/api-interface.svg' alt='' />
                    <span>REST API</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/448268/aws-ec2.svg' alt='' />
                    <span>EC2 AWS</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/303301/postgresql-logo.svg' alt='' />
                    <span>PostgreSQL AWS</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/353735/firebase.svg' alt='' />
                    <span>Firebase</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/303683/heroku-logo.svg' alt='' />
                    <span>Heroku</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/353785/gitlab.svg' alt='' />
                    <span>CI/CD</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/452210/git.svg' alt='' />
                    <span>GIT</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/303235/salesforce-2-logo.svg' alt='' />
                    <span>Salesforce</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/452228/html-5.svg' alt='' />
                    <span>HTML</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/374118/tailwind.svg' alt='' />
                    <span>CSS/Tailwind</span>
                  </div>
                </div>
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
