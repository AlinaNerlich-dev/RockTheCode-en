import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import CustomButton from "./components/Button";
import BasicSpeedDial from "./components/Dial";
function App() {
  return (
    <>
      <Header />
      <Body />
      {/* <CustomButton> Custom Button!</CustomButton> */}

      <BasicSpeedDial></BasicSpeedDial>
      <Footer />
    </>
  );
}

export default App;
