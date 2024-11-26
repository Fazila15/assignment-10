import Image from 'next/image';

export default function Card() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Responsive Product Cards</h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          {[
            { name: 'Blue Pant', price: '$20', image: '/B-Pant.svg', stars: 4.5 },
            { name: 'Black Tshirt', price: '$25', image: '/B-TShirt.svg', stars: 4.0 },
            { name: 'Black Pant', price: '$30', image: '/Bl-Pant.svg', stars: 4.7 },
            { name: 'Checkered Shirt', price: '$35', image: '/Check-Shirt.svg', stars: 4.3 },
            { name: 'Blue Denim Shorts', price: '$22', image: '/Shorts.svg', stars: 4.6 },
            { name: 'Orange Stripped Tshirt', price: '$28', image: '/Stripped-TShirt.svg', stars: 4.2 },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex items-center mb-2">
                  {/* Display Stars */}
                  <div className="text-yellow-400">
                    {'★'.repeat(Math.floor(product.stars))}
                    <span className="text-gray-300">
                      {'★'.repeat(5 - Math.floor(product.stars))}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.stars.toFixed(1)}
                  </span>
                </div>
                <p className="text-blue-500 font-semibold">{product.price}</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
