'use client'
import React, { useEffect, useState } from "react";
import userData from '../data/data.json';
import shopcart from '../data/data2.json';
import Image from 'next/image';
import { useParams } from "next/navigation";

interface UserData {
  id: number;
  name: string;
  email: string;
  product: string;
  image: {
    desktop: string;
  };
  description: string;
  price: string;
  features: string;
  includes: IncludedItem[];
}

const UserId: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const [count, setCount] = useState<number>(1);

  const handleclick = () => {
    if (user) {
      const updatedShopcart = [...shopcart];
      if (user.name !== "") {
        updatedShopcart.push({ name: user.name, price: user.price });
      }
      console.log(updatedShopcart);

      fetch('/data/data2.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedShopcart),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
  }


  useEffect(() => {
    if (id && typeof id === 'string') {
      const foundUser = userData.find((user: UserData) => user.id === Number(id));
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [id]);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 15));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };
  console.log(shopcart);


  return (
    <div>
      {user ? (
        <div>
          <div className="products">
            <div className="on-sell-page ">
              <Image src={user.image.desktop} alt="Product Image" width={296} height={298} />
            </div>
            <div className="product-right">
              <h2>{user.product}</h2>
              <h1>{user.name}</h1>
              <h6>{user.description}</h6>
              <h3>$ {user.price}</h3>
              <div className="to-cart">
                <div className="counter">
                  <button onClick={handleDecrement}>-</button>
                  <span>{count}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleclick} id="add">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="features-left">
              <h1>FEATURES</h1>
              <p>{user.features}</p>
            </div>
            <div className="features-right">
              <h1>IN THE BOX</h1>
              {user.includes.map((includedItem, index) => (
                <p key={index}>
                  <span>{includedItem.quantity}x</span> {includedItem.item}
                </p>
              ))}
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

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserId;

