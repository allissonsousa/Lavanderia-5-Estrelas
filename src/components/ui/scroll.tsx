'use client'; // Não esqueça disso no Next.js App Router

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function Paralax1() {
    const containerRef = useRef(null);

    // 1. Vinculamos o scroll apenas a este container específico
    // offset: ["start start", "end start"] significa: 
    // "começa a contar quando o topo do container toca o topo da tela"
    // "para de contar quando o fim do container toca o topo da tela"
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });


    const y = useTransform(scrollYProgress, [0, 1], ["0%", "%"]);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden">
            {/* O segredo aqui é o 'scale: 1.2'. 
                A imagem precisa ser maior que o container para que, 
                ao se mover, ela não mostre um fundo vazio.
            */}
            <motion.div
                style={{ y, scale: 1.2 }}
                className="absolute inset-0 z-10 h-[110%]" // 20% maior que a tela
            >
                <Image
                    src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=839&auto=format&fit=crop"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay de cor e blur */}
                <div className='absolute inset-0 bg-brand-dark/30 backdrop-blur-[2px]'></div>
            </motion.div>
        </section>
    );
}

export default Paralax1;