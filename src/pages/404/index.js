export default function Page404() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404 Not Found</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina não encontrada</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, não conseguimos encontrar a página que você estava procurando.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar para Página Inicial
            </a>
            <a href="#" target='_blank' className="text-sm font-semibold text-gray-900">
              Falar com o Suporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
