/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:45:00
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-01-23 17:47:53
 * @FilePath: /blxdropship/app/home/page.tsx
 * @Description: Home page component
 */
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ERPSystem from '@/components/ERPSystem'
import LogisticsPartners from '@/components/LogisticsPartners'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Services />
      <ERPSystem />
      <LogisticsPartners />
    </div>
  )
}
