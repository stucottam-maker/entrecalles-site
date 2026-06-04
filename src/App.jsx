import { useEffect, useState } from 'react';

const bannerImage =
  'https://www.dropbox.com/scl/fi/is2u2sd8h2p6kmaheofu6/banner-2.png?rlkey=qs3j8858g2np7x4krkw1j2hnx&st=p5e33c0g&raw=1';

const tourImages = {
  mole:
    'https://www.dropbox.com/scl/fi/bs3ropk51dw2vflo5ybwo/mole-cazuela-square-placeholder.jpg?rlkey=asxqqioyajpm3chn66di1wm98&st=0v2mwfjf&raw=1',
  antojitos:
    'https://www.dropbox.com/scl/fi/ptbc81ipxn28czjz9r0wx/mesa-antojitos-square-placeholder.jpg?rlkey=qvlrehpga9nf9uhkphsi470q6&st=006yjhqh&raw=1',
  mercado:
    'https://www.dropbox.com/scl/fi/vt4oexbd60vsyugelcq2p/mercado-chiles-square-placeholder.jpg?rlkey=7x835zxj9rxtw80hd0srz0mvv&st=syk61n3e&raw=1',
};

const tours = [
  {
    slug: 'tacos',
    title: 'Ruta de Tacos',
    tag: 'Trompo · Comal · Salsa',
    image: tourImages.antojitos,
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
    image: tourImages.mercado,
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
    image: tourImages.mole,
    intro: 'Barras, botanas, mezcal, pulque y cantinas de barrio.',
    text:
      'Una ruta para entender la CDMX desde otra mesa: bebidas tradicionales, botanas, cantinas y conversación. Más que beber, es entrar a una parte viva de la ciudad.',
    duration: '3 horas',
    ideal: 'Parejas · Amigos · Viajeros adultos',
  },
  {
    slug: 'privada',
    title: 'Experiencia Privada',
    tag: 'A medida · Grupos · Especiales',
    image: tourImages.antojitos,
    intro: 'Una ruta personalizada según tus gustos, fechas y grupo.',
    text:
      'Diseñamos experiencias privadas para viajeros, familias, chefs, marcas, prensa, equipos de trabajo y personas que quieren algo más personal.',
    duration: 'A medida',
    ideal: 'Chefs · Marcas · Familias · Empresas',
  },
];

function cleanPath(path) {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '');
}

function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('locationchange'));
}

function Nav() {
  return (
    <header className="site-nav">
      <button className="nav-logo" onClick={() => navigate('/')}>
        <img src={bannerImage} alt="Entre Calles" />
      </button>

      <nav>
        <button onClick={() => navigate('/')}>Inicio</button>
        <button onClick={() => navigate('/experiencias')}>Experiencias</button>
        <button onClick={() => navigate('/privados')}>Privados</button>
        <button onClick={() => navigate('/nosotros')}>Nosotros</button>
        <button onClick={() => navigate('/contacto')}>Contacto</button>
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
      <section className="hero">
        <Nav />

        <div className="hero-inner">
          <p className="hero-kicker">Ciudad de México · Food Tours</p>

          <h1>
            Saborea la CDMX
            <br />
            entre calles.
          </h1>

          <p className="hero-subtitle">
            Mercados, taquerías, cantinas y rincones de barrio. Caminamos,
            comemos y contamos la ciudad desde sus sabores más reales.
          </p>

          <div className="hero-actions">
            <button
              className="button dark"
              onClick={() => navigate('/experiencias')}
            >
              Ver experiencias
            </button>
            <button
              className="button light"
              onClick={() => navigate('/contacto')}
            >
              Reservar
            </button>
          </div>
        </div>
      </section>

      <section className="slogan-strip">
        <p>Llevamos tu paladar al límite.</p>
      </section>

      <section className="intro home-intro">
        <div>
          <p className="eyebrow">Qué hacemos</p>
          <h2>La ciudad se entiende mejor comiendo.</h2>
        </div>

        <p>
          Recorridos gastronómicos por la Ciudad de México para conocer mercados,
          puestos, comales, barras, esquinas, salsas y conversaciones.
        </p>
      </section>

      <ImageStrip />

      <section className="home-cta">
        <p className="eyebrow">Experiencias</p>
        <h2>Elige una ruta y sal a comer la ciudad.</h2>
        <button className="button red" onClick={() => navigate('/experiencias')}>
          Ver todas las experiencias
        </button>
      </section>

      <Footer />
    </main>
  );
}

