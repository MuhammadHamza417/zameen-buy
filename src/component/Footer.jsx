import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Share2, Info, Shield } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Search Properties', href: '/search' },
        { name: 'Find Agents', href: '/agents' },
        { name: 'About Us', href: '/about' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Mortgage Calculator', href: '/tools/calculator' },
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  const socialIcons = [Globe, Share2, Info, Shield];

  return (
    <footer className="bg-[#1B263B] text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="text-2xl font-bold text-white">
              Apna<span className="text-[#E0C18E]">GHAR</span>
            </Link>
            <p className="text-gray-300 text-sm max-w-md">
              Premium real estate & property ecosystem connecting buyers, sellers, and agents.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-5 h-5 text-[#E0C18E]" />
                info@zameendirect.com
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-5 h-5 text-[#E0C18E]" />
                +92 (300) 123-4567
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-5 h-5 text-[#E0C18E]" />
                Pakistan
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-[#E0C18E] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ZameenDirect. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialIcons.map((Icon, index) => (
              <Link key={index} href="#" className="text-gray-400 hover:text-[#E0C18E] transition-colors">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;