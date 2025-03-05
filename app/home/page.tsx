/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:45:00
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-03-04 15:36:39
 * @FilePath: /blxdropship/app/home/page.tsx
 * @Description: Home page component
 */
import Hero from '@/components/Hero'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Services />
    </div>
  )
}
