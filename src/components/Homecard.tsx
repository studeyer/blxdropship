/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:12
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 21:53:40
 * @FilePath: /blxdropship/src/components/Services.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import '@/styles/jxyStyles.css'
import Image from 'next/image'

// 导入图片
import backgroundImage from '../../app/image/主页/主页下面背景.jpg'
import bottomImage from '../../app/image/主页/最下面.png'
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
  ]

  return (
    <>
      {/* 服务部分 */}
      <section className='py-24 bg-white'>
        <div className='container px-4 mx-auto'>
          <div className='text-center'>
            <h2 className='mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80'>
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
                  <div className='mb-4'>
                    <img
                      src={service.image.src}
                      alt={service.title}
                      className='w-full'
                    />
                  </div>
                  <h2 className='text-[#191919] mb-4 text-xl font-bold text-center'>
                    {service.title}
                  </h2>
                  <p className='text-gray-600 text-center'>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERP系统部分 */}
      <section
        className='relative py-24 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className='container px-4 mx-auto text-white'>
          <div className='max-w-2xl'>
            <h2 className='mb-6 text-4xl font-bold'>
              Stable and efficient ERP
            </h2>
            <p className='mb-8 text-lg'>
              More than 20 different kind of system could be integrated to our
              ERP system by APP, including EBAY, Shopify, Amazon, WISH, LAZADA,
              Joom, Shopee, Ueeshop, Kilimail, Magento, Aliexpress, MyMALL, etc.
            </p>
            <button className='px-8 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors'>
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* 物流合作伙伴部分 */}
      <section className='py-24 bg-white'>
        <div className='container px-4 mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='mb-6 text-4xl font-bold'>
                Our logistics partners
              </h2>
              <p className='mb-8 text-lg text-gray-600'>
                We collaborate with multiple international logistics companies
                to provide fast logistics services globally.
              </p>
              <button className='px-8 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors'>
                CONTACT US
              </button>
            </div>
            <div>
              <img
                src={bottomImage.src}
                alt='Logistics Partners'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
