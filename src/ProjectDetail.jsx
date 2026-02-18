import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Github, Users, TrendingUp, Award, ArrowUpRight } from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    1: {
      title: "FinFlow",
      category: "FinTech",
      tagline: "Real-time payment orchestration platform",
      year: "2024",
      client: "FinTech Startup",
      duration: "4 months",
      team: "5 developers",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
      tech: ["React", "Node.js", "Redis", "PostgreSQL", "AWS", "Docker"],
      challenge: "The client needed a robust payment processing system that could handle high transaction volumes with minimal latency. The existing system was slow and couldn't scale to meet growing demand.",
      solution: "We built a microservices architecture using Node.js and Redis for caching. Implemented real-time transaction processing with WebSockets and optimized database queries. Used AWS Lambda for serverless functions to handle peak loads.",
      results: [
        { metric: "Transaction Speed", value: "< 100ms", improvement: "85% faster" },
        { metric: "Active Users", value: "10,000+", improvement: "300% growth" },
        { metric: "System Uptime", value: "99.99%", improvement: "From 95%" },
        { metric: "Cost Reduction", value: "40%", improvement: "Infrastructure" }
      ],
      features: [
        "Real-time payment processing",
        "Multi-currency support",
        "Fraud detection system",
        "Admin dashboard with analytics",
        "API integration with major banks",
        "Automated reconciliation"
      ],
      testimonial: {
        text: "KalKut transformed our payment infrastructure. The new system is lightning fast and has scaled beautifully with our growth.",
        author: "Rahul Sharma",
        role: "CTO, FinFlow"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80"
      ]
    },
    2: {
      title: "Pulse",
      category: "Health",
      tagline: "AI-driven wellness companion with mood tracking",
      year: "2024",
      client: "Healthcare Startup",
      duration: "5 months",
      team: "6 developers",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80",
      tech: ["React Native", "TensorFlow", "Firebase", "Python", "FastAPI"],
      challenge: "Mental health tracking apps lacked personalization and accurate mood prediction. Users needed an intelligent system that could provide actionable insights based on their daily patterns.",
      solution: "Developed a mobile app using React Native with TensorFlow Lite for on-device AI predictions. Implemented mood tracking with natural language processing to analyze journal entries. Created personalized wellness recommendations using machine learning.",
      results: [
        { metric: "User Rating", value: "4.9/5", improvement: "Top rated" },
        { metric: "Daily Sessions", value: "30,000+", improvement: "High engagement" },
        { metric: "User Growth", value: "+25%", improvement: "Monthly" },
        { metric: "Retention Rate", value: "78%", improvement: "Industry leading" }
      ],
      features: [
        "AI-powered mood prediction",
        "Daily wellness check-ins",
        "Personalized recommendations",
        "Meditation & breathing exercises",
        "Progress tracking & insights",
        "Community support groups"
      ],
      testimonial: {
        text: "Pulse has helped thousands of users improve their mental wellness. The AI features are incredibly accurate and helpful.",
        author: "Dr. Priya Patel",
        role: "Founder, Pulse Health"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80"
      ]
    },
    3: {
      title: "Nexus",
      category: "SaaS",
      tagline: "Team collaboration for remote-first companies",
      year: "2023",
      client: "Enterprise SaaS",
      duration: "6 months",
      team: "8 developers",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&q=80",
      tech: ["Vue.js", "GraphQL", "WebRTC", "AWS", "MongoDB", "Redis"],
      challenge: "Remote teams struggled with fragmented communication tools. They needed an all-in-one platform for video calls, messaging, and project management that actually worked seamlessly.",
      solution: "Built a comprehensive collaboration platform with real-time messaging using WebSockets, HD video conferencing with WebRTC, and integrated project management. Implemented GraphQL for efficient data fetching and AWS infrastructure for global scalability.",
      results: [
        { metric: "Active Teams", value: "500+", improvement: "Enterprise clients" },
        { metric: "Messages/Day", value: "10,000+", improvement: "High activity" },
        { metric: "Time Saved", value: "40%", improvement: "Per team" },
        { metric: "User Satisfaction", value: "92%", improvement: "NPS Score" }
      ],
      features: [
        "HD video conferencing",
        "Real-time messaging",
        "Screen sharing & recording",
        "Project management boards",
        "File sharing & collaboration",
        "Integration with 50+ tools"
      ],
      testimonial: {
        text: "Nexus has become the backbone of our remote operations. It's the only tool our team needs for collaboration.",
        author: "Arjun Mehta",
        role: "VP Engineering, TechCorp"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&q=80"
      ]
    },
    4: {
      title: "Astra",
      category: "E-commerce",
      tagline: "Next-gen shopping experience with AR try-on",
      year: "2023",
      client: "Fashion Retail",
      duration: "5 months",
      team: "7 developers",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80",
      tech: ["Next.js", "Three.js", "Stripe", "MongoDB", "AWS S3"],
      challenge: "Online fashion shopping had high return rates due to sizing issues. Customers couldn't visualize how products would look on them, leading to poor conversion rates.",
      solution: "Developed an AR-powered e-commerce platform using Three.js for 3D product visualization. Implemented virtual try-on features using computer vision. Integrated Stripe for seamless payments and built a recommendation engine using collaborative filtering.",
      results: [
        { metric: "Conversion Rate", value: "+65%", improvement: "Massive increase" },
        { metric: "Monthly Revenue", value: "₹50L+", improvement: "Growing fast" },
        { metric: "Return Rate", value: "-45%", improvement: "Significant drop" },
        { metric: "Active Customers", value: "30,000+", improvement: "Loyal base" }
      ],
      features: [
        "AR virtual try-on",
        "3D product visualization",
        "Size recommendation AI",
        "One-click checkout",
        "Wishlist & favorites",
        "Social sharing features"
      ],
      testimonial: {
        text: "Astra revolutionized our online sales. The AR feature is a game-changer that customers absolutely love.",
        author: "Sneha Kapoor",
        role: "CEO, Astra Fashion"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80"
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h1>Project not found</h1>
          <button onClick={() => navigate('/')} className="back-button">
            <ArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <button onClick={() => navigate('/')} className="back-button">
        <ArrowLeft /> Back to Home
      </button>

      <div className="project-detail">
        {/* Hero Section */}
        <div className="project-hero">
          <span className="project-category-badge">{project.category}</span>
          <h1 className="project-hero-title">{project.title}</h1>
          <p className="project-tagline">{project.tagline}</p>
          
          <div className="project-meta-grid">
            <div className="meta-item">
              <Calendar size={20} />
              <div>
                <span className="meta-label">Year</span>
                <span className="meta-value">{project.year}</span>
              </div>
            </div>
            <div className="meta-item">
              <Users size={20} />
              <div>
                <span className="meta-label">Team</span>
                <span className="meta-value">{project.team}</span>
              </div>
            </div>
            <div className="meta-item">
              <TrendingUp size={20} />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{project.duration}</span>
              </div>
            </div>
            <div className="meta-item">
              <Award size={20} />
              <div>
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="project-main-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Tech Stack */}
        <div className="project-section">
          <h2 className="section-heading">Technology Stack</h2>
          <div className="tech-stack-grid">
            {project.tech.map((tech, index) => (
              <div key={index} className="tech-badge">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <div className="project-section">
          <h2 className="section-heading">The Challenge</h2>
          <p className="section-text">{project.challenge}</p>
        </div>

        {/* Solution */}
        <div className="project-section">
          <h2 className="section-heading">Our Solution</h2>
          <p className="section-text">{project.solution}</p>
        </div>

        {/* Features */}
        <div className="project-section">
          <h2 className="section-heading">Key Features</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">✓</div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="project-section results-section">
          <h2 className="section-heading">Results & Impact</h2>
          <div className="results-grid">
            {project.results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-value">{result.value}</div>
                <div className="result-metric">{result.metric}</div>
                <div className="result-improvement">{result.improvement}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots && (
          <div className="project-section">
            <h2 className="section-heading">Screenshots</h2>
            <div className="screenshots-grid">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-item">
                  <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <div className="project-section testimonial-section">
            <div className="testimonial-card-large">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{project.testimonial.text}</p>
              <div className="testimonial-author-info">
                <div className="author-avatar">{project.testimonial.author.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <div className="author-name">{project.testimonial.author}</div>
                  <div className="author-role">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="project-cta">
          <h2>Interested in working together?</h2>
          <p>Let's discuss how we can help bring your project to life.</p>
          <button onClick={() => navigate('/#contact')} className="cta-button">
            Get in Touch
            <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Back Button */}
        <div className="project-footer">
          <button onClick={() => navigate('/')} className="back-button-bottom">
            <ArrowLeft /> Back to All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
