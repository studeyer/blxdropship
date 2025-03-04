/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:41:58
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-03-04 10:27:44
 * @FilePath: /blxdropship/app/about/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Hero from '@/components/Hero'
export default function About() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <div className='min-h-screen'>
        <div className='container px-4 py-16 mx-auto'>
          <div className='grid gap-12 md:grid-cols-2'>
            <div className='p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl'>
              {/* About image placeholder */}
              <div className='rounded-lg aspect-video bg-white/50'>
                <img
                  src='https://blxdropship.com/wp-content/uploads/2024/08/istockphoto-2088842280-612x612-1.jpg'
                  alt='About'
                />
              </div>
            </div>
            <div className='space-y-6'>
              <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                Company Introduction
              </h2>
              <p className='text-lg leading-relaxed text-gray-700'>
                BiLinXing is a professional supplier specializing in providing
                drop shipping services for cross-border e-commerce platforms.
              </p>
              <p className='text-lg leading-relaxed text-gray-700'>
                We are dedicated to offering efficient, reliable, and
                personalized supply chain solutions for e-commerce sellers,
                helping them stand out in the global market.
              </p>
            </div>
          </div>
          <div className='grid gap-12 md:grid-cols-2'>
            <div className='space-y-6'>
              <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                Our Commitment
              </h2>
              <p className='text-lg leading-relaxed text-gray-700'>
                – Customer First: We always prioritize clients’ needs, providing
                personalized services to ensure client satisfaction.
              </p>
              <p className='text-lg leading-relaxed text-gray-700'>
                – Continuous Improvement: We continually optimize and improve
                service processes, striving for better service every time.
              </p>
              <p className='text-lg leading-relaxed text-gray-700'>
                – Integrity in Business: We operate with integrity, establishing
                long-term stable partnerships with our clients.
              </p>
            </div>

            <div className='p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl'>
              {/* About image placeholder */}
              <div className='rounded-lg aspect-video bg-white/50'>
                <img
                  src='https://blxdropship.com/wp-content/uploads/2024/08/istockphoto-2088842280-612x612-1.jpg'
                  alt='About'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
