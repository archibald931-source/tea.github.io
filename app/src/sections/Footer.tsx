import { Heart, ArrowUp } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Menu', href: '#menu' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Private Dining', href: '#contact' },
      { name: 'Corporate Events', href: '#contact' },
      { name: 'Wedding Catering', href: '#contact' },
      { name: 'Cooking Classes', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-chef-black py-16 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-white font-bold text-2xl tracking-wider">
                CHEF.GOURMET
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Elevating private dining to an art form. Experience Michelin-star
              quality cuisine in the comfort of your chosen setting.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-chef-orange fill-chef-orange" />
              <span>in Paris</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Chef.Gourmet. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-chef-orange transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-chef-orange/5 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-24 h-24 bg-chef-orange/5 rounded-full blur-3xl" />
    </footer>
  );
}
