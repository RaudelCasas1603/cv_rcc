import { useEffect, useState } from "react";
import { ArrowDownToLine } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/about" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Captura la ruta actual en el cliente
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">RC</a>
      </div>
      <div class="flex flex-row items-center gap-6">
        <div class="flex flex-row gap-6">
          {navItems.map((item) => {
            // Verifica si este ítem corresponde a la página actual
            const isActive = currentPath === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-2 text-base font-medium transition-colors duration-300 ${
                  isActive ? "text-neutral" : "text-neutral"
                } group`}
              >
                {item.name}

                {/* Línea animada (Efecto Hover y Activo) */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-neutral transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full" // Si está activo, se queda completamente subrayado
                      : "w-0 group-hover:w-full" // Si no, empieza en 0 y crece al hacer hover
                  }`}
                />
              </a>
            );
          })}
        </div>
        <button class="btn btn-neutral flex flex-row gap-2">
          <ArrowDownToLine />
          <span>Descargar CV</span>
        </button>
      </div>
    </div>
  );
}
