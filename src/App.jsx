const experiences = [
  {
    title: 'Ruta de Tacos',
    tag: 'Trompo · Comal · Salsa',
    text: 'Una caminata por taquerías, puestos y sabores esenciales de la ciudad. Pastor, suadero, campechano, carnitas y salsas que cuentan la CDMX desde la calle.',
  },
  {
    title: 'Mercado y Desayuno',
    tag: 'Mercado · Antojitos · Mañana',
    text: 'Pasillos llenos de color, jugos, tamales, quesadillas, fruta, guisados y antojitos. Una forma real de empezar el día como se vive en la ciudad.',
  },
  {
    title: 'Cantinas y Mezcal',
    tag: 'Botanas · Pulque · Mezcal',
    text: 'Una ruta por barras, botanas, mezcal, pulque y cantinas de barrio. Comida, bebida y conversación para entender otro lado de la CDMX.',
  },
  {
    title: 'Experiencia Privada',
    tag: 'A medida · Grupos · Especiales',
    text: 'Creamos una ruta según tus gustos: tacos, mercados, cocina regional, mezcal, opciones vegetarianas, chefs, marcas, familias o grupos privados.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Elige la ruta',
    text: 'Escoge la experiencia, fecha y número de personas.',
  },
  {
    number: '02',
    title: 'Reserva fácil',
    text: 'Escríbenos por WhatsApp, Instagram o email.',
  },
  {
    number: '03',
    title: 'Nos encontramos',
    text: 'Te mandamos el punto exacto antes del tour.',
  },
  {
    number: '04',
    title: 'Camina y come',
    text: 'Probamos lugares reales y contamos la historia detrás de cada parada.',
  },
];

function App() {
  return (
    <main>
      <section id="inicio" className="hero">
        <header className="hero-nav">
          <a href="#inicio" className="nav-logo">
            <img src="/entre-calles-logo.png" alt="Entre Calles" />
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
            className="hero-logo"
            src="/entre-calles-logo.png"
            alt="Entre Calles - Llevamos tu paladar al límite"
          />

          <div className="hero-copy">
            <p className="kicker">Ciudad de México · Food Tours</p>

            <h1>Recorridos gastronómicos entre calles.</h1>

            <p>
              Mercados, taquerías, cantinas y rincones de barrio para probar la CDMX
              como se vive de verdad: caminando, comiendo y escuchando sus historias.
            </p>

            <div className="hero-actions">
              <a className="button dark" href="#experiencias">
                Ver experiencias
              </a>
              <a className="button light" href="#contacto">
                Reservar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <p>Llevamos tu paladar al límite.</p>
      </section>

      <section className="intro section">
        <div className="narrow">
          <p className="eyebrow">Qué hacemos</p>
          <h2>La ciudad se entiende mejor comiendo.</h2>
          <p>
            Entre Calles crea recorridos gastronómicos para quienes quieren conocer la
            Ciudad de México más allá de lo obvio. No solo restaurantes: mercados,
            puestos, comales, barras, esquinas, salsas y conversaciones.
          </p>
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
              <div>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="red-panel">
        <div className="split">
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

      <section id="privados" className="section private-section">
        <div className="private-card">
          <p className="eyebrow">Tours privados</p>
          <h2>Una ruta hecha para ti.</h2>
          <p>
            Diseñamos experiencias privadas para parejas, familias, chefs, marcas,
            prensa, equipos de trabajo y viajeros que quieren algo más personal.
          </p>
          <a className="button red" href="#contacto">
            Pedir ruta privada
          </a>
        </div>
      </section>

      <section id="nosotros" className="section about-section">
        <div className="narrow">
          <p className="eyebrow">Nosotros</p>
          <h2>Nacimos entre calles.</h2>
          <p>
            Entre Calles nace del amor por la Ciudad de México y por su forma más
            honesta de contar historias: la comida. Creemos que la ciudad no se conoce
            solo mirando monumentos. Se conoce mordiendo un taco, oliendo el comal,
            entrando a un mercado, probando una salsa y escuchando a la gente que
            cocina todos los días.
          </p>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-inner">
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