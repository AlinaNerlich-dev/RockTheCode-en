import { useState, useMemo } from "react";

const numberList = [1, 2, 1, 4, 0, 6];

const mapNumbers = (numbers, caller) => {
  console.log("CALLER: ", caller);

  return numbers.map((number, index) => {
    const calc = (number * 3) / 2;
    const color = calc < 3 ? "🍎" : "🍏";
    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const BasicUseMemo = () => {
  const [rerender, setRerender] = useState(false);
  //   const numbersContent = mapNumbers(numberList, "Not useMemo");
  const numbersContentMemo = useMemo(() => {
    return mapNumbers(numberList, "Using useMemo");
  }, []);

  return (
    <>
      <div>
        <h3>Not useMemo</h3>
        {/* {numbersContent} */}
        {numbersContentMemo}
      </div>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </>
  );
};

export default BasicUseMemo;
