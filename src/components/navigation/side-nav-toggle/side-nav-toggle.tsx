import React, { useRef, useState, useEffect, useCallback } from "react";
import "./side-nav-toggle.scss";

interface SideNavToggleButtonProps {
  toggle: () => void;
  isVisible: boolean;
}

const SideNavToggle: React.FC<SideNavToggleButtonProps> = ({
  toggle,
  isVisible,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  // Move button up or down by 1px
  const moveButton = useCallback((direction: "up" | "down") => {
    if (buttonRef.current) {
      const parentElement = buttonRef.current.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const buttonHeight = buttonRef.current.offsetHeight;

        let newTop =
          buttonRect.top - parentRect.top + (direction === "up" ? -5 : 5);

        // Constrain the button within the parent container
        const maxTop = parentElement.offsetHeight - buttonHeight;
        if (newTop < 0) newTop = 0;
        if (newTop > maxTop) newTop = maxTop;

        buttonRef.current.style.top = `${newTop}px`;
      }
    }
  }, []);

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        moveButton("up");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        moveButton("down");
      }
    },
    [moveButton]
  );

  // Add and remove keydown event listener
  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      button.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (button) {
        button.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [handleKeyDown]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDragging(true);
    e.preventDefault(); // Prevent text selection or other default behavior
  };

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && buttonRef.current) {
        const parentElement = buttonRef.current.parentElement;
        if (parentElement) {
          const parentRect = parentElement.getBoundingClientRect();
          const buttonHeight = buttonRef.current.offsetHeight;
          let yDistance = e.clientY - parentRect.top - buttonHeight / 2;

          // Constrain the button within the parent container
          const maxTop = parentElement.offsetHeight - buttonHeight;
          if (yDistance < 0) yDistance = 0;
          if (yDistance > maxTop) yDistance = maxTop;

          // Set the top style of the button
          buttonRef.current.style.top = `${yDistance}px`;
        }
        setHasDragged(true);
      }
    },
    [isDragging]
  );

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    setIsDragging(true);
  };

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();

      if (isDragging && buttonRef.current) {
        const parentElement = buttonRef.current.parentElement;
        if (parentElement) {
          const touch = e.touches[0];
          const parentRect = parentElement.getBoundingClientRect();
          const buttonHeight = buttonRef.current.offsetHeight;
          let yDistance = touch.clientY - parentRect.top - buttonHeight / 2;

          // Constrain the button within the parent container
          const maxTop = parentElement.offsetHeight - buttonHeight;
          if (yDistance < 0) yDistance = 0;
          if (yDistance > maxTop) yDistance = maxTop;

          // Set the top style of the button
          buttonRef.current.style.top = `${yDistance}px`;
        }
      }
      setHasDragged(true);
    },
    [isDragging]
  );

  // Add and remove event listeners
  useEffect(() => {
    const touchMoveOptions = { passive: false };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, touchMoveOptions);
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("touchcancel", handleTouchEnd);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    isDragging,
  ]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (hasDragged) {
      // If a drag has occurred, prevent the click action
      e.preventDefault();
      e.stopPropagation();
      setHasDragged(false); // Reset the flag
      return;
    }
    toggle();
  };

  return (
    <button
      ref={buttonRef}
      className="MagentaA11y__side-nav-toggle"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      aria-label={`Toggle Side Navigation, ${
        isVisible ? "expanded" : "collapsed"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
      >
        <path d="M400-280v-400l200 200-200 200Z" />
      </svg>
    </button>
  );
};

export default SideNavToggle;
