import { useRef, useState } from "react";

const RefTipCalc = () => {
  const totalBillRef = useRef();
  const tipPercentRef = useRef();
  const [tip, setTip] = useState();

  const calcTip = () => {
    const totalBill = totalBillRef.current?.value;
    const tipPercent = tipPercentRef.current?.value;
    const tipAmount = (totalBill * (tipPercent / 100)).toFixed(2);
    setTip(tipAmount);
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

      <p>ou should give: ${tip} tip</p>
    </div>
  );
};

export default RefTipCalc;
