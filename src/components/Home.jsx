import React, { useState } from 'react'; 

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  const options = ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'];
  const options1 = ['Solutions1', 'Solutions2', 'Solutions3', 'Solution4', 'Solutions4'];
  const options2 = ['Blog', 'Events', 'Help Center', 'Tutorials', 'Support'];

  const handleClick = () => {
  setIsOpen(false); 
  };
  const handleClick1 = () => {
  setIsOpen1(false); 
  };
  const handleClick2 = () => {
  setIsOpen2(false); 
  };

  return (
    <>
    <div className=" bg-[url('/attachment.png')] w-[100%] customw:w-[1728px] customw:h-[868px] pt-5 customw:p-10 pb-24 flex-col justify-start items-center gap-40 inline-flex">
    <header className="w-[100%] fixed z-50 customw:w-[1472px] px-8 py-4 bg-gray-100 rounded-[100px] border border-gray-300 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
            <div className="w-[25.38px] h-7 relative">
            <img src="/Group.png" alt="logo"/>
            </div>
            <div><span className="text-gray-900 text-2xl font-semibold ">ClearLink</span><span className="text-blue-500 text-2xl font-semibold font-['Inter']">.</span></div>
        </div>
        <ul  className="justify-start items-start gap-10 flex">
            <div onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer justify-start items-center gap-1.5 flex">
                <li className="text-gray-500 text-lg font-semibold font-['Inter'] leading-7">Products</li>
                <div className="w-[18px] h-[18px] relative">
                <div className="relative inline-block">
                <img  src="/chevron-down.png"/>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option)}
              className="block w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
