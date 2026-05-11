import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "categories" | "article";

const articles: Record<string, { title: string; content: string[] }> = {
  swelling: {
    title: "Как убрать отеки",
    content: [
      "Отеки — это часто сигнал о том, что лимфатическая система «ленится» или в организме застоялась соль.",
      "🌊 Утренний ритуал: Начни день с контрастного душа и 20 прыжков на месте (это разгоняет лимфу).",
      "🖐️ Массаж: Делай самомассаж лица или используй роллер (лучше из холодильника).",
      "🥗 Питание: Вечером старайся избегать пересоленной еды и молочных продуктов — они задерживают воду.",
      "💧 Секрет: Пара стаканов чистой воды в течение дня помогает организму перестать «запасать» жидкость в тканях.",
    ],
  },
  acne: {
    title: "Как избавиться от прыщей",
    content: [
      "Чистая кожа — это комплексная работа изнутри и снаружи.",
      "🙌 База: Никогда не трогай лицо руками в течение дня и меняй наволочку каждые 3–4 дня.",
      "🧴 Уход: Подбери мягкое очищение. Ищи в составе салициловую кислоту (BHA) или цинк.",
      "🍬 Диета: Попробуй на 2 недели сократить сахар и быстрые углеводы — результат часто виден уже через 10 дней.",
      "⚕️ Важно: Если проблема серьезная, загляни к дерматологу.",
    ],
  },
  weight: {
    title: "Как похудеть",
    content: [
      "Магия похудения — это математика: трать больше, чем потребляешь.",
      "⚖️ Правило 80/20: Пусть 80% рациона будет здоровой едой, а 20% — любимыми «вредностями».",
      "🚶 Бытовая активность: Ходьба пешком сжигает больше жира в долгосроке. Целься в 10 000 шагов.",
      "😴 Сон: Недосып повышает кортизол, который копит жир. Спи 7–8 часов.",
      "🍽️ Главное: Ищи стиль питания, в котором тебе комфортно жить всегда.",
    ],
  },
  eyes: {
    title: "Как улучшить зону глаз",
    content: [
      "Кожа вокруг глаз в 4 раза тоньше, чем на щеках.",
      "❄️ Охлаждение: Храни патчи или ложки в холодильнике — холод сужает сосуды.",
      "🧪 Компоненты: Ищи кремы с кофеином, витамином С или ретинолом (только на ночь).",
      "👆 Техника: Наноси средства безымянным пальцем, не растягивай кожу!",
      "👁️ Гаджеты: Делай гимнастику для глаз каждые пару часов.",
    ],
  },
  muscle: {
    title: "Как набрать мышцы",
    content: [
      "Мышцы растут не во время тренировки, а во время отдыха.",
      "📈 Прогрессия нагрузок: Постепенно увеличивай веса или количество повторений.",
      "🥩 Белок + Сложные углеводы: Белок — стройматериал, углеводы — топливо.",
      "🔄 Восстановление: Не тренируй одну и ту же группу мышц два дня подряд.",
      "📏 Лайфхак: Замеряй объемы лентой, а не только вес. Мышцы тяжелее жира.",
    ],
  },
};

const categories = [
  { id: "swelling", label: "Как убрать отеки", icon: "Droplets" },
  { id: "acne", label: "Как избавиться от прыщей", icon: "Sparkles" },
  { id: "weight", label: "Как похудеть", icon: "TrendingDown" },
  { id: "eyes", label: "Как улучшить зону глаз", icon: "Eye" },
  { id: "muscle", label: "Как набрать мышцы", icon: "Dumbbell" },
];

