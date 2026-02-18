import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = {
    1: {
      title: "Building Scalable React Applications",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop&q=80",
      content: `
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the key principles and patterns that will help you create maintainable, performant applications.</p>

        <h2>1. Component Architecture</h2>
        <p>The foundation of any scalable React application is a well-thought-out component architecture. Follow these principles:</p>
        <ul>
          <li><strong>Single Responsibility:</strong> Each component should do one thing well</li>
          <li><strong>Composition over Inheritance:</strong> Build complex UIs from simple components</li>
          <li><strong>Container/Presentational Pattern:</strong> Separate logic from presentation</li>
        </ul>

        <h2>2. State Management</h2>
        <p>As your application grows, managing state becomes crucial. Consider these approaches:</p>
        <ul>
          <li><strong>Local State:</strong> Use useState for component-specific state</li>
          <li><strong>Context API:</strong> Share state across multiple components</li>
          <li><strong>Redux/Zustand:</strong> For complex global state management</li>
        </ul>

        <h2>3. Performance Optimization</h2>
        <p>Keep your application fast with these techniques:</p>
        <ul>
          <li>Use React.memo() to prevent unnecessary re-renders</li>
          <li>Implement code splitting with React.lazy()</li>
          <li>Optimize images and assets</li>
          <li>Use virtualization for long lists</li>
        </ul>

        <h2>4. Code Organization</h2>
        <p>Structure your project for maintainability:</p>
        <pre><code>src/
  components/
    common/
    features/
  hooks/
  utils/
  services/
  pages/</code></pre>

        <h2>Conclusion</h2>
        <p>Building scalable React applications is an ongoing journey. By following these best practices and continuously refactoring your code, you'll create applications that are easy to maintain and extend.</p>
      `
    },
    2: {
      title: "The Future of Web Development",
      date: "Feb 10, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop&q=80",
      content: `
        <h2>Introduction</h2>
        <p>The web development landscape is evolving rapidly. Let's explore the emerging trends and technologies that are shaping the future of how we build for the web.</p>

        <h2>1. AI-Powered Development</h2>
        <p>Artificial Intelligence is revolutionizing how we write code:</p>
        <ul>
          <li><strong>GitHub Copilot:</strong> AI pair programming assistant</li>
          <li><strong>ChatGPT:</strong> Code generation and debugging help</li>
          <li><strong>Automated Testing:</strong> AI-generated test cases</li>
        </ul>

        <h2>2. Edge Computing</h2>
        <p>Moving computation closer to users for better performance:</p>
        <ul>
          <li>Vercel Edge Functions</li>
          <li>Cloudflare Workers</li>
          <li>AWS Lambda@Edge</li>
        </ul>

        <h2>3. Web3 and Blockchain</h2>
        <p>Decentralized applications are gaining traction:</p>
        <ul>
          <li>Smart contracts and DApps</li>
          <li>NFT marketplaces</li>
          <li>Decentralized identity systems</li>
        </ul>

        <h2>4. Progressive Web Apps (PWAs)</h2>
        <p>Bridging the gap between web and native apps:</p>
        <ul>
          <li>Offline functionality</li>
          <li>Push notifications</li>
          <li>App-like experience</li>
        </ul>

        <h2>5. WebAssembly</h2>
        <p>Running high-performance code in the browser:</p>
        <ul>
          <li>Near-native performance</li>
          <li>Support for multiple languages (Rust, C++, Go)</li>
          <li>Gaming and multimedia applications</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The future of web development is exciting and full of possibilities. Staying updated with these trends will help you build better, faster, and more innovative applications.</p>
      `
    },
    3: {
      title: "UI/UX Design Principles That Matter",
      date: "Feb 5, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop&q=80",
      content: `
        <h2>Introduction</h2>
        <p>Great design is invisible. It's about creating experiences that feel natural and intuitive. Let's explore the fundamental principles that every developer should understand.</p>

        <h2>1. Visual Hierarchy</h2>
        <p>Guide users' attention to what matters most:</p>
        <ul>
          <li><strong>Size:</strong> Larger elements draw more attention</li>
          <li><strong>Color:</strong> Use contrast to highlight important elements</li>
          <li><strong>Spacing:</strong> White space creates focus</li>
          <li><strong>Typography:</strong> Font weight and style convey importance</li>
        </ul>

        <h2>2. Consistency</h2>
        <p>Create a cohesive experience throughout your application:</p>
        <ul>
          <li>Use a design system or component library</li>
          <li>Maintain consistent spacing and sizing</li>
          <li>Keep navigation patterns predictable</li>
          <li>Use consistent terminology</li>
        </ul>

        <h2>3. Accessibility</h2>
        <p>Design for everyone, including users with disabilities:</p>
        <ul>
          <li>Ensure sufficient color contrast (WCAG AA: 4.5:1)</li>
          <li>Provide keyboard navigation</li>
          <li>Add alt text to images</li>
          <li>Use semantic HTML</li>
        </ul>

        <h2>4. Feedback and Response</h2>
        <p>Let users know what's happening:</p>
        <ul>
          <li>Loading states for async operations</li>
          <li>Success/error messages</li>
          <li>Hover and active states for interactive elements</li>
          <li>Progress indicators for multi-step processes</li>
        </ul>

        <h2>5. Mobile-First Design</h2>
        <p>Start with mobile and scale up:</p>
        <ul>
          <li>Touch-friendly tap targets (minimum 44x44px)</li>
          <li>Simplified navigation</li>
          <li>Optimized images and assets</li>
          <li>Responsive typography</li>
        </ul>

        <h2>6. Performance Perception</h2>
        <p>Make your app feel fast:</p>
        <ul>
          <li>Skeleton screens while loading</li>
          <li>Optimistic UI updates</li>
          <li>Smooth animations (60fps)</li>
          <li>Instant feedback on interactions</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Good UI/UX design is about empathy and understanding your users. By following these principles, you'll create experiences that users love and remember.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-detail-container">
        <div className="blog-not-found">
          <h1>Blog post not found</h1>
          <button onClick={() => navigate('/')} className="back-button">
            <ArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <button onClick={() => navigate('/')} className="back-button">
        <ArrowLeft /> Back to Home
      </button>

      <article className="blog-detail">
        <div className="blog-detail-header">
          <span className="blog-detail-category">{post.category}</span>
          <h1 className="blog-detail-title">{post.title}</h1>
          
          <div className="blog-detail-meta">
            <span className="meta-item">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="blog-detail-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="blog-detail-footer">
          <button onClick={() => navigate('/')} className="back-button-bottom">
            <ArrowLeft /> Back to All Posts
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
