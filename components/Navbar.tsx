import Image from "next/image";
import sextantLogo from "@/public/images/sextant-logo.png";

interface NavbarProps {
  activeItem?: string;
}

export default function Navbar({ activeItem = "Home" }: NavbarProps) {
  const navItems = ["Home", "Career", "About", "Articles"];

  return (
    <header className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center py-4">
      
      <div className="flex hidden sm:flex justify-center sm:justify-start items-center gap-4">
        <Image
          src={sextantLogo}
          alt="L'Expediteur Noir Logo"
          className="h-16 md:h-20 w-auto"
          priority
        />
        <span className="font-playfair-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          L'Expediteur Noir
        </span>
      </div>

      <div className="flex flex-row block sm:hidden justify-center sm:justify-start items-center gap-4">
        <span className="font-playfair-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          L'Expediteur
        </span>
        <Image
          src={sextantLogo}
          alt="L'Expediteur Noir Logo"
          className="h-16 md:h-20 w-auto"
          priority
        />
        <span className="font-playfair-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          Noir
        </span>
      </div>

      <nav className="border-y-1 border-accent sm:border-none py-2 sm:p-0 w-full sm:w-fit flex justify-center items-center sm:block">
        <ul className="font-playfair-display text-sm md:text-xl flex flex-row gap-8 md:gap-12 items-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-200 hover:text-accent ${
                  item === activeItem ? "text-accent font-medium" : "text-foreground/80"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
