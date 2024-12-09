const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9F9F9]">
      {/* Outer container for border effect */}
      <div className="relative w-full max-w-screen-lg">
        {/* Border container */}
        <div className="border-[65px] border-[#F9F9F9] rounded-lg sm:border-[80px] lg:border-[100px] bg-white shadow-lg">
          {/* Inner content */}
          <div className="p-6 sm:p-8 w-full max-w-[400px] mx-auto">
            <h1 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] leading-[1.2] text-center font-semibold">
              Join the club and get the benefits
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-6 text-center mt-4">
              Sign up for our newsletter and receive exclusive offers on new <br />
              ranges, sales, pop-up stores, and more
            </p>

            {/* Input and button */}
            <div className="flex flex-col sm:flex-row justify-center items-center mt-8">
              <input
                type="email"
                className="w-full sm:w-[250px] h-[56px] bg-[#F9F9F9] rounded-md mb-4 sm:mb-0 sm:mr-4 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4D93]"
                placeholder="your@email.com"
                aria-label="Email address"
              />
              <button className="w-full sm:w-[100px] h-[56px] bg-[#4E4D93] text-white rounded-md hover:bg-[#3D3C80] transition-colors">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


