import { use, useEffect, useRef, useState } from 'react';

export default function FastFoodOrder() {
  const foodRef = useRef();
  const drinkRef = useRef();
  const typingTimeoutRef = useRef();
  const [readyMessage, setReadyMessage] = useState(false);

  function handleFoodInput() {
    foodRef.current.focus();
  }

  function handleDrinkInput() {
    drinkRef.current.focus();
  }

  function handleTyping() {
    setReadyMessage(false);
    clearTimeout(typingTimeoutRef.current);

    setTimeout(() => {
      setReadyMessage(true);
    }, 3000);
  }

  useEffect(() => {
    clearTimeout(typingTimeoutRef.current);
  }, []);

  return (
    <>
      <h1>Fast Food Order 🍔</h1>
      <div className="input-box">
        <input
          ref={foodRef}
          type="text"
          placeholder="Enter food order here"
          onChange={handleTyping}
        />
        <input
          ref={drinkRef}
          type="text"
          placeholder="Enter drink order here"
          onChange={handleTyping}
        />
      </div>
      <br />
      <button onClick={handleFoodInput}>Food Button</button>
      <button onClick={handleDrinkInput}>Drink Button</button>
      <div>
        <p>{readyMessage ? 'Order ready to confirm! ✅' : ''}</p>
      </div>
    </>
  );
}
