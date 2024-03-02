import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="header">


        <div className="header-bottom">
          <div className="hero-left">
            <p className='product'>
              NEW PRODUCT
            </p>
            <h1>XX99 Mark II
              Headphones
            </h1>
            <p>Experience natural, lifelike audio and exceptional build
              quality made for the passionate music enthusiast.
            </p>
            <Link href='./HEADPHONES'>See See Product</Link>
          </div>
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

      <div className="zx9">
        <div className="zx9-left">
          <Image id='img2' src="./speakers2.svg" alt="My Image" width={401.239} height={150} />

        </div>
        <div className="zx9-right">
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link href='/SPEAKERS'>See Product</Link>
        </div>
      </div>
      <div className="zx7">
        <h1>ZX7 SPEAKER</h1>
        <Link href='/SPEAKERS'>See Product</Link>
      </div>

      <div className="earphones">
        <div className="earphones-left">
          <Image src="./earphones2.svg" alt="My Image" width={540} height={320} />
        </div>
        <div className="earphones-right">
          <h1>YX1 EARPHONES</h1>
          <Link href='/EARPHONES'>See Product</Link>
        </div>
      </div>
    </>
  );
}
