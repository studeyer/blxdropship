/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:47
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 15:38:35
 * @FilePath: /blxdropship/src/components/Hero.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '@/styles/jxyStyles.css';
export default function About() {
  return (
    <section className='relative min-h-[600px] flex items-center bg-gradient-to-r from-blue-50 to-blue-100 bg-body-img-about'>
      <div className='container relative z-10 px-4 mx-auto'>
        <div className='text-center'>
          <h1 className='mb-6 text-6xl font-bold bg-clip-text text-white'>
          Who We Are?
          </h1>
         
        </div>
      </div>
      <div className='hidden absolute right-0 top-1/2 w-1/2 h-full -translate-y-1/2 lg:block'>
        {/* 这里可以添加hero section的图片 */}
        <div className='w-full h-full bg-gradient-to-l from-blue-200 to-transparent opacity-50'></div>
      </div>
    </section>
  )
}
