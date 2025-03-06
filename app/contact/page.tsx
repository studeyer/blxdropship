/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 17:42:06
 * @LastEditors: jxy mr_jxy_steven@163.com
 * @LastEditTime: 2025-03-06 15:38:33
 * @FilePath: /blxdropship/app/contact/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ContantTop from '@/components/Contant'
export default function Contact() {
  return (
    <div className='min-h-screen'>
      <ContantTop />

      <div className='container px-4 py-16 mx-auto'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='max-w-3xl'>
            <form className='space-y-8 bg-white p-8 '>
              <h2 className='mb-4 text-4xl font-bold text-gray-800'>
                We’re Ready, Let’s Talk.
              </h2>
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
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                  placeholder='Your message'
                ></textarea>
              </div>

              <button
                style={{ marginBottom: '10px', width: '185px' }}
                type='submit'
                className='w-full rounded-2xl transition-colors bg-primary hover:bg-primary/90 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg mx-auto'
              >
                Send Message
              </button>
            </form>
          </div>

          <div className='grid gap-8 md:grid-cols-1'>
            <div className='space-y-6'>
              <h2
                className='text-4xl font-bold text-gray-800'
                style={{ marginTop: '30px' }}
              >
                Contact Info
              </h2>
              <div className='mb-4' style={{ marginTop: '10px' }}>
                <p className='text-xl font-medium text-gray-600 text-[#191919]'>
                  Address
                </p>
                <p className='text-base font-normal text-gray-500 text-[#404040]'>
                No.60 guoji rue, guoji village, ville de huancun, district de tongshan, xuzhou, jiangs
                </p>
              </div>
              <div className='mb-4' style={{ marginTop: '10px' }}>
                <p className='text-xl font-medium text-gray-600 text-[#191919]'>
                  Email
                </p>
                <p className='text-base font-normal text-gray-500 text-[#404040]'>
                lanpangzi6666@gmail.com
                </p>
              </div>
              <div className='mb-4' style={{ marginTop: '10px' }}>
                <p className='text-xl font-medium text-gray-600 text-[#191919]'>
                  WhatsApp
                </p>
                <p className='text-base font-normal text-gray-500 text-[#404040]'>
                852 44877150
                </p>
              </div>
              <p className='text-xl font-medium text-gray-600 text-[#191919]'>
                Follow Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
