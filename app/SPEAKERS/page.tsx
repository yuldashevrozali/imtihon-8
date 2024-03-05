import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className="headphones-2">
        <h1>SPEAKERS</h1>
      </div>

      <div className="sell-one-hephone">
        <div className="sell-one-page">
          <Image src="/speker.svg" alt="Rasmning izohi" width={291} height={350} />
        </div>
        <div className="sell-one-text">
          <p>NEW PRODUCT</p>
          <h1>
            ZX9
            SPEAKER
          </h1>
          <span>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless
            connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </span>
          <Link href='./products/6'>See Product</Link>
        </div>
      </div>

      <div className="sell-two-hephone">
        <div className="sell-one-text">
          <h1>ZX7
            SPEAKER
          </h1>
          <span>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components
            that represents the top of the line powered speakers for home or studio use.
          </span>
          <Link href='./products/5'>See Product</Link>
        </div>
        <div className="sell-two-page zx7spek">
          <Image src="/zx7spek.svg" alt="Rasmning izohi" width={268} height={385} />
        </div>
      </div>

      <div className="hero">
        <div className="hero-shop">
          <div className="block">
            <Image id='img' src="./headphones.svg" alt="My Image" width={123} height={160} />
            <h1>HEADPHONES</h1>
            <Link className='flex' href='/HEADPHONES'>shop <Image src="./btn.svg" alt="My speakers" width={5} height={10} /> </Link>
          </div>
          <div className="block">
            <Image id='img' src="./speakers.svg" alt="My speakers" width={123} height={160} />
            <h1>SPEAKERS</h1>
            <Link className='flex' href='/SPEAKERS'>shop <Image src="./btn.svg" alt="My speakers" width={5} height={10} /> </Link>
          </div>
          <div className="block">
            <Image id='img' src="./earphones.svg" alt="My Image" width={123} height={170} />
            <h1 style={{ marginTop: '65px' }}>EARPHONES</h1>
            <Link className='flex' href='/EARPHONES'>shop <Image src="./btn.svg" alt="My speakers" width={5} height={10} /> </Link>
          </div>
        </div>
      </div>
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
    </div>

  );
}
