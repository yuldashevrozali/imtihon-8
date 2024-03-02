'use client'
import { useEffect, useState } from "react";
import userData from '../data/data.json';
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

  useEffect(() => {
    if (id && typeof id === 'string') {
      const foundUser = userData.find((user: UserData) => user.id === Number(id));
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [id]);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 15)); // Max +15
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1)); // Max -1
  };

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
                <button id="add">ADD TO CART</button>
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
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserId;