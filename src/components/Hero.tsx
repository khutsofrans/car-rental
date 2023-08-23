import Image from "next/image"

const Hero = () => {
    return(
        <div className="w-full h-[97vh]">
            <div className="relative h-[100vh] w-full flex justify-start items-center p-container max-w-[133rem] pt-12">
                <div className='absolute top-0 right-0 z-[1]'>
                    <Image src='/images/hero/hero-bg.png' alt="Backround" width={700} height={700} priority={true} />
                </div>
                <div className="w-[950px] flex flex-col justify-start z-[2] ">
                    <h4 className="font-bold text-[#010103]">Plan your trip now</h4>
                    <h1 className="mt-[0.8rem] mb-[2rem] text-[#010103]">Save <span className="text-[#ff4d30]">big</span> with our car rental</h1>
                    <p className="mb-[3rem] text-[#706f7b]">Rent the car of your dreams. Unbeatable prices, unlimited kilos, flexible pick-up options and much more.</p>
                    <div className='flex text-[16px] font-bold gap-[1.1rem]'>
                        <button className='p-0 rounded-[3px] bg-[#ff4d30] hover:bg-[#fa4226] shadow-3xl hover:shadow-4xl transition-all duration-300 border-none text-white text-[16px] h-[59px] w-[10.85rem]'>Book Ride</button>
                        <button className='p-0 rounded-[3px] bg-[#010103] hover:bg-white  border-2 border-[#010103] transition-all duration-300 text-white hover:text-[#010103] text-[16px] h-[59px] w-[10.85rem]'>Learn More</button>
                    </div>
                </div>
                <div className="w-full z-[2]">
                    <Image src='/images/hero/main-car.png' alt="Hero-Car" width={700} height={700} priority={true} />
                </div>
            </div>
        </div>
    )
}

export default Hero