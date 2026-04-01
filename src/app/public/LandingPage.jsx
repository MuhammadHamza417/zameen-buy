import Image from 'next/image';
import Link from 'next/link';
import { Search, Home, Building2, Landmark, Map, CheckCircle2, Users, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const categories = [
    { name: 'Houses', count: '12,400 Listings', icon: Home },
    { name: 'Apartments', idx: 1, count: '18,600 Listings', icon: Building2 },
    { name: 'Commercial', count: '6,200 Listings', icon: Landmark },
    { name: 'Land', count: '8,500 Listings', icon: Map },
  ];

  const featuredProperties = [
  {
    id: 1,
    title: 'Luxurious Villa in Defense',
    location: 'Gulberg III, Lahore',
    price: '750,000',
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: '/images/img1.webp',
    tag: 'Featured'
  },
  {
    id: 2,
    title: 'Modern Apartment Gulberg',
    location: 'Gulberg III, Lahore',
    price: '125,000',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: '/images/img2.webp',
  },
  {
    id: 3,
    title: 'Penthouse with City View',
    location: 'Downton, Karachi',
    price: '350,000',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: '/images/img3.webp',
    tag: 'Featured'
  },
  {
    id: 4,
    title: 'Cozy Family Home',
    location: 'DHA Phase 6, Lahore',
    price: '95,000',
    beds: 3,
    baths: 2,
    sqft: 1600,
    image: '/images/img4.webp',
  }
];

  return (
    <div className="flex flex-col w-full">
      <section className="relative bg-[#1B263B] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-gray-300 text-lg mb-10">Discover premium properties, connect with verified agents, and invest in your future</p>
          
          <div className="bg-white p-2 rounded-xl shadow-2xl max-w-3xl mx-auto overflow-hidden">
            <div className="flex border-b border-gray-100">
              <button className="px-6 py-3 text-[#1B263B] font-semibold border-b-2 border-[#E0C18E]">Buy</button>
              <button className="px-6 py-3 text-gray-500 font-medium hover:text-[#1B263B]">Rent</button>
              <button className="px-6 py-3 text-gray-500 font-medium hover:text-[#1B263B]">Projects</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 items-end">
              <div className="text-left">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Location</label>
                <input type="text" placeholder="City or area" className="w-full text-gray-800 text-sm outline-none border-none p-1" />
              </div>
              <div className="text-left">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Property Type</label>
                <select className="w-full text-gray-800 text-sm outline-none border-none p-1 bg-transparent">
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                </select>
              </div>
              <div className="text-left">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Price Range</label>
                <select className="w-full text-gray-800 text-sm outline-none border-none p-1 bg-transparent">
                  <option>Any Price</option>
                  <option>Under 1 Crore</option>
                  <option>1 - 5 Crore</option>
                </select>
              </div>
              <button className="bg-[#1B263B] text-white flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B263B] mb-2">Browse by Category</h2>
          <p className="text-gray-500 mb-12">Explore properties across different categories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B263B] transition-colors">
                  <cat.icon className="text-[#1B263B] group-hover:text-[#E0C18E]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1B263B]">{cat.name}</h3>
                <p className="text-gray-400 text-sm">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1B263B] mb-2">Featured Properties</h2>
              <p className="text-gray-500">Handpicked properties curated for you</p>
            </div>
            <Link href="/search" className="text-[#E0C18E] font-semibold hover:underline">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {featuredProperties.map((prop) => (
    <div key={prop.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative h-56 w-full">
        <Image 
          src={prop.image} 
          alt={prop.title} 
          fill 
          className="object-cover" 
        />
        {prop.tag && (
          <span className="absolute top-4 left-4 bg-[#E0C18E] text-[#1B263B] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            {prop.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-[#1B263B] mb-1">{prop.title}</h3>
        <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
          <Map size={12} /> {prop.location}
        </p>
        <p className="text-[#1B263B] text-xl font-bold mb-4">{prop.price}</p>
        <div className="flex items-center justify-between border-t border-gray-50 pt-4 text-gray-500 text-xs">
          <span>{prop.beds} Beds</span>
          <span>{prop.baths} Baths</span>
          <span>{prop.sqft} sqft</span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1B263B] mb-2">Why Choose ZameenDirect?</h2>
          <p className="text-gray-500 mb-16">Industry-leading platform with proven results</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="w-12 h-12 bg-[#F8F9FA] rounded flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-[#E0C18E]" />
              </div>
              <h4 className="text-3xl font-bold text-[#1B263B]">45,000+</h4>
              <p className="text-gray-400 text-sm">Properties Listed</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F8F9FA] rounded flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#E0C18E]" />
              </div>
              <h4 className="text-3xl font-bold text-[#1B263B]">120,000+</h4>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#F8F9FA] rounded flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-[#E0C18E]" />
              </div>
              <h4 className="text-3xl font-bold text-[#1B263B]">2,500+</h4>
              <p className="text-gray-400 text-sm">Expert Agents</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 border border-gray-100 rounded-lg">
              <h5 className="font-bold text-[#1B263B] mb-2">Verified Listings</h5>
              <p className="text-gray-500 text-sm">Every property is thoroughly verified and comes with authentic documentation.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h5 className="font-bold text-[#1B263B] mb-2">Expert Support</h5>
              <p className="text-gray-500 text-sm">24/7 dedicated support team ready to help you find your perfect property.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1B263B] text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-10">Start your real estate journey with ZameenDirect today</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#E0C18E] text-[#1B263B] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90">Explore Properties</button>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1B263B]">Post Your Property</button>
        </div>
      </section>
    </div>
  );
}