import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bringing'>
                <div className="bringing-left">
                    <h1>Bringing you the best audio gear</h1>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="bringing-right">
                    <Image
                        src="/bringing.png"
                        alt="Rasmning izohi"
                        width={540}
                        height={588}
                    />
                </div>
            </div>

            <footer >
                <div className="footer-left">
                    <Image
                        src="/logo.svg"
                        alt="Rasmning izohi"
                        width={143}
                        height={25}
                    />
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <h6>Copyright 2021. All Rights Reserved</h6>
                </div>
                <div className="footer-right">
                    <ul>
                    <Link href='/'>Home</Link>
                    <Link href='/HEADPHONES'>HEADPHONES</Link>
                    <Link href='/SPEAKERS'>SPEAKERS</Link>
                    <Link href='/EARPHONES'>EARPHONES</Link>
                    </ul>
                    <div className="brends">
                    <Image src="/facebook.svg" alt="Rasmning izohi" width={24} height={24} />
                    <Image src="/twitter.svg" alt="Rasmning izohi" width={24} height={24} />
                    <Image src="/insta.svg" alt="Rasmning izohi" width={24} height={24} />
                    </div>
                </div>
            </footer>
        </>

    )
}
