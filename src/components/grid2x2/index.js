import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Sugira uma alteração',
    description:
      'Toda mudança para melhor é bem-vinda! Caso sua sugestão seja válida, sera aprovada.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Segurança',
    description:
      'Sabemos da segurança dos dados, por isso mantemos todas as informações de clientes protegidas e acessíveis.',
    icon: LockClosedIcon,
  },
  {
    name: 'Atualização',
    description:
      'Uma vez as informações gravadas no nosso banco de dados, podem ser atualizadas. Ou seja, os dados dos seus clientes serão sempre atuais.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Individualidade',
    description:
      'Seu CRM pode ser personalizado, caso tenha interesse, basta entrar em contato conosco para mais informações.',
    icon: FingerPrintIcon,
  },
]

export default function Grid2x2Section() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tudo que você precisa em um CRM
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sabemos que o CRM ideal deve preencher as necessidades da sua empresa, seja elas quais for. Cada empresa tem sua necessidade, sabendo disso, nosso CRM é aberto (Open Source) aceitando novas mudanças dos desenvolvedores e sugestões das empresas e usuários
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
