/*
 render the array passed as props
 */

'use client'

import { useState, useEffect } from 'react';

export default function WordsGenerator({array}) {
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
  const words = array;
let index = 1;

    setCurrentWord(words[0])

    const intervalId = setInterval(() => {
        setCurrentWord(words[index]);
        index = (index + 1) % words.length;
        }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className='text-white font-bold text-4xl'>
        {currentWord}
    </p>
  )
}
