import Image from 'next/image';
import React from 'react';
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="headphones-2">
        <h1>HEADPHONES</h1>
      </div>

      <div className="sell-one-hephone">
        <div className="sell-one-page">
          <Image src="/heedphones.svg" alt="Rasmning izohi" width={349} height={386} />
        </div>
        <div className="sell-one-text">
          <p>NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <span>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</span>
          <Link href='./products/4'>See Product</Link>
          
        </div>
      </div>

      <div className="sell-two-hephone">
        <div className="sell-one-text">
          <h1>XX99 Mark I Headphones</h1>
          <span>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</span>
          <Link href='./products/3'>See Product</Link>
        </div>
        <div className="sell-two-page">
          <Image src="/headphones.svg" alt="Rasmning izohi" width={295} height={385} />
        </div>
      </div>

      <div className="sell-three-hephone">
        <div className="sell-three-page">
          <Image src="/whitephone.svg" alt="Rasmning izohi" width={372} height={386} />
        </div>
        <div className="sell-one-text">
          <h1>XX59
            Headphones
          </h1>
          <span>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
            The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
          </span>
          <Link href='./products/2'>See Product</Link>

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
    </div>
  );
}
