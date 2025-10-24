import { Footer } from "../../components/footer"
import { Navbar } from "../../components/navbar"
import BannerSlider from "../../components/slider"

export const HomePage = () => {
    return (
        <main className="bg-amber-50">
            <header>
                <Navbar />
            </header>
             <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto p-8 gap-12">
                <section className="lg:w-1/2">
                  <BannerSlider />
                </section>
                <div className="lg:w-1/2 p-4">
                    <h1 className="text-xl md:text-5xl text-center lg:text-left text-brand-background font-bold p-2">Bem-vindo ao CodeStudio </h1>
                    <p className="text-xl md:text-xl text-center lg:text-left text-brand-background p-2">“Aqui você encontra conteúdos para aprender HTML, CSS, JavaScript e React de forma prática e objetiva.”</p>
                    <section className="right-6 sm:right-10 flex justify-center w-[60%] p-6">
                        <button>
                            Descubra mais..
                        </button>
                    </section>
                </div>
            </div>
            
            <footer>
                <Footer/>
            </footer>
        </main>
    )
}