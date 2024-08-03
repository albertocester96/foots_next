'use client'

import { useState, useEffect } from 'react';

export default function WordsGenerator() {
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
  const words = ["ciao", "Alberto"];
    let index = 0;

    setCurrentWord(words[0])

    const intervalId = setInterval(() => {
        setCurrentWord(words[index]);
        index = (index + 1) % words.length;
        }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className='text-white font-bold text-4xl'>
        {currentWord}
    </h1>
  )
}
