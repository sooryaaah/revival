import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        {count}
      <div>
        {" "}
        <button className="text-2xl" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <button className="text-2xl" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Button;
