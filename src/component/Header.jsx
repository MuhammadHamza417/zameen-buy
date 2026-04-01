import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Search', href: '/search' },
    { name: 'Agents', href: '/agents' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tools', href: '/tools' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1B263B] text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Aap apna logo image yahan add kar sakte hain */}
          {/* <Image src="/logo.png" alt="ZameenDirect Logo" width={40} height={40} /> */}
          <Link href="/" className="text-2xl font-bold text-white">
            Zameen<span className="text-[#E0C18E]">Direct</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-[#E0C18E] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-200 hover:text-[#E0C18E] transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/post-property"
            className="bg-white text-[#1B263B] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm"
          >
            Post Property
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;