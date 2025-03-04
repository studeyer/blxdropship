/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:03
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-03-04 14:16:42
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
            <div>
              Huaihai Cross-border Trade Center, Quanshan District, Xuzhou,
              Jiangsu, China | WhatsApp: +86 137 0522 6238 | Email:
              zhangfan3888@gmail.com
            </div>
            <p>Copyright © 2025 BLX Dropshipping</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
