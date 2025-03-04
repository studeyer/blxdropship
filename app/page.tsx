/*
 * @Author: caihongtai caihongtai
 * @Date: 2025-01-23 16:41:04
 * @LastEditors: caihongtai caihongtai
 * @LastEditTime: 2025-01-23 17:47:41
 * @FilePath: /blxdropship/app/page.tsx
 * @Description: Root page redirect to home
 */
import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/home')
}
