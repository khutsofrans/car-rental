import Image from "next/image"

const PlanTrip = () => {
    return(
        <div className="p-plan bg-[#ffffff]">
            <div className="m-box mb-[80px] p-container max-w-[1064px] ">
                <div className="flex flex-col">
                    <div className="m-box text-center text-[#010103]">
                        <h3 className="text-[19.2px] font-[500]">Plan your trip now</h3>
                        <h2 className="text-[33.6px] m-plan">Quick & easy car rental</h2>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-[auto] mt-[29.6px] p-plan2">
                        <div className="flex flex-col justify-center items-center text-center p-plan3 ">
                            <Image src='/images/plan/icon1.png' alt="icon_image" width={100} height={100} className="h-auto w-[136px]" ></Image>
                            <h3 className="text-[19.2px] mb-4">Select Car</h3>
                            <p className="text-[#706f7b] line-[1.43]">We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center p-plan3">
                            <Image src='/images/plan/icon2.png' alt="icon_image" width={100} height={100} className="h-auto w-[136px]" ></Image>
                            <div className="text-[19.2px] mb-4">Contact Operator</div>
                            <p className="text-[#706f7b] line-[1.43]">Our knowledgable and friendly operators are always ready to help with any questions or concerns.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center p-plan3">
                            <Image src='/images/plan/icon3.png' alt="icon_image" width={100} height={100} className="h-auto w-[136px]" ></Image>
                            <div className="text-[19.2px] mb-4">Let&apos;s Drive</div>
                            <p className="text-[#706f7b] line-[1.43]">Where you &apos;re hitting the open road, we&apos;ve got you covered with our range of cars.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  PlanTrip