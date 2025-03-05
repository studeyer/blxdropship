/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:08
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-03-05 21:11:42
 * @FilePath: /blxdropship/src/components/Navigation.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className='fixed z-50 w-full shadow-sm backdrop-blur-md bg-white/90'>
      <div className='container flex justify-between items-center px-4 py-4 mx-auto'>
        <Link href='/home' className='flex items-center'>
          {/* Logo placeholder */}
          <div className='flex justify-center items-center w-48 h-12 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg'>
            BLX Dropship
          </div>
        </Link>

        {/* 移动端菜单按钮 */}
        <button
          className='p-2 md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>

        {/* 桌面端菜单 */}
        <div className='hidden items-center space-x-8 md:flex'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='font-medium text-gray-700 transition-colors hover:text-blue-600'
            >
              {item.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='px-6 py-2 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'
          >
            Take Action
          </Link>
        </div>
      </div>

      {/* 移动端展开菜单 */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'overflow-hidden max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 py-2'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='block py-3 font-medium text-gray-700 border-b border-gray-100 last:border-0'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className='py-4'>
            <Link
              href='/contact'
              className='block py-2 w-full font-medium text-center text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'
              onClick={() => setIsMenuOpen(false)}
            >
              Take Action
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
