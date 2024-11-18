import React, { useRef } from "react";
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

  // Handle drag start event
  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
    // Required for drag events to fire properly in some browsers
    e.dataTransfer.setData("text/plain", "");

    // Hide the default drag image
    if (e.dataTransfer.setDragImage) {
      const img = new Image();
      img.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; // 1x1 transparent GIF
      e.dataTransfer.setDragImage(img, 0, 0);
    }
  };

  // Handle drag event
  const handleDrag = (e: React.DragEvent<HTMLButtonElement>) => {
    if (buttonRef.current && e.clientY !== 0) {
      const parentElement = buttonRef.current.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const buttonHeight = buttonRef.current.offsetHeight;
        let yDistance = e.clientY - parentRect.top - buttonHeight / 2;

        // Optional: Constrain the button within the parent container
        const maxTop = parentElement.offsetHeight - buttonHeight;
        if (yDistance < 0) yDistance = 0;
        if (yDistance > maxTop) yDistance = maxTop;

        // Set the top style of the button
        buttonRef.current.style.top = `${yDistance}px`;

        console.log("Y distance from parent (drag):", yDistance);
      }
    }
  };

  // Handle drag end event
  const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
    // Optional: You can handle any cleanup here
  };

  return (
    <button
      ref={buttonRef}
      className="MagentaA11y__side-nav-toggle"
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onClick={toggle}
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
