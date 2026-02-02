import { useEffect, useRef, useState } from 'react';
import { MessageSquare, ShoppingBag, ChefHat, Sparkles } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Consultation',
    subtitle: '& Menu Planning',
    description: 'We begin with a personal consultation to understand your vision, dietary preferences, and the occasion. Together, we craft a bespoke menu tailored to your desires.',
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Premium',
    subtitle: 'Ingredients',
    description: 'I source only the finest seasonal ingredients from trusted local suppliers and artisan producers. Quality is the foundation of every dish I create.',
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Crafted',
    subtitle: 'with Passion',
    description: 'Each dish is prepared with meticulous attention to detail, combining classical techniques with modern innovation to create unforgettable flavors.',
    icon: <ChefHat className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Exquisite',
    subtitle: 'Presentation',
    description: 'The final touch is an artistic presentation that delights the eyes before the first bite. Every plate is a canvas, every meal a masterpiece.',
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-chef-orange py-20 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white font-black text-8xl select-none"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
            >
              {i % 2 === 0 ? 'CHEF' : 'GOURMET'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-16 md:mb-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                How I Work
              </p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                How
                <br />
                <span className="text-white/90">Chef.Gourmet</span>
                <br />
                works?
              </h2>
            </div>
            <div className="md:max-w-md">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Your journey to an extraordinary culinary experience begins here.
              </p>
              <p className="text-white/60 text-sm mt-2">
                From concept to completion, every step is designed to exceed your expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-chef-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full border border-white/10 hover:bg-chef-black/30 transition-all duration-300 hover-lift">
                {/* Number */}
                <div className="absolute -top-4 -left-2 text-6xl md:text-7xl font-black text-white/10 number-outline select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-lg md:text-xl font-light mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white/50 rounded-b-2xl transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 md:mt-24 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/80 text-lg md:text-xl mb-6">
            Ready to experience culinary excellence?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-chef-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>Book Your Experience</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/10 rounded-full" />
      <div className="absolute top-20 left-10 w-10 h-10 bg-white/5 rounded-full" />
    </section>
  );
}
