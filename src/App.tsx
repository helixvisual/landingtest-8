import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Film, Mic, Youtube, CheckCircle, Video, Code, Zap, MinusCircle, PlusCircle, DollarSign, Star, Award, Crown, Plus, Palette, Lightbulb, Clock, BarChart3, Sparkles, Gift, Target, BarChart, LineChart, TrendingUp, Users, Calendar, Smartphone, Monitor, MessageSquare, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, X, Check, HelpCircle, Info } from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [heroScrolled, setHeroScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [activeBillingCycle, setActiveBillingCycle] = useState('monthly');
  const [activePricingCard, setActivePricingCard] = useState(1); // Default to middle card (Growth)
  const [activeAddOnCategory, setActiveAddOnCategory] = useState(0);
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    services: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    mission: useRef<HTMLElement>(null),
    unified: useRef<HTMLElement>(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if hero section is scrolled
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        setHeroScrolled(window.scrollY > 100);
      }
      
      // Check which sections are visible
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          setVisibleSections(prev => ({...prev, [key]: isVisible}));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "HelixVisual transformed our content strategy. Our engagement rates have doubled since working with them.",
      author: "Alex Morgan",
      role: "Content Creator, 1.2M Followers"
    },
    {
      quote: "The team at HelixVisual understands what makes content go viral. They've been instrumental to our growth.",
      author: "Sarah Chen",
      role: "Podcast Host, The Future Forward"
    },
    {
      quote: "Working with HelixVisual has been game-changing for our brand. Their editing style is unmatched.",
      author: "Marcus Johnson",
      role: "CEO, Elevate Media"
    }
  ];

  const youtubeShorts = [
    {
      id: "n_ySFZgdW7g",
      views: "7.3M+ Views"
    },
    {
      id: "PNDxUfuEkik",
      views: "1.7M+ Views"
    },
    {
      id: "JAK0oQytogI",
      views: "4.7M+ Views"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      icon: <Star className="h-6 w-6 text-blue-500" />,
      monthlyPrice: "$1,000–$2,000",
      quarterlyPrice: "$900–$1,800",
      period: "/month",
      description: "Perfect for individuals & small brands just getting started with video content. Ideal for establishing a consistent social media presence.",
      highlighted: false,
      features: [
        "4 short-form videos (≤ 60 sec each)",
        "1 consultation call for strategy",
        "Simple thumbnails (set of 4)",
        "Basic analytics (views, engagement, watch time)",
        "48-hour turnaround time",
        "1 round of revisions"
      ],
      cta: "Get Started"
    },
    {
      name: "Growth",
      icon: <Award className="h-6 w-6 text-blue-500" />,
      monthlyPrice: "$2,500–$4,000",
      quarterlyPrice: "$2,250–$3,600",
      period: "/month",
      description: "Designed for growing brands expanding across multiple platforms with customized content strategy and analytics.",
      highlighted: true,
      badge: "Most Popular",
      features: [
        "8 short-form videos per month",
        "1 long-form YouTube video (8-12 min)",
        "Full editing, color grading & optimization",
        "1-2 strategy calls per month + detailed report",
        "Custom thumbnails optimized for high CTR",
        "Multi-platform posting (YouTube, Instagram, TikTok)",
        "Monthly analytics & performance report"
      ],
      cta: "Scale Your Content"
    },
    {
      name: "Premium / VIP",
      icon: <Crown className="h-6 w-6 text-blue-500" />,
      monthlyPrice: "$5,000+",
      quarterlyPrice: "$4,500+",
      period: "/month",
      description: "Full-service solution with dedicated strategist and detailed performance reports to ensure maximum ROI on your content.",
      highlighted: false,
      features: [
        "12–16 short-form videos per month",
        "Up to 4 long-form videos (10-20 min)",
        "Advanced storytelling & motion graphics",
        "Full viral strategy: Weekly calls, editorial calendar",
        "Advanced thumbnails with A/B testing",
        "Full analytics: Audience retention, conversions, CTR",
        "Dedicated content strategist & priority support"
      ],
      cta: "Work With Us"
    }
  ];

  const comparisonFeatures = [
    {
      name: "Short-form Videos",
      starter: "4 videos/month",
      growth: "8 videos/month",
      premium: "12-16 videos/month"
    },
    {
      name: "Long-form Videos",
      starter: "—",
      growth: "1 video/month",
      premium: "Up to 4/month"
    },
    {
      name: "Strategy Calls",
      starter: "1 call/month",
      growth: "1-2 calls/month",
      premium: "Weekly calls"
    },
    {
      name: "Thumbnails",
      starter: "Simple",
      growth: "Custom",
      premium: "Advanced with A/B testing"
    },
    {
      name: "Analytics",
      starter: "Basic",
      growth: "Monthly report",
      premium: "Comprehensive + insights"
    },
    {
      name: "Turnaround Time",
      starter: "48 hours",
      growth: "36 hours",
      premium: "24-48 hours"
    },
    {
      name: "Revisions",
      starter: "1 round",
      growth: "2 rounds",
      premium: "Unlimited"
    },
    {
      name: "Dedicated Strategist",
      starter: "—",
      growth: "—",
      premium: "✓"
    }
  ];

  const popularAddOns = [
    {
      name: "Advanced Motion Graphics",
      description: "Custom animations and visual effects to make your content stand out",
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      price: "From $300"
    },
    {
      name: "Rush Delivery",
      description: "24-hour turnaround on select content when you need it fast",
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      price: "From $200"
    },
    {
      name: "Content Strategy",
      description: "Platform-specific growth planning and audience targeting",
      icon: <Lightbulb className="h-5 w-5 text-blue-500" />,
      price: "From $500"
    },
    {
      name: "A/B Thumbnail Testing",
      description: "Data-driven thumbnail optimization to increase click-through rates",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      price: "From $250"
    },
    {
      name: "Color Grading",
      description: "Professional cinematic color treatment for a polished look",
      icon: <Palette className="h-5 w-5 text-blue-500" />,
      price: "From $150"
    },
    {
      name: "Podcast Editing",
      description: "Long-form audio content optimization and enhancement",
      icon: <Mic className="h-5 w-5 text-blue-500" />,
      price: "From $400"
    }
  ];

  const addOnCategories = [
    {
      title: "Editing Enhancements",
      items: [
        {
          name: "Advanced Motion Graphics",
          description: "Custom animations and visual effects",
          icon: <Sparkles className="h-5 w-5 text-blue-500" />
        },
        {
          name: "Color Grading",
          description: "Professional cinematic color treatment",
          icon: <Palette className="h-5 w-5 text-blue-500" />
        },
        {
          name: "A/B Thumbnail Testing",
          description: "Data-driven thumbnail optimization",
          icon: <BarChart3 className="h-5 w-5 text-blue-500" />
        }
      ]
    },
    {
      title: "Strategy & Growth",
      items: [
        {
          name: "Paid Ads Video Creation",
          description: "Conversion-focused ad content",
          icon: <DollarSign className="h-5 w-5 text-blue-500" />
        },
        {
          name: "Content Strategy",
          description: "Platform-specific growth planning",
          icon: <Lightbulb className="h-5 w-5 text-blue-500" />
        },
        {
          name: "Extra Videos",
          description: "Additional videos beyond package limits",
          icon: <Film className="h-5 w-5 text-blue-500" />
        }
      ]
    },
    {
      title: "Speed & Priority",
      items: [
        {
          name: "Rush Delivery",
          description: "24-hour turnaround on select content",
          icon: <Clock className="h-5 w-5 text-blue-500" />
        },
        {
          name: "On-Call Editing",
          description: "Priority support for urgent needs",
          icon: <Video className="h-5 w-5 text-blue-500" />
        },
        {
          name: "Podcast Editing",
          description: "Long-form audio content optimization",
          icon: <Mic className="h-5 w-5 text-blue-500" />
        }
      ]
    }
  ];

  const subscriptionBenefits = [
    {
      title: "3-Month Commitment",
      benefits: [
        "Free custom branding assets (logo animations, intros/outros)",
        "Consistent editing style across all content",
        "10% discount on all packages"
      ],
      icon: <Gift className="h-6 w-6 text-blue-500" />
    },
    {
      title: "6-Month+ Commitment",
      benefits: [
        "Priority content strategy sessions",
        "Quarterly performance review & optimization",
        "15% discount on all packages",
        "Free A/B thumbnail testing"
      ],
      icon: <Crown className="h-6 w-6 text-blue-500" />
    }
  ];

  const missionValues = [
    {
      title: "Authentic Storytelling",
      description: "Helping creators share their voice with genuine, engaging, and highly optimized content that resonates with their audience.",
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Data-Driven Growth",
      description: "Using real-time analytics, audience insights, and strategy refinement to ensure maximum reach and engagement for every piece of content.",
      icon: <BarChart className="h-8 w-8 text-blue-500" />
    },
    {
      title: "High-Impact Content",
      description: "Merging technical expertise and creative storytelling to craft scroll-stopping content across YouTube Shorts, TikTok, Instagram, and beyond.",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />
    }
  ];

  const platformIcons = [
    {
      name: "YouTube Shorts",
      icon: <Youtube className="h-6 w-6" />
    },
    {
      name: "Instagram Reels",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      name: "TikTok",
      icon: <Video className="h-6 w-6" />
    },
    {
      name: "Facebook",
      icon: <Monitor className="h-6 w-6" />
    }
  ];

  const faqItems = [
    {
      question: "How long does editing take?",
      answer: "Our standard turnaround time is 48 hours for most projects. For more complex edits, we'll provide a specific timeline during our initial consultation. Need it faster? We offer rush delivery options as well."
    },
    {
      question: "What if I don't like the first edit?",
      answer: "We include unlimited minor revisions with all our packages. We'll work with you until you're completely satisfied with the final product. Your satisfaction is our top priority."
    },
    {
      question: "Do you provide custom branding?",
      answer: "Absolutely! We can incorporate your logos, intros, outros, and apply consistent color grading to match your brand identity across all your content."
    },
    {
      question: "What formats do you accept?",
      answer: "We accept all standard video formats including MP4, MOV, AVI, and more. You can upload your raw footage through our secure client portal or share via cloud storage services."
    },
    {
      question: "Do you handle audio editing too?",
      answer: "Yes, our editing services include professional audio editing. We clean up background noise, balance levels, add music, and ensure your audio is crisp and clear."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const togglePricingCard = (index: number) => {
    setActivePricingCard(activePricingCard === index ? -1 : index);
  };

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust as needed
      const currentScroll = carouselRef.current.scrollLeft;
      
      if (direction === 'prev') {
        carouselRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
        if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
      } else {
        carouselRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
        if (carouselIndex < popularAddOns.length - 3) setCarouselIndex(carouselIndex + 1);
      }
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-3 backdrop-blur-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-medium">HELIX<span className="text-blue-500">VISUAL</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#unified" className="text-sm hover:text-blue-500 transition-colors">About</a>
            <a href="#portfolio" className="text-sm hover:text-blue-500 transition-colors">Work</a>
            <a href="#pricing" className="text-sm hover:text-blue-500 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm hover:text-blue-500 transition-colors">FAQ</a>
            <a href="#contact" className="text-sm hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="btn-outline text-sm">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline animation positioned at the top */}
        <div className="absolute inset-0 z-10">
          <spline-viewer url="https://prod.spline.design/baAG5yfo-cZnVA0N/scene.splinecode"></spline-viewer>
        </div>
        <div className="noise"></div>
        
        {/* Content positioned at the bottom half of the screen */}
        <div className="container mx-auto px-6 relative z-20 mt-[30vh]">
          <div className="max-w-4xl mx-auto">
            <div ref={heroRef} className={`gradient-border ${heroScrolled ? 'scrolled' : ''}`}>
              <div className={`hero-content-box ${heroScrolled ? 'scrolled' : ''}`}>
                <div className="hero-content">
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {platformIcons.map((platform, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-blue-500/10 p-3 rounded-full mb-2">
                          {platform.icon}
                        </div>
                        <span className="text-xs text-gray-400">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                    TRANSFORMING <span className="gradient-text font-medium">RAW FOOTAGE</span> INTO <span className="gradient-text font-medium">VIRAL CONTENT</span>
                  </h1>
                  
                  <p className="hero-subheading">
                    We create highly engaging, performance-driven videos for all platforms. Whether it's short-form clips or full-length content, our expert editing and data-backed strategy turn views into results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary-hero pulse-effect inline-flex items-center justify-center py-3 px-6">
                      Book a Free Consultation
                      <MessageSquare className="ml-2 h-4 w-4 icon" />
                    </a>
                    <a href="#portfolio" className="btn-outline-hero inline-flex items-center justify-center py-3 px-6">
                      See Our Work
                      <Play className="ml-2 h-4 w-4 icon" />
                    </a>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">75M+</div>
                      <div className="text-xs text-gray-400">Views Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-xs text-gray-400">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">72h</div>
                      <div className="text-xs text-gray-400">Turnaround Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Section (Mission + Services + Process) */}
      <section 
        id="unified" 
        ref={sectionRefs.unified} 
        className="py-20 bg-[#050505]"
      >
        <div className="container mx-auto px-6">
          {/* Mission Statement */}
          <div className="mb-16 text-center">
            <span className="badge">Our Mission</span>
            <h2 className={`text-3xl md:text-4xl font-light mt-2 mb-4 fade-in ${visibleSections.unified ? 'visible' : ''}`}>
              Elevating Your <span className="gradient-text">Digital Presence</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto fade-in ${visibleSections.unified ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
              We enhance your digital footprint by transforming raw footage into highly engaging, data-driven content that resonates, captivates, and drives real results across all platforms.
            </p>
          </div>
          
          {/* Services */}
          <div className="mb-20">
            <h3 className={`text-2xl font-light mb-8 text-center fade-in ${visibleSections.unified ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              <span className="gradient-text">What We Do</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className={`fade-in ${visibleSections.unified ? 'visible' : ''} bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 flex flex-col items-center text-center`} style={{transitionDelay: '0.3s'}}>
                <div className="p-4 rounded-full bg-blue-500/10 mb-6">
                  <Film className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-medium mb-3">Short-Form Editing</h4>
                <p className="text-gray-400 text-sm">TikTok, Reels, Shorts, X.com – content that stops the scroll and drives engagement. Perfect for building a consistent social media presence.</p>
              </div>
              
              <div className={`fade-in ${visibleSections.unified ? 'visible' : ''} bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 flex flex-col items-center text-center`} style={{transitionDelay: '0.4s'}}>
                <div className="p-4 rounded-full bg-blue-500/10 mb-6">
                  <Mic className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-medium mb-3">Podcast Production</h4>
                <p className="text-gray-400 text-sm">Full episodes & short clips optimized for maximum retention and shareability. We handle everything from audio cleanup to visual elements.</p>
              </div>
              
              <div className={`fade-in ${visibleSections.unified ? 'visible' : ''} bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 flex flex-col items-center text-center`} style={{transitionDelay: '0.5s'}}>
                <div className="p-4 rounded-full bg-blue-500/10 mb-6">
                  <Youtube className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-medium mb-3">Long-Form Storytelling</h4>
                <p className="text-gray-400 text-sm">YouTube documentaries, vlogs, interviews – compelling narratives that keep viewers watching. Designed to build authority and deeper connections.</p>
              </div>
            </div>
          </div>
          
          {/* Process */}
          <div>
            <h3 className={`text-2xl font-light mb-8 text-center fade-in ${visibleSections.unified ? 'visible' : ''}`} style={{transitionDelay: '0.6s'}}>
              <span className="gradient-text">How It Works</span>
            </h3>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/80 to-blue-500/20 transform -translate-x-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`fade-in ${visibleSections.unified ? 'visible' : ''} relative`} style={{transitionDelay: '0.7s'}}>
                  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 flex flex-col items-center text-center h-full">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                      <div className="step-number w-10 h-10">1</div>
                    </div>
                    <div className="md:hidden mb-4 step-number w-10 h-10">1</div>
                    <h4 className="text-xl font-medium mb-3 mt-2">You Record</h4>
                    <p className="text-gray-400 text-sm">Film raw content using any device. No special equipment needed – just capture your authentic moments and ideas.</p>
                  </div>
                </div>
                
                <div className={`fade-in ${visibleSections.unified ? 'visible' : ''} relative`} style={{transitionDelay: '0.8s'}}>
                  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 flex flex-col items-center text-center h-full">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                      <div className="step-number w-10 h-10">2</div>
                    </div>
                    <div className="md:hidden mb-4 step-number w-10 h-10">2</div>
                    <h4 className="text-xl font-medium mb-3 mt-2">We Edit</h4>
                    <p className="text-gray-400 text-sm">Expert cutting, transitions, animations, and effects to maximize engagement. We transform your raw footage into polished content.</p>
                  </div>
                </div>
                
                <div className={`fade-in ${visibleSections.unified ? 'visible' : ''} relative`} style={{transitionDelay: '0.9s'}}>
                  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 flex flex-col items-center text-center h-full">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                      <div className="step-number w-10 h-10">3</div>
                    </div>
                    <div className="md:hidden mb-4 step-number w-10 h-10">3</div>
                    <h4 className="text-xl font-medium mb-3 mt-2">You Grow</h4>
                    <p className="text-gray-400 text-sm">Post your polished video and watch the engagement metrics climb. We provide analytics and insights to continuously improve results.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`mt-16 text-center fade-in ${visibleSections.unified ? 'visible' : ''}`} style={{transitionDelay: '1s'}}>
              <a href="#contact" className="btn-primary inline-flex items-center">
                Let's create something amazing
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio" 
        ref={sectionRefs.portfolio} 
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="badge">Portfolio</span>
            <h2 className={`text-3xl md:text-4xl font-light mt-2 mb-4 fade-in ${visibleSections.portfolio ? 'visible' : ''}`}>
              Your content <span className="gradient-text">transformed</span>
            </h2>
            <p className={`text-gray-400 text-sm max-w-xl mx-auto text-center fade-in ${visibleSections.portfolio ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
              Our best-performing YouTube Shorts showcase our ability to create engaging, viral content.
            </p>
          </div>
          
          {/* YouTube Shorts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
            {youtubeShorts.map((short, index) => (
              <div 
                key={index} 
                className={`fade-in ${visibleSections.portfolio ? 'visible' : ''}`}
                style={{transitionDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="phone-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}?autoplay=0&controls=1&rel=0&showinfo=0`}
                    title={`YouTube Short ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="view-count">{short.views}</div>
              </div>
            ))}
          </div>
          
          {/* Metrics */}
          <div className={`metrics-container fade-in ${visibleSections.portfolio ? 'visible' : ''}`} style={{transitionDelay: '0.5s'}}>
            <div className="metric-item">
              <div className="metric-value">75M+</div>
              <div className="metric-label">Views on YouTube Shorts</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">300%</div>
              <div className="metric-label">Increased Engagement</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">100%</div>
              <div className="metric-label">Satisfied Clients</div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="#contact" className="btn-outline inline-flex items-center">
              Let's create your next viral hit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing" 
        ref={sectionRefs.pricing} 
        className="py-20 bg-[#050505]"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="badge">Pricing</span>
            <h2 className={`text-3xl md:text-4xl font-light mt-2 mb-4 fade-in ${visibleSections.pricing ? 'visible' : ''}`}>
              Fair pricing, <span className="gradient-text">unmatched quality</span>
            </h2>
            <p className={`text-gray-400 text-sm max-w-xl mx-auto fade-in ${visibleSections.pricing ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
              Choose the perfect package for your content needs or customize a plan that works for you.
            </p>
          </div>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-black/40 backdrop-blur-sm p-1 rounded-full border border-gray-800/50 inline-flex">
              <button 
                className={`px-6 py-2 rounded-full text-sm transition-all ${activeTab === 'monthly' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm transition-all ${activeTab === 'quarterly' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('quarterly')}
              >
                Quarterly (Save 10%)
              </button>
            </div>
          </div>
          
          {/* Pricing Cards (Accordion Style) */}
          <div className="max-w-4xl mx-auto mb-16">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`pricing-accordion mb-6 fade-in ${visibleSections.pricing ? 'visible' : ''} ${activePricingCard === index ? 'active' : ''} ${tier.highlighted ? 'pricing-highlight-accordion' : ''}`}
                style={{transitionDelay: `${0.1 + index * 0.1}s`}}
              >
                <div 
                  className="pricing-accordion-header"
                  onClick={() => togglePricingCard(index)}
                >
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-blue-500/10">
                      {tier.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{tier.name}</h3>
                      <div className="flex items-baseline mt-1">
                        <span className="text-xl font-bold">
                          {activeTab === 'monthly' ? tier.monthlyPrice : tier.quarterlyPrice}
                        </span>
                        <span className="text-gray-400 ml-1 text-sm">{tier.period}</span>
                      </div>
                    </div>
                    {tier.badge && (
                      <div className="ml-4 bg-blue-500 text-xs font-medium py-1 px-3 text-white uppercase tracking-wider rounded-full">
                        {tier.badge}
                      </div>
                    )}
                  </div>
                  <div>
                    {activePricingCard === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                
                <div className="pricing-accordion-body">
                  <div className="pricing-accordion-content">
                    <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                    
                    <div className="h-px w-full bg-gray-800/50 mb-6"></div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="#contact" 
                      className={`w-full py-3 px-6 rounded-lg text-center text-sm font-medium transition-all flex items-center justify-center ${tier.highlighted ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-transparent border border-gray-700 hover:border-blue-500 text-white hover:text-blue-500'}`}
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Compare Plans Button */}
          <div className="text-center mb-16">
            <button 
              onClick={() => setShowComparisonTable(!showComparisonTable)}
              className="btn-outline inline-flex items-center"
            >
              {showComparisonTable ? 'Hide Comparison' : 'Compare All Plans'}
              {showComparisonTable ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </button>
          </div>
          
          {/* Comparison Table */}
          {showComparisonTable && (
            <div className={`max-w-5xl mx-auto mb-16 fade-in ${visibleSections.pricing ? 'visible' : ''}`} style={{transitionDelay: '0.4s'}}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="bg-black/50 p-4 text-left">Feature</th>
                      <th className="bg-black/50 p-4 text-center">Starter</th>
                      <th className="bg-blue-900/20 p-4 text-center">Growth</th>
                      <th className="bg-black/50 p-4 text-center">Premium / VIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-black/30' : 'bg-black/20'}>
                        <td className="p-4 border-t border-gray-800">{feature.name}</td>
                        <td className="p-4 border-t border-gray-800 text-center">
                          {feature.starter === "—" ? (
                            <X className="h-4 w-4 text-gray-500 mx-auto feature-missing" />
                          ) : (
                            feature.starter
                          )}
                        </td>
                        <td className="p-4 border-t border-gray-800 text-center bg-blue-900/10">
                          {feature.growth === "—" ? (
                            <X className="h-4 w-4 text-gray-500 mx-auto feature-missing" />
                          ) : (
                            feature.growth
                          )}
                        </td>
                        <td className="p-4 border-t border-gray-800 text-center">
                          {feature.premium === "—" ? (
                            <X className="h-4 w-4 text-gray-500 mx-auto feature-missing" />
                          ) : feature.premium === "✓" ? (
                            <Check className="h-4 w-4 text-blue-500 mx-auto feature-check" />
                          ) : (
                            feature.premium
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Popular Add-ons Carousel */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className={`text-2xl font-light mb-6 text-center fade-in ${visibleSections.pricing ? 'visible' : ''}`} style={{transitionDelay: '0.5s'}}>
              Popular <span className="gradient-text">Add-ons</span>
            </h3>
            
            <div className={`relative px-10 fade-in ${visibleSections.pricing ? 'visible' : ''}`} style={{transitionDelay: '0.6s'}}>
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full border border-gray-800 hover:bg-blue-500 transition-colors" 
                onClick={() => scrollCarousel('prev')}
                aria-label="Previous add-ons"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide" ref={carouselRef}>
                {popularAddOns.map((addon, index) => (
                  <div key={index} className="min-w-[280px] bg-black/40 p-6 rounded-lg border border-gray-800/50 flex-none">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-blue-500/10 mr-3">
                        {addon.icon}
                      </div>
                      <h4 className="text-base font-medium">{addon.name}</h4>
                    </div>
                    <p className="text-gray-400 text-xs mb-4">{addon.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-400">{addon.price}</span>
                      <a href="#contact" className="text-xs text-blue-500 hover:underline">Add to package</a>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full border border-gray-800 hover:bg-blue-500 transition-colors" 
                onClick={() => scrollCarousel('next')}
                aria-label="Next add-ons"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <div className="flex justify-center gap-1 mt-4">
                {popularAddOns.slice(0, popularAddOns.length - 2).map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${carouselIndex === index ? 'bg-blue-500' : 'bg-gray-700'}`}
                    onClick={() => {
                      setCarouselIndex(index);
                      if (carouselRef.current) {
                        carouselRef.current.scrollTo({
                          left: index * 300,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Subscription Benefits */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className={`text-2xl font-light mb-8 text-center fade-in ${visibleSections.pricing ? 'visible' : ''}`} style={{transitionDelay: '0.7s'}}>
              Subscription <span className="gradient-text">Incentives</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subscriptionBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 fade-in ${visibleSections.pricing ? 'visible' : ''}`}
                  style={{transitionDelay: `${0.8 + index * 0.1}s`}}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-500/10 mr-3">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-medium">{benefit.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {benefit.benefits.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Final CTA */}
          <div className={`mt- 16 text-center fade-in ${visibleSections.pricing ? 'visible' : ''}`} style={{transitionDelay: '1s'}}>
            <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50">
              <h3 className="text-xl font-medium mb-4">Ready to elevate your content?</h3>
              <p className="text-gray-400 text-sm mb-6">Choose your package or customize your plan with add-ons tailored to your specific needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-primary-large">
                  Get in touch today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#faq" className="btn-help">
                  <HelpCircle className="h-4 w-4 icon" />
                  Need help choosing?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq" 
        ref={sectionRefs.faq} 
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="badge">FAQ</span>
            <h2 className={`text-3xl md:text-4xl font-light mt-2 mb-4 fade-in ${visibleSections.faq ? 'visible' : ''}`}>
              Frequently <span className="gradient-text">Asked Questions</span>
            </h2>
            <p className={`text-gray-400 text-sm max-w-xl mx-auto fade-in ${visibleSections.faq ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
              Everything you need to know about our video editing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item py-6 fade-in ${visibleSections.faq ? 'visible' : ''}`}
                style={{transitionDelay: `${0.2 + index * 0.1}s`}}
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <div>
                    {activeFaq === index ? (
                      <MinusCircle className="h-5 w-5 text-blue-500" />
                    ) : (
                      <PlusCircle className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                <div className={`faq-answer mt-4 text-gray-400 text-sm ${activeFaq === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-16 text-center fade-in ${visibleSections.faq ? 'visible' : ''}`} style={{transitionDelay: '0.7s'}}>
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <a href="#contact" className="btn-outline inline-flex items-center">
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={sectionRefs.contact} 
        className="py-20 bg-[#050505]"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="badge">Contact</span>
            <h2 className={`text-3xl md:text-4xl font-light mt-2 mb-4 fade-in ${visibleSections.contact ? 'visible' : ''}`}>
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p className={`text-gray-400 text-sm max-w-xl mx-auto fade-in ${visibleSections.contact ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
              Ready to transform your content? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 fade-in ${visibleSections.contact ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs text-gray-400 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs text-gray-400 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="What are you interested in?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    type="submit"
                    className="btn-primary-large"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-medium">HELIX<span className="text-blue-500">VISUAL</span></span>
              <p className="text-gray-400 text-sm mt-2">Editing that moves the needle.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="text-sm font-medium mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#unified" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">About</a></li>
                  <li><a href="#portfolio" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">Work</a></li>
                  <li><a href="#pricing" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">Pricing</a></li>
                  <li><a href="#faq" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400 text-sm">hello@helixvisual.com</li>
                  <li className="text-gray-400 text-sm">+1 (555) 123-4567</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Video className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Smartphone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} HelixVisual. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 text-xs hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-xs hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;