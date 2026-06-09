import { useEffect, useState } from 'react';

const logo =
  'https://www.dropbox.com/scl/fi/lzqf6sdwjdbkiqxrxr4uj/entre-calles-banner.png?rlkey=fqd61nsibcgtmtrj788uvma6r&st=l9zz88gn&raw=1';

const heroImage =
  'https://www.dropbox.com/scl/fi/7ygw4ntpo4c3sp9qjz8kv/a_wide_cinematic_street_scene_at_golden_hour_suns.jpg?rlkey=uidut7ey4rj6arjzmin4ucr7s&st=b48xteph&raw=1';

const images = {
  mercado:
    'https://www.dropbox.com/scl/fi/vt4oexbd60vsyugelcq2p/mercado-chiles-square-placeholder.jpg?rlkey=7x835zxj9rxtw80hd0srz0mvv&st=syk61n3e&raw=1',
  antojitos:
    'https://www.dropbox.com/scl/fi/ptbc81ipxn28czjz9r0wx/mesa-antojitos-square-placeholder.jpg?rlkey=qvlrehpga9nf9uhkphsi470q6&st=006yjhqh&raw=1',
  mole:
    'https://www.dropbox.com/scl/fi/bs3ropk51dw2vflo5ybwo/mole-cazuela-square-placeholder.jpg?rlkey=asxqqioyajpm3chn66di1wm98&st=0v2mwfjf&raw=1',
  bus:
    'https://www.dropbox.com/scl/fi/7ygw4ntpo4c3sp9qjz8kv/a_wide_cinematic_street_scene_at_golden_hour_suns.jpg?rlkey=uidut7ey4rj6arjzmin4ucr7s&st=b48xteph&raw=1',
};

const experiences = [
  {
    title: 'Tacos',
    text: 'Taquerías icónicas, joyas escondidas, comal, trompo y salsa.',
    icon: '🌮',
  },
  {
    title: 'Mercado',
    text: 'Mercados tradicionales, ingredientes, antojitos y sabores de mañana.',
    icon: '🧺',
  },
  {
    title: 'Cantinas',
    text: 'Barras históricas, botanas, mezcal, pulque y buena charla.',
    icon: '🌵',
  },
  {
    title: 'Sobre ruedas',
    text: 'Próximamente: una mesa gastronómica en movimiento por la CDMX.',
    icon: '🚌',
  },
];

const packages = [
  {
    title: 'A pie',
    text: 'Recorridos caminando por barrios, mercados y callejones.',
    points: ['Grupos pequeños', 'Guía local', 'Degustaciones incluidas'],
  },
  {
    title: 'Privado',
    text: 'Experiencias privadas para parejas, amigos, marcas o equipos.',
    points: ['Itinerario personalizado', 'Horarios flexibles', 'Atención exclusiva'],
  },
  {
    title: 'Sobre ruedas',
    text: 'Muy pronto nuestra experiencia gastronómica sobre ruedas.',
    points: ['Mesa a bordo', 'Ruta gastronómica', 'Próximamente'],
  },
];

const includes = [
  'Degustaciones en cada parada',
  'Anfitrión local especializado',
  'Ruta cuidadosamente seleccionada',
  'Opciones vegetarianas y dietas consideradas',
];

