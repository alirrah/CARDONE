import React, { useRef, useEffect, useState } from "react";
import "./CustomerCard.scss";

const CustomerCard = ({ name, link }) => {
  const nameRef = useRef(null);
  const [truncatedName, setTruncatedName] = useState(name);

  useEffect(() => {
    const checkTextOverflow = () => {
      const nameElement = nameRef.current;
      if (nameElement) {
        const isOverflowing = nameElement.scrollWidth > nameElement.clientWidth;
        if (isOverflowing) {
          let newName = name;
          while (nameElement.scrollWidth > nameElement.clientWidth && newName.length > 0) {
            newName = newName.slice(0, -1);
            nameElement.textContent = newName + '...';
          }
          setTruncatedName(newName + '...');
        } else {
          setTruncatedName(name);
        }
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);
    return () => window.removeEventListener('resize', checkTextOverflow);
  }, [name]);

  return (
    <div className="customer-card">
      <div className="customer-image">
        {name.charAt(0).toUpperCase()}
      </div>
      <h3 className="customer-name" ref={nameRef}>{truncatedName}</h3>
    </div>
  );
};

export default CustomerCard;