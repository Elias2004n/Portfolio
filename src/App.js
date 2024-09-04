import React, { useState } from 'react';
import './App.css';
import kluret_svg from './kluret.svg'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const handleFlip = (side) => {
    setIsFlipped(side === 'skills');
  };

  const toggleTextVisibility = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  // Truncate text to 10 words and add '...' if necessary
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(' ') + '...';
  };

  // Your long text
  const longText = "Hello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaning";

  return (
    <>
      <div>
        <div className='main-div'>
          <div className='___holder'>
            <div>
              <img 
                src='https://media.licdn.com/dms/image/v2/D4D03AQGEAhfI94Fvog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725365572616?e=1730937600&v=beta&t=USKkqTlHcXqXLFUMaaqVy01DClvoMArnVSr6vegpMh0' 
                width="70px" 
                className='__profile__img' 
                alt='Profile of Elias Luzwehimana'
              />
            </div>

            <div className={`contact-card-container ${isFlipped ? 'flipped' : ''}`}>
              <div className='contact-card card-front'>
                <h1>Elias Luzwehimana</h1>
                <div className='__knowmore__'>
                  <div>
                    <span><strong>Education:</strong> Chas Academy</span>
                    <br />
                    <span><strong>Program:</strong> Software Engineering</span>
                    <br />
                    <span><strong>Co-Founded:</strong> <a href='https://kluret.se' target='_blank'>Kluret</a></span>
                    <br />
                    <span><strong>Years of Programming:</strong> 4 Years, Since at the age of 16</span>
                    <br />
                  </div>
                </div>
                
                <div className='__infor_sse'>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/349378/gmail.svg' 
                      width="20px" 
                      alt='Gmail' 
                    />
                    <span>eliasnhunzwe@gmail.com</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/448234/linkedin.svg' 
                      width="20px" 
                      alt='LinkedIn' 
                    />
                    <span>EliasNhunzwe</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/512317/github-142.svg' 
                      width="20px" 
                      alt='GitHub' 
                    />
                    <span>Elias2004n</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/497827/call-received.svg' 
                      width="20px" 
                      alt='Phone' 
                    />
                    <span>+46 727759188</span>
                  </div>
                </div>
              </div>

              <div className='contact-card card-back'>
                <h1>Skills List</h1>
                <p>Skills that I have learned over 4 years</p>

                <div className='___skills___list'>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/303206/javascript-logo.svg' 
                      alt='JavaScript' 
                    />
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/452091/python.svg' 
                      alt='Python' 
                    />
                    <span>Python</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/374032/reactjs.svg' 
                      alt='React.js' 
                    />
                    <span>React.js</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/373554/django.svg' 
                      alt='Django' 
                    />
                    <span>Django-PY</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/530439/api-interface.svg' 
                      alt='REST API' 
                    />
                    <span>REST API</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/448268/aws-ec2.svg' 
                      alt='EC2 AWS' 
                    />
                    <span>EC2 AWS</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/303301/postgresql-logo.svg' 
                      alt='PostgreSQL' 
                    />
                    <span>PostgreSQL</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/353735/firebase.svg' 
                      alt='Firebase' 
                    />
                    <span>Firebase</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/303683/heroku-logo.svg' 
                      alt='Heroku' 
                    />
                    <span>Heroku</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/353785/gitlab.svg' 
                      alt='CI/CD' 
                    />
                    <span>CI/CD</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/452210/git.svg' 
                      alt='Git' 
                    />
                    <span>Git</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/303235/salesforce-2-logo.svg' 
                      alt='Salesforce' 
                    />
                    <span>Salesforce</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/452228/html-5.svg' 
                      alt='HTML' 
                    />
                    <span>HTML</span>
                  </div>
                  <div>
                    <img 
                      src='https://www.svgrepo.com/show/374118/tailwind.svg' 
                      alt='Tailwind CSS' 
                    />
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

        <div className='__projects__'>
          <div>
            <div className='project-item'>
              <p className='title-al'>Free Sports Data API</p>
              <img 
                src='https://media.istockphoto.com/id/1045727928/sv/foto/cloud-computing-teknik.jpg?s=612x612&w=0&k=20&c=arVi963-Aa8XyHO8PwccCHHaBW76c-GZ5c152Zalv3g=' 
                alt='Data Cleaning' 
              />
              <div className='__usedlanguages__'>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/373554/django.svg' 
                    alt='Python' 
                  />
                </div>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/530439/api-interface.svg' 
                    alt='Python' 
                  />
                </div>
              </div>
              <p>
                {isFullTextVisible 
                  ? longText 
                  : truncateText(longText, 10)
                }
              </p>
            </div>
            <div className='project-link'>
              <div>
                <p className='fulldetails-all' onClick={toggleTextVisibility}>
                  {isFullTextVisible ? 'Show Less' : 'Full Details'}
                </p>
              </div>
              <div>
                <a href='#' className='___githubinit__'>
                  <img 
                    src='https://www.svgrepo.com/show/512317/github-142.svg' 
                    alt='GitHub' 
                  />
                  <span>Open-source</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className='project-item'>
              <p className='title-al'>Web Analyzer <br />(Security, Performance, Accebility)</p>
              <img 
                src='https://media.istockphoto.com/id/1975054899/sv/foto/futuristic-sci-fi-sphere-in-space-technology-circle-a-network-connection-big-data-digital-ai.jpg?s=612x612&w=0&k=20&c=TOy1rcp-adKmujViyeX-l_w1yqCbq9hHKs56PsJPauM=' 
                alt='Data Cleaning' 
              />
              <div className='__usedlanguages__'>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
              </div>
              <p>
                {isFullTextVisible 
                  ? longText 
                  : truncateText(longText, 10)
                }
              </p>
            </div>
            <div className='project-link'>
              <div>
                <p className='fulldetails-all' onClick={toggleTextVisibility}>
                  {isFullTextVisible ? 'Show Less' : 'Full Details'}
                </p>
              </div>
              <div>
                <a href='#' className='___githubinit__'>
                  <img 
                    src='https://www.svgrepo.com/show/512317/github-142.svg' 
                    alt='GitHub' 
                  />
                  <span>Open-source</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className='project-item'>
              <p className='title-al'>AI powered E-Commerce Platform</p>
              <img 
                src= {kluret_svg}
                alt='Data Cleaning' 
              />
              <div className='__usedlanguages__'>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
                <div className='__mmmj__'>
                  <img 
                    className='__jmd__' 
                    src='https://www.svgrepo.com/show/452091/python.svg' 
                    alt='Python' 
                  />
                </div>
              </div>
              <p>
                {isFullTextVisible 
                  ? longText 
                  : truncateText(longText, 10)
                }
              </p>
            </div>
            <div className='project-link'>
              <div>
                <p className='fulldetails-all' onClick={toggleTextVisibility}>
                  {isFullTextVisible ? 'Show Less' : 'Full Details'}
                </p>
              </div>
              <div>
                <a className='___githubinit__'>
                  <img 
                    src='https://www.svgrepo.com/show/512317/github-142.svg' 
                    alt='GitHub' 
                  />
                  <span>Private</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