const reviews = [
  {
    name: "Артём, 22 года",
    text: "Пользуюсь советами уже месяц — отёки реально ушли, друзья спрашивают что изменилось. DimaMaxing — топ!",
    rating: 5,
  },
  {
    name: "Кирилл, 19 лет",
    text: "Раньше был комплекс из-за прыщей. После гайда по коже за 2 недели заметил огромную разницу. Советы реально рабочие.",
    rating: 5,
  },
  {
    name: "Максим, 24 года",
    text: "Начал с похудения, потом подключил гайд по мышцам. Минус 8 кг и плюс рельеф за 3 месяца. Рекомендую!",
    rating: 5,
  },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paid, setPaid] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const openArticle = (id: string) => {
    setActiveArticle(id);
    setPage("article");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* ===== ГЛАВНАЯ ===== */}
      {page === "home" && (
        <div>
          {/* Top bar */}
          <div className="flex justify-end px-6 pt-6">
            <button className="neon-btn px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Icon name="User" size={16} />
              Личный кабинет
            </button>
          </div>

          {/* Hero */}
          <div className="flex flex-col items-center text-center px-4 pt-12 pb-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              Dima<span className="neon-text">Maxing</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Прокачай внешность. Стань лучшей версией себя.
            </p>

            {/* Before/After blocks */}
            <div className="flex gap-6 mb-10 flex-wrap justify-center">
              <div className="before-after-card">
                <div className="before-after-label">ДО</div>
                <div className="before-after-img">
                  <Icon name="User" size={40} className="text-gray-600" />
                  <p className="text-xs text-gray-500 mt-2">Фото До<br />(пухлое лицо)</p>
                </div>
              </div>
              <div className="before-after-card border-neon">
                <div className="before-after-label neon-text">ПОСЛЕ</div>
                <div className="before-after-img">
                  <Icon name="Star" size={40} className="text-cyan-400" />
                  <p className="text-xs text-cyan-400 mt-2">Фото После<br />(рельеф)</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setPage("categories")}
              className="neon-btn-lg px-10 py-4 rounded-2xl text-lg font-bold tracking-wide"
            >
              Начать луксмаксинг ✦
            </button>
          </div>

          {/* Reviews */}
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              Отзывы <span className="neon-text">реальных парней</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-cyan-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">"{r.text}"</p>
                  <p className="text-cyan-400 text-xs font-semibold">{r.name}</p>
                </div>
              ))}
            </div>
          </div>

          <footer className="text-center text-xs text-gray-600 pb-8">
            © 2025 DimaMaxing — стань лучшей версией себя
          </footer>
        </div>
      )}

      {/* ===== КАТЕГОРИИ ===== */}
      {page === "categories" && (
        <div className="max-w-xl mx-auto px-4 py-10">
          <button
            onClick={() => setPage("home")}
            className="back-btn mb-8"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>

          <h2 className="text-3xl font-black text-center mb-2">
            Выбери <span className="neon-text">тему</span>
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            Каждый раздел — рабочие советы без воды
          </p>

          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => openArticle(cat.id)}
                className="category-btn"
              >
                <Icon name={cat.icon} size={20} className="text-cyan-400" />
                <span>{cat.label}</span>
                <Icon name="ChevronRight" size={18} className="ml-auto text-gray-500" />
              </button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setShowPayment(true)}
              className="neon-btn-lg px-8 py-4 rounded-2xl text-base font-bold w-full"
            >
              💎 Купить ещё больше информации
            </button>
          </div>
        </div>
      )}

      {/* ===== СТАТЬЯ ===== */}
      {page === "article" && activeArticle && (
        <div className="max-w-xl mx-auto px-4 py-10">
          <button
            onClick={() => setPage("categories")}
            className="back-btn mb-8"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад к категориям
          </button>

          <h2 className="text-3xl font-black mb-8">
            {articles[activeArticle].title}
          </h2>

          <div className="flex flex-col gap-4">
            {articles[activeArticle].content.map((line, i) => (
              <div
                key={i}
                className={`article-block ${i === 0 ? "article-intro" : ""}`}
              >
                <p className="text-gray-200 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setShowPayment(true)}
              className="neon-btn-lg px-8 py-4 rounded-2xl text-base font-bold w-full"
            >
              💎 Купить ещё больше информации
            </button>
          </div>
        </div>
      )}

      {/* ===== МОДАЛЬНОЕ ОКНО ОПЛАТЫ ===== */}
      {showPayment && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={(e) => { if (e.target === e.currentTarget && !paid) setShowPayment(false); }}
        >
          <div className="payment-modal w-full max-w-sm">
            {!paid ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Оплата</h3>
                  <button onClick={() => setShowPayment(false)} className="text-gray-500 hover:text-white">
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-6">Введите данные карты для доступа к приватному боту</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Номер карты</label>
                    <input
                      className="pay-input"
                      placeholder="0000 0000 0000 0000"
                      value={cardNum}
                      onChange={(e) => setCardNum(e.target.value)}
                      maxLength={19}
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">Срок</label>
                      <input
                        className="pay-input"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        maxLength={5}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">CVV</label>
                      <input
                        className="pay-input"
                        placeholder="•••"
                        type="password"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength={3}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setPaid(true)}
                    className="neon-btn-lg py-3 rounded-xl font-bold mt-2"
                  >
                    Оплатить
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-3">Благодарим за покупку!</h3>
                <p className="text-gray-300 mb-4">Твой бот в Telegram:</p>
                <a
                  href="https://t.me/DimaMaxxinnggBot"
                  target="_blank"
                  rel="noreferrer"
                  className="neon-text text-xl font-black"
                >
                  @DimaMaxxinnggBot
                </a>
                <button
                  onClick={() => { setShowPayment(false); setPaid(false); }}
                  className="block mx-auto mt-6 text-sm text-gray-500 hover:text-white"
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
