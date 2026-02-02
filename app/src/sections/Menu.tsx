import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Users, Utensils } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Pan-Seared Foie Gras',
    description: 'With fig compote, brioche toast, and aged balsamic reduction',
    price: '€45',
    image: '/dish-foiegras.jpg',
    category: 'Starters',
  },
  {
    id: 2,
    name: 'Beef Wellington',
    description: 'Prime fillet, mushroom duxelles, prosciutto, golden puff pastry',
    price: '€85',
    image: '/dish-wellington.jpg',
    category: 'Mains',
  },
  {
    id: 3,
    name: 'Tuna Tartare',
    description: 'Fresh yellowfin, avocado, sesame, wasabi emulsion',
    price: '€38',
    image: '/dish-tartare.jpg',
    category: 'Starters',
  },
  {
    id: 4,
    name: 'Chocolate Sphere',
    description: 'Valrhona dark chocolate, raspberry coulis, gold leaf',
    price: '€28',
    image: '/dish-dessert.jpg',
    category: 'Desserts',
  },
];

const features = [
  {
    icon: <Utensils className="w-5 h-5" />,
    label: 'Fine Dining',
    value: 'Michelin Style',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Experience',
    value: '20+ Years',
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: 'Service',
    value: 'Private Chef',
  },
];

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const categories = ['All', ...Array.from(new Set(menuItems.map((item) => item.category)))];

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative w-full bg-chef-black py-20 md:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-chef-black via-chef-black to-chef-orange/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="text-chef-orange text-sm uppercase tracking-widest mb-2">
              Signature Dishes
            </p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              My
              <br />
              <span className="text-white/90">Menu</span>
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-white/70 text-lg leading-relaxed">
              A curated selection of my signature dishes, each crafted with the
              finest ingredients and presented with artistic precision.
            </p>

            {/* Features */}
            <div className="flex gap-6 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-chef-orange/20 rounded-lg flex items-center justify-center text-chef-orange">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">{feature.label}</p>
                    <p className="text-white text-sm font-medium">
                      {feature.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-chef-orange text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-chef-orange/50 transition-all duration-500 hover-lift ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-chef-orange text-xs uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-white text-xl font-bold">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-chef-orange transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button className="mt-4 flex items-center gap-2 text-white/70 text-sm group-hover:text-chef-orange transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-chef-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-chef-orange-dark transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-chef-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-chef-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
