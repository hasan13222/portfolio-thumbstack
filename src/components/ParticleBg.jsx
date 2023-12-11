'use client'
import React, { useEffect, useState } from 'react'
import ParticlesBg from "particles-bg";

const ParticleBg = () => {
    const [isMounted, setIsMounted] = useState(false);

    

    useEffect(() => {
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-40, 40],
            alpha: [0.6, 0],
            scale: [0.1, 0.4],
            position: "all",
            color: ["random", "#ff0000"],
            cross: "dead",
            // emitter: "follow",
            random: 15,
          };
      
          if (Math.random() > 0.85) {
            config = Object.assign(config, {
              onParticleUpdate: (ctx, particle) => {
                ctx.beginPath();
                ctx.rect(
                  particle.p.x,
                  particle.p.y,
                  particle.radius * 2,
                  particle.radius * 2
                );
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.closePath();
              },
            });
          }
          
        setIsMounted(true);
    }, []);
    return (
        <div>
            {isMounted && (
                <div>
                    {/* Import particles-bg only on the client-side */}
                    {typeof window !== 'undefined' && (
                        <ParticlesBg type="cobweb" bg={true} />
                    )}
                </div>
            )}
        </div>
    );
}

export default ParticleBg