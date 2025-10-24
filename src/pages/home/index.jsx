import { Button } from "../../components/button"
import { Footer } from "../../components/footer"
import { Navbar } from "../../components/navbar"
import { Link } from "react-router-dom";
import BannerSlider from "../../components/slider"

export const HomePage = () => {
    return (
        <main className="bg-amber-50">
            <header>
                <Navbar />
            </header>

            {/* 🎯 HERO - Banner + Texto */}
            <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto p-8 gap-12">
                <section className="lg:w-1/2">
                    <BannerSlider />
                </section>
                <div className="lg:w-1/2 p-4">
                    <h1 className="text-xl md:text-5xl text-center text-brand-background font-bold p-2">
                        Bem-vindo ao <strong>&lt;CodeStudio&gt;</strong>
                    </h1>
                    <p className="text-xl text-center text-brand-background p-2">
                        “Aqui você encontra conteúdos para aprender HTML, CSS, JavaScript e React de forma prática e objetiva.”
                    </p>
                    <section className="flex justify-center p-4">
                        <Button variant="primary">Descubra mais..</Button>
                    </section>
                </div>
            </div>

            {/* ✅ NOVA SEÇÃO - Tecnologias */}
            <section className="bg-[#1E2532] w-full py-12">
                <h2 className="text-center text-white text-3xl font-bold mb-10">
                    Tecnologias que você vai aprender
                </h2>

             

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center max-w-5xl mx-auto">

                {/* HTML */}
                <Link to="/html" className="flex flex-col items-center group">
                    <i className="devicon-html5-plain colored text-6xl group-hover:scale-110 transition-transform duration-300"></i>
                    <p className="text-white mt-2 text-lg group-hover:text-brand-accent transition-colors">
                    HTML
                    </p>
                </Link>

                {/* CSS */}
                <Link to="/css" className="flex flex-col items-center group">
                    <i className="devicon-css3-plain colored text-6xl group-hover:scale-110 transition-transform duration-300"></i>
                    <p className="text-white mt-2 text-lg group-hover:text-brand-accent transition-colors">
                    CSS
                    </p>
                </Link>

                {/* JavaScript */}
                <Link to="/javascript" className="flex flex-col items-center group">
                    <i className="devicon-javascript-plain colored text-6xl group-hover:scale-110 transition-transform duration-300"></i>
                    <p className="text-white mt-2 text-lg group-hover:text-brand-accent transition-colors">
                    JavaScript
                    </p>
                </Link>

                {/* React */}
                <Link to="/react" className="flex flex-col items-center group">
                    <i className="devicon-react-original colored text-6xl group-hover:spin group-hover:scale-110 transition-transform duration-300"></i>
                    <p className="text-white mt-2 text-lg group-hover:text-brand-accent transition-colors">
                    React
                    </p>
                </Link>

                {/* Angular */}
                <Link to="/angular" className="flex flex-col items-center group">
                    <i className="devicon-angularjs-plain colored text-6xl group-hover:scale-110 transition-transform duration-300"></i>
                    <p className="text-white mt-2 text-lg group-hover:text-brand-accent transition-colors">
                    Angular
                    </p>
                </Link>

                </div>

            </section>

            <footer>
                <Footer />
            </footer>
        </main>
    )
}
