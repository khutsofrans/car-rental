const Navbar = () => {
    return(
        <div className='absolute w-full h-[65px] flex justify-between items-center px-5 pt-12 bg-transparent z-[99999]'>
            <div className=''>CHAT_APP</div>
            <ul className='h-11 flex justify-center items-center text-[16px] font-bold gap-[2.1rem] cursor-pointer'>
                <li className="text-[#010103] hover:text-[#ff4d30]">Home</li>
                <li className="text-[#010103] hover:text-[#ff4d30]">About</li>
                <li className="text-[#010103] hover:text-[#ff4d30]">Vehicle Models</li>
                <li className="text-[#010103] hover:text-[#ff4d30]">Testimonials</li>
                <li className="text-[#010103] hover:text-[#ff4d30]">Our Team</li>
                <li className="text-[#010103] hover:text-[#ff4d30]">Contact</li>
            </ul>
            <div className='flex justify-between items-center text-[16px] font-bold gap-[2.1rem]'>
                <div className="text-[#010103] cursor-pointer transition-all-0.3 hover:text-[#ff4d30]">Sign In</div>
                <button className='p-0 rounded-[3px] bg-[#ff4d30] hover:bg-[#fa4226] shadow-3xl hover:shadow-4xl transition-all duration-300 border-none text-white text-[16px] h-[49px] w-[7.85rem]'>Register</button>
            </div>
        </div>
    )
}

export default Navbar