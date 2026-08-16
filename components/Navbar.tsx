import Image from "next/image";
import sextantLogo from "@/public/images/sextant-logo.png";

interface NavbarProps {
  activeItem?: string;
}

export default function Navbar({ activeItem = "Home" }: NavbarProps) {
  const navItems = ["Home", "Career", "About", "Articles"];

  return (
    <header className="w-full flex flex-row justify-between items-center py-4">
      <div className="flex flex-row justify-start items-center gap-4">
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
      <nav>
        <ul className="font-playfair-display text-lg md:text-xl flex flex-row gap-8 md:gap-12 items-center">
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
