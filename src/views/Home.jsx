import React from "react";
import { motion } from "framer-motion";

// Simple icon components (no external assets)
const Icon = ({ children }) => (
  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md bg-white/90">
    <span className="text-2xl">{children}</span>
  </div>
);

const CategoryCard = ({ title, desc, emoji }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer group"
  >
    <div className="flex items-center gap-3">
      <Icon>{emoji}</Icon>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mt-3">{desc}</p>
    <div className="mt-4 text-indigo-600 font-medium group-hover:underline">
      Explorar →
    </div>
  </motion.div>
);

const ProductCard = ({ p }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="bg-white rounded-2xl p-4 shadow hover:shadow-lg flex flex-col"
  >
    <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center text-5xl">
      <span>{p.emoji}</span>
    </div>
    <h4 className="mt-3 font-semibold">{p.name}</h4>
    <p className="text-gray-500 text-sm line-clamp-2">{p.desc}</p>
    <div className="mt-2 font-bold text-indigo-600">{p.price}</div>
    <a
      href="/login"
      className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-xl border border-indigo-600 text-indigo-700 font-medium hover:bg-indigo-50"
    >
      Ver detalles
    </a>
  </motion.div>
);

const products = [
  {
    id: 1,
    name: "Auriculares Pro",
    price: "$59.900",
    emoji: "🎧",
    desc: "Sonido envolvente, cancelación de ruido",
  },
  {
    id: 2,
    name: "Smartwatch Lite",
    price: "$129.900",
    emoji: "⌚",
    desc: "Salud, notificaciones y batería de 7 días",
  },
  {
    id: 3,
    name: "Teclado Mecánico",
    price: "$189.900",
    emoji: "⌨️",
    desc: "Switches táctiles, RGB y layout compacto",
  },
  {
    id: 4,
    name: "Mochila Urbana",
    price: "$89.900",
    emoji: "🎒",
    desc: "Resistente al agua, 20L y puerto USB",
  },
  {
    id: 5,
    name: "Lámpara LED",
    price: "$39.900",
    emoji: "💡",
    desc: "Luz cálida/fría, control táctil y timer",
  },
  {
    id: 6,
    name: "Termo Inox",
    price: "$49.900",
    emoji: "🥤",
    desc: "Conserva frío/calor por 12h",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-block w-8 h-8 rounded-xl bg-indigo-600" />
            Mi Tienda
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#categorias" className="hover:text-indigo-600">
              Categorías
            </a>
            <a href="#destacados" className="hover:text-indigo-600">
              Destacados
            </a>
            <a href="#beneficios" className="hover:text-indigo-600">
              Beneficios
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/auth/login"
              className="px-4 py-2 rounded-xl border font-medium hover:bg-gray-50"
            >
              Entrar
            </a>
            <a
              href="#destacados"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-200 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-200 blur-3xl opacity-60" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Compra fácil, rápido{" "}
              <span className="text-indigo-600">y seguro</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">
              Bienvenido a nuestra tienda. Productos seleccionados, pagos
              protegidos y entregas a todo el país.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/login"
                className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
              >
                Entrar a la tienda
              </a>
              <a
                href="#categorias"
                className="px-6 py-3 rounded-2xl border font-semibold hover:bg-gray-50"
              >
                Explorar
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Icon>🚚</Icon>
                <span>Envíos 24–72h</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon>🔒</Icon>
                <span>Pagos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon>💬</Icon>
                <span>Soporte real</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-inner p-8 grid place-items-center">
              <div className="grid grid-cols-3 gap-4 w-full h-full">
                {["🎧", "⌚", "🎒", "💡", "📱", "🖱️", "📦", "🧴", "📷"].map(
                  (e, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/80 shadow grid place-items-center text-3xl"
                    >
                      {e}
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Categorías destacadas
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Explora lo más buscado por nuestra comunidad
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CategoryCard
              title="Tecnología"
              desc="Audio, wearables y accesorios"
              emoji="💻"
            />
            <CategoryCard
              title="Hogar"
              desc="Organización, iluminación y cocina"
              emoji="🏠"
            />
            <CategoryCard
              title="Estilo"
              desc="Bolsos, termos y más"
              emoji="🧢"
            />
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section id="destacados">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Productos destacados
              </h2>
              <p className="text-gray-600 mt-1">
                Vista previa pública (agrega al carrito al iniciar sesión)
              </p>
            </div>
            <a
              href="/login"
              className="hidden md:inline-flex px-4 py-2 rounded-xl border font-medium hover:bg-gray-50"
            >
              Entrar para comprar
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex items-center gap-3">
              <Icon>⚡</Icon>
              <h3 className="font-semibold text-lg">Compra en minutos</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Flujo optimizado y métodos de pago locales e internacionales.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex items-center gap-3">
              <Icon>🛡️</Icon>
              <h3 className="font-semibold text-lg">Protección al comprador</h3>
            </div>
            <p className="text-gray-600 mt-2">
              SSL, antifraude y respaldo de transacciones.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex items-center gap-3">
              <Icon>📦</Icon>
              <h3 className="font-semibold text-lg">Logística confiable</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Guías en 24–72h y seguimiento en línea.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-block w-7 h-7 rounded-lg bg-indigo-600" />
              Mi Tienda
            </div>
            <p className="text-gray-600 mt-2">
              Hecho con React + Tailwind. Esta es una vista previa pública del
              home.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Información</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <a className="hover:text-indigo-600" href="#">
                  Políticas y privacidad
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-600" href="#">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-600" href="#">
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <a
                  className="hover:text-indigo-600"
                  href="mailto:soporte@mitienda.com"
                >
                  soporte@mitienda.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-indigo-600"
                  href="https://wa.me/573001112233"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-600" href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 pb-8">© 2025 Mi Tienda</div>
      </footer>
    </div>
  );
}
