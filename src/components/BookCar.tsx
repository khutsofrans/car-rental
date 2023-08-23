const BookCar = () => {
    return(
        <div className="relative bg-gradient-bookCar">
            <div className="m-box mb-[10rem] p-container max-w-[133rem] ">
                <div className="relative flex flex-col w-full h-auto bg-[#ffffff] p-box shadow-5xl z-[4] text-[#010103] rounded-[5px] bg-[url('/images/book-car/book-bg.png')] bg-center bg-no-repeat bg-cover ">
                    <h3 className="font-bold mb-[2.1rem] px-[25px] pt-5">Book a car</h3>
                    <form className="grid grid-cols-3 grid-rows-3 gap-[16px] px-[25px] pb-5">
                        <div className="flex flex-col">
                            <label className="text-[1rem] font-[600] mb-[8px] ">&nbsp; Select Your Car Type <b>*</b></label>
                            <select className="text-[#ababab] border border-solid border-[#ccd7e6] rounded-[3px] font-[400] py-[0.7rem] px-[1.6rem] outline-none  ">
                                <option>Select your car type</option>
                                <option value="">Audi A1 S-LINE</option>
                                <option value="">VW Golf 6</option>
                                <option value="">Toyota Corrolla</option>
                                <option value="">BMW 320 ModernLine</option>
                                <option value="">Mercedes-Benz GLK</option>
                                <option value="">VW Passat CC</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[1rem] font-[600] mb-[8px] ">&nbsp; Pick-up{" "} <b>*</b></label>
                            <select className="text-[#ababab] border border-solid border-[#ccd7e6] rounded-[3px] font-[400] py-[0.7rem] px-[1.6rem] outline-none  ">
                                <option>Select your pick-up location</option>
                                <option value="">Johannesburg CBD</option>
                                <option value="">Rosebank</option>
                                <option value="">Randburg</option>
                                <option value="">Sandton</option>
                                <option value="">Midrand</option>
                                <option value="">Centurion</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[1rem] font-[600] mb-[8px] ">&nbsp; Drop-off{" "} <b>*</b></label>
                            <select className="text-[#ababab] border border-solid border-[#ccd7e6] rounded-[3px] font-[400] py-[0.7rem] px-[1.6rem] outline-none  ">
                                <option>Select your drop-off location</option>
                                <option value="">Johannesburg CBD</option>
                                <option value="">Rosebank</option>
                                <option value="">Randburg</option>
                                <option value="">Sandton</option>
                                <option value="">Midrand</option>
                                <option value="">Centurion</option>
                            </select>
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-[1rem] font-[600] mb-[8px] ">&nbsp; Pick-up{" "} <b>*</b></label>
                            <input className="text-[0.75rem] outline-none text-[#878585] pr-[2.4rem] border border-solid border-[#ccd7e6]" type="date"></input>
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-[1rem] font-[600] mb-[8px] ">&nbsp; Drop-off{" "} <b>*</b></label>
                            <input className="text-[0.75rem] outline-none text-[#878585] pr-[2.4rem] border border-solid border-[#ccd7e6]" type="date"></input>
                        </div>
                        <button className="py-[0.7rem] px-[1.3rem] h-[fit-content] self-end border-none text-[1.1rem] font-[600] text-white bg-[#ff4d30] shadow-3xl hover:shadow-4xl cursor-pointer transition-all duration-300 " type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookCar