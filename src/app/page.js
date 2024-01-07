"use client";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { images } from "../assets";
import "./page.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicParticleBackground = dynamic(() => import('../components/ParticleBg'), {
  ssr: false
});

export default function Home() {
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
        setShouldRenderParticles(true);
    }
}, []);
  return (
    <>
      <div className="home">
        <div className="image">
          <Image src={images.profilePic} alt="profile picture" />
        </div>
        <div className="texts">
          <h2>Jamil Hasan</h2>
          <h4>React Developer</h4>
          <p>
            I am a passionate Web Developer and logical thinker who is happy to
            introduce himself as a front end developer.
          </p>
          <p><strong>My Skills:</strong> I am expert in HTML, CSS, Tailwind and Bootstrap. I am comfortable in Javascript and React. I am familiar with Redux, NextJS, NodeJS, ExpressJS, MongoDB. </p>
          
          <a href="/projects"><button style={{padding: '1rem', borderRadius: '2px', marginTop: '8px'}}>Portfolio</button></a>
        </div>
      </div>
      {shouldRenderParticles && <DynamicParticleBackground />}
    </>
  );
}
