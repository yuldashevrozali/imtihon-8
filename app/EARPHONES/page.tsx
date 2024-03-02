import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <div>
            <div className="headphones-2">
                <h1>EARPHONES</h1>
            </div>

            <div className="sell-one-hephone">
                <div className="sell-two-page erphone">
                    <Image src="/earphones.svg" alt="Rasmning izohi" width={349} height={386} />
                </div>
                <div className="sell-one-text">
                    <p>NEW PRODUCT</p>
                    <h1>YX1 WIRELESS
                        EARPHONES
                    </h1>
                    <span>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </span>
                    <Link href='./products/1'>See Product</Link>
                </div>
            </div>

            <div className="hero">
      <div className="hero-shop">
          <div className="block">
            <Image id='img' src="./headphones.svg" alt="My Image" width={123} height={160} />
            <h1>HEADPHONES</h1>
            <Link className='flex' href='/shop'>shop <Image src="./btn.svg" alt="My speakers" width={5} height={10} /> </Link>
          </div>
          <div className="block">
            <Image id='img' src="./speakers.svg" alt="My speakers" width={123} height={160} />
            <h1>SPEAKERS</h1>
            <Link className='flex' href='/shop'>shop <Image src="./btn.svg" alt="My speakers" width={5} height={10} /> </Link>
          </div>
          <div className="block">
            <Image id='img' src="./earphones.svg" alt="My Image" width={123} height={170} />
            <h1 style={{ marginTop: '65px' }}>EARPHONES</h1>
            <Link className='flex' href='/shop'>shop <Image src="./btn.svg" alt="My speakers" width={5} height={10} /> </Link>
          </div>
        </div>
      </div>
        </div>
    );
}
