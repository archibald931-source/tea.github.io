import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'chef@gourmet.com',
    href: 'mailto:chef@gourmet.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+33 1 23 45 67 89',
    href: 'tel:+33123456789',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Paris, France',
    href: '#',
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: 'Instagram',
    value: '@chef.gourmet',
    href: 'https://instagram.com',
  },
];

const services = [
  'Private Dining',
  'Corporate Events',
  'Wedding Catering',
  'Cooking Classes',
  'Menu Consulting',
  'Pop-up Dinners',
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', eventType: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-chef-orange py-20 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[30vw] font-black text-white whitespace-nowrap select-none">
            CONTACT
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Ready to Create
            <br />
            <span className="text-white/90">Something Extraordinary?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Let's discuss your next culinary experience. Whether it's an intimate
            dinner or a grand celebration, I'm here to make it unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-chef-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
              <h3 className="text-white text-2xl font-bold mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-white text-xl font-semibold mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/70">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/70 text-sm mb-2 block">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-chef-black">
                        Select event type
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-chef-black">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/70 text-sm mb-2 block">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
                      placeholder="Tell me about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-chef-orange px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-chef-orange/30 border-t-chef-orange rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group bg-chef-black/20 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300 hover-lift"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-3 group-hover:bg-white group-hover:text-chef-orange transition-colors">
                    {info.icon}
                  </div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-white font-medium text-sm flex items-center gap-1">
                    {info.value}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </a>
              ))}
            </div>

            {/* Services */}
            <div className="bg-chef-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Services Offered</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <p className="text-white font-medium">Currently Accepting Bookings</p>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Available for events in Paris and surrounding areas. International
                bookings available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
      <div className="absolute top-20 right-20 w-10 h-10 bg-white/10 rounded-full" />
    </section>
  );
}
