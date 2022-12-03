import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Body.module.scss";
import Button from 'antd/es/button';
const Body: FC = () => {
  return (
    <div className={`${s.container}`}>
   
      <div className={`${s.human}`}>
        <Image 
         src="/images/human.png"
         alt="2 humans"
         width={250}
         height={250} />
        
         
      </div>
      <div>
      <div className={`${s.wave}`}> <Image 
         src="/images/waves.png"
         alt="wave"
         height={70}
         width={70}
          /></div>
      <div className={`${s.shock}`}><Image 
         src="/images/shock.png"
         alt="shock"
         height={120}
         width={120}
          /></div>
    </div>
    <div className={`${s.title}`}>
    <h1>THE HAPPY</h1>
    <h1>DOOR FLEA</h1>
  </div>
  <div className={`${s.enterdetails}`}>
    <h2>Enter Details Here!</h2>
  </div>
  
  </div>
  );
};

export default Body;
