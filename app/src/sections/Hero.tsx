import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface DishCard {
  id: number;
  name: string;
  category: string;
  location: string;
  image: string;
  rotation: string;
  zIndex: number;
}

const dishes: DishCard[] = [
  {
    id: 1,
    name: 'Foie Gras',
    category: 'Appetizer',
    location: 'French Classic',
    image: '/dish-foiegras.jpg',
    rotation: 'rotate-y-[-35deg] rotate-x-[15deg]',
    zIndex: 10,
  },
  {
    id: 2,
    name: 'Beef Wellington',
    category: 'Main Course',
    location: 'British Classic',
    image: '/dish-wellington.jpg',
    rotation: 'rotate-y-[-20deg] rotate-x-[10deg]',
    zIndex: 20,
  },
  {
    id: 3,
    name: 'Tuna Tartare',
    category: 'Signature',
    location: 'Modern Fusion',
    image: '/dish-tartare.jpg',
    rotation: 'rotate-y-[-5deg] rotate-x-[5deg]',
    zIndex: 30,
  },
  {
    id: 4,
    name: 'Chocolate Sphere',
    category: 'Dessert',
    location: 'Patisserie Art',
    image: '/dish-dessert.jpg',
    rotation: 'rotate-y-[10deg] rotate-x-[8deg]',
    zIndex: 40,
  },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect for cards
  const getCardStyle = (index: number) => {
    const baseTranslateY = scrollY * (0.1 + index * 0.05);
    const baseRotate = scrollY * (0.02 + index * 0.01);
    return {
      transform: `translateY(${baseTranslateY}px) rotateY(${baseRotate}deg)`,
    };
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-chef-orange overflow-hidden"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-wider">
              CHEF.GOURMET
            </span>
            <span className="text-white/70 text-xs tracking-wide">
              Culinary Art
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Book
            </a>
            <a
              href="#menu"
              className="bg-white text-chef-orange px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              View Menu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-chef-orange/95 backdrop-blur-lg border-t border-white/10 py-6 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-lg font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-chef-orange px-5 py-3 rounded-full text-center font-semibold mt-4"
              >
                Book a Table
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1
            className="text-[15vw] md:text-[20vw] font-black text-white/10 whitespace-nowrap select-none text-shadow-hero"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            CHEF.GOURMET
          </h1>
        </div>

        {/* 3D Cards Container */}
        <div
          ref={cardsRef}
          className="relative z-10 flex items-center justify-center w-full max-w-6xl mx-auto px-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {/* Left Side - Text */}
            <div className="lg:w-1/3 text-center lg:text-left z-20">
              <div className="space-y-2">
                <p
                  className="text-white/80 text-lg md:text-xl font-light tracking-wide"
                  style={{
                    transform: `translateY(${scrollY * -0.05}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.002),
                  }}
                >
                  Chef.Gourmet
                </p>
                <h2
                  className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{
                    transform: `translateY(${scrollY * -0.03}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.002),
                  }}
                >
                  Culinary
                  <br />
                  <span className="text-white/90">Artistry</span>
                </h2>
                <p
                  className="text-white/70 text-sm md:text-base max-w-xs mx-auto lg:mx-0 mt-4"
                  style={{
                    opacity: Math.max(0.3, 1 - scrollY * 0.002),
                  }}
                >
                  Experience the finest gastronomic journey crafted with passion and precision
                </p>
              </div>
            </div>

            {/* Center - 3D Cards */}
            <div className="lg:w-2/3 relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-1000">
              {dishes.map((dish, index) => (
                <div
                  key={dish.id}
                  className={`absolute transition-all duration-500 ease-out cursor-pointer hover-lift`}
                  style={{
                    ...getCardStyle(index),
                    zIndex: dish.zIndex,
                    left: `${15 + index * 18}%`,
                    top: `${10 + (index % 2) * 15}%`,
                  }}
                >
                  <div
                    className={`relative w-36 h-48 md:w-48 md:h-64 bg-chef-black rounded-xl overflow-hidden shadow-3d card-shine ${dish.rotation}`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `perspective(1000px) ${dish.rotation.includes('rotate-y-[-') ? 'rotateY(-25deg)' : dish.rotation.includes('rotate-y-[10deg]') ? 'rotateY(10deg)' : 'rotateY(-5deg)'} rotateX(8deg)`,
                    }}
                  >
                    {/* Card Content */}
                    <div className="p-3 md:p-4 h-full flex flex-col">
                      <div className="flex-1 overflow-hidden rounded-lg mb-2">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="text-white">
                        <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">
                          {dish.category}
                        </p>
                        <h3 className="text-sm md:text-base font-semibold leading-tight">
                          {dish.name}
                        </h3>
                        <p className="text-[10px] md:text-xs text-white/50 mt-0.5">
                          {dish.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* Card Border Effect */}
                    <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="absolute bottom-8 left-6 lg:left-12 z-20"
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.003),
          }}
        >
          <p className="text-white/60 text-sm">
            Culinary Art
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 right-6 lg:right-12 z-20"
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.003),
          }}
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/10 rounded-full animate-float delay-200" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white/15 rounded-full animate-float delay-500" />
    </section>
  );
}
