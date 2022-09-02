import React from "react";

function randInt(min, max) {
    let x = (max - min) + 1
    return min + Math.floor(Math.random() * x)
}

export default function Banner() { //Function Component
    const r = randInt(1, 3)
    let banner = ''
    let url = ''

    switch(r) {
        case 1:
            banner = './banners/image1.jpg'
            url = 'https://www.reactjs.org'
            break
        case 2:
            banner = './banners/image2.jpg'
            url = 'https://reactnative.com'        
        case 3:
            banner = './banners/image3.jpg'
            url = 'https://nodejs.org'
        default: break
    }

    const bannerClick = () => {
        window.open(url)
    }

    return (
        <div style={{margin: '20px', textAlign:'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}} alt='banner'/>
        </div>
    )
}