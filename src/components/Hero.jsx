import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="w-[1728px] h-[983px] px-40 py-24 bg-white flex-col justify-start items-start gap-20 inline-flex">
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-[100px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch text-blue-700 text-lg font-semibold font-['Inter'] leading-7">The ClearLink Advantage</div>
            <div className="w-[1168px] text-slate-800 text-5xl font-semibold font-['Inter'] leading-[60px]">Why choose ClearLink?</div>
        </div>
        <div className="w-[842px] text-gray-500 text-2xl font-normal font-['Inter'] leading-loose">In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</div>
    </div>
    <div className="w-[1408px] justify-between items-center inline-flex">
        <div className="h-[488px] justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="self-stretch h-[124px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Crystal-clear HD video</div>
                    <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="self-stretch h-[152px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Scheduling made easy</div>
                    <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Noise-canceling audio</div>
                    <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Bank-grade security</div>
                    <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</div>
                </div>
            </div>
        </div>
        <img className="w-[544px] h-[527px]" src="https://via.placeholder.com/544x527" />
    </div>
    <div className="w-[238.23px] h-[157.32px] relative origin-top-left rotate-[-154.74deg]" />
</div>
    </div>
  )
}

export default Hero