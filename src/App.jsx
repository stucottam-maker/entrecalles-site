const bannerImage =
  'https://www.dropbox.com/scl/fi/is2u2sd8h2p6kmaheofu6/banner-2.png?rlkey=qs3j8858g2np7x4krkw1j2hnx&st=p5e33c0g&raw=1';

const tours = [
  {
    slug: 'tacos',
    title: 'Ruta de Tacos',
    tag: 'Trompo · Comal · Salsa',
    intro:
      'Pastor, suadero, campechano, carnitas y salsas que cuentan la ciudad desde la banqueta.',
    text:
      'Una caminata por taquerías, puestos y sabores esenciales de la ciudad. Comemos de pie, con tortilla en mano, probando la CDMX desde su lenguaje más directo: el taco.',
    duration: '3 horas',
    ideal: 'Primera vez en CDMX · Food lovers · Grupos pequeños',
  },
  {
    slug: 'mercado',
    title: 'Mercado y Desayuno',
    tag: 'Mañana · Mercado · Antojitos',
    intro:
      'Tamales, jugos, quesadillas, fruta, guisados y pasillos llenos de vida.',
    text:
      'La ciudad despierta en sus mercados. Esta ruta mezcla desayuno, color, ruido, tradición y sabores de mañana para entender la CDMX desde sus pasillos.',
    duration: '3 horas',
    ideal: 'Viajeros curiosos · Familias · Cultura local',
  },
  {
    slug: 'cantinas',
    title: 'Cantinas y Mezcal',
    tag: 'Botanas · Pulque · Mezcal',
    intro:
      'Barras, botanas, mezcal, pulque y cantinas de barrio.',
    text:
      'Una ruta para entender la CDMX desde otra mesa: bebidas tradicionales, botanas, cantinas y conversación. Más que beber, es entrar a una parte viva de la ciudad.',
    duration: '3 horas',
    ideal: 'Parejas · Amigos · Viajeros adultos',
  },
  {
    slug: 'privada',
    title: 'Experiencia Privada',
    tag: 'A medida · Grupos · Especiales',
    intro:
      'Una ruta personalizada según tus gustos, fechas y grupo.',
    text:
      'Diseñamos experiencias privadas para viajeros, familias, chefs, marcas, prensa, equipos de trabajo y personas que quieren algo más personal.',
    duration: 'A medida',
    ideal: 'Chefs · Marcas · Familias · Empresas',
  },
];

