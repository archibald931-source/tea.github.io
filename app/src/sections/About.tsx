import { useEffect, useRef, useState } from 'react';
import { Award, MapPin, Calendar, Heart } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years Experience', icon: <Calendar className="w-5 h-5" /> },
  { value: '500+', label: 'Events Catered', icon: <Heart className="w-5 h-5" /> },
  { value: '3', label: 'Michelin Stars', icon: <Award className="w-5 h-5" /> },
  { value: 'Paris', label: 'Based In', icon: <MapPin className="w-5 h-5" /> },
];

const achievements = [
  'Former Executive Chef at Le Meurice, Paris',
  'Michelin Star recipient for 3 consecutive years',
  'Graduate of Le Cordon Bleu, Paris',
  'Featured in Gourmet Magazine & Food & Wine',
];

export default function About() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-chef-black py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-chef-black via-chef-black to-chef-orange/5" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            backgroundImage: `url('/chef-portrait.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-chef-orange text-sm uppercase tracking-widest mb-2">
              About Me
            </p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Art
              <br />
              <span className="text-white/90">of Cooking</span>
            </h2>

            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                With over two decades of culinary excellence, I have dedicated my life
                to the art of gastronomy. My journey began in the heart of France,
                where I trained under master chefs and developed a deep appreciation
                for classical techniques.
              </p>
              <p>
                Today, I bring Michelin-star quality to private dining experiences,
                creating bespoke menus that tell stories through flavor, texture,
                and presentation. Every dish is a canvas, every meal a celebration
                of culinary artistry.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8 space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-chef-orange rounded-full" />
                  <span className="text-white/80 text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Philosophy Quote */}
            <div
              className={`mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-white/90 text-lg italic leading-relaxed">
                "Cooking is not just about feeding people. It's about creating
                memories, evoking emotions, and bringing joy through the universal
                language of food."
              </p>
              <p className="text-chef-orange text-sm mt-3 font-medium">
                — Chef Marcus Laurent
              </p>
            </div>
          </div>

          {/* Right Side - Stats & Image */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-chef-orange/50 transition-all duration-300 hover-lift ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-chef-orange/20 rounded-lg flex items-center justify-center text-chef-orange mb-4 group-hover:bg-chef-orange group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <p className="text-white text-3xl md:text-4xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Chef Image Card */}
            <div
              className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src="/chef-portrait.jpg"
                alt="Chef Marcus Laurent"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chef-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-bold">Marcus Laurent</p>
                <p className="text-white/70 text-sm">Executive Chef & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
      <div className="absolute top-20 right-20 w-10 h-10 bg-chef-orange/10 rounded-full" />
    </section>
  );
}
