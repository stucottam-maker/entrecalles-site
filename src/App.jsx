import { useEffect, useState } from 'react';

const bannerImage =
  'https://www.dropbox.com/scl/fi/lzqf6sdwjdbkiqxrxr4uj/entre-calles-banner.png?rlkey=fqd61nsibcgtmtrj788uvma6r&st=l9zz88gn&raw=1';

const heroImages = {
  inicio:
    'https://www.dropbox.com/scl/fi/7ygw4ntpo4c3sp9qjz8kv/a_wide_cinematic_street_scene_at_golden_hour_suns.jpg?rlkey=uidut7ey4rj6arjzmin4ucr7s&st=b48xteph&raw=1',

  experiencias:
    'https://www.dropbox.com/scl/fi/13owwjl8u3rpie9ow013d/entrecalles_experiencias_clean_hero.jpg?rlkey=m2awg3uulcdr0t2snpmgy18dd&st=8wz7f6dq&raw=1',

  nosotros:
    'https://www.dropbox.com/scl/fi/ml3y7dleva2f58utv0j5a/entrecalles_nosotros_clean_hero.jpg?rlkey=7608s68u4ssdrdah19zf5gyu4&st=rpqfeu7y&raw=1',

  contacto:
    'https://www.dropbox.com/scl/fi/nhxb68f1khjwwu7t57e5u/entrecalles_contacto_clean_hero.jpg?rlkey=j1hcfx06ih0js0fdq3x9o30ih&st=l5h771o2&raw=1',
};

const tourImages = {
  mole:
    'https://www.dropbox.com/scl/fi/bs3ropk51dw2vflo5ybwo/mole-cazuela-square-placeholder.jpg?rlkey=asxqqioyajpm3chn66di1wm98&st=0v2mwfjf&raw=1',
  antojitos:
    'https://www.dropbox.com/scl/fi/ptbc81ipxn28czjz9r0wx/mesa-antojitos-square-placeholder.jpg?rlkey=qvlrehpga9nf9uhkphsi470q6&st=006yjhqh&raw=1',
  mercado:
    'https://www.dropbox.com/scl/fi/vt4oexbd60vsyugelcq2p/mercado-chiles-square-placeholder.jpg?rlkey=7x835zxj9rxtw80hd0srz0mvv&st=syk61n3e&raw=1',
};

const experiences = [
  {
    slug: 'tacos',
    title: 'Ruta de Tacos',
    kicker: 'Trompo · Comal · Salsa',
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
    kicker: 'Mañana · Mercado · Antojitos',
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
    kicker: 'Botanas · Pulque · Mezcal',
    image: tourImages.mole,
    intro: 'Barras, botanas, mezcal, pulque y cantinas de barrio.',
    text:
      'Una ruta para entender la CDMX desde otra mesa: bebidas tradicionales, botanas, cantinas y conversación. Más que beber, es entrar a una parte viva de la ciudad.',
    duration: '3 horas',
    ideal: 'Parejas · Amigos · Viajeros adultos',
  },
];

