/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:12
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 16:15:00
 * @FilePath: /blxdropship/src/components/Services.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import '@/styles/jxyStyles.css';
// 在组件文件的顶部引入图片
import productSourcingImage from '../../app/image/主页/主页四图左上.jpg'
import qualityControlImage from '../../app/image/主页/四图左上.jpg'
import warehousingImage from '../../app/image/主页/主页四张图左下.jpg'
import fastShippingImage from '../../app/image/主页/四图右下.jpg'

export default function Homecard() {
  const servicesList = [
    {
      title: 'Genuine and Reliable Supply Chain',
      description:
        'We have established cooperative relationships with more than 300,000 high-quality factories in China to ensure that the sources of our products are authentic and reliable.',
      image: productSourcingImage,
    },
    {
      title: 'More Competitive Product Prices',
      description:
        'By optimizing procurement and supply chain management, we reduce costs to offer clients more competitive product prices, enhancing their market competitiveness.',
      image: qualityControlImage,
    },
    {
      title: 'Effective Quality Control',
      description:
        'We strictly implement quality control processes, conducting rigorous inspections at every stage from procurement to production to shipping, ensuring stable and reliable product quality.',
      image: warehousingImage,
    },
    {
      title: 'Personalized Customization Services',
      description:
        'We provide personalized product customization services based on client needs, meeting their unique requirements and helping them create differentiated products.',
      image: fastShippingImage,
    },
  ];

  return (
    <section className='py-24 bg-white'>
      <div className='container px-4 mx-auto'>
        <div className='text-center'>
          <h2 className='mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800'>
          Our services are more than that
          </h2>
          {/* <p className='mx-auto max-w-2xl text-gray-600'>
            We provide comprehensive dropshipping solutions to help your
            business grow
          </p> */}
        </div>
        <div className='container px-4 py-16 mx-auto'>
        <div className='grid gap-8 md:grid-cols-2'>
          {servicesList.map((service, index) => (
            <div
              key={index}
              className='p-8 bg-white rounded-xl border border-gray-100 shadow-lg transition-all hover:shadow-xl'
            >
              <div className='mb-4 text-4xl'>
                <img src={service.image.src} alt={service.title} />
              </div>
              <h2 className='text-[#191919] mb-4 text-xl font-bold text-gray-800 text-center'>
                {service.title}
              </h2>
              <p className=' text-gray-600 text-center'>{service.description}</p>
            </div>
          ))}
        </div>
        {/* <div className='grid gap-12 md:grid-cols-2'>
          <div className='p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl'>
            <div className='mb-4 text-3xl font-bold'>Why Choose Us</div>
            <div>
              <div>
                Transparent prices and services, no storage fees, monthly fees
                or other additional charges
              </div>
              <div className='"uagb-list'>
                <div className='uagb-item'>
                  Experience: Rich experience and stable customer base
                </div>
                <div className='uagb-item'>
                  Great prices: More affordable price and better quality
                </div>
                <div className='uagb-item'>
                  Rich services: Intimate additional services, free of charge
                </div>
              </div>
            </div>
          </div>
          <div className='p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl'>
            <div className='mb-4 text-3xl font-bold text-gray-800'>
              What You Get
            </div>
            <div>
              <div>
                You can have more time and money to do what you want. We take
                care of the order fulfillment and shipping for you.
              </div>
              <div className='"uagb-list'>
                <div className='uagb-item'>
                  Time: Save your time comparing prices and processing orders
                </div>
                <div className='uagb-item'>
                  Money: Save your surcharges so you can get more sales
                </div>
                <div className='uagb-item'>
                  Partners: Better partnerships, better experiences
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </section>
  )
}
