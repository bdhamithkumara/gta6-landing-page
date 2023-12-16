"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import PlayButton from '../../public/images/playbutton.svg'
import Image from 'next/image'

const MyVideoPlayer = () => {

    const videoSrc = '/videos/Trailer1.mp4';
    const videoImageScr = '/images/PlayerImage.png';

  return (
    <div>
        <ReactPlayer 
            width="500px"
            height="350px"
            url={videoSrc}
            controls={true}
            playing={true}
            light={videoImageScr}
            playIcon={<Image src={PlayButton} width={80} height={80} alt='PlayerIcon'/>}
        />
        <source src={videoSrc} type='video/mp4'/>
    </div>
  )
}

export default MyVideoPlayer