function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function Nav() {
  return (
    <header className="site-nav">
      <button className="nav-logo" onClick={() => navigate('/')}>
        <img src={bannerImage} alt="Entre Calles" />
      </button>

      <nav>
        <button onClick={() => navigate('/')}>Inicio</button>
        <a href="#experiencias">Experiencias</a>
        <button onClick={() => navigate('/tours/privada')}>Privados</button>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
        <button className="language-link" onClick={() => navigate('/en')}>
          EN
        </button>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section id="inicio" className="hero">
        <Nav />

        <div className="hero-inner">
          <div className="hero-title-card">
            <p>Ciudad de México · Food Tours</p>
            <h1>
              Saborea la
              <br />
              CDMX entre
              <br />
              calles.
            </h1>
          </div>

          <p className="hero-subtitle">
            Mercados, taquerías, cantinas y rincones de barrio. Caminamos,
            comemos y contamos la ciudad desde sus sabores más reales.
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
          la Ciudad de México más allá de lo obvio. No solo restaurantes:
          mercados, puestos, comales, barras, esquinas, salsas y conversaciones.
        </p>
      </section>

      <section id="experiencias" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experiencias</p>
          <h2>Rutas sencillas, reales y llenas de sabor.</h2>
        </div>

        <div className="tour-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.slug}>
              <span>{tour.tag}</span>

              <div>
                <h3>{tour.title}</h3>
                <p>{tour.intro}</p>
              </div>

              <button onClick={() => navigate(`/tours/${tour.slug}`)}>
                Ver ruta →
              </button>
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
            <article>
              <strong>01</strong>
              <p>Elige tu experiencia y fecha.</p>
            </article>

            <article>
              <strong>02</strong>
              <p>Reserva por WhatsApp o mensaje.</p>
            </article>

            <article>
              <strong>03</strong>
              <p>Nos encontramos en un punto fácil.</p>
            </article>

            <article>
              <strong>04</strong>
              <p>Probamos lugares reales con historia.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <p className="eyebrow">Nosotros</p>
        <h2>Nacimos entre calles.</h2>
        <p>
          Entre Calles nace del amor por la Ciudad de México y por su forma más
          honesta de contar historias: la comida. Creemos que la ciudad no se
          conoce solo mirando monumentos. Se conoce mordiendo un taco, oliendo
          el comal, entrando a un mercado, probando una salsa y escuchando a la
          gente que cocina todos los días.
        </p>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

function TourPage({ tour }) {
  return (
    <main>
      <section className="tour-hero">
        <Nav />

        <div className="tour-hero-inner">
          <p className="kicker">{tour.tag}</p>
          <h1>{tour.title}</h1>
          <p>{tour.text}</p>
        </div>
      </section>

      <section className="tour-detail-section">
        <div className="tour-detail-grid">
          <div>
            <p className="eyebrow">Duración</p>
            <h3>{tour.duration}</h3>
          </div>

          <div>
            <p className="eyebrow">Ideal para</p>
            <h3>{tour.ideal}</h3>
          </div>

          <div>
            <p className="eyebrow">Incluye</p>
            <h3>Degustaciones, bebidas seleccionadas y anfitrión local.</h3>
          </div>
        </div>

        <div className="tour-cta">
          <h2>¿Te late esta ruta?</h2>
          <p>
            Escríbenos con tus fechas, número de personas, idioma y
            restricciones alimentarias.
          </p>
          <a className="button red" href="#contacto">
            Reservar esta experiencia
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

function EnglishPage() {
  return (
    <main>
      <section className="tour-hero">
        <Nav />

        <div className="tour-hero-inner">
          <p className="kicker">Mexico City · Food Tours</p>
          <h1>Taste Mexico City between the streets.</h1>
          <p>
            Food walks through markets, taquerías, cantinas and hidden
            neighbourhood corners. Simple, local and full of flavour.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Experiences</p>
          <h2>Markets, tacos, cantinas and private routes.</h2>
        </div>

        <div className="tour-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.slug}>
              <span>{tour.tag}</span>
              <div>
                <h3>{tour.title}</h3>
                <p>{tour.intro}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-inner">
        <img src={bannerImage} alt="Entre Calles" />

        <p className="eyebrow light">Reservas</p>
        <h2>¿Listo para probar la CDMX?</h2>
        <p>
          Escríbenos con tus fechas, número de personas, idioma, tipo de
          experiencia y restricciones alimentarias.
        </p>

        <div className="contact-actions">
          <a className="button light" href="https://wa.me/5210000000000">
            WhatsApp
          </a>
          <a
            className="button outline"
            href="https://instagram.com/entrecallesmexico"
          >
            Instagram
          </a>
          <a className="button outline" href="mailto:hola@entrecalles.mx">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>Entre Calles</strong>
        <p>Recorridos gastronómicos en Ciudad de México.</p>
      </div>

      <div className="footer-links">
        <a href="https://instagram.com/entrecallesmexico">@entrecallesmexico</a>
        <button onClick={() => navigate('/en')}>English version</button>
      </div>
    </footer>
  );
}

function App() {
  const path = window.location.pathname;
  const tourSlug = path.replace('/tours/', '');
  const tour = tours.find((item) => item.slug === tourSlug);

  if (path === '/en') return <EnglishPage />;
  if (tour) return <TourPage tour={tour} />;

  return <HomePage />;
}

export default App;