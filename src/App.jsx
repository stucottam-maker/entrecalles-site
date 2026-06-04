const experiences = [
  {
    title: 'Ruta de Tacos',
    tag: 'Trompo · Comal · Salsa',
    text: 'Pastor, suadero, campechano, carnitas y salsas que cuentan la ciudad desde la banqueta.',
  },
  {
    title: 'Mercado y Desayuno',
    tag: 'Mañana · Mercado · Antojitos',
    text: 'Tamales, jugos, quesadillas, fruta, guisados y pasillos llenos de color, ruido y tradición.',
  },
  {
    title: 'Cantinas y Mezcal',
    tag: 'Botanas · Pulque · Mezcal',
    text: 'Barras, botanas, mezcal, pulque y cantinas de barrio para entender la CDMX desde otra mesa.',
  },
  {
    title: 'Experiencia Privada',
    tag: 'A medida · Grupos · Especiales',
    text: 'Rutas personalizadas para viajeros, familias, chefs, marcas, prensa o grupos privados.',
  },
];

const details = [
  'Grupos pequeños',
  'Lugares reales',
  'Anfitriones locales',
  'Sabor con historia',
];

function App() {
  return (
    <main>
      <section id="inicio" className="hero">
        <header className="nav">
          <a href="#inicio" className="nav-mark">
            <img src="/entre-calles-banner.png" alt="Entre Calles" />
          </a>

          <nav>
            <a href="#experiencias">Experiencias</a>
            <a href="#privados">Privados</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a className="language-link" href="/en">EN</a>
          </nav>
        </header>

        <div className="hero-inner">
          <img
            className="hero-brand"
            src="/entre-calles-banner.png"
            alt="Entre Calles - Llevamos tu paladar al límite"
          />

          <div className="hero-copy">
            <p className="kicker">Ciudad de México · Food Tours</p>
            <h1>Saborea la CDMX entre calles.</h1>
            <p>
              Recorridos gastronómicos por mercados, taquerías, cantinas y rincones
              de barrio. Caminamos, comemos y contamos la ciudad desde sus sabores
              más reales.
            </p>

            <div className="hero-actions">
              <a href="#experiencias" className="button black">Ver experiencias</a>
              <a href="#contacto" className="button white">Reservar</a>
            </div>
          </div>
        </div>
      </section>

      <section className="slogan-strip">
        <p>Llevamos tu paladar al límite.</p>
      </section>

      <section className="intro-section">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Qué hacemos</p>
            <h2>La ciudad se entiende mejor comiendo.</h2>
          </div>

          <div>
            <p>
              Entre Calles crea recorridos gastronómicos para quienes quieren conocer
              la Ciudad de México más allá de lo obvio. No solo restaurantes:
              mercados, puestos, comales, barras, esquinas, salsas y conversaciones.
            </p>
          </div>
        </div>
      </section>

      <section id="experiencias" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experiencias</p>
          <h2>Rutas sencillas, reales y llenas de sabor.</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.title}>
              <span>{item.tag}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="red-feature">
        <div className="feature-inner">
          <div>
            <p className="eyebrow light">Cómo funciona</p>
            <h2>Camina, come y descubre.</h2>
          </div>

          <div className="feature-list">
            <div>
              <strong>01</strong>
              <p>Elige tu experiencia, fecha y número de personas.</p>
            </div>
            <div>
              <strong>02</strong>
              <p>Reserva por WhatsApp, Instagram o email.</p>
            </div>
            <div>
              <strong>03</strong>
              <p>Nos encontramos en un punto fácil de la ciudad.</p>
            </div>
            <div>
              <strong>04</strong>
              <p>Probamos lugares reales y contamos la historia detrás de cada parada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-section">
        <div className="detail-grid">
          {details.map((item) => (
            <div className="detail-card" key={item}>
              <h3>{item}</h3>
              <p>
                Experiencias cercanas, sin prisas y con una manera honesta de contar
                la comida mexicana.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="privados" className="private-section">
        <div className="private-card">
          <p className="eyebrow">Tours privados</p>
          <h2>Una ruta hecha para ti.</h2>
          <p>
            Diseñamos experiencias privadas para parejas, familias, chefs, marcas,
            prensa, equipos de trabajo y viajeros que quieren algo más personal.
          </p>
          <a href="#contacto" className="button red">Pedir ruta privada</a>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <div className="about-inner">
          <p className="eyebrow">Nosotros</p>
          <h2>Nacimos entre calles.</h2>
          <p>
            Entre Calles nace del amor por la Ciudad de México y por su forma más
            honesta de contar historias: la comida. Creemos que la ciudad no se
            conoce solo mirando monumentos. Se conoce mordiendo un taco, oliendo
            el comal, entrando a un mercado, probando una salsa y escuchando a la
            gente que cocina todos los días.
          </p>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-inner">
          <img src="/entre-calles-banner.png" alt="Entre Calles" />

          <p className="eyebrow light">Reservas</p>
          <h2>¿Listo para probar la CDMX?</h2>
          <p>
            Escríbenos con tus fechas, número de personas, idioma, tipo de experiencia
            y restricciones alimentarias.
          </p>

          <div className="contact-actions">
            <a className="button white" href="https://wa.me/5210000000000">
              WhatsApp
            </a>
            <a className="button outline" href="https://instagram.com/entrecallesmexico">
              Instagram
            </a>
            <a className="button outline" href="mailto:hola@entrecalles.mx">
              Email
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>Entre Calles</strong>
          <p>Recorridos gastronómicos en Ciudad de México.</p>
        </div>

        <div className="footer-links">
          <a href="https://instagram.com/entrecallesmexico">@entrecallesmexico</a>
          <a href="/en">English version</a>
        </div>
      </footer>
    </main>
  );
}

export default App;