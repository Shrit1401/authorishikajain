import Image from "next/image";
import React, { useEffect } from "react";

const Navbar = ({ active }) => {
  useEffect(() => {
    const list = document.querySelectorAll("li a");

    list.forEach((item) => {
      if (item.textContent.toLowerCase() === active) {
        item.classList.add("active");
      }
    });
  }, [active]);

  return (
    <nav>
      <div className="left">
        <Image
          src="https://i.postimg.cc/xT7bRV2F/image.png"
          alt="logo"
          width={318 / 2}
          height={140.5 / 2}
        />
      </div>

      <div className="right">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
          <li>
            <a href="#">Arriving</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
