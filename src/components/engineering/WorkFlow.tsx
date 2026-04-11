import { WorkFlowData } from "@/data/workflow";

export const EngineeringWorkFlow = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center ">
      <div className="h-[60px] md:h-0" />

      <div className="mt-10 lg:mt-20 2xl:mt-24 ">
        <div className="relative flex flex-row md:flex-col items-start justify-center ml-[1vw] ">
          <h2 className="text-[3.5rem] md:text-[13vw] font-extrabold text-[#bfcde2] opacity-40 absolute tracking-widest">
            WORK FLOW
          </h2>
          <h1 className="relative uppercase text-[#094d82] text-3xl md:text-5xl lg:text-6xl font-bold flex justify-start mt-[3.5vh] md:mt-[5vh] md:ml-[2vw] lg:mt-[8vh] lg:ml-[4vw] tracking-widest">
            WORK FLOW
          </h1>
        </div>

        <div className="pt-10 flex flex-wrap gap-y-4 justify-between px-4 md:px-0">
          <div className="relative bg-[#094d82] h-[350px] 2xl:h-[570px] w-[100vw] md:w-[45vw] lg:w-[17vw] p-4">
            <div className="flex flex-col justify-evenly h-full">
              <h1 className="font-roboto text-6xl 2xl:text-8xl text-white font-thin">
                {WorkFlowData[0].serialNo}
              </h1>
              <ul className="font-thin px-4 text-white">
                {WorkFlowData[0].workList.map((list, i) => (
                  <li key={i} className="text-[12px] 2xl:text-sm flex items-center gap-2">
                    <span className="w-4 h-1 bg-white inline-block"></span>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-roboto text-white text-3xl absolute top-5 md:top-16 right-4 md:-right-[84px] md:-rotate-90 uppercase">
              Feasibility <br />{" "}
              <span className="font-roboto text-3xl font-medium md:text-[#094d82]">
                Study
              </span>
            </p>
          </div>

          <div className="relative bg-[#094d82] h-[350px] 2xl:h-[570px] w-[100vw] md:w-[45vw] lg:w-[17vw] p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <ul className="font-thin px-4 text-white">
                  {WorkFlowData[1].workList.map((list, i) => (
                    <li key={i} className="text-[12px] 2xl:text-sm flex items-center gap-2">
                      <span className="w-4 h-1 bg-white inline-block"></span>
                      {list}
                    </li>
                  ))}
                </ul>
                <p className="upppercase font-thin text-sm lg:text-md mt-4 text-white ">
                  SOFTWARE
                </p>
                <p className="upppercase text-xs lg:text-sm text-white font-roboto font-thin">
                  {WorkFlowData[1].Softwares}
                </p>
              </div>
              <h1 className="font-roboto text-6xl 2xl:text-8xl text-white font-thin">
                {WorkFlowData[1].serialNo}
              </h1>
            </div>
            <p className="absolute bottom-4 md:bottom-20 right-4 md:-right-[90px] md:-rotate-90 font-roboto text-white text-3xl uppercase">
              Transport <br />{" "}
              <span className="font-roboto text-3xl font-medium md:text-[#094d82]">
                Enginering
              </span>
            </p>
          </div>

          <div className="relative bg-[#094d82] h-[350px] 2xl:h-[570px] w-[100vw] md:w-[45vw] lg:w-[17vw] p-4">
            <div className="flex flex-col justify-between h-full">
              <h1 className="font-roboto text-6xl 2xl:text-8xl text-white font-thin">
                {WorkFlowData[2].serialNo}
              </h1>
              <div>
                <ul className="font-thin px-4 text-white">
                  {WorkFlowData[2].workList.map((list, i) => (
                    <li key={i} className="text-[12px] 2xl:text-sm flex items-center gap-2">
                      <span className="w-4 h-1 bg-white inline-block"></span>
                      {list}
                    </li>
                  ))}
                </ul>
                <p className="upppercase font-thin text-sm lg:text-md mt-4 text-white ">
                  SOFTWARE
                </p>
                <p className="upppercase text-xs lg:text-sm text-white font-roboto font-thin">
                  {WorkFlowData[2].Softwares}
                </p>
              </div>
            </div>
            <p className="font-roboto text-white text-3xl absolute top-5 md:top-16 right-4 md:-right-[60px] md:-rotate-90 uppercase">
              Vessel <br />{" "}
              <span className="font-roboto text-3xl font-medium md:text-[#094d82]">
                Loading
              </span>
            </p>
          </div>

          <div className="relative bg-[#094d82] h-[350px] 2xl:h-[570px] w-[100vw] md:w-[45vw] lg:w-[17vw] p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <ul className="font-thin px-4 text-white">
                  {WorkFlowData[3].workList.map((list, i) => (
                    <li key={i} className="md:text-sm flex items-center gap-2">
                      <span className="w-4 h-1 bg-white inline-block"></span>
                      {list}
                    </li>
                  ))}
                </ul>
                <p className="upppercase font-thin text-sm lg:text-md mt-4 text-white ">
                  SOFTWARE
                </p>
                <p className="upppercase text-xs lg:text-sm text-white font-roboto font-thin">
                  {WorkFlowData[3].Softwares}
                </p>
              </div>
              <h1 className="font-roboto text-6xl 2xl:text-8xl text-white font-thin">
                {WorkFlowData[3].serialNo}
              </h1>
            </div>
            <p className="absolute bottom-4 md:bottom-20 right-4 md:-right-[90px] md:-rotate-90 font-roboto text-white text-3xl uppercase">
              Voyage <br />{" "}
              <span className="font-roboto text-3xl font-medium md:text-[#094d82]">
                Monitoring
              </span>
            </p>
          </div>

          <div className="relative bg-[#094d82] h-[350px] 2xl:h-[570px] w-[100vw] md:w-[45vw] lg:w-[17vw] p-4">
            <div className="flex flex-col justify-between h-full">
              <h1 className="font-roboto text-6xl 2xl:text-8xl text-white font-thin">
                {WorkFlowData[4].serialNo}
              </h1>
              <div>
                <ul className="font-thin px-4 text-white">
                  {WorkFlowData[4].workList.map((list, i) => (
                    <li key={i} className="text-[12px] 2xl:text-sm flex items-center gap-2">
                      <span className="w-4 h-1 bg-white inline-block"></span>
                      {list}
                    </li>
                  ))}
                </ul>
                <p className="upppercase font-thin text-sm lg:text-md mt-4 text-white ">
                  SOFTWARE
                </p>
                <p className="upppercase text-xs lg:text-sm text-white font-roboto font-thin">
                  {WorkFlowData[4].Softwares}
                </p>
              </div>
            </div>
            <p className="font-roboto text-white text-3xl absolute top-5 md:top-24 right-4 md:-right-[80px] md:-rotate-90 uppercase">
              {WorkFlowData[4].category}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
