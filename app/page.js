'use client'
import Image from "next/image";
import Header from "./composnents/Header";
import { useState } from "react";

//import Counter from "/components/Counter";

//let myCSS = {
  //fontsize: 100,
  //color: 'blue'
//}

//function Header(){
 //return(
   //<>
    //<p> style=(mycss) This is Header</p>
   //</>
 //);
//}

function Counter(props){
  const [count, setCount] = useState(props.initCounter)
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count+1)}>Increase</button>
      <button type="button"onClick={() => setCount(count-1)}>Decrease</button>
      <button type="button"onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
 

function Footer(){
 return(
   <div>
    <p>This is footer</p>
   </div>
 );
}

//function Counter(){

//}

export default function Home() {
  return (
    <div>
      <Header/>
      <Counter initCounter={10} />
      <Counter initCounter={-10} />
      <Footer/>
    </div>
  );
}
