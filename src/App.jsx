import { ArrowDown, ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    name: 'Movie Review Mine',
    type: 'WEB APP · 2026',
    summary: 'A movie review platform for discovering, rating, and exploring films with a modern user experience.',
    image: 'photo-1489599849927-2ee91cede3ba',
    alt: 'Movie theater screen and seats',
    color: 'project-lime',
    tags: ['React', 'API Integration', 'Responsive UI'],
    link: 'https://movie-review-mine.netlify.app/',
  },
  {
    number: '02',
    name: 'Gilded Genie',
    type: 'WEB APP · 2026',
    summary: 'A modern pantry management app for organizing food items and managing inventory.',
    image: 'photo-1524758631624-e2822e304c36',
    alt: 'Modern Pantry',
    color: 'project-blue',
    tags: ['React', 'UI Design', 'Frontend'],
    link: 'https://gilded-genie-2306d8.netlify.app/',
  },
  {
    number: '03',
    name: 'Recipe Share',
    type: 'WEB APP · 2026',
    summary: 'A community-inspired recipe sharing app for browsing, saving, and discovering favorite dishes.',
    image: 'photo-1547592180-85f173990554',
    alt: 'Fresh ingredients and recipe preparation',
    color: 'project-peach',
    tags: ['React', 'State Management', 'UX'],
    link: 'https://recipe-share-1.netlify.app/',
  },
  {
    number: '04',
    name: 'Future Project',
    type: 'COMING SOON · 2026',
    summary: 'A new product or feature in progress, designed to showcase the next chapter of my work.',
    image: 'photo-1522202176988-66273c2fd55f',
    alt: 'Team planning and collaboration in front of a screen',
    color: 'project-blue',
    tags: ['Planning', 'Strategy', 'Build in progress'],
    link: '#work',
    comingSoon: true,
  },
]

const capabilities = ['React & TypeScript', 'Product engineering', 'Design systems', 'Performance & accessibility']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Kamala kannan R, home">
          <span className="wordmark-mark">K.</span>
          <span className="wordmark-name">Kamala kannan R<span className="wordmark-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> SOFTWARE DEVELOPER</p>
            <h1 id="hero-title">Building reliable web experiences<br />with <span>clarity</span> and impact.</h1>
            <div className="hero-bottom">
              <p className="hero-intro">Experienced Software Developer with 9+ years in the IT industry, specializing in PHP, Laravel, JavaScript, React.js, and Vue.js. I design and deliver high-quality web applications across CRM, financial services, and e-commerce.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={21} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="portrait"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
              alt="Abstract professional illustration"
              fetchPriority="high"
            />
            <div className="portrait-caption"><span>IN THE DETAILS.</span><span>AND THE BIG PICTURE.</span></div>
          </div>
          <div className="hero-index"><span>FULL-STACK ENGINEER</span><span>PHP · LARAVEL · JAVASCRIPT · REACT · VUE</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div>
        </section>

        <section className="work section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">A FEW GOOD BUILDS <span>↘</span></p><h2 id="work-title">Selected work<span className="heading-period">.</span></h2></div>
            <p className="section-aside">A little bit of what I do,<br />and a lot of why I do it.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project ${project.color}`} key={project.number}>
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1200&q=80`}
                    alt={project.alt}
                    loading="lazy"
                  />
                  <span className="project-number">/{project.number}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3></div>
                    <a
                      href={project.link}
                      target={project.comingSoon ? undefined : '_blank'}
                      rel={project.comingSoon ? undefined : 'noreferrer'}
                      aria-label={project.comingSoon ? `Future project coming soon` : `Open ${project.name} project`}
                      onClick={project.comingSoon ? (event) => event.preventDefault() : undefined}
                    >
                      <ArrowUpRight className="project-arrow" size={23} />
                    </a>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="tag-list" aria-label={`${project.name} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">A small selection of collaborative work. More details available on request.</p>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-inner section-wrap">
            <div className="about-title-block"><p className="eyebrow">A LITTLE ABOUT ME <span>↘</span></p><h2 id="about-title">Good work starts<br />with <span>good questions.</span></h2></div>
            <div className="about-copy">
              <p className="about-lede">Experienced Software Developer with over 9+ years in the IT industry, specializing in web application development using PHP, Laravel, JavaScript, React.js and Vue.js.</p>
              <p>I have delivered high-quality software solutions across CRM systems, financial services, and e-commerce, with a focus on performance optimization, secure application development, and intuitive user experiences.</p>
              <p>My work combines strong backend fundamentals with polished frontend execution, and I enjoy collaborating closely with teams to bring ideas from concept to deployment.</p>
              <ul className="capability-list">
                {['PHP & Laravel', 'JavaScript & React', 'Vue.js', 'Node.js', 'MySQL', 'MongoDB', 'Git/GitHub', 'REST APIs', 'Database Design', 'Performance & Security'].map((capability) => <li key={capability}><span className="capability-dot" />{capability}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow"><span className="availability-dot" /> OPEN TO THE RIGHT NEXT THING</p>
          <div className="contact-main"><h2 id="contact-title">Have a good one<br />in <span>the works?</span></h2><a className="contact-button" href="mailto:hello@alexmorgan.dev">Tell me about it <ArrowUpRight size={18} /></a></div>
          <div className="contact-bottom"><span>GOOD CONVERSATIONS START SOMEWHERE.</span><div className="social-links"><a href="https://github.com" aria-label="GitHub profile">GH</a><a href="https://linkedin.com" aria-label="LinkedIn profile">IN</a><a href="mailto:hello@alexmorgan.dev" aria-label="Email Alex Morgan">EMAIL <ArrowUpRight size={14} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-mark" href="#home">K.</a><span>DESIGNED WITH INTENTION. BUILT TO WORK.</span><span>© {new Date().getFullYear()} KAMALA KANNAN R</span></footer>
    </>
  )
}

export default App