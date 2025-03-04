export default function LogisticsPartners() {
  return (
    <section className='py-24 bg-white'>
      <div className='container px-4 mx-auto'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800'>
            Global Logistics Partners
          </h2>
          <p className='mx-auto max-w-2xl text-gray-600'>
            We collaborate with leading logistics providers worldwide to ensure
            reliable delivery
          </p>
        </div>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {[1, 2, 3, 4].map((partner) => (
            <div
              key={partner}
              className='flex justify-center items-center p-8 bg-white rounded-xl border border-gray-100 shadow-lg transition-shadow hover:shadow-xl aspect-video'
            >
              {/* Partner logo placeholder */}
              <div className='w-full h-16 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
