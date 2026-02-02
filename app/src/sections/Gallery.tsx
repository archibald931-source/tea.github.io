import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alexandra Mitchell',
    role: 'Private Event Client',
    content: 'An absolutely extraordinary experience. Chef transformed our anniversary dinner into an unforgettable culinary journey. Every dish was a masterpiece.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Richardson',
    role: 'Corporate Event Organizer',
    content: 'Professional, creative, and incredibly talented. Our clients were amazed by the presentation and flavors. Highly recommend for any special occasion.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Food Critic',
    content: 'Michelin-star quality in the comfort of your own home. The attention to detail and passion in every plate is truly remarkable.',
    rating: 5,
  },
];

const galleryImages = [
  { id: 1, src: '/dish-lobster.jpg', alt: 'Lobster Bisque' },
  { id: 2, src: '/dish-risotto.jpg', alt: 'Truffle Risotto' },
  { id: 3, src: '/dish-scallops.jpg', alt: 'Seared Scallops' },
  { id: 4, src: '/chef-portrait.jpg', alt: 'Chef at Work' },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full bg-chef-orange py-20 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Gallery Grid */}
        <div
          className={`mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                Culinary Gallery
              </p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                My
                <br />
                <span className="text-white/90">Creations</span>
              </h2>
            </div>
            <p className="text-white/70 text-lg max-w-md">
              A visual journey through my culinary artistry, where each plate tells a story of passion and precision.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${index === 3 ? 'col-span-2 md:col-span-1' : ''}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-chef-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Side - Title */}
              <div className="lg:w-1/3">
                <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                  Testimonials
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  What Clients Say
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Side - Testimonial Content */}
              <div className="lg:w-2/3">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                  <div className="pl-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-chef-gold text-chef-gold"
                          />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-6 transition-all duration-300">
                      "{testimonials[currentTestimonial].content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-white/60 text-sm">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex gap-2 mt-6 pl-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentTestimonial === index
                          ? 'w-6 bg-white'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
