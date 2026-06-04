const bannerImage =
  'https://www.dropbox.com/scl/fi/is2u2sd8h2p6kmaheofu6/banner-2.png?rlkey=qs3j8858g2np7x4krkw1j2hnx&st=p5e33c0g&raw=1';

const experiences = [
  {
    title: 'Ruta de Tacos',
    tag: 'Trompo · Comal · Salsa',
    text: 'Pastor, suadero, campechano, carnitas y salsas que cuentan la ciudad desde la banqueta.',
  },
  {
    title: 'Mercado y Desayuno',
    tag: 'Mercado · Mañana · Antojitos',
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

const steps = [
  {
    number: '01',
    title: 'Elige',
    text: 'Selecciona la experiencia, fecha y número de personas.',
  },
  {
    number: '02',
    title: 'Reserva',
    text: 'Escríbenos por WhatsApp, Instagram o email.',
  },
  {
    number: '03',
    title: 'Encuentro',
    text: 'Nos vemos en un punto fácil de la ciudad.',
  },
  {
    number: '04',
    title: 'Come',
    text: 'Caminamos, probamos y contamos la historia detrás de cada parada.',
  },
];

function App() {
  return (
    <main>
      <section id="inicio" className="hero">
        <header className="site-nav">
          <a href="#inicio" className="nav-logo">
            <img src={bannerImage} alt="Entre Calles" />
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
            src={bannerImage}
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
              <a href="#experiencias" className="button dark">
                Ver experiencias
              </a>
              <a href="#contacto" className="button light">
                Reservar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="slogan-strip">
        <p>Llevamos tu paladar al límite.</p>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">Qué hacemos</p>
          <h2>La ciudad se entiende mejor comiendo.</h2>
        </div>

        <p>
          Entre Calles crea recorridos gastronómicos para quienes quieren conocer
          la Ciudad de México más allá de lo obvio. No solo restaurantes: mercados,
          puestos, comales, barras, esquinas, salsas y conversaciones.
        </p>
      </section>

      <section id="experiencias" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experiencias</p>
          <h2>Rutas sencillas, reales y llenas de sabor.</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.title}>
              <span>{experience.tag}</span>
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="red-panel">
        <div className="red-panel-inner">
          <div>
            <p className="eyebrow light">Cómo funciona</p>
            <h2>Camina, come y descubre.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <strong>{step.number}</strong>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
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
          <a href="#contacto" className="button red">
            Pedir ruta privada
          </a>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <p className="eyebrow">Nosotros</p>
        <h2>Nacimos entre calles.</h2>
        <p>
          Entre Calles nace del amor por la Ciudad de México y por su forma más
          honesta de contar historias: la comida. Creemos que la ciudad no se conoce
          solo mirando monumentos. Se conoce mordiendo un taco, oliendo el comal,
          entrando a un mercado, probando una salsa y escuchando a la gente que
          cocina todos los días.
        </p>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-inner">
          <img src={bannerImage} alt="Entre Calles" />

          <p className="eyebrow light">Reservas</p>
          <h2>¿Listo para probar la CDMX?</h2>
          <p>
            Escríbenos con tus fechas, número de personas, idioma, tipo de experiencia
            y restricciones alimentarias.
          </p>

          <div className="contact-actions">
            <a className="button light" href="https://wa.me/5210000000000">
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