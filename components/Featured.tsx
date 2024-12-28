'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const imgs = [
    '/assets/icons/theguardian.jpg',
    '/assets/icons/nytimes.jpg',
    '/assets/icons/mayfair.jpg',
    '/assets/icons/ceomagazine.jpg',
    '/assets/icons/businessinsider.jpg',
    '/assets/icons/bloomberg.jpg',
]

function Featured() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const visibleImages = 4;
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false); // Trigger exit animation
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === imgs.length - visibleImages ? 0 : prevIndex + 1
                );
                setIsVisible(true); // Trigger enter animation
            }, 200); // Slight delay for smooth transition
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='bg-white py-16 text-center px-10'>
            <h2 className='text-4xl mb-10 font-secondary'>
                As featured in
            </h2>
            
            <div className='max-w-6xl mx-auto overflow-hidden'>
                <AnimatePresence mode="wait">
                    {isVisible && (
                        <motion.div 
                            className='flex'
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                x: `-${currentIndex * (100 / visibleImages)}%`
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                        >
                            {[...imgs, ...imgs].map((img, index) => (
                                <motion.div
                                    key={index}
                                    className='flex-shrink-0'
                                    style={{ width: `${100 / visibleImages}%` }}
                                >
                                    <Image 
                                        src={img} 
                                        alt={`Featured publication ${index + 1}`}
                                        width={300}
                                        height={100}
                                        className='h-24 w-auto object-contain mx-auto'
                                        priority={index < visibleImages}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Featured