import React from 'react'
import JSConfetti from 'js-confetti'

function useConfettiScreen() {
    const canvasRef = React.useRef();
    const confettiRef = React.useRef();
  
    React.useEffect(() => {
      confettiRef.current = new JSConfetti({ canvas: canvasRef.current });
    }, []);
  
    return { canvasRef, confettiRef };
}

export { useConfettiScreen } 