import { useCallback, useState } from "react";

function TestUserEvent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>button</button>
      <p>{isClicked ? "clicked" : "not clicked"}</p>
    </div>
  );
}

export default TestUserEvent;
