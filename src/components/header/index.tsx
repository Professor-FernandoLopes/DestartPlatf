import { tw, css } from 'twind/css';
import Button from '@/components/button';

import Particles from 'react-tsparticles';


const ParticleBg = () => (
  <Particles
    params={{
      "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        },
        
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
    }}
    
  />
);

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Bem vindo à DeStarter
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          A primeira plataforma de crowdfunding descentralizada do mundo
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
      <Button  primary><a href="https://destarter-rho.vercel.app/"> Invista </a></Button>
        <span className={tw(`mx-2`)}>ou</span>
        <Button  primary><a href="https://destarter-rho.vercel.app/"> Capte </a></Button>
      </div>
    </div>
    <div className={tw(`flex justify-center  bg-indigo-700`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-pink-500 mt-2`)}>  Redes autônomas em constante movimento</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          
        <ParticleBg  />
        <ParticleBg  />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
