import React, { useEffect, useRef, useState } from 'react';
import { 
  Briefcase, Users, Code, ChartPie, 
  Newspaper, Books, RocketLaunch, 
  Brain, Target, Lightbulb, ChatCircleText, Robot,
  EnvelopeSimple, TwitterLogo, InstagramLogo,
  Book, BriefcaseMetal, ChatsCircle
} from 'phosphor-react';
import Typed from 'typed.js';
import Particles from './Particles';
import FloatingElements from './FloatingElements';
import BackgroundWaves from './BackgroundWaves';
import MagneticButton from './MagneticButton';
import LoginForm from './LoginForm';
import Testimonials from './Testimonials';
import Footer from './Footer';
import CallToAction from './CallToAction';
import AuthModal from './AuthModal';

const FeatureCard = ({ title, icon: Icon, altIcon: AltIcon, tooltip }: {
  title: string; 
  icon: React.ElementType; 
  altIcon: React.ElementType;
  tooltip: string;
}) => {
  return (
    <div className="feature-card">
      <div className="feature-tooltip">{tooltip}</div>
      <div className="feature-icon">
        <Icon size={44} weight="duotone" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

const Dashboard = () => {
  const typedRef = useRef(null);
  const subtitleRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Your Path to Success',
        'Your Journey to Excellence',
        'Your Gateway to Growth'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 2000,
      smartBackspace: true
    });

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: [
        'AI-powered guidance for your career',
        'Personalized mentoring for growth',
        'Smart insights for your future'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
      smartBackspace: true
    });

    return () => {
      typed.destroy();
      subtitleTyped.destroy();
    };
  }, []);

  useEffect(() => {
    const handleParallax = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.005;

      document.querySelectorAll('.parallax-layer').forEach((layer: any) => {
        const depth = layer.getAttribute('data-depth') || 1;
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleParallax);
    return () => document.removeEventListener('mousemove', handleParallax);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (chatbotRef.current) {
        const rect = chatbotRef.current.getBoundingClientRect();
        const isNearChatbot = 
          e.clientX > rect.left - 100 && 
          e.clientX < rect.right + 100 &&
          e.clientY > rect.top - 100 && 
          e.clientY < rect.bottom + 100;
        
        setShowMessage(isNearChatbot);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { 
      title: 'Job Market Insights', 
      icon: ChartPie, 
      altIcon: Target,
      tooltip: 'Real-time analysis of job market trends' 
    },
    { 
      title: 'Mentor Guidance', 
      icon: Users, 
      altIcon: Brain,
      tooltip: 'Connect with experienced mentors for advice' 
    },
    { 
      title: 'Updates on Hackathons', 
      icon: Code, 
      altIcon: RocketLaunch,
      tooltip: 'Stay informed about upcoming hackathons' 
    },
    { 
      title: 'Student Dashboard', 
      icon: Briefcase, 
      altIcon: Lightbulb,
      tooltip: 'Manage your academic and career progress' 
    },
    { 
      title: 'Tech News & Events', 
      icon: Newspaper, 
      altIcon: RocketLaunch,
      tooltip: 'Latest updates on technology and events' 
    },
    { 
      title: 'Study Resources', 
      icon: Books, 
      altIcon: Brain,
      tooltip: 'Access a variety of study materials' 
    },
  ];

  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className="dashboard-container" onClick={createRipple}>
      <div className="aurora-container">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
      </div>
      <div className="background-dots"></div>
      <BackgroundWaves />
      <Particles />
      <FloatingElements />
      
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="logo" data-text="Career-Buddy">
            Career-Buddy
            <RocketLaunch weight="duotone" className="logo-icon" />
          </div>
        </div>

        <div className="nav-center">
          <div className="nav-links">
            <a href="#resources" className="nav-link">
              <Book weight="duotone" />
              <span>Resources</span>
            </a>
            <a href="#opportunities" className="nav-link">
              <BriefcaseMetal weight="duotone" />
              <span>Opportunities</span>
            </a>
            <a href="#community" className="nav-link">
              <ChatsCircle weight="duotone" />
              <span>Community</span>
            </a>
          </div>
        </div>

        <div className="nav-right">
          <button 
            className="login-button" 
            onClick={() => setShowAuthModal(true)}
          >
            Login
          </button>
        </div>
      </nav>

      {showAuthModal && (
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      )}

      <main>
        <section className="hero-section parallax-section">
          <h1 className="hero-title parallax-layer" data-depth="2">
            <span ref={typedRef}></span>
          </h1>
          <p className="hero-subtitle parallax-layer" data-depth="1.5">
            <span ref={subtitleRef}></span>
          </p>
        </section>

        <section className="features-section">
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                {...feature}
              />
            ))}
          </div>
        </section>

        <Testimonials />
        
        <CallToAction 
          title="Ready to Start Your Journey?"
          subtitle="Join thousands of students who have already found their path"
          buttonText="Get Started Free"
          onButtonClick={() => setShowLoginForm(true)}
        />
      </main>

      <Footer />
      
      <div className="chatbot-container" ref={chatbotRef}>
        {showMessage && (
          <div className="chatbot-message">
            👋 Hi! I'm your AI Career Assistant. I can help you:
            <ul style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
              <li>Explore career paths</li>
              <li>Review your resume</li>
              <li>Practice interviews</li>
              <li>Get personalized advice</li>
            </ul>
          </div>
        )}
        <div className="chatbot-button">
          <Robot 
            weight="duotone" 
            size={48} 
            className="chatbot-icon" 
            onClick={() => setShowMessage(!showMessage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
