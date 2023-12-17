"use client"
import Image from "next/image"
import dynamic from 'next/dynamic'
import React , {useEffect,useState} from 'react'
import {VIIcon,BgImage,BuyIcon,DiscoveryIcon,Xbox,PlayStation,Steam} from '../public/images/index'


const MyVideoPlayer = dynamic(()=> import('../app/components/MyVideoPlayer'), {ssr:false})

export default function Home() {

  const [windowWidth,setWindowWidth] = useState(0);

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth)
    }

    setWindowWidth(window.innerWidth)

    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[])

  if(windowWidth < 1440){
    return (
      <div>
        <p>This is not suitable for small screens</p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Image
          alt='bgImage'
          src={BgImage}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className='absolute left-[45%] mt-5'>
          <Image
            src={VIIcon}
            alt='vi'
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <p className='absolute left-[45%] font-Inter text-[38px] text-white font-black mt-5'>2025</p>
        <div className='absolute xl:top-[15%] xl:left-[12%]'>
          <div className='absolute font-PricedownBl text-[120px] text-white custom-text-shadow'>
            <p>grand</p>
            <p className='mt-[-75px] pl-[55px]'>theft</p>
            <p className='mt-[-75px] pl-[100px]'>auto</p>
          </div>
          <div className='absolute mt-[390px]'>
            <p className='font-Inter text-[#ccc] custom-text-shadow text-[16px] font-normal leading-tight w-[460px]'>
            Dive into the future of gaming with Rockstar Games' GTA VI. Unleash chaos in a vibrant metropolis with stunning visuals and an immersive narrative. Explore now for exclusive content and updates.
            </p>
          </div>
          <div className='absolute mt-[530px]'>
            <div className='flex gap-12'>
              <button className='w-[180px] h-[55px] bg-white flex justify-center gap-4 pt-4'>
                <div>
                  <Image
                    src={BuyIcon}
                    alt='BuyIcon'
                    className='w-[20px] h-[20px]'
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
                <div>
                <p className='text-[#080A0C] font-Inter font-semibold text-[16px]'>Buy Now</p>
                </div>
              </button>
              <button className='w-[140px] h-[55px] flex gap-4 border-white border-2 justify-center pt-4 hover:bg-black'>
              <div>
              <Image
                src={DiscoveryIcon}
                alt='DiscoveryIcon'
                className='w-[20px] h-[20px]'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              </div>
              <div>
              <p className='text-[#FAFAFA] font-Inter font-semibold text-[16px] mt-[-2px]'>Discover</p>
              </div>
              </button>
            </div>
          </div>
          <div className='absolute ml-[600px] mt-[80px]'>
          <MyVideoPlayer/>
            <p className='font-Inter text-[12px] font-black text-white custom-text-shadow'>AVAILABLE ON:</p>
            <div className='flex gap-4'>
              <Image
                src={Xbox}
                alt='Xbox'
                className='w-[30px] h-[30px]'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <Image
                src={PlayStation}
                alt='PlayStation'
                className='w-[30px] h-[30px]'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <Image
                src={Steam}
                alt='Steam'
                className='w-[30px] h-[30px]'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
