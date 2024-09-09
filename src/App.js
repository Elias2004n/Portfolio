import React, { useState } from 'react';
import './App.css';
import kluret_svg from './kluret.svg';
import profile_picture from './1725365572616.jpg'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState({}); // Store visibility for each project

  const handleFlip = (side) => {
    setIsFlipped(side === 'skills');
  };

  const toggleTextVisibility = (index) => {
    setVisibleProjects((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the visibility of the specific project
    }));
  };

  // Truncate text to 10 words and add '...' if necessary
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(' ') + '...';
  };

  // Descriptions for each project
  const web_analizer_description = `Hello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaningHello, this code has some cleaning`;

  const free_api_sport_data_description = `In January 2024, I developed a Free Sports Data API using Python to provide real-time and historical sports data for developers and sports enthusiasts. The API was designed to be both comprehensive and user-friendly, allowing easy access to a wide range of sports data, including match schedules, results, and player statistics.

  To build the API, I utilized Flask for deploying and managing the API endpoints, along with Flask-RESTful for creating a structured and scalable REST API. Requests was used to fetch live data from external sports data sources, ensuring that users receive up-to-date information.

  For data processing, I integrated Pandas to clean, structure, and organize the sports data efficiently, while SQLAlchemy was employed to handle database connections and data storage. This ensured that both real-time and historical data could be managed seamlessly.

  The API responses were formatted in JSON for easy consumption by users, and I implemented Datetime for managing time-related data such as match schedules. Finally, Pytest was used to rigorously test the API functionality and ensure reliable performance.`;

  const kluret_desciption = `From February 2024 to September 2024, I worked as a Software Engineer and co-founder at Kluret AB, where I was instrumental in developing Kluret AI, an advanced product search engine specifically designed for the Swedish market. The platform helps users efficiently find products across the Swedish web, providing a user-friendly and reliable search experience.

  I led the development of the backend, frontend, and database infrastructure. I built a full-stack architecture to support the platform, ensuring the seamless integration of all components. The frontend was designed to offer an intuitive user interface, while the backend ensured secure, efficient data handling and scalability.

  A key aspect of the project involved prompt tuning to optimize the AI's performance in responding to user queries. This allowed Kluret AI to provide highly accurate and relevant search results based on user inputs. I also developed a robust database system that handled the storage and processing of large datasets, ensuring that the platform could manage real-time product searches effectively.

  Throughout the project, I collaborated with my co-founder to set the technical strategy and long-term vision for Kluret AI. We successfully launched Version 1 of the platform, establishing Kluret as an innovative product search engine in Sweden, while continuously refining the system for improved performance and scalability.`;

  return (
    <>
      <div>
        <div className='main-div'>
          <div className='___holder'>
            <div>
              <img
                src={profile_picture}
                width='70px'
                className='__profile__img'
                alt='Profile of Elias Luzwehimana'
              />
            </div>

            <div className={`contact-card-container ${isFlipped ? 'flipped' : ''}`}>
              <div className='contact-card card-front inner-scroll'>
                <br />
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

                <div className='__infor_sse' id='__profile_data__fronte'>
                  <a href='mailto:eliasnhunzwe@gmail.com'>
                    <div>
                      <img src='https://www.svgrepo.com/show/349378/gmail.svg' width='20px' alt='Gmail' />
                      <span>eliasnhunzwe@gmail.com</span>
                    </div>
                  </a>
                  <a href='https://www.linkedin.com/in/elias-nhunzwenimana-191a66233'>
                    <div>
                      <img src='https://www.svgrepo.com/show/448234/linkedin.svg' width='20px' alt='LinkedIn' />
                      <span>Elias Nhunzwenimana</span>
                    </div>
                  </a>
                  <a href='https://github.com/Elias2004n'>
                    <div>
                      <img src='https://www.svgrepo.com/show/512317/github-142.svg' width='20px' alt='GitHub' />
                      <span>Elias2004n</span>
                    </div>
                  </a>
                  <a href='tel:+46727759188'>
                    <div>
                      <img src='https://www.svgrepo.com/show/497827/call-received.svg' width='20px' alt='Phone' />
                      <span>+46 727759188</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='contact-card card-back inner-scroll'>
                <h1>Skills List</h1>
                <p>Skills that I have learned over 4 years</p>

                <div className='___skills___list'>
                  <div>
                    <img src='https://www.svgrepo.com/show/303206/javascript-logo.svg' alt='JavaScript' />
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/452091/python.svg' alt='Python' />
                    <span>Python</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/374032/reactjs.svg' alt='React.js' />
                    <span>React.js</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/373554/django.svg' alt='Django' />
                    <span>Django-PY</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/530439/api-interface.svg' alt='REST API' />
                    <span>REST API</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/448268/aws-ec2.svg' alt='EC2 AWS' />
                    <span>EC2 AWS</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/303301/postgresql-logo.svg' alt='PostgreSQL' />
                    <span>PostgreSQL</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/353735/firebase.svg' alt='Firebase' />
                    <span>Firebase</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/303683/heroku-logo.svg' alt='Heroku' />
                    <span>Heroku</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/353785/gitlab.svg' alt='CI/CD' />
                    <span>CI/CD</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/452210/git.svg' alt='Git' />
                    <span>Git</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/303235/salesforce-2-logo.svg' alt='Salesforce' />
                    <span>Salesforce</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/452228/html-5.svg' alt='HTML' />
                    <span>HTML</span>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/374118/tailwind.svg' alt='Tailwind CSS' />
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
          {[0, 1, 2].map((index) => (
            <div key={index}>
              <div className='project-item'>
                <p className='title-al'>
                  {index === 0
                    ? 'Free Sports Data API'
                    : index === 1
                    ? 'Web Analyzer (Security, Performance, Accebility)'
                    : 'AI powered E-Commerce Platform'}
                </p>
                <img
                  src={
                    index === 0
                      ? 'https://media.istockphoto.com/id/1045727928/sv/foto/cloud-computing-teknik.jpg?s=612x612&w=0&k=20&c=arVi963-Aa8XyHO8PwccCHHaBW76c-GZ5c152Zalv3g='
                      : index === 1
                      ? 'https://media.istockphoto.com/id/1975054899/sv/foto/futuristic-sci-fi-sphere-in-space-technology-circle-a-network-connection-big-data-digital-ai.jpg?s=612x612&w=0&k=20&c=TOy1rcp-adKmujViyeX-l_w1yqCbq9hHKs56PsJPauM='
                      : kluret_svg
                  }
                  alt='Project'
                />
                <div className='__usedlanguages__'>
                  <div className='__mmmj__'>
                    <img className='__jmd__' src='https://www.svgrepo.com/show/452091/python.svg' alt='Python' />
                  </div>
                  <div className='__mmmj__'>
                    <img className='__jmd__' src='https://www.svgrepo.com/show/373554/django.svg' alt='Django' />
                  </div>
                  <div className='__mmmj__'>
                    <img className='__jmd__' src='https://www.svgrepo.com/show/530439/api-interface.svg' alt='API' />
                  </div>
                </div>
                <p>
                  {visibleProjects[index]
                    ? index === 0
                      ? free_api_sport_data_description
                      : index === 1
                      ? web_analizer_description
                      : kluret_desciption
                    : truncateText(
                        index === 0
                          ? free_api_sport_data_description
                          : index === 1
                          ? web_analizer_description
                          : kluret_desciption,
                        10
                      )}
                </p>
              </div>
              <div className='project-link'>
                <div>
                  <p className='fulldetails-all' onClick={() => toggleTextVisibility(index)}>
                    {visibleProjects[index] ? 'Show Less' : 'Full Details'}
                  </p>
                </div>
                <div>
                  <a
                    href={index === 2 ? 'https://kluret.se/chat' : 'https://github.com/Elias2004n'}
                    target='_blank'
                    className='___githubinit__'
                    rel='noopener noreferrer'
                  >
                    <img src='https://www.svgrepo.com/show/512317/github-142.svg' alt='GitHub' />
                    <span>{index === 2 ? 'Private' : 'Open-source'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
