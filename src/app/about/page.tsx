import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

export default function about() {
    return (
        <>
            <Header />

            <section>
                <div className="max-w-[1250px] min-h-screen mx-auto pt-[100px] lg:pt-0 px-[15px] flex justify-start items-center">
                    <div className="max-w-[1000px]">
                        <h2 className="text-lg uppercase">Creado por y para expertos</h2>
                        <h1 className="text-3xl lg:text-4xl font-semibold uppercase mt-[5px] mb-[10px]">Con el objetivo de formar futuros profesionales</h1>
                        <p className="text-lg">Con Intellimind, tu formación y exito están garantizados, con recursos gratuitos y de calidad.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl lg:text-4xl font-semibold uppercase my-[15px]">Conoce Intellimind</h2>
                            <p className="paragraph">IntelliMind surge de la necesidad de aprender a aprender de forma profesional, potenciando el aprendizaje de cualquier individuo al aprender una nueva disciplina o habilidad.</p>
                            <p className="paragraph">Nuestros recursos gratuitos proporcionan guías profesionales y sistemas de aprendizaje basados en la profesionalización, rapidez y efectividad, centrado en conocimientos de uso real para entornos probables.</p>
                            <p className="paragraph">Nuestro objetivo es formar profesionales que puedan aplicar sus conocimientos en situaciones reales, y que puedan adaptarse a cualquier cambio que se presente en el mundo, además de adquirir la habilidad más importante, que es aprender a aprender.</p>
                        </div>
                        <div className="flex justify-center items-center lg:px-[15px] rounded-[15px] overflow-hidden order-1 md:order-2">
                            <Image 
                                src="/404-not-found.png" 
                                alt="About" 
                                className="w-full max-w-[800px] h-full object-contain lg:object-cover rounded-[15px]" 
                                width={1108}
                                height={730}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
