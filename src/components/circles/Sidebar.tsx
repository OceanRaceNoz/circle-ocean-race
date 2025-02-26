export const Sidebar = () => {
  return (
    <div className="w-[65px] max-md:hidden">
      <nav className="bg-[rgba(46,11,78,1)] pt-[51px] pb-[22px] px-[5px] rounded-lg max-md:hidden">
        <div className="min-h-[797px] max-md:hidden">
          <div className="flex w-full flex-col items-center">
            <button className="flex items-center gap-1.5 justify-center">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[42px] h-[42px] my-auto px-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/9b9a58c26e2106cf6f3351a373ff12d3080e2e774c484512867d3b734d52e93e?placeholderIfAbsent=true"
                  className="aspect-[0.96] object-contain w-[25px] self-stretch my-auto"
                  alt="Home"
                />
              </div>
            </button>
            <button className="rounded bg-[rgba(102,67,217,1)] flex items-center gap-1.5 justify-center w-[42px] h-[42px] mt-5">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[42px] h-[42px] my-auto px-2">
                <div className="self-stretch flex w-[26px] flex-col overflow-hidden my-auto p-0.5">
                  <div className="z-10 flex w-full shrink-0 h-4 rounded-[50%] border-[rgba(232,232,232,1)] border-solid border-2" />
                  <div className="flex w-full shrink-0 h-4 rounded-[50%] border-[rgba(232,232,232,1)] border-solid border-2" />
                </div>
              </div>
            </button>
            {/* Additional navigation buttons */}
            <button className="flex items-center gap-1.5 justify-center mt-5">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[42px] h-[42px] my-auto px-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/7afb69e59dd514577e89df902aae4dfa1780994586360e3c9b62d330686787ae?placeholderIfAbsent=true"
                  className="aspect-[0.96] object-contain w-[25px] self-stretch my-auto"
                  alt="Discover"
                />
              </div>
            </button>
            <button className="flex items-center gap-1.5 justify-center mt-5">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[41px] h-[41px] my-auto px-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/7e4a591fcea277378b89acef854cfa6c71ac49cfcf16c3e9b624d535a92052ae?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
                  alt="News"
                />
              </div>
            </button>
            <button className="flex items-center gap-1.5 justify-center mt-5">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[41px] h-[41px] my-auto px-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/1da055fe85845e3a2426c5f490d3ab206446cdb03d5093a0bbb0616b5b54d85c?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
                  alt="Settings"
                />
              </div>
            </button>
          </div>
          <div className="flex w-full flex-col items-center mt-[417px]">
            <button className="flex items-center gap-1.5 justify-center">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[42px] h-[42px] my-auto px-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/39d2fda8f432f724e3edf44decaeff06fe2cf16d438629b4e96919759932e31d?placeholderIfAbsent=true"
                  className="aspect-[0.96] object-contain w-[25px] self-stretch my-auto"
                  alt="Profile"
                />
              </div>
            </button>
            <button className="flex items-center gap-1.5 justify-center mt-2">
              <div className="rounded bg-[rgba(102,67,217,0)] self-stretch flex items-center gap-2 justify-center w-[41px] h-[41px] my-auto px-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/83f963f7c05e22d068e134081bc6d0a6d112cbb35252716123611e4d53b3f74b?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
                  alt="Help"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
