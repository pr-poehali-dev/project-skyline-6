interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-white text-xs opacity-70 tracking-wide">МКОУ "Посевнинская СОШ"</span>
          <span className="text-white text-sm uppercase tracking-widest font-bold">Медиацентр</span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О нас
          </a>
          <a
            href="#projects"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Проекты
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}