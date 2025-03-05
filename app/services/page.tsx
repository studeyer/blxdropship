/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:42:02
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 22:32:13
 * @FilePath: /blxdropship/app/services/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Service from '@/components/Service'
// 在组件文件的顶部引入图片
import productSourcingImage from '../image/services图/左上.jpg'
import qualityControlImage from '../image/services图/右上.jpg'
import warehousingImage from '../image/services图/services四图左下.jpg'
import fastShippingImage from '../image/services图/services四图右下.jpg'

export default function Services() {
  const servicesList = [
    {
      title: 'Product Sourcing',
      description:
        'We assign a dedicated account manager to each client, offering one-on-one service to ensure that every client’s needs are promptly addressed and resolved.',
      image: productSourcingImage,
    },
    {
      title: 'Quality Control',
      description:
        'We strictly implement the quality control process and conduct strict inspections at every stage from procurement to shipment to ensure stable and reliable product quality.',
      image: qualityControlImage,
    },
    {
      title: 'Warehousing',
      description:
        'We have an inventory warehouse management system that enables fast delivery of inventory products within 24 hours, shortening the delivery cycle.',
      image: warehousingImage,
    },
    {
      title: 'Fast Shipping',
      description:
        'We offer comprehensive after-sales services and guarantee policies, ensuring that clients have no worries during the purchase and use process.',
      image: fastShippingImage,
    },
  ];

  return (
    <div className='min-h-screen'>
      <Service />
      <div className='py-20'>
        <div className='container px-4 mx-auto'>
          <h1 className='mt-[6] mb-6 text-4xl font-bold text-black bg-clip-text  md:text-5xl text-center'>
          It’s Time to Start Your Business
          </h1>
          <p className='text-center'>Trusting professional and reliable suppliers can save you more time and money.</p>
        </div>
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
              <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                {service.title}
              </h2>
              <p className='text-lg text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
        <div className='grid gap-12 md:grid-cols-2'>
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
        </div>
      </div>
    </div>
  )
}