const rollingFormats = [
  {
    title: 'Día de mercado',
    text: 'Una ruta luminosa por mercados, sabores de mañana, antojitos y comida mexicana servida en movimiento.',
  },
  {
    title: 'Cena CDMX',
    text: 'Una experiencia nocturna: menú inspirado en barrios, luces de la ciudad y cocina mexicana con historia.',
  },
  {
    title: 'Mezcal y noche',
    text: 'Botanas, mezcal, pulque, cantinas y la ciudad vista desde otra ventana.',
  },
  {
    title: 'Ruta privada',
    text: 'Una experiencia bajo solicitud para marcas, grupos, prensa, chefs o eventos especiales.',
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
        <button onClick={() => navigate('/sobre-ruedas')}>Sobre ruedas</button>
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

function PhotoNav() {
  return (
    <div className="photo-nav" aria-label="Site navigation">
      <button aria-label="Inicio" onClick={() => navigate('/')} />
      <button aria-label="Experiencias" onClick={() => navigate('/experiencias')} />
      <button aria-label="Sobre ruedas" onClick={() => navigate('/sobre-ruedas')} />
      <button aria-label="Privados" onClick={() => navigate('/privados')} />
      <button aria-label="Nosotros" onClick={() => navigate('/nosotros')} />
      <button aria-label="Contacto" onClick={() => navigate('/contacto')} />
      <button aria-label="English" onClick={() => navigate('/en')} />
    </div>
  );
}

function ImageHero({
  image,
  alt,
  kicker,
  title,
  copy,
  children,
  centered = false,
  className = '',
  usePhotoNav = false,
}) {
  return (
    <section className={`image-hero ${className}`}>
      {usePhotoNav ? <PhotoNav /> : <Nav />}

      <div className="image-hero-bg">
        <img src={image} alt={alt} />
      </div>

      <div className={centered ? 'hero-content centered' : 'hero-content'}>
        <p className="hero-kicker">{kicker}</p>
        <h1 className="hero-title">{title}</h1>
        {copy && <p className="hero-copy">{copy}</p>}
        {children}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <ImageHero
        image={heroImages.inicio}
        alt="Entre Calles gastronomic experience in Mexico City"
        kicker="Ciudad de México · Food Experiences"
        title={
          <>
            Saborea la CDMX
            <br />
            entre calles.
          </>
        }
        copy="Recorridos gastronómicos, experiencias privadas y rutas itinerantes por la Ciudad de México. Mercados, taquerías, cantinas, mezcal, barrios y una ciudad que se entiende mejor comiendo."
        className="home-image-hero"
      >
        <div className="hero-actions">
          <button className="button light" onClick={() => navigate('/experiencias')}>
            Ver experiencias
          </button>
          <button className="button dark" onClick={() => navigate('/sobre-ruedas')}>
            Sobre ruedas
          </button>
        </div>
      </ImageHero>

      <section className="slogan-strip">
        <p>Llevamos tu paladar al límite.</p>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">Qué hacemos</p>
          <h2>Recorremos la CDMX por donde se come de verdad.</h2>
        </div>
        <p>
          Entre Calles crea experiencias gastronómicas para probar la ciudad
          desde sus mercados, puestos, barras, comales, cantinas y esquinas.
          Nada rígido. Nada de postal. Solo la ciudad viva, servida con salsa.
        </p>
      </section>

      <section className="feature-grid">
        <FeatureCard
          title="Experiencias a pie"
          text="Rutas por tacos, mercados, antojitos, cantinas y mezcal."
          button="Ver rutas"
          onClick={() => navigate('/experiencias')}
        />
        <FeatureCard
          title="Sobre ruedas"
          text="Una futura mesa en movimiento por la Ciudad de México."
          button="Conocer concepto"
          onClick={() => navigate('/sobre-ruedas')}
          featured
        />
        <FeatureCard
          title="Privados"
          text="Rutas personalizadas para viajeros, chefs, marcas y grupos."
          button="Pedir ruta"
          onClick={() => navigate('/privados')}
        />
      </section>

      <ImageStrip />

      <section className="home-cta">
        <p className="eyebrow">Reservas</p>
        <h2>Dinos qué quieres probar y armamos la ruta.</h2>
        <button className="button red" onClick={() => navigate('/contacto')}>
          Contactar
        </button>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ title, text, button, onClick, featured }) {
  return (
    <article className={featured ? 'feature-card featured' : 'feature-card'}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={onClick}>{button} →</button>
    </article>
  );
}

function ImageStrip() {
  return (
    <section className="image-strip">
      <article className="image-card">
        <img src={tourImages.mercado} alt="Mercado gastronómico en CDMX" />
        <span>Mercados</span>
      </article>

      <article className="image-card">
        <img src={tourImages.mole} alt="Cocina mexicana tradicional" />
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
      <ImageHero
        image={heroImages.experiencias}
        alt="Experiencias gastronómicas en CDMX"
        kicker="Experiencias"
        title={
          <>
            Rutas sencillas,
            <br />
            reales y llenas
            <br />
            de sabor.
          </>
        }
        copy="Tacos, mercados, cantinas y mezcal. Elige una ruta o pide una experiencia hecha a tu medida."
        className="experiences-image-hero"
        usePhotoNav
      />

      <section className="section">
        <div className="tour-grid">
          {experiences.map((tour) => (
            <article className="tour-card" key={tour.slug}>
              <div className="tour-card-image">
                <img src={tour.image} alt={tour.title} />
              </div>
              <span>{tour.kicker}</span>
              <h3>{tour.title}</h3>
              <p>{tour.intro}</p>
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

function RollingPage() {
  return (
    <main>
      <ImageHero
        image={heroImages.inicio}
        alt="Entre Calles gastronomic bus experience in Mexico City"
        kicker="Próximamente · CDMX"
        title={
          <>
            CDMX servida
            <br />
            sobre ruedas.
          </>
        }
        copy="Una experiencia gastronómica itinerante por la Ciudad de México: sabores de barrio, cocina mexicana, vistas urbanas y una mesa en movimiento."
        className="rolling-image-hero"
      >
        <div className="hero-actions">
          <button className="button light" onClick={() => navigate('/contacto')}>
            Quiero saber más
          </button>
          <button className="button dark" onClick={() => navigate('/experiencias')}>
            Ver experiencias
          </button>
        </div>
      </ImageHero>

      <section className="intro">
        <div>
          <p className="eyebrow">Sobre ruedas</p>
          <h2>Una mesa en movimiento por la Ciudad de México.</h2>
        </div>
        <p>
          Entre Calles sobre ruedas será una forma distinta de probar la CDMX:
          comida, bebidas, barrios, historias y vistas de la ciudad desde una
          experiencia itinerante.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Formatos posibles</p>
          <h2>De día, de noche o hecho a medida.</h2>
        </div>

        <div className="rolling-grid">
          {rollingFormats.map((item) => (
            <article className="rolling-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rolling-note">
        <p className="eyebrow">En desarrollo</p>
        <h2>Próximamente / bajo solicitud.</h2>
        <p>
          Esta experiencia está en desarrollo y dependerá de permisos, ruta,
          vehículo, seguridad, cocina y operación. Por ahora, estamos
          recopilando interés para experiencias privadas, colaboraciones y
          eventos especiales.
        </p>
        <button className="button red" onClick={() => navigate('/contacto')}>
          Registrar interés
        </button>
      </section>

      <Footer />
    </main>
  );
}

function PrivatePage() {
  return (
    <main>
      <section className="simple-hero">
        <Nav />
        <div className="simple-hero-inner">
          <p className="hero-kicker">Tours privados</p>
          <h1 className="hero-title">
            Una ruta
            <br />
            hecha para ti.
          </h1>
          <p className="hero-copy">
            Experiencias privadas para parejas, familias, chefs, marcas, prensa,
            equipos de trabajo y viajeros que quieren algo más personal.
          </p>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">A medida</p>
          <h2>Dinos el antojo. Nosotros armamos la ruta.</h2>
        </div>
        <p>
          Podemos diseñar rutas de tacos, mercados, cocina regional, mezcal,
          vegetarianas, nocturnas, familiares o enfocadas en investigación
          gastronómica.
        </p>
      </section>

      <ImageStrip />

      <section className="home-cta">
        <h2>¿Qué tipo de experiencia quieres?</h2>
        <button className="button red" onClick={() => navigate('/contacto')}>
          Pedir ruta privada
        </button>
      </section>

      <Footer />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <ImageHero
        image={heroImages.nosotros}
        alt="Entre Calles food story in CDMX"
        kicker="Nosotros"
        title={
          <>
            Nacimos
            <br />
            entre calles.
          </>
        }
        copy="Entre Calles nace del amor por la Ciudad de México y por su forma más honesta de contar historias: la comida."
        className="about-image-hero"
        usePhotoNav
      />

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

function TourPage({ tour }) {
  return (
    <main>
      <section className="simple-hero">
        <Nav />
        <div className="simple-hero-inner">
          <p className="hero-kicker">{tour.kicker}</p>
          <h1 className="hero-title">{tour.title}</h1>
          <p className="hero-copy">{tour.text}</p>
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
            Escríbenos con tus fechas, número de personas, idioma y restricciones
            alimentarias.
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

function ContactPage() {
  return (
    <main>
      <section className="image-hero contact-image-hero">
        <PhotoNav />

        <div className="image-hero-bg">
          <img src={heroImages.contacto} alt="Reservas Entre Calles CDMX" />
        </div>

        <div className="contact-hero-grid">
          <div className="contact-hero-copy">
            <p className="hero-kicker">Reservas</p>
            <h1 className="hero-title">
              ¿Listo para
              <br />
              probar la CDMX?
            </h1>
            <p className="hero-copy">
              Escríbenos con tus fechas, número de personas, idioma, tipo de
              experiencia y restricciones alimentarias.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactForm() {
  return (
    <div className="contact-form-wrap">
      <form
        className="contact-form"
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
      >
        <div className="form-row">
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>

        <div className="form-row">
          <input type="text" name="date" placeholder="Fecha aproximada" />
          <input type="text" name="guests" placeholder="Número de personas" />
        </div>

        <select name="experience" required defaultValue="">
          <option value="" disabled>
            Tipo de experiencia
          </option>
          <option value="Ruta de Tacos">Ruta de Tacos</option>
          <option value="Mercado y Desayuno">Mercado y Desayuno</option>
          <option value="Cantinas y Mezcal">Cantinas y Mezcal</option>
          <option value="Sobre ruedas">Sobre ruedas</option>
          <option value="Ruta privada">Ruta privada</option>
        </select>

        <textarea
          name="message"
          placeholder="Cuéntanos qué te gustaría probar, idioma, restricciones alimentarias o cualquier detalle."
          rows="5"
        />

        <button className="button light" type="submit">
          Enviar solicitud
        </button>
      </form>

      <div className="contact-actions contact-secondary">
        <a className="button outline" href="https://wa.me/5210000000000">
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
  );
}

function EnglishPage() {
  return (
    <main>
      <ImageHero
        image={heroImages.inicio}
        alt="Entre Calles gastronomic experience in Mexico City"
        kicker="Mexico City · Food Experiences"
        title={
          <>
            Taste Mexico City
            <br />
            between streets.
          </>
        }
        copy="Walking food tours, private routes and future gastronomic experiences on wheels through Mexico City."
        className="home-image-hero"
      >
        <div className="hero-actions">
          <button className="button light" onClick={() => navigate('/experiencias')}>
            See experiences
          </button>
          <button className="button dark" onClick={() => navigate('/contacto')}>
            Contact
          </button>
        </div>
      </ImageHero>

      <section className="intro">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>We explore Mexico City through the places where people really eat.</h2>
        </div>
        <p>
          Markets, taquerías, cantinas, mezcal, street food and neighbourhood
          stories. Simple, local and full of flavour.
        </p>
      </section>

      <section className="feature-grid">
        <FeatureCard
          title="Walking experiences"
          text="Tacos, markets, cantinas and mezcal across Mexico City."
          button="See experiences"
          onClick={() => navigate('/experiencias')}
        />
        <FeatureCard
          title="On wheels"
          text="A future dining route through the city, served in motion."
          button="Explore concept"
          onClick={() => navigate('/sobre-ruedas')}
          featured
        />
        <FeatureCard
          title="Private routes"
          text="Custom experiences for travellers, chefs, brands and groups."
          button="Contact us"
          onClick={() => navigate('/contacto')}
        />
      </section>

      <Footer />
    </main>
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

  const tour = experiences.find((item) => item.slug === tourSlug);

  if (path === '/en') return <EnglishPage />;
  if (path === '/experiencias') return <ExperiencesPage />;
  if (path === '/sobre-ruedas') return <RollingPage />;
  if (path === '/privados') return <PrivatePage />;
  if (path === '/nosotros') return <AboutPage />;
  if (path === '/contacto') return <ContactPage />;
  if (tour) return <TourPage tour={tour} />;

  return <HomePage />;
}

export default App;