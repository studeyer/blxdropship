/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:12
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 12:27:17
 * @FilePath: /blxdropship/src/components/Services.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import '@/styles/jxyStyles.css';

export default function Services() {
  const services = [
    {
      icon: '🚀',
      title: 'Fast Fulfillment',
      description:
        '48-hour order processing and shipping guarantee for efficient delivery to your customers.',
    },
    {
      icon: '⭐',
      title: 'Quality Products',
      description:
        'Direct sourcing from manufacturers with strict quality control standards.',
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description:
        'Optimized supply chain management for the best market prices.',
    },
    {
      icon: '🌟',
      title: 'Professional Service',
      description:
        'Dedicated support team providing customized solutions for your business.',
    },
  ]

  return (
    <section className='py-24 bg-white'>
      <div className='container px-4 mx-auto'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800'>
            Our Services
          </h2>
          <p className='mx-auto max-w-2xl text-gray-600'>
            We provide comprehensive dropshipping solutions to help your
            business grow
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <div
              key={index}
              className='p-8 bg-white rounded-xl border border-gray-100 shadow-lg transition-shadow hover:shadow-xl'
            >
              <div className='mb-4 text-4xl'>{service.icon}</div>
              <h3 className='mb-4 text-xl font-bold text-gray-800'>
                {service.title}
              </h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