function ImageStrip() {
  return (
    <section className="image-strip">
      <article className="image-card image-card-large">
        <img
          src={tourImages.mercado}
          alt="Mercado gastronómico en Ciudad de México"
        />
        <span>Mercados</span>
      </article>

      <article className="image-card">
        <img src={tourImages.mole} alt="Cocina tradicional mexicana" />
        <span>Cocina viva</span>
      </article>

      <article className="image-card">
        <img src={tourImages.antojitos} alt="Antojitos mexicanos" />
        <span>Antojitos</span>
      </article>
    </section>
  );
}

function ExperiencesPage() {
  return (
    <main>
      <section className="page-hero">
        <Nav />

        <div className="page-hero-inner">
          <p className="hero-kicker">Experiencias</p>
          <h1>Rutas sencillas, reales y llenas de sabor.</h1>
          <p>
            Elige entre tacos, mercados, cantinas o una experiencia privada hecha
            a tu medida.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="tour-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.slug}>
              <div className="tour-card-image">
                <img src={tour.image} alt={tour.title} />
              </div>

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

      <Footer />
    </main>
  );
}

function PrivatePage() {
  const privateTour = tours.find((item) => item.slug === 'privada');

  return (
    <main>
      <section className="page-hero">
        <Nav />

        <div className="page-hero-inner">
          <p className="hero-kicker">Tours privados</p>
          <h1>Una ruta hecha para ti.</h1>
          <p>
            Diseñamos experiencias privadas para parejas, familias, chefs,
            marcas, prensa, equipos de trabajo y viajeros que quieren algo más
            personal.
          </p>
        </div>
      </section>

      <section className="tour-detail-section">
        <div className="tour-page-image">
          <img src={privateTour.image} alt={privateTour.title} />
        </div>

        <div className="tour-cta">
          <h2>Cuéntanos qué quieres probar.</h2>
          <p>
            Tacos, mercados, cocina regional, mezcal, vegetarianos,
            investigación gastronómica o una ruta para grupos especiales.
          </p>
          <button className="button red" onClick={() => navigate('/contacto')}>
            Pedir ruta privada
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <Nav />

        <div className="page-hero-inner">
          <p className="hero-kicker">Nosotros</p>
          <h1>Nacimos entre calles.</h1>
          <p>
            Entre Calles nace del amor por la Ciudad de México y por su forma más
            honesta de contar historias: la comida.
          </p>
        </div>
      </section>

      <section className="about-section">
        <p className="eyebrow">Nuestra historia</p>
        <h2>La comida como forma de entrar a la ciudad.</h2>
        <p>
          Creemos que la ciudad no se conoce solo mirando monumentos. Se conoce
          mordiendo un taco, oliendo el comal, entrando a un mercado, probando
          una salsa y escuchando a la gente que cocina todos los días.
        </p>
      </section>

      <ImageStrip />
      <Footer />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
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
          <p className="hero-kicker">{tour.tag}</p>
          <h1>{tour.title}</h1>
          <p>{tour.text}</p>
        </div>
      </section>

      <section className="tour-detail-section">
        <div className="tour-page-image">
          <img src={tour.image} alt={tour.title} />
        </div>

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
          <button className="button red" onClick={() => navigate('/contacto')}>
            Reservar esta experiencia
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function EnglishPage() {
  return (
    <main>
      <section className="page-hero">
        <Nav />

        <div className="page-hero-inner">
          <p className="hero-kicker">Mexico City · Food Tours</p>
          <h1>Taste Mexico City between the streets.</h1>
          <p>
            Food walks through markets, taquerías, cantinas and hidden
            neighbourhood corners. Simple, local and full of flavour.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="tour-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.slug}>
              <div className="tour-card-image">
                <img src={tour.image} alt={tour.title} />
              </div>

              <span>{tour.tag}</span>

              <div>
                <h3>{tour.title}</h3>
                <p>{tour.intro}</p>
              </div>

              <button onClick={() => navigate(`/tours/${tour.slug}`)}>
                View tour →
              </button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Contact() {
  return (
    <section className="contact-section">
      <Nav />

      <div id="contacto" className="contact-inner">
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
  const [path, setPath] = useState(cleanPath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(cleanPath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  const tourSlug = path.startsWith('/tours/')
    ? path.replace('/tours/', '')
    : '';

  const tour = tours.find((item) => item.slug === tourSlug);

  if (path === '/en') return <EnglishPage />;
  if (path === '/experiencias') return <ExperiencesPage />;
  if (path === '/privados') return <PrivatePage />;
  if (path === '/nosotros') return <AboutPage />;
  if (path === '/contacto') return <ContactPage />;
  if (tour) return <TourPage tour={tour} />;

  return <HomePage />;
}

export default App;