// hooks/useSwipe.js
import { useEffect, useRef } from "react";

export const useSwipe = (onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown) => {
  const startX = useRef(0);
  const startY = useRef(0);
  const endX = useRef(0);
  const endY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      endX.current = e.changedTouches[0].clientX;
      endY.current = e.changedTouches[0].clientY;

      const diffX = endX.current - startX.current;
      const diffY = endY.current - startY.current;

      // 스와이프가 주로 가로로 일어났는지 세로로 일어났는지 판단
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 30) {
          onSwipeRight && onSwipeRight(); // 오른쪽으로 스와이프
        } else if (diffX < -30) {
          onSwipeLeft && onSwipeLeft(); // 왼쪽으로 스와이프
        }
      } else {
        if (diffY > 30) {
          onSwipeDown && onSwipeDown(); // 아래로 스와이프
        } else if (diffY < -30) {
          onSwipeUp && onSwipeUp(); // 위로 스와이프
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);
};
