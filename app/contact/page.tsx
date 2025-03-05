/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:42:06
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-05 14:02:07
 * @FilePath: /blxdropship/app/contact/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ContantTop from '@/components/Contant'
export default function Contact() {
  return (
    <div className='min-h-screen'>
      <ContantTop />
      <div className='bg-gradient-to-r from-blue-50 to-blue-100 py-20'>
        <div className='container px-4 mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
            Contact Us
          </h1>
          <p className='text-xl text-gray-700 max-w-3xl'>
            Get in touch with our team for any inquiries
          </p>
        </div>
      </div>

      <div className='container px-4 py-16 mx-auto'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='max-w-2xl mx-auto'>
            <form className='space-y-8 bg-white p-8 rounded-xl shadow-lg'>
              <div style={{ marginBottom: '10px' }}>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  placeholder='Your name'
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  placeholder='your@email.com'
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  placeholder='Your message'
                ></textarea>
              </div>
              
              <button
              style={{ marginBottom: '10px' }}
                type='submit'
                className='w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg'
              >
                Send Message
              </button>
            </form>
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
          <div className='space-y-6'>
            <h2 className='mb-4 text-3xl font-bold text-gray-800' >
              Our Commitment
            </h2>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
