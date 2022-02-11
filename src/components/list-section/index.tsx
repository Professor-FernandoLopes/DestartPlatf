import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Criadores de NFTs`,
    description: `Você é um artista, desenvolvedor de jogos, ou apenas alguém com uma ideia genial para criação de um NFT? 
    Então você encontrou o lugar para transformar sua ideia em realidade ao lado de pessoas que acreditam na descentralização como uma forma de liberdade.`,
  },
  {
    title: `Proprietários e prestadores de bens e serviços`,
    description: `Aqui seus produtos e serviços são transformados em bens digitais e podem ser negociados em todo o mundo, por meio de um processo chamado de tokenização. 
    Não quer ficar de fora da nova internet e da economia digital? Então saiba que para nós não há limites, quando a questão é tornar a vida das pessoas melhor. Uma vez tokenizado, seu produto ou serviço poderá ser fracionado de modo a atender as necessidades e o "bolso" de todos os públicos`,
  },
  {
    title: `Caridade`,
    description: `Acabou a desculpa para não fazer caridade por não saber para onde vai o dinheiro, ou como será aplicado. Com nossa tecnologia você não apenas tem todas essas informações, como tem voz ativa acerca da destinação dos recursos`,
  }
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}> Conecte-se com o mundo!</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
           Nossa tecnologia leva seu negócio ao mundo por meio da Web3
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
