import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center px-6 py-4 justify-between">
      <aside className="flex flex-col gap-1">
        <div className="flex flex-row gap-2 items-center">
          <div className="h-0.5 w-6 bg-neutral-content"></div>
          <span className="text-neutral-content text-lg">Contacto</span>
        </div>
        <span className="text-neutral-content text-2xl">Hablemos</span>
        <span className="text-base-300">¿Tienes un proyecto en mente?</span>
        <span className="text-base-300">
          Estoy disponible para nuevas oportunidades
        </span>
      </aside>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 items-center">
          <Mail />
          <span className="text-base">raudel.casas03@gmail.com</span>
        </div>
        <a href="https://wa.me/3323783945" className="flex flex-row gap-2 items-center">
          <i class="fa-brands fa-whatsapp text-neutral-content text-2xl"></i>
          <span className="text-base"> +52 33 2378 3945 </span>
        </a>
        <div className="flex flex-row gap-2 items-center">
          <MapPin />
          <span className="text-base">Guadalajara, Jalisco</span>
        </div>
      </div>
      <nav className="grid-flow-col gap-8 md:place-self-center md:justify-self-end mr-2">
        <a className="hover:bg-base-100 hover:text-black p-2 rounded-full transition duration-200">
          <i class="fa-brands fa-github text-2xl hover:"></i>
        </a>
        <a className="hover:bg-base-100 hover:text-black p-2 rounded-full transition duration-200">
          <i class="fa-brands fa-linkedin text-2xl hover:"></i>
        </a>
        <a className="hover:bg-base-100 hover:text-black p-2 rounded-full transition duration-200">
          <i class="fa-brands fa-instagram text-2xl hover:"></i>
        </a>
      </nav>
    </footer>
  );
}
