import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram, Facebook, PhoneCall, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-brand-background text-brand-text py-8">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-6">

        {/* ✅ Logo */}
       
        <Link to="/" className="flex items-center gap-2">
          <img src="./codestudio_logo.png" alt="<codestudio/>" className="h-20 w-auto opacity-90 rounded-4xl" />
        </Link>

        {/* ✅ Endereço com link Google Maps */}
        <p className="flex items-center gap-2 text-brand-metal-medium">
          <Github size={20} />
          <a 
            href="https://github.com/adrianoads910-max/code-studio"
            target="_blank"
            className="hover:underline"
          >
            Acesse nosso repositorio no GitHub e deixe sua contribuição
          </a>
        </p>


        {/* ✅ Redes sociais */}
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/elbacamilo.festas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            className="hover:scale-110 transition-transform" 
            aria-label="Instagram"
          >
            <Instagram size={30} />
          </a>
          <a 
            href="www.linkedin.com/in/adriano-souza-fonseca-868976300" 
            target="_blank" 
            className="hover:scale-110 transition-transform" 
            aria-label="Facebook"
          >
            <Linkedin size={30} />
          </a>
        </div>

        {/* ✅ Divisor + Copyright */}
        <div className="w-full border-t border-brand-metal-medium/40 pt-4">
          <p className="text-sm text-brand-metal-medium">
            &copy; {new Date().getFullYear()} Adriano Souza Fosneca Desenvolvedor Full-Stack Jr. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
