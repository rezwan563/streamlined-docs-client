import demo4 from '../../assets/Images/demo4.png'
const Details = () => {
    return (
        <div className="pt-12 md:pt-24 ">
            <div className="grid grid-cols-1 px-2 lg:grid-cols-2 gap-8 max-w-screen-xl">
                <div className="space-y-8 md:space-y-12">
                   ABOUT US
                    <div className="">
                        <p className="text-5xl lg:text-5xl text-left font-semibold font-staatliches ">
                            Streamlined Docs Your Gateway to Uninterrupted Services.
                        </p>
                        <p className="mt-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestiae sint sunt delectus adipisci aliquid distinctio obcaecati nisi nemo dolore exercitationem magnam quia quas, perspiciatis ullam odit eos neque. Nam.</p>
                    </div>
                    <div className="hidden lg:block">
                        <button className="bg-red-700 px-8 py-3 lg:px-12 lg:py-5 text-white text-lg font-semibold mr-5 lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
                            Sign Up For Free
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-[600px] lg:block ">
                    <img src={demo4} alt="" />
                </div>
                <div className="block space-y-5 lg:hidden w-full">
                    <button className="bg-red-700 px-8 py-3 w-full lg:px-12 lg:py-5 text-white text-lg font-semibold mr-5 lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
                        Sign Up For Free
                    </button>
                
                </div>
            </div>
            <div className="text-5xl lg:text-5xl text-left font-semibold font-staatliches bg-slate-100">
                Streamlined Docs Your Gateway to Uninterrupted Services.

            </div>
        </div>
    );
};

export default Details;