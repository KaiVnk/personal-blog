import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import PostCard from "./components/post-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      
      <section className="pt-[80px] md:pt-0">
        <div className="max-w-[1250px] mx-auto">
          <div className="min-h-screen grid grid-cols-1 grid-rows-2 gap-0 lg:grid-cols-2 lg:grid-rows-1">
            <div className="flex justify-center items-center">
              <div className="h-full lg:max-h-[450px] overflow-hidden bg-[#f8f8f8]">
                <Image 
                  src="/frontpage.jpg" 
                  alt="Frontpage" 
                  className="w-full h-full object-cover" 
                  width={4500}
                  height={3052}
                />
              </div>
            </div>
            <div className="flex justify-center items-start p-[15px] lg:items-center">
              <div className="h-full max-h-[350px] bg-white flex flex-col justify-center items-center text-center shadow-[5px_5px_30px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px] p-[25px] mt-[-100px] uppercase lg:mt-0 lg:ml-[-100px] lg:max-h-[375px]">
                <h2 className="text-[#222]">APRENDE A APRENDER Y DOMINA EL ARTE DEL APRENDIZAJE</h2>
                <h1 className="text-2xl md:text-3xl font-semibold">Conviertete en una persona Multipotencial</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center mb-[25px]">
            <h2 className="text-4xl">Tendencias de IntelliMind</h2>
          </div>
          <div className="max-w-[950px] mx-auto grid grid-cols-1 grid-rows-1 justify-center justify-items-center content-start gap-[50px] lg:grid-cols-2 lg:grid-rows-1">
            <PostCard
              imageSrc="/image-post/publication-1.jpg"
              imageAlt="Publication"
              slug="el-arte-del-aprendizaje"
              date="26 de Mayo, 2025"
              title="El arte del aprendizaje"
              content="El arte del aprendizaje consiste en identificar y dominar los principios fundamentales de cualquier disciplina. Al enfocarte solo en lo esencial, puedes avanzar más rápido, vivir una vida multipotencial y convertirte en un verdadero maestro del aprendizaje."
            />
            <PostCard
              imageSrc="/image-post/publication-1.jpg"
              imageAlt="Publication"
              slug="el-arte-de-la-maestria"
              date="26 de Mayo, 2025"
              title="El arte de la maestría"
              content="Convertirse en maestro no es cuestión de talento, sino de intención, enfoque y repetición deliberada. La maestría es el arte de profundizar tanto en lo esencial que tu habilidad se convierte en sabiduría práctica y poder creativo."
            />
            <PostCard
              imageSrc="/image-post/publication-1.jpg"
              imageAlt="Publication"
              slug="el-arte-de-la-multidisciplina"
              date="26 de Mayo, 2025"
              title="El arte de la multidisciplina"
              content="La verdadera ventaja no está en saber de todo, sino en unir saberes distintos para crear algo único. Ser multidisciplinario es aprender a pensar sin fronteras, vivir con más recursos internos y construir una mente adaptable al mundo real."
            />
          </div>
          <div className="flex justify-center items-center mt-[50px]">
            <Link href="/blog" className="py-[10px] px-[30px] bg-black text-white uppercase border-[1px] border-transparent transition-all duration-300 md:hover:bg-white md:hover:text-black md:hover:border-black">Leer más</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
