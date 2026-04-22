import Icon from "@/components/ui/icon";

const directions = [
  {
    icon: "Newspaper",
    title: "Журналистика",
    description:
      "Пишем новости, репортажи и интервью. Учимся находить темы, брать комментарии и рассказывать истории так, чтобы их читали.",
  },
  {
    icon: "Camera",
    title: "Фото и видео",
    description:
      "Снимаем школьную жизнь, делаем репортажные фото и монтируем видеоматериалы для соцсетей и архива медиацентра.",
  },
  {
    icon: "Mic",
    title: "Подкасты",
    description:
      "Записываем аудиопрограммы на актуальные темы. Учимся говорить чётко, интересно и уверенно — перед микрофоном и аудиторией.",
  },
];

export default function Directions() {
  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-3 text-center">
          Чем мы занимаемся
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 text-center">
          Направления
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directions.map((d) => (
            <div
              key={d.title}
              className="bg-white border border-neutral-200 p-8 flex flex-col gap-5 hover:border-black transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <Icon name={d.icon} size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 uppercase tracking-wide">
                {d.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
