/* esloint-disable @next/next/no-img-element */
import Ceramic from "@/components/ceramic";
import Feature from "@/components/Feature";
import Features from "@/components/features";
import Hero from "@/components/Hero";
import FamousProducts from "@/components/Products";
import Signup from "@/components/Signup";

export default function Home() {
  return (
   <div> 
    <Hero />
    <Feature />
    <Ceramic />
    <FamousProducts />
    <Signup />
    <Features />
    
   </div>
  );
}
