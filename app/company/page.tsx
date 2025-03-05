/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:42:02
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 17:00:58
 * @FilePath: /blxdropship/app/services/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CompanyTop from '@/components/Company'
// 在组件文件的顶部引入图片
import productSourcingImage from '../image/company里五张图/198cc3cbcc57163226424c281fda6fd.jpg'
import qualityControlImage from '../image/company里五张图/692aa61b754439e7c21838aab030c00.jpg'
import warehousingImage from '../image/company里五张图/8c8076b13acfb17d07eeff933142c29.jpg'
import fastShippingImage from '../image/company里五张图/8c8076b13acfb17d07eeff933142c29.jpg'
import fastShippingImage2 from '../image/company里五张图/dd1646754b9d0f2565b79e1b45eecf7.jpg'

export default function Company() {
  const servicesList = [
    {
      
      image: productSourcingImage,
    },
    {
      
      image: qualityControlImage,
    },
    {
      
      image: warehousingImage,
    },
    {
      
      image: fastShippingImage,
    },
    {
      
      image: fastShippingImage2,
    },
  ];

  return (
    <div className='min-h-screen'>
      <CompanyTop />
      <div className='py-20'>
        <div className='container pt-8 px-4 mx-auto'>
        <p className=' max-w-3xl text-xl text-gray-700'>
          Company
          </p>
          <h1 className='mb-6 text-4xl font-bold   md:text-5xl'>
          Real source of goods & Reliable inventory management
          </h1>
          <p className='max-w-3xl text-xl text-gray-700'>We provide free warehousing services and stock products are shipped within 24 hours</p>
          
        </div>
      </div>

      <div className='container px-4 py-16 mx-auto'>
        <div className='grid gap-8 md:grid-cols-2'>
          {servicesList.map((service, index) => (
            <div
              key={index}
            >
              <div className='mb-4'>
                <img src={service.image.src} />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}
