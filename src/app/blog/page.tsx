import Footer from "../components/footer";
import Header from "../components/header";
import PostCard from "../components/post-card";

export default function Blog() {
    return (
        <>
            <Header />

            <section className="max-w-[1250px] mx-auto px-[15px] pt-[100px]">
                <div className="text-center my-[50px]">
                    <h1 className="text-4xl font-semibold uppercase">Domina el arte del aprendizaje</h1>
                </div>
            </section>
            <section>
                <div className="container">
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
                </div>
            </section>

            <Footer />
        </>
    );
}