</div>
            </div>
            <div onClick={() => setIsOpen1(!isOpen1)} className=" cursor-pointer justify-start items-center gap-1.5 flex">
                <li className="text-gray-500 text-lg font-semibold  leading-7">Solutions</li>
                <div className="w-[18px] h-[18px] relative">
                <div className="relative inline-block">
                <img  src="/chevron-down.png"/>
      {isOpen1 && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
        >
          {options1.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick1(options1)}
              className="block w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
                </div>
            </div>
            <div onClick={() => setIsOpen2(!isOpen2)} className=" cursor-pointer justify-start items-center gap-1.5 flex">
                <li className="text-gray-500 text-lg font-semibold  leading-7">Resources</li>
                <div className="w-[18px] h-[18px] relative">
                <div className="relative inline-block">
                <img  src="/chevron-down.png"/>
      {isOpen2 && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
        >
          {options2.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick2(options2)}
              className="block w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
                </div>
            </div>
            <a href='#' className="text-gray-500 text-lg font-semibold leading-7">Pricing</a>
        </ul>
        <div className="justify-start items-center gap-2 flex">
            <button className="px-6 py-3.5 bg-white rounded-[100px] shadow border border-gray-400 justify-center items-center gap-1 flex">
                <div className="text-gray-900 text-base font-semibold font-['Inter'] leading-normal">Talk to sales</div>
            </button>
            <button className="px-6 py-3.5 bg-blue-700 rounded-[100px] shadow justify-center items-center gap-1 flex">
                <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Sign up for free</div>
            </button>
        </div>
    </header>
    <div className=" w-[100%] customw:w-[1408px] justify-between items-center inline-flex bg-[#FFFFFF]-500 bg-opacity-0">
        <div className=" p-20 flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
                <h1 className="w-[400px] customw:w-[780px] text-slate-800 customw:text-[64px] text-5xl font-semibold customw:leading-[72px] leading-[52px]">Uniting the world, one video call at a time</h1>
                <p className=" w-[100%] customw:w-[662px] text-gray-500 text-2xl font-normal customw:leading-loose leading-[32px]">Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-start gap-2 flex">
                    <button className="px-7 py-4 bg-blue-700 rounded-[100px] shadow justify-center items-center gap-1 flex">
                        <div className="text-white text-lg font-semibold font-['Inter'] leading-7">Start your free trial</div>
                    </button>
                </div>
                <div className="justify-start items-center gap-3 flex">
                    <div className="w-5 h-5 relative">
                        <div className="w-5 h-4 left-[-0px] top-[1.67px] absolute">
                            <img src="/Frame.png" alt="sunstitute"/>
                        </div>
                    </div>
                    <a href="#" className="text-blue-700 text-lg font-semibold font-['Inter'] leading-7">Discover AI assistant</a>
                </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-start gap-2 flex">
                    <div className="justify-start items-start flex">
                        <div className="w-10 h-10 rounded-[200px] border border-white flex-col justify-center items-center inline-flex">
                            <div className="w-10 h-10 relative opacity-1 rounded-[200px] border border-blue-700">
                                <img src="/Avatar (1).png" alt="avatar"/>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-[200px] border border-white flex-col justify-center items-center inline-flex">
                        <div className="w-10 h-10 relative opacity-1 rounded-[200px] border border-blue-700">
                                <img src="/Avatar (2).png" alt="avatar"/>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-[200px] border border-white flex-col justify-center items-center inline-flex">
                        <div className="w-10 h-10 relative opacity-1 rounded-[200px] border border-blue-700">
                                <img src="/Avatar (3).png" alt="avatar"/>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-[200px] border border-white flex-col justify-center items-center inline-flex">
                        <div className="w-10 h-10 relative opacity-1 rounded-[200px] border border-blue-700">
                                <img src="/Avatar (4).png" alt="avatar"/>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-[200px] border border-white flex-col justify-center items-center inline-flex">
                        <div className="w-10 h-10 relative opacity-1 rounded-[200px] border border-blue-700">
                                <img src="/Avatar (5).png" alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="justify-start items-center gap-1 flex">
                            <div className="w-5 h-5 relative">
                                <div className="w-5 h-5 left-0 top-0 absolute">
                                    <img src="/Star icon.png" alt="avatar"/>
                                </div>
                            </div>
                            <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                    <img src="/Star icon.png" alt="avatar"/>
                                </div>
                            </div>
                            <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                    <img src="/Star icon.png" alt="avatar"/>
                                </div>
                            </div>
                            <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                    <img src="/Star icon.png" alt="avatar"/>
                                </div>
                            </div>
                            <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                    <img src="/Star icon.png" alt="avatar"/>
                                </div>
                            </div>
                        </div>
                        <div className="text-slate-700 text-base font-semibold font-['Inter'] leading-normal">5.0</div>
                    </div>
                    <div className="text-slate-600 text-base font-medium font-['Inter'] leading-normal">from 3,000+ reviews</div>
                </div>
            </div>
        </div>
        <div className=" mr-20 p-8 bg-sky-50 rounded-2xl shadow-2xl border border-sky-200 flex-col justify-center items-center gap-10 inline-flex">
            <div className="flex-col justify-center items-center gap-5 flex">
                <div className="justify-center items-center gap-5 inline-flex">
                    <div className="w-40 h-40 relative rounded-xl">
                        <div className="w-40 h-40 left-0 top-0 absolute bg-orange-300" />
                        <img className="w-[153.59px] h-[153.59px] left-[3.28px] top-[6.41px] absolute" src="/first.png" />
                    </div>
                    <div className="w-40 h-40 relative rounded-xl">
                        <div className="w-40 h-40 left-0 top-0 absolute bg-purple-300" />
                        <img className="w-[153.59px] h-[153.59px] left-[3.28px] top-[6.41px] absolute" src="/second.png" />
                    </div>
                    <div className="w-40 h-40 relative rounded-xl">
                        <div className="w-40 h-40 left-0 top-0 absolute bg-lime-300" />
                        <img className="w-[153.59px] h-[153.59px] left-[3.28px] top-[6.41px] absolute" src="/third.png" />
                    </div>
                </div>
                <div className="justify-center items-center gap-5 inline-flex">
                    <div className="w-40 h-40 relative rounded-xl">
                        <div className="w-40 h-40 left-0 top-0 absolute bg-indigo-300" />
                        <img className="w-[153.59px] h-[153.59px] left-[3.28px] top-[6.41px] absolute" src="/fourth.png" />
                    </div>
                    <div className="w-40 h-40 relative rounded-xl">
                        <div className="w-40 h-40 left-0 top-0 absolute bg-amber-300" />
                        <img className="w-40 h-40 left-0 top-0 absolute" src="/middle.png" />
                    </div>
                    <div className="w-40 h-40 relative rounded-xl">
                        <div className="w-40 h-40 left-0 top-0 absolute bg-rose-300" />
                        <img className="w-[153.59px] h-[153.59px] left-[3.28px] top-[6.41px] absolute" src="/last.png" />
                    </div>
                </div>
            </div>
            <div className="justify-start items-start gap-4 inline-flex">
                <a href="#" className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative" ><img src='/microphone.png' alt=''/></div>
                </a>
                <a href="#" className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" ><img src='/video-recorder.png' alt=''/></div>
                </a>
                <a href="#" className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" ><img src='/monitor-01.png' alt=''/></div>
                </a>
                <a href="#" className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" ><img src='/Icon.png' alt=''/></div>
                </a>
                <a href="#" className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" ><img src='/message-text.png' alt=''/></div>
                </a>
                <a href="#" className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" ><img src='/settings-01.png' alt=''/></div>
                </a>
            </div>
        </div>
    </div>
   
</div>

<div className=" w-[100%] customw:w-[1728px] customw:h-[313px] py-24 bg-white justify-center items-start inline-flex">
    <div className="px-8 flex-col justify-start items-start gap-12 inline-flex">
        <div className="self-stretch text-center text-slate-600 text-xl font-medium  leading-[30px]">Join 1,500+ companies already video conferencing the ClearLink way</div>
        <div className="justify-start items-center gap-[69px] inline-flex">
        <div className="w-[100px] h-[43px] customw:w-[151.56px] relative">
                <img src="/Shopify.com svg.png" alt="shopify logo"/>
            </div>
            <div className="w-[100px] customw:w-[177.78px] h-8 relative">
            <img src="/Coinbase svg.png" alt="coinbase logo"/>
            </div>
            <div className="w-[100px] customw:w-[183.05px]  h-9 relative">
            <img src="/Dropbox svg.png" alt="dropbox logo"/>
            </div>
            <div className="w-[100px] customw:w-[174.44px] h-10 relative">
            <img src="/Intercom svg.png" alt="intercom logo"/>
            </div>
            <div className="w-[100px] h-10 relative">
                <div className="w-[50px] customw:w-[100px] h-10 left-0 top-0 absolute">
                <img src="/Marvel svg.png" alt="marvel logo"/>
                </div>
            </div>
            <div className="w-60 h-[18.40px] relative">
                <div className="w-40 customw:w-60 h-[18.40px] left-0 top-0 absolute">
                <img src="/Automattic svg.png" alt="automattic logo"/>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Home