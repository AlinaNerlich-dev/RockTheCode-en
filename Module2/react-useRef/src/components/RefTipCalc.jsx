import { useRef } from "react";

const RefTipCalc = () => {
  const totalBillRef = useRef();
  const tipPercentRef = useRef();

  const calcTip = () => {
    const totalBill = totalBillRef.current?.value;
    const tipPercent = tipPercentRef.current?.value;
    const tipAmount = totalBill * (tipPercent / 100);
    console.log("Tip Amount: ", tipAmount);
  };

  return (
    <div>
      <h3>Tip Calculator</h3>
      <label htmlFor="totalBill">
        <input type="text" name="totalBill" id="totalBill" ref={totalBillRef} />
      </label>
      <br />
      <label htmlFor="tipPercent">
        <input
          type="text"
          name="tipPercent"
          id="tipPercent"
          ref={tipPercentRef}
        />
      </label>
      <br />
      <button onClick={calcTip}>Calculate Tip!</button>
    </div>
  );
};

export default RefTipCalc;
