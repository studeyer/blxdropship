/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:08
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 16:24:07
 * @FilePath: /blxdropship/src/components/Navigation.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className='fixed z-50 w-full shadow-sm backdrop-blur-md bg-white/90'>
      <div className='container flex justify-between items-center px-4 py-4 mx-auto'>
        <Link href='/home' className='flex items-center'>
          {/* Logo placeholder */}
          <div className='flex justify-center items-center w-48 h-12 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg'>
            BLX Dropship
          </div>
        </Link>

        <div className='hidden items-center space-x-8 md:flex'>
          <Link
            href='/home'
            className='font-medium text-gray-700 transition-colors hover:text-blue-600'
          >
            Home
          </Link>

          <Link
            href='/about'
            className='font-medium text-gray-700 transition-colors hover:text-blue-600'
          >
            About
          </Link>
          <Link
            href='/services'
            className='font-medium text-gray-700 transition-colors hover:text-blue-600'
          >
            Services
          </Link>
          <Link
            href='/company'
            className='font-medium text-gray-700 transition-colors hover:text-blue-600'
          >
            Company
          </Link>
          <Link
            href='/contact'
            className='font-medium text-gray-700 transition-colors hover:text-blue-600'
          >
            Contact
          </Link>
          <Link
            href='/contact'
            className='px-6 py-2 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'
          >
            Take Action
          </Link>
        </div>
      </div>
    </nav>
  )
}
