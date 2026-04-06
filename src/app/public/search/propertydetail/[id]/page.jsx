"use client";
import { useParams } from 'next/navigation';
import data from '../../../../data/properties.json';
import Image from 'next/image';
import { Bed, Bath, Move, MapPin, CheckCircle, Phone } from 'lucide-react';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = data.properties.find(p => p.id === parseInt(id));

  if (!property) return <div className="p-20 text-center font-bold">Property Not Found</div>;

  const dummyImages = [property.image, property.image, property.image, property.image];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="max-w-7xl mx-auto p-6 lg:p-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="relative col-span-2 md:col-span-1 rounded-2xl overflow-hidden border border-gray-100">
                <Image src={dummyImages[0]} alt="Main" fill className="object-cover" />
              </div>
              <div className="hidden md:grid grid-rows-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-gray-100">
                  <Image src={dummyImages[1]} alt="Interior" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-100">
                  <Image src={dummyImages[2]} alt="Kitchen" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h1 className="text-4xl font-black text-[#1B263B] mb-4">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <MapPin size={20} className="text-[#1B263B]" />
                <span className="text-lg">{property.location}</span>
              </div>

              <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-50">
                <div className="text-center">
                  <Bed className="mx-auto mb-2 text-[#1B263B]" size={28} />
                  <p className="font-bold text-gray-900">{property.beds} Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="mx-auto mb-2 text-[#1B263B]" size={28} />
                  <p className="font-bold text-gray-900">{property.baths} Bathrooms</p>
                </div>
                <div className="text-center">
                  <Move className="mx-auto mb-2 text-[#1B263B]" size={28} />
                  <p className="font-bold text-gray-900">{property.area} Sqft</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  This stunning {property.type} in {property.city} offers a perfect blend of luxury and comfort. 
                  Featuring high-end finishes, spacious living areas, and a prime location, this property is 
                  an ideal investment for families looking for their dream home.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-12 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
                <p className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-2">Total Price</p>
                <h2 className="text-5xl font-black text-[#1B263B] mb-8">{property.priceDisplay}</h2>

                <div className="space-y-4 mb-8">
                  {['Instant Booking', 'Secure Payment', 'Verified Property'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle size={20} className="text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#1B263B] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#0D1321] transition-all shadow-lg active:scale-[0.98] mb-4">
                  Buy Now
                </button>
              </div>

              <div className="bg-[#1B263B] p-6 rounded-3xl text-white">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-gray-400 text-sm">Our real estate experts are available 24/7 to assist you.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}