"use client";
import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";


const PickCar = () => {
    const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id: string) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id: string) => {
    return colorBtn === id ? "colored-button" : "";
  };
    return(
        <section className="p-pick">
            <div className="p-container">
                <div className="flex flex-col">
                    <div className="m-box text-center text-[#010103] max-w-[400px] mb-[40px]">
                        <h3 className="text-[19.2px] font-[500]">Vehicle Models</h3>
                        <h2 className="text-[33.6px] m-pick">Our rental fleet</h2>
                        <p className="text-[#706f7b]">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                    </div>
                    <div className="flex justify-between gap-[8px]">
                        {/* pick car */}
                        <div className="flex flex-col gap-[5px]">
                            <button className={`${coloringButton("btn1")} text-[20px] font-[600] border-none cursor-pointer p-pickBox  bg-[#e9e9e9] transition-all duration-200 text-left hover:bg-[#ff4d30] hover:text-white`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}>Audi A1 S-Line</button>
                            <button className={`${coloringButton("btn2")} text-[20px] font-[600] border-none cursor-pointer p-pickBox  bg-[#e9e9e9] transition-all duration-200 text-left hover:bg-[#ff4d30] hover:text-white`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}>VW Golf 6</button>
                            <button className={`${coloringButton("btn3")} text-[20px] font-[600] border-none cursor-pointer p-pickBox  bg-[#e9e9e9] transition-all duration-200 text-left hover:bg-[#ff4d30] hover:text-white`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}>Toyota Corolla</button>
                            <button className={`${coloringButton("btn4")} text-[20px] font-[600] border-none cursor-pointer p-pickBox  bg-[#e9e9e9] transition-all duration-200 text-left hover:bg-[#ff4d30] hover:text-white`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}>BMW 320 MordernLine</button>
                            <button className={`${coloringButton("btn5")} text-[20px] font-[600] border-none cursor-pointer p-pickBox  bg-[#e9e9e9] transition-all duration-200 text-left hover:bg-[#ff4d30] hover:text-white`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}>Mercedes-Benz GLK</button>
                            <button className={`${coloringButton("btn6")} text-[20px] font-[600] border-none cursor-pointer p-pickBox  bg-[#e9e9e9] transition-all duration-200 text-left hover:bg-[#ff4d30] hover:text-white`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}>VW Passat CC</button>
                        </div>
                        {active === "FirstCar" && <CarBox cars={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox cars={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox cars={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox cars={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox cars={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox cars={CAR_DATA} carID={5} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PickCar