export default function ERPSystem() {
  return (
    <section className='py-24 bg-gradient-to-r from-blue-50 to-blue-100'>
      <div className='container px-4 mx-auto'>
        <div className='grid gap-16 items-center md:grid-cols-2'>
          <div>
            <h2 className='mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800'>
              Smart ERP System
            </h2>
            <p className='mb-8 text-lg leading-relaxed text-gray-700'>
              Our advanced ERP system streamlines your operations with real-time
              tracking, automated processing, and comprehensive analytics.
            </p>
            <ul className='space-y-4'>
              {[
                'Real-time Inventory Management',
                'Automated Order Processing',
                'Multi-channel Integration',
                'Analytics & Reporting',
              ].map((feature, index) => (
                <li key={index} className='flex items-center text-gray-700'>
                  <span className='mr-3 w-2 h-2 bg-blue-600 rounded-full'></span>
                  <span className='text-lg'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='p-8 bg-white rounded-2xl shadow-2xl aspect-video'>
            {/* ERP system interface screenshot placeholder */}
            <div className='w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
