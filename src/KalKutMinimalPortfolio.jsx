import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin, ChevronDown, Code, Zap, Users, Award, Filter, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';
import './Portfolio.css';

const KalKutMinimalPortfolio = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const heroRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-GWEYP7LRFZ');
    ReactGA.send('pageview');

    // Loading animation
    setTimeout(() => setIsLoading(false), 1500);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { icon: Code, label: "Projects Delivered", value: 10, color: "#0A84FF", showPlus: true },
    { icon: Users, label: "Happy Clients", value: 8, color: "#30D158", showPlus: true },
    { icon: Zap, label: "Years Experience", value: 2, color: "#BF5AF2", showPlus: true },
    { icon: Award, label: "Awards Won", value: 3, color: "#FF9F0A", showPlus: false }
  ];

  const projects = [
    {
      id: 1,
      title: "FinFlow",
      category: "FinTech",
      description: "Real-time payment orchestration platform",
      year: "2024",
      metrics: { users: "10k+", uptime: "99.99%", speed: "< 100ms" },
      tech: ["React", "Node.js", "Redis", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #0A84FF 0%, #00D4FF 100%)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Pulse",
      category: "Health",
      description: "AI-driven wellness companion with mood tracking",
      year: "2024",
      metrics: { rating: "4.9/5", sessions: "30k+", growth: "+25%" },
      tech: ["React Native", "TensorFlow", "Firebase"],
      gradient: "linear-gradient(135deg, #30D158 0%, #00C7BE 100%)",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Nexus",
      category: "SaaS",
      description: "Team collaboration for remote-first companies",
      year: "2023",
      metrics: { teams: "500+", messages: "10k+", savings: "40% time" },
      tech: ["Vue.js", "GraphQL", "WebRTC", "AWS"],
      gradient: "linear-gradient(135deg, #BF5AF2 0%, #FF375F 100%)",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Astra",
      category: "E-commerce",
      description: "Next-gen shopping experience with AR try-on",
      year: "2023",
      metrics: { conversion: "+65%", revenue: "$50k+", customers: "30k+" },
      tech: ["Next.js", "Three.js", "Stripe", "MongoDB"],
      gradient: "linear-gradient(135deg, #FF9F0A 0%, #FF375F 100%)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    }
  ];

  const categories = ['All', 'FinTech', 'Health', 'SaaS', 'E-commerce'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const skills = [
    { name: "React", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 92 },
    { name: "Python", level: 85 },
    { name: "AWS", level: 60 },
    { name: "Docker", level: 87 },
    { name: "Vector DB", level: 83 },
    { name: "MongoDB", level: 90 }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision, goals, and requirements through detailed consultation.",
      duration: "1-2 weeks"
    },
    {
      number: "02",
      title: "Design",
      description: "Creating wireframes, prototypes, and visual designs that bring ideas to life.",
      duration: "2-3 weeks"
    },
    {
      number: "03",
      title: "Development",
      description: "Building robust, scalable solutions with clean code and best practices.",
      duration: "4-8 weeks"
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous quality assurance to ensure flawless performance and user experience.",
      duration: "1-2 weeks"
    },
    {
      number: "05",
      title: "Launch",
      description: "Smooth deployment with ongoing support and maintenance for your success.",
      duration: "1 week"
    }
  ];

  const faqs = [
    {
      question: "What services do we offer?",
      answer: "We offer comprehensive digital solutions including full-stack web development (React, Next.js, Node.js), mobile app development (React Native, Flutter), UI/UX design with user research and prototyping, cloud infrastructure setup and management (AWS, Azure), API development and integration, database design and optimization, and end-to-end digital transformation consulting. Our team specializes in building scalable, performant applications that drive real business results."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple landing page or portfolio website typically takes 2-4 weeks. Medium-complexity web applications with custom features take 6-10 weeks. Large-scale enterprise applications or mobile apps can take 3-6 months. We follow an agile methodology with regular sprints and milestones. During our discovery phase, we provide a detailed project timeline with clear deliverables and checkpoints to keep everything on track."
    },
    {
      question: "What is our pricing model?",
      answer: "We offer flexible pricing models to suit different project needs. Fixed-price projects work best for well-defined scopes with clear deliverables. Pricing depends on project complexity, features, and timeline. Generally, our projects start from ₹10,000 and scale based on requirements. Monthly retainers provide dedicated development resources for long-term partnerships. We also offer equity partnerships for promising startups. All pricing includes project management, quality assurance, and deployment. We provide detailed quotes after understanding your requirements."
    },
    {
      question: "Do we provide post-launch support?",
      answer: "Absolutely! We offer comprehensive post-launch support and maintenance packages. This includes 24/7 monitoring and bug fixes, regular security updates and patches, performance optimization and scaling, feature enhancements and improvements, monthly analytics reports, priority support via email/phone, and backup and disaster recovery. We typically offer 30 days of free support post-launch, followed by flexible monthly or annual maintenance plans starting from ₹15,000/month."
    },
    {
      question: "What technologies do we work with?",
      answer: "We specialize in modern, battle-tested technologies. Frontend: React, Next.js, Vue.js, TypeScript, Tailwind CSS. Backend: Node.js, Express, Python, Django, FastAPI. Mobile: React Native, Flutter. Databases: PostgreSQL, MongoDB, Redis, Firebase. Cloud: AWS, Azure, Google Cloud, Vercel, Netlify. DevOps: Docker, Kubernetes, CI/CD pipelines, GitHub Actions. We stay updated with the latest tech trends and choose the best stack based on your specific project requirements, scalability needs, and budget."
    },
    {
      question: "Can we work with existing teams?",
      answer: "Absolutely! We excel at collaborative work and seamlessly integrate with your existing development teams. We adapt to your workflows, coding standards, and communication preferences. Whether you use Jira, Slack, Microsoft Teams, or other tools, we fit right in. We can work as an extension of your team, taking ownership of specific modules or features, or provide specialized expertise in areas like performance optimization, architecture design, or UI/UX. We're experienced in remote collaboration across different time zones and maintain transparent communication throughout."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Product Manager, Wipro",
      content: "KalKut transformed our vision into reality. Their attention to detail and technical expertise is unmatched.",
      avatar: "RS"
    },
    {
      name: "Priya Patel",
      role: "Sales & Marketing Head, Arcade",
      content: "Working with KalKut was a game-changer. They delivered beyond our expectations, on time and on budget.",
      avatar: "PP"
    },
    {
      name: "Arjun Mehta",
      role: "Business Development Lead, Mankind Pharma",
      content: "The team's creativity and problem-solving skills are exceptional. Highly recommend for any serious project.",
      avatar: "AM"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large-scale React apps with performance in mind.",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&q=80"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the next generation of web apps.",
      date: "Feb 10, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
    },
    {
      id: 3,
      title: "UI/UX Design Principles That Matter",
      excerpt: "Essential design principles every developer should know to create better user experiences.",
      date: "Feb 5, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // EmailJS configuration
    emailjs.send(
      'service_bz1u5km',
      'template_246s3xr',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'OsOEngEWTID11A54v'
    )
    .then(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    })
    .catch(() => {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    });
  };

  return (
    <div className="portfolio-container">
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-logo">KALKUT</div>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      )}

      {/* Custom cursor glow */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
          opacity: scrollY < 100 ? 1 : 0
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-content">
          {/* Brand mark */}
          <div className="brand-mark animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="brand-text">KALKUT</div>
            <div className="brand-line"></div>
          </div>

          {/* Main headline with typing animation */}
          <div className="hero-headline animate-fade-in-up" style={{ 
            animationDelay: '0.3s', 
            animationFillMode: 'forwards'
          }}>
            <TypeAnimation
              sequence={[
                'We craft digital',
                1000,
                'We craft digital\nexperiences',
                1000,
                'We craft digital\nexperiences\nthat matter.',
                2000,
              ]}
              wrapper="h1"
              speed={40}
              style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              repeat={0}
              cursor={false}
            />
          </div>

          {/* Subheadline */}
          <p className="hero-subheadline animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Building products for tomorrow. Fast, beautiful, unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <button className="btn-primary">
              Start a project
              <ArrowUpRight className="btn-icon" />
            </button>
            <button onClick={scrollToProjects} className="btn-secondary">
              View work
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }} onClick={scrollToProjects}>
          <span className="scroll-text">SCROLL</span>
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section id="stats" ref={statsRef} className={`stats-section ${statsInView ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon className="stat-icon" style={{ color: stat.color }} />
                  </div>
                  <div className="stat-value">
                    {statsInView && <CountUp end={stat.value} duration={2.5} />}{stat.showPlus ? '+' : ''}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section with Filter */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Selected work</h2>
            <p className="section-subtitle">
              Projects that pushed boundaries and delivered real impact.
            </p>
          </div>

          {/* Category Filter */}
          <div className="project-filters">
            <Filter className="filter-icon" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project grid - original style */}
          <div className="projects-list">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="project-item"
                style={{
                  opacity: 0,
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="project-content">
                  <div className="project-main">
                    <div className="project-header">
                      <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-metrics">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric-item">
                        <span className="metric-key">{key}</span>
                        <span className="metric-value">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-arrow">
                    <ArrowUpRight className="arrow-icon" />
                  </div>
                </div>

                <div className="project-gradient-bar" style={{ background: project.gradient }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Progress Bars */}
      <section id="skills" className={`skills-section ${visibleSections.has('skills') ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title-center">Technologies We Master</h2>
          <div className="skills-progress-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-progress-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-bar-fill" 
                    style={{ 
                      width: visibleSections.has('skills') ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className={`process-section ${visibleSections.has('process') ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title-center">Our Process</h2>
          <p className="section-subtitle-center">From concept to launch, we follow a proven methodology</p>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-step"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="process-number">{step.number}</div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                  <span className="process-duration">{step.duration}</span>
                </div>
                {index < processSteps.length - 1 && <div className="process-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`testimonials-section ${visibleSections.has('testimonials') ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title-center">What Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="testimonial-content">"{testimonial.content}"</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`blog-section ${visibleSections.has('blog') ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title-center">Latest Insights</h2>
          <p className="section-subtitle-center">Thoughts on development, design, and technology</p>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="blog-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-divider">•</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read-more">
                    Read more
                    <ArrowUpRight className="blog-arrow" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`faq-section ${visibleSections.has('faq') ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title-center">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <ChevronDown className={`faq-icon ${activeFAQ === index ? 'rotate' : ''}`} />
                </div>
                <div className={`faq-answer ${activeFAQ === index ? 'show' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="section-container">
          <div className="capabilities-grid">
            <div className="capabilities-intro">
              <h2 className="section-title-small">What we do</h2>
              <p className="capabilities-text">
                We partner with ambitious teams to build products that scale. 
                From concept to launch, we handle the full stack.
              </p>
            </div>

            <div className="services-list">
              {[
                {
                  title: "Product Design",
                  description: "User research, interface design, prototyping. We create experiences users love."
                },
                {
                  title: "Engineering",
                  description: "Full-stack development with modern tech. Scalable, performant, maintainable."
                },
                {
                  title: "Growth",
                  description: "Analytics, optimization, automation. Data-driven decisions that move metrics."
                }
              ].map((service, i) => (
                <div key={i} className="service-item">
                  <div className="service-header">
                    <h3 className="service-title">{service.title}</h3>
                    <ArrowUpRight className="service-icon" />
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-divider" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="contact-title">
              Let's work
              <br />
              together.
            </h2>
            
            <div className="contact-info">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contactkalkut@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link">
                <Mail className="email-icon" />
                contactkalkut@gmail.com
              </a>
              <a href="tel:+919509058933" className="email-link">
                <Phone className="email-icon" />
                +91 9509058933
              </a>
              <a href="https://wa.me/917340591251" target="_blank" rel="noopener noreferrer" className="email-link">
                <MessageCircle className="email-icon" />
                +91 7340591251 (WhatsApp)
              </a>
              <div className="social-links">
                <a href="https://github.com/kalkut-devs" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github className="social-icon" />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin className="social-icon" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3 className="form-title">Start a conversation</h3>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name" 
                    className="form-input" 
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your email" 
                    className="form-input"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <textarea 
                  name="message"
                  placeholder="Tell us about your project" 
                  rows="4" 
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                />
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send message'}
                </button>
                {formStatus === 'success' && (
                  <p className="form-message success">Message sent</p>
                )}
                {formStatus === 'error' && (
                  <p className="form-message error">Failed to send. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-brand-text">KALKUT</div>
              <p className="footer-tagline">Where art meets vibe.</p>
            </div>
            <div className="footer-copyright">© 2024 All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KalKutMinimalPortfolio;
