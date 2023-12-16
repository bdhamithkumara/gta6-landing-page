"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {VIIcon,BgImage,BuyIcon,DiscoveryIcon,Xbox,PlayStation,Steam,} from '../public/images/index'


const MyVideoPlayer = dynamic(()=> import('../app/components/MyVideoPlayer'), {ssr:false})

export default function Home() {
  return (
    <div>
      <div>
        <Image alt='bgImage' src={BgImage} layout='fill' objectFit='cover'/>
        <div className='absolute left-[45%] mt-5'>
          <Image src={VIIcon} alt='vi'/>
        </div>
        <p className='absolute left-[45%] font-Inter text-[38px] text-white font-black mt-5'>2025</p>
      </div>
    </div>
  )
}
