import banner from '../../assets/Rectangle 1.jpg'


const Banner = () => {
    return (
        <div className='my-7 ml-5 mr-4'>
            <div
            className="hero min-h-screen rounded-3xl"
            style={{
                backgroundImage:`url(${banner})`,
            }}>
            <div className="rounded-3xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                <h1 className="w-[897px] h-[152px] mb-5 text-[58px] text-[#FFF] font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className=" w-[933px] h-[60px]mb-5 text-lg text-[#FFF]">
                Whether you're a beginner or an experienced chef, our cooking classes offer personalized instruction to suit your skills and interests. Learn how to prepare mouth-watering dishes with expert guidance in a fun, hands-on environment. Join us and discover the joy of cooking while enhancing your culinary skills!
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;