const reviews = [
  {
    quote:
      'La mejor forma de conocer la CDMX es a través de su comida y su gente.',
    name: 'María, España',
  },
  {
    quote:
      'Mercados, tacos, cantinas y callejones que no encontrarías por tu cuenta.',
    name: 'John, Canadá',
  },
  {
    quote:
      'Experiencia auténtica, deliciosa y súper bien curada. Volvería sin pensarlo.',
    name: 'Sofía, México',
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

function Header() {
  return (
    <header className="header">
      <button className="logo-button" onClick={() => navigate('/')}>
        <img src={logo} alt="Entre Calles" />
      </button>

      <nav className="nav">
        <button onClick={() => navigate('/')}>Concepto</button>
        <button onClick={() => navigate('/experiencias')}>Experiencias</button>
        <button onClick={() => navigate('/sobre-ruedas')}>Sobre ruedas</button>
        <button onClick={() => navigate('/privados')}>Privados</button>
        <button onClick={() => navigate('/contacto')}>Contacto</button>
        <button onClick={() => navigate('/en')}>EN</button>
        <button className="nav-cta" onClick={() => navigate('/contacto')}>
          Reservar
        </button>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Food experiences · Ciudad de México</p>
          <h1>
            CDMX servida entre calles<span>.</span>
          </h1>
          <p>
            Recorridos gastronómicos por mercados, taquerías, cantinas y
            rincones de la Ciudad de México. Experiencias a pie, rutas privadas
            y próximamente una mesa sobre ruedas.
          </p>

          <div className="hero-actions">
            <button className="button red" onClick={() => navigate('/contacto')}>
              Reservar
            </button>
            <button
              className="button outline"
              onClick={() => navigate('/experiencias')}
            >
              Ver experiencias
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Food experience in Mexico City" />
        </div>
      </section>

      <section className="split-section">
        <div className="split-image">
          <img src={images.mercado} alt="Mercado gastronómico en CDMX" />
        </div>

        <div className="split-copy">
          <p className="eyebrow">Concepto</p>
          <h2>
            Una ciudad que se entiende comiendo<span>.</span>
          </h2>
          <p>
            Entre Calles crea recorridos gastronómicos por la CDMX para probar
            la ciudad desde sus calles, mercados, comales, barras y cantinas.
          </p>
          <p>
            No somos un restaurante. Somos el camino que te lleva a los mejores
            sabores.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-title centered">
          <p className="eyebrow">Experiencias</p>
          <h2>Elige tu recorrido</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.title}>
              <div className="experience-image">
                <img
                  src={
                    item.title === 'Tacos'
                      ? images.antojitos
                      : item.title === 'Mercado'
                        ? images.mercado
                        : item.title === 'Cantinas'
                          ? images.mole
                          : images.bus
                  }
                  alt={item.title}
                />
              </div>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="center-button">
          <button
            className="button outline-red"
            onClick={() => navigate('/experiencias')}
          >
            Ver todas las experiencias
          </button>
        </div>
      </section>

      <section className="section packages-section">
        <div className="section-title centered">
          <p className="eyebrow">Paquetes</p>
          <h2>Elige cómo vivir Entre Calles</h2>
        </div>

        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.title}>
              <div className="package-icon">
                {item.title === 'A pie' ? '🚶' : item.title === 'Privado' ? '👥' : '🚌'}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="include-section">
        <p className="eyebrow centered-text">Incluye en tu experiencia</p>
        <div className="include-grid">
          {includes.map((item) => (
            <div className="include-item" key={item}>
              <span>◎</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-title centered">
          <p className="eyebrow">Lo que dicen nuestros comensales</p>
          <h2>Historias que saben bien.</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <span>“</span>
              <p>{review.quote}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-strip">
        <div className="booking-image">
          <img src={images.mole} alt="Salsa mexicana" />
        </div>

        <div className="booking-copy">
          <p className="eyebrow">Reserva tu experiencia</p>
          <h2>
            ¿Listo para probar la CDMX entre calles?
          </h2>
          <p>
            Cuéntanos la fecha, número de personas y el tipo de experiencia que
            buscas. Te ayudamos a diseñar el recorrido perfecto.
          </p>

          <div className="booking-actions">
            <button className="button red" onClick={() => navigate('/contacto')}>
              Reservar ahora
            </button>
            <a className="soft-link" href="https://wa.me/5210000000000">
              WhatsApp
            </a>
            <a
              className="soft-link"
              href="https://instagram.com/entrecallesmexico"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SimplePage({ title, kicker, text }) {
  return (
    <main>
      <Header />
      <section className="simple-page">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="button red" onClick={() => navigate('/contacto')}>
          Reservar
        </button>
      </section>
      <Footer />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <Header />

      <section className="contact-page">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>
            Cuéntanos qué quieres probar<span>.</span>
          </h1>
          <p>
            Escríbenos con tus fechas, número de personas, idioma, tipo de
            experiencia y restricciones alimentarias.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="date" placeholder="Fecha aproximada" />
          <input type="text" name="guests" placeholder="Número de personas" />

          <select name="experience" required defaultValue="">
            <option value="" disabled>
              Tipo de experiencia
            </option>
            <option value="Tacos">Tacos</option>
            <option value="Mercado">Mercado</option>
            <option value="Cantinas">Cantinas</option>
            <option value="Privado">Privado</option>
            <option value="Sobre ruedas">Sobre ruedas</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Cuéntanos qué te gustaría probar."
          />

          <button className="button red" type="submit">
            Enviar solicitud
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

function EnglishPage() {
  return (
    <main>
      <Header />

      <section className="simple-page">
        <p className="eyebrow">Mexico City · Food Experiences</p>
        <h1>
          Taste Mexico City between streets<span>.</span>
        </h1>
        <p>
          Walking food tours, private routes and future gastronomic experiences
          on wheels through Mexico City.
        </p>
        <button className="button red" onClick={() => navigate('/contacto')}>
          Book now
        </button>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="Entre Calles" />
      </div>

      <div>
        <strong>Navegación</strong>
        <button onClick={() => navigate('/')}>Concepto</button>
        <button onClick={() => navigate('/experiencias')}>Experiencias</button>
        <button onClick={() => navigate('/sobre-ruedas')}>Sobre ruedas</button>
      </div>

      <div>
        <strong>Contacto</strong>
        <a href="mailto:hola@entrecalles.com">hola@entrecalles.com</a>
        <a href="https://instagram.com/entrecallesmexico">@entrecallesmexico</a>
        <span>Ciudad de México</span>
      </div>

      <div>
        <strong>Legal</strong>
        <button>Términos y condiciones</button>
        <button>Aviso de privacidad</button>
      </div>
    </footer>
  );
}

function App() {
  const [path, setPath] = useState(cleanPath(window.location.pathname));

  useEffect(() => {
    const updatePath = () => {
      setPath(cleanPath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', updatePath);
    window.addEventListener('locationchange', updatePath);

    return () => {
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('locationchange', updatePath);
    };
  }, []);

  if (path === '/experiencias') {
    return (
      <SimplePage
        kicker="Experiencias"
        title="Rutas gastronómicas por la CDMX."
        text="Tacos, mercados, cantinas, mezcal y recorridos privados para probar la ciudad desde sus calles."
      />
    );
  }

  if (path === '/sobre-ruedas') {
    return (
      <SimplePage
        kicker="Sobre ruedas"
        title="Una mesa en movimiento por la ciudad."
        text="Nuestro próximo formato: una experiencia gastronómica itinerante por la Ciudad de México."
      />
    );
  }

  if (path === '/privados') {
    return (
      <SimplePage
        kicker="Privados"
        title="Una ruta hecha para ti."
        text="Experiencias personalizadas para parejas, grupos, chefs, marcas, prensa y viajeros curiosos."
      />
    );
  }

  if (path === '/contacto') return <ContactPage />;
  if (path === '/en') return <EnglishPage />;

  return <HomePage />;
}

export default App;