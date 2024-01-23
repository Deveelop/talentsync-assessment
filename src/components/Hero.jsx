import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className=" w-[100%] customw:w-[1728px] customw:h-[983px] customw:px-0 px-20 py-24 bg-white flex-col justify-start items-start gap-5 inline-flex">
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-[100px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch text-blue-700 text-lg font-semibold leading-7">The ClearLink Advantage</div>
            <h1 className="w-[1168px] text-slate-800 text-3xl font-semibold leading-[60px]">Why choose ClearLink?</h1>
        </div>
        <div className=" w-[700px] customw:w-[842px] text-gray-500 text-xl font-normal  leading-loose">In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</div>
    </div>
    <div className=" w-[1000px] customw:w-[1408px] justify-between  items-center inline-flex">
        <div className=" w-[800px] h-[488] justify-start items-start gap-5 grid grid-cols-2">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative">
                        <img src='/zap.png' alt='avatar'/>
                    </div>
                </div>
                <div className=" customw:self-stretch h-[124px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-xl font-semibold leading-loose">Crystal-clear HD video</div>
                    <div className="w-[300px] text-slate-600 text-sm font-normal font-['Inter'] leading-7">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative">
                        <img src='/recording-01.png' alt='avatar'/>
                    </div>
                </div>
                <div className="customw:self-stretch h-[152px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">Scheduling made easy</div>
                    <div className="w-[300px] text-slate-600 text-sm font-normal font-['Inter'] leading-7">Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative">
                        <img src='/calendar.png' alt='avatar'/>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">Noise-canceling audio</div>
                    <div className="w-[300px] text-slate-600 text-sm font-normal font-['Inter'] leading-7">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative">
                        <img src='/lock-unlocked-04.png' alt='avatar'/>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">Bank-grade security</div>
                    <div className="w-[300px] text-slate-600 text-sm font-normal font-['Inter'] leading-7">Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</div>
                </div>
            </div>
        </div>
        <div className=" w-[544px] h-[300px] justify-end flex  relative origin-top-left">
        <img className=' absolute -top-56 bottom-56' src='/Hand-drawn arrow.png' alt='avatar'/>
        <img src="/Rectangle 1.png" />
    </div>
    </div>
   
</div>
    </div>
  )
}

export default Hero