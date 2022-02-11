import { tw } from 'twind';
import Particles from 'react-tsparticles';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        particles: {
          number: {
            value: 30,
            limit: 80,
            density: {
              enable: true,
              value_area: 50
            }
          },
          color: {
            value: "#ffffff"
          },
          
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 1,
            random: true,
            
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        
       
        
        
      }}
    />
)
const articles = [
  {
    title: `Capte recursos para seus projetos sociais e mude a vida das pessoas.`,
    image: `/images/donation.png`,
    alt: `imagem.`,
  },
  {
    title: `Torne as decisões da sua empresa mais democráticas por meio da nossa plataforma.`,
    image: `/images/corporativa.png`,
    alt: `imagem.`,
  },
  {
    title: `Invista ou capte recursos para projetos na área de sustentabilidade.`,
    image: `/images/esg.png`,
    alt: `imagem.`,
    
  },
  {
    title: `Tokenize direitos de crédito, títulos, obras de arte, jóias, e muito mais com o uso de NFTs .`,
    image: `/images/nft.png`,
    alt: `imagem.`,
  },
  {
    title: `Invista ou capte recursos para tokenização de projetos imobiliários.`,
    image: `/images/imóveis.png`,
    alt: `imagem.`,
  },
  {
    title: `Crie criptoativos para colocar sua empresa no mundo DeFi.`,
    image: `/images/defi.png`,
    alt: `imagem.`,
    
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>O que você pode construir com a gente?</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Um mundo melhor!
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}> </p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                </div>
              </div>
            ))}
            <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
             
             { /* <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} /> */ }
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
