import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Tokenização do produto`,
  `Crowdfunding descentralizado`,
  `Uso de Exchange para venda mundial do ativo`,
  `Criação de marketplace para NFT`,
  `Consultoria com os maiores especialistas em web3`,
  `Criação de jogos descentralizados`,
  `Criação de plataformas para DeFi`,
  `Criação de DeFi bots personalizados`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Você está pronto para mudar o mundo?</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            Com alguns clicks você tira a sua ideia do papel, coloca ela na blockchain, e começa a mudar a vida das pessoas
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                O que oferecemos para você
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(` font-medium text-gray-800`)}>A Destarter é um produto DataCurrency sob Business Source Licence 1.1</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            
          </div>
          <Button  primary><a href="https://bscscan.com/address/0x9DCDA8075B2Beca2F2F41EC2ad55C2EA80CB0596#code"> Acesse o código </a></Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
