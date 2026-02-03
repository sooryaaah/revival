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
        <button disabled={count == 0} className="text-2xl" onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        <button className="text-2xl" onClick={()=> setCount(count+5)}> Step count +5</button>
      </div>
      <div>
        <button className="text-2xl" onClick={()=> setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Button;
