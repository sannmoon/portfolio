import React, { useEffect, useRef, useState, useCallback } from "react";

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    }
  }, []);

  const handleElementHover = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const hasCustomCursor = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      if (element.classList.contains("custom-cursor")) return true;
      return hasCustomCursor(element.parentElement);
    };
    setIsHovering(hasCustomCursor(target));
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [handleMouseMove, handleElementHover]);

  return (
    <div
      className={`hidden md:block cursor_wrap ${isHovering ? "hovering" : ""}`}
    >
      <div
        className={`cursor_move ${!isHovering ? "cross" : ""}`}
        ref={cursorRef}
      >
        <div className="cursor_line cursor_line_top"></div>
        <div className="cursor_line cursor_line_bottom"></div>
        <div className="cursor_line cursor_line_left"></div>
        <div className="cursor_line cursor_line_right"></div>
        <div className="cursor_dot"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
