import Footer from "../components/footer";
import Header from "../components/header";

export default function about() {
    return (
        <>
            <Header />

            <section>
                <div className="container min-h-screen flex justify-start items-center">
                    <div>
                        <h2 className="text-lg font-semibold uppercase my-[5px]">Creado por y para expertos</h2>
                        <h1 className="text-4xl font-semibold uppercase my-[5px]">Con el objetivo de formar futuros profesionales</h1>
                        <p className="text-lg text-[#222]">Con Intellimind, tu formación y exito están garantizados, con recursos gratuitos y de calidad.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                        <div>
                            <h2 className="text-4xl font-semibold uppercase my-[5px] mb-[15px]">¿Cómo surge Intellimind?</h2>
                            <p className="paragraph">IntelliMind surge de la necesidad de aprender a aprender de forma profesional, potenciando el aprendizaje de cualquier individuo al aprender una nueva disciplina o habilidad.</p>
                            <p className="paragraph">Nuestros recursos gratuitos proporcionan guías profesionales y sistemas de aprendizaje basados en la profesionalización, rapidez y efectividad, centrado en conocimientos de uso real para entornos probables.</p>
                            <p className="paragraph">Nuestro objetivo es formar profesionales que puedan aplicar sus conocimientos en situaciones reales, y que puedan adaptarse a cualquier cambio que se presente en el mundo, junto con adquirir la habilidad más importante, aprender a aprender.</p>
                        </div>
                        <div className="px-[15px] rounded-[15px] overflow-hidden">
                            <img src="/404-not-found.png" alt="About" className="w-full h-full object-cover rounded-[15px]" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
