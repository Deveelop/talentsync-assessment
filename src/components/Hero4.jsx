import React from 'react'

const Hero4 = () => {
  return (
    <div>
      <div className=" customw:w-[1728px] h-[697px] py-24 justify-between items-center inline-flex">
    <div className=" customw:w-[579px] flex-col px-20 justify-start items-start gap-10 inline-flex">
        <div className="self-stretch h-[340px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch text-gray-900 text-2xl customw:text-5xl font-semibold font-['Inter'] leading-[60px]">Ready to clear the path to perfect communication?</div>
            <div className="self-stretch h-[188px] pl-4 flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                        <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                        <img src='/check-circle.png' alt='icon'/>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-slate-600 text-xl font-normal font-['Inter'] leading-loose">30 days free trial</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                        <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                        <img src='/check-circle.png' alt='icon'/>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-slate-600 text-xl font-normal font-['Inter'] leading-loose">Cancel at any time</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                        <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                        <img src='/check-circle.png' alt='icon'/>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-slate-600 text-xl font-normal font-['Inter'] leading-loose">Access to all features</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                        <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                            <img src='/check-circle.png' alt='icon'/>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-slate-600 text-xl font-normal font-['Inter'] leading-loose">Peronalized onboarding</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
            <button className="px-6 py-3.5 bg-white rounded-[100px] shadow border border-gray-400 justify-center items-center gap-1 flex">
                <div className="text-gray-900 text-base font-semibold font-['Inter'] leading-normal">Talk to sales</div>
            </button>
            <button className="px-6 py-3.5 bg-blue-700 rounded-[100px] shadow justify-center items-center gap-1 flex">
                <div className="text-white text-base font-semibold leading-normal">Start your free trial</div>
            </button>
        </div>
    </div>
    <div className=" justify-end items-center flex">
        <div className=" w-[700px] rounded-3xl border-8 border-gray-900 justify-center items-center inline-flex">
            <img className="rounded-lg relative " src="/Screen mockup (REPLACE FILL).png" />
        </div>
    </div>
</div>
    </div>
  )
}

export default Hero4