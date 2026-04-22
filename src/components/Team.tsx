const members = [
  {
    name: "Ростовцева Олеся Александровна",
    role: "Руководитель",
    photo: "https://cdn.poehali.dev/projects/4f040206-6b8c-4f0b-9550-e33414e92130/files/65369173-b96e-45e4-b720-bb897a9f9973.jpg",
  },
  {
    name: "Имя Фамилия",
    role: "Фотограф",
    photo: "https://cdn.poehali.dev/projects/4f040206-6b8c-4f0b-9550-e33414e92130/files/e0aed88d-ce8e-4ceb-88d1-f64e757fcc5e.jpg",
  },
  {
    name: "Имя Фамилия",
    role: "Видеомонтажёр",
    photo: "https://cdn.poehali.dev/projects/4f040206-6b8c-4f0b-9550-e33414e92130/files/fe991164-9389-45f1-9f24-ef030fc6d9bc.jpg",
  },
  {
    name: "Имя Фамилия",
    role: "Администратор соцсетей",
    photo: "https://cdn.poehali.dev/projects/4f040206-6b8c-4f0b-9550-e33414e92130/files/e0aed88d-ce8e-4ceb-88d1-f64e757fcc5e.jpg",
  },
  {
    name: "Имя Фамилия",
    role: "SMM",
    photo: "https://cdn.poehali.dev/projects/4f040206-6b8c-4f0b-9550-e33414e92130/files/fe991164-9389-45f1-9f24-ef030fc6d9bc.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-3 text-center">
          Наша команда
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 text-center">
          Состав медиацентра
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {members.map((m) => (
            <div key={m.role} className="flex flex-col items-center text-center group">
              <div className="w-full aspect-square overflow-hidden mb-4 bg-neutral-100">
                <img
                  src={m.photo}
                  alt={m.role}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="uppercase text-xs tracking-widest text-neutral-400 mb-1">{m.role}</p>
              <p className="text-sm font-semibold text-neutral-900 leading-snug">{m.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
