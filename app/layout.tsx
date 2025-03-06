/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:03
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-06 15:36:00
 * @FilePath: /blxdropship/src/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:03
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-01-23 16:43:56
 * @FilePath: /blxdropship/src/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLX Dropshipping - Professional Dropshipping Supplier',
  description: 'Fast fulfillment and professional dropshipping services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} pt-16`}>
        <Navigation />
        <main>{children}</main>
        <footer className='footer-wrap'>
          <div className='container px-4 mx-auto text-center'>
            <div className='mb-4'>
            No.60 guoji rue, guoji village, ville de huancun, district de tongshan, xuzhou, jiangs | WhatsApp: 852 44877150 | Email: lanpangzi6666@gmail.com
            </div>
            <p>Copyright © 2025 HLW Dropshipping</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
