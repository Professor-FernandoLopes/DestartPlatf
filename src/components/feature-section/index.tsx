import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Diferenciais</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Como nós mudamos o jogo
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Democracia participativa</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Somos a única plataforma do mundo onde os investidores tem o poder de decidir como serão aplicados os recursos captados
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>transparência</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Os recursos transitam apenas pela blockchain, o que garante 100% de transparência sobre como, quando, e para quem são destinados os recursos.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Descentralização como serviço</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Somos muito mais do que uma plataforma, somos uma nova forma de fazer negócios. O que fazemos realmente é prover um meio para que as relações humanas sejam mais justas e transparentes.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>DAO</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Nossa tecnologia é perfeita para uso no contexto de organizações autônomas, dada a impessoalidade e automação by design.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}> Liberdade, anonimização ou transparência</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Nossa tecnologia resolve a dialética entre anonimização/transparência. A síntese resolutiva é promovida pela liberdade, visto que com nossa tecnologia tanto a captação quanto a administração de recursos podem ser realizadas de forma anônima, ou com máxima transparência, tudo a depender das necessidades do projeto
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Integração</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              A Web3 significa a integração entre produtos físicos e digitais, entre o comércio e um novo sistema financeiro de natureza descentralizada. Por isso, não oferecemos apenas a primeira plataforma de crowdfunding do mundo, mas uma exchange as a service, capaz de interagir com aos maiores pools de liquidez existentes, como Uniswap, PancakeSwap, Compound Finance, dentre outros. Caso precise, temos ainda toda a estrutura para tokenizar seus produtos, visto que contamos com um qualificado corpo de especialistas nas áreas técnicas e jurídicas.
            
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
