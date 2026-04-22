import { useState } from "react";
import func2url from "../../backend/func2url.json";

type FormType = "join" | "contact";

export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>("join");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch(func2url["send-email"], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, message, form_type: formType }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-24 flex flex-col items-center">
      <p className="uppercase tracking-widest text-sm text-neutral-500 mb-3">Напиши нам</p>
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 text-center">
        Вступи в команду
      </h2>

      <div className="flex gap-2 mb-10 border border-neutral-200 p-1">
        <button
          onClick={() => setFormType("join")}
          className={`px-6 py-2 text-sm uppercase tracking-wide transition-all duration-200 ${
            formType === "join" ? "bg-black text-white" : "text-neutral-600 hover:text-black"
          }`}
        >
          Вступить в команду
        </button>
        <button
          onClick={() => setFormType("contact")}
          className={`px-6 py-2 text-sm uppercase tracking-wide transition-all duration-200 ${
            formType === "contact" ? "bg-black text-white" : "text-neutral-600 hover:text-black"
          }`}
        >
          Связаться с нами
        </button>
      </div>

      {status === "success" ? (
        <div className="text-center py-16">
          <p className="text-2xl font-bold text-neutral-900 mb-2">Заявка отправлена!</p>
          <p className="text-neutral-500">Мы свяжемся с тобой в ближайшее время.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 border border-black text-black px-8 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300"
          >
            Отправить ещё
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4">
          <input
            type="text"
            placeholder="Имя и фамилия *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
          />
          <input
            type="tel"
            placeholder="Телефон *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
          />
          <textarea
            placeholder={formType === "join" ? "Расскажи о себе — чем хочешь заниматься?" : "Сообщение"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
          />
          {status === "error" && (
            <p className="text-red-500 text-sm">Ошибка отправки. Попробуй ещё раз.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black text-white border border-black px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
          >
            {status === "loading" ? "Отправляем..." : formType === "join" ? "Отправить заявку" : "Отправить сообщение"}
          </button>
        </form>
      )}

      <div className="mt-16 flex flex-col items-center gap-2 text-center">
        <p className="uppercase tracking-widest text-xs text-neutral-400">Руководитель медиацентра</p>
        <p className="text-lg font-semibold text-neutral-900">Ростовцева Олеся Александровна</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2 text-sm text-neutral-500">
          <span>rostovtzeva.lesya@yandex.ru</span>
          <span>+7 993 019-33-23</span>
        </div>
      </div>
    </section>
  );
}