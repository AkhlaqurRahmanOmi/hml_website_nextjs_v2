//  <section className="relative w-full pt-10 min-h-screen">
//             <div className=" px-4 md:px-[5%]">
//                 {/* Top visible filled text */}
//                 <div className="relative z-10">
//                     <h1 className="uppercase text-[#094d82] text-2xl md:font-roboto text-4xl md:text-8xl text-white font-thin lg:text-6xl font-bold flex justify-start md:mt-[5vh] md:ml-[2vw] lg:mt-[8vh] lg:ml-[2vw]">
//                         WORK FLOW
//                     </h1>
//                 </div>

//                 {/* Full-width background outlined text */}
//                 <div className="absolute top-0 left-0 w-full z-0">
//                     <span
//                         className="block w-full text-[15vw] leading-none text-center font-bold text-transparent"
//                         style={{
//                             WebkitTextStroke: "1px #094d82",
//                         }}
//                     >
//                         WORK FLOW
//                     </span>
//                 </div>
//             </div>

//             {/* Main Section */}
//             <div className="mt-32 flex flex-wrap gap-y-4 justify-between">
//                 {/* First Card */}
//                 <div className="flex justify-between">
//                     <div className="bg-[#094d82] h-[400px] lg:h-[500px] xl:h-[600px] w-[100vw] md:w-[45vw] lg:w-[17vw]">
//                         <div className="flex justify-between p-4">
//                             <h1 className="font-roboto text-4xl md:text-8xl text-white font-thin">{WrokFlowData[0].serialNo}</h1>
//                             <p className="font-roboto text-white text-3xl  lg:-rotate-90 pb-[30%] pr-[50%] lg:pb-[50%] lg:pr-[40%] xl:pb-[10%] xl:pr-[50%] 2xl:pt-[10%] 2xl:pl-[10%] mt-2 ml-2 lg:mt-0 lg:ml-0">{WrokFlowData[0].category}</p>
//                         </div>
//                         <ul className="font-roboto font-thin px-4 lg:mt-[50%] text-white">
//                             {
//                                 WrokFlowData[0].workList.map((list, i) => (
//                                     <li key={i} className="text-sm">
//                                         <span className="mr-2">-</span>
//                                         {list}
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     {/* Rotated Subtext (outside the box) */}
//                     <h2
//                         className="font-roboto -rotate-90 text-3xl font-medium text-[#094d82] hidden lg:block absolute top-[44%] left-[15.3%] 2xl:top-[49%] 2xl:left-[16%]"
//                     >
//                         {WrokFlowData[0].categorySubText}
//                     </h2>
//                 </div>

//                 {/* Second Card */}
//                 <div className="flex justify-between">
//                     <div className="bg-[#094d82] h-[400px] lg:h-[500px] xl:h-[600px] w-[100vw] md:w-[45vw] lg:w-[17vw] flex flex-col justify-between p-4 relative overflow-hidden">
//                         <ul className="font-roboto font-thin px-4 text-white">
//                             {WrokFlowData[1].workList.map((list, i) => (
//                                 <li key={i} className="text-sm">
//                                     <span className="mr-2">-</span>
//                                     {list}
//                                 </li>
//                             ))}
//                         </ul>

//                         <p className="upppercase font-medium mt-4 text-white font-roboto">SOFTWARE</p>
//                         <p className="upppercase text-sm text-white font-roboto font-thin">{WrokFlowData[1].Softwares}</p>

//                         {/* Bottom: Serial Number and Rotated Category */}
//                         <div className="w-full flex lg:justify-between items-end mt-auto">
//                             <h1 className="font-roboto text-4xl md:text-8xl text-white font-thin">
//                                 {WrokFlowData[1].serialNo}
//                             </h1>

//                             {/* Rotated Category */}
//                             <div className="relative h-[100px] w-[40px] flex justify-end items-end overflow-visible ml-8 -mb-8 md:-mb-3 lg:ml-0 lg:-mb-0">
//                                 <p className="font-roboto text-white text-3xl transform lg:-rotate-90 mb-[200%] md:-mr-[180%]">
//                                     {WrokFlowData[1].category}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Rotated Subtext (outside the box) */}
//                     <h2
//                         className="-rotate-90 font-roboto text-3xl font-medium text-[#094d82] hidden lg:block absolute top-[74%] left-[32.4%] xl:top-[83%] xl:left-[33%] 2xl:top-[82%] 2xl:left-[34%]"
//                     >
//                         {WrokFlowData[1].categorySubText}
//                     </h2>
//                 </div>

//                 {/* Third Card */}
//                 <div className="flex justify-between">
//                     <div className="bg-[#094d82] h-[400px] lg:h-[500px] xl:h-[600px] w-[100vw] md:w-[45vw] lg:w-[17vw]">
//                         <div className="flex lg:justify-between p-4">
//                             <h1 className="font-roboto text-4xl md:text-8xl text-white font-thin">{WrokFlowData[2].serialNo}</h1>
//                             <p className="font-roboto text-white text-3xl lg:-rotate-90 pb-[30%] pr-[50%] lg:pb-[50%] lg:pr-[40%] xl:pb-[10%] xl:pr-[60%] 
//                             2xl:pt-[10%] 2xl:pl-[28%] mt-2 ml-2 lg:mt-10 lg:ml-0 ">{WrokFlowData[2].category}</p>
//                         </div>
//                         <ul className="px-4 -mt-[100px] md:-mt-[0px] lg:mt-[50%] text-white font-roboto font-thin">
//                             {
//                                 WrokFlowData[2].workList.map((list, i) => (
//                                     <li key={i} className="text-sm">
//                                         <span className="mr-2">-</span>
//                                         {list}
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                         <div className="px-4">
//                             <p className="upppercase font-bold mt-4 text-white">SOFTWARE</p>
//                             <p className="upppercase text-sm text-white">{WrokFlowData[2].Softwares}</p>
//                         </div>
//                     </div>
//                     {/* Rotated Subtext (outside the box) */}
//                     <h2
//                         className="-rotate-90 ont-roboto text-3xl font-medium text-[#094d82] hidden lg:block absolute lg:top-[39%] lg:left-[55.5%] xl:top-[45%] xl:left-[55%] 2xl:top-[45%] 2xl:left-[56%]"
//                     >
//                         {WrokFlowData[2].categorySubText}
//                     </h2>
//                 </div>

//                 {/* Fouth Card */}
//                 <div className="flex justify-between">
//                     <div className="bg-[#094d82] h-[400px] lg:h-[500px] xl:h-[600px] w-[100vw] md:w-[45vw] lg:w-[17vw] flex flex-col justify-between p-4 relative overflow-hidden">

//                         {/* Top: Work List */}
//                         <ul className="text-white space-y-1 font-roboto font-thin">
//                             {WrokFlowData[3].workList.map((list, i) => (
//                                 <li key={i} className="text-sm">
//                                     <span className="mr-2">-</span>
//                                     {list}
//                                 </li>
//                             ))}
//                         </ul>

//                         <p className="upppercase mt-4 text-white font-roboto font-thin">SOFTWARE</p>
//                         <p className="upppercase text-sm text-white font-roboto font-thin">{WrokFlowData[3].Softwares}</p>

//                         {/* Bottom: Serial Number and Rotated Category */}
//                         <div className="w-full flex lg:justify-between items-end mt-auto">
//                             <h1 className="font-roboto text-4xl md:text-8xl text-white font-thin">
//                                 {WrokFlowData[3].serialNo}
//                             </h1>

//                             {/* Rotated Category */}
//                             <div className="relative h-[100px] w-[40px] flex justify-end items-end overflow-visible ml-8 -mb-8 md:-mb-3 lg:ml-0 lg:-mb-0">
//                                 <p className="font-roboto text-white text-3xl transform lg:-rotate-90 mb-[130%] -mr-[120%]">
//                                     {WrokFlowData[3].category}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <h2
//                         className="-rotate-90 ont-roboto text-3xl font-medium text-[#094d82] hidden lg:block absolute lg:top-[74%] lg:left-[74%] xl:top-[83%] xl:left-[74%] 2xl:top-[82%] 2xl:left-[75%]"
//                     >
//                         {WrokFlowData[3].categorySubText}
//                     </h2>
//                 </div>

//                 {/* Fifth Card */}
//                 <div className="flex justify-between">
//                     <div className="bg-[#094d82] h-[400px] lg:h-[500px] xl:h-[600px] w-[100vw] md:w-[45vw] lg:w-[17vw]">
//                         <div className="flex lg:justify-between p-4">
//                             <h1 className="font-roboto text-4xl md:text-8xl text-white font-thin">{WrokFlowData[4].serialNo}</h1>
//                             <p className="font-roboto text-white text-3xl lg:-rotate-90 pb-[30%] pr-[50%] lg:pb-[50%] lg:pr-[40%] xl:pb-[10%] xl:pr-[35%] 
//                             2xl:pr-[45%]  2xl:pt-[12%] 2xl:pl-[10%] ml-2 mt-1 lg:ml-0 lg:mt-0">{WrokFlowData[4].category}</p>
//                         </div>

//                         <ul className="px-4 -mt-[100px] md:-mt-[0px] lg:mt-[50%] text-white font-roboto font-thin">
//                             {
//                                 WrokFlowData[4].workList.map((list, i) => (
//                                     <li key={i} className="text-sm">
//                                         <span className="mr-2">-</span>
//                                         {list}
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                         <div className="px-4">
//                             <p className="upppercase font-thin font-roboto mt-4 text-white ">SOFTWARE</p>
//                             <p className="upppercase text-sm text-white font-thin font-roboto">{WrokFlowData[4].Softwares}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>




<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full mx-auto bg-white">
            {/* Phase 01 - Feasibility Study */}
            <div className="bg-[#1e4a72] text-white relative overflow-visible min-h-[400px] lg:col-span-1">
                <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6 lg:mb-8">
                        <div className="text-6xl sm:text-7xl lg:text-8xl font-bold">01</div>
                        <div className="text-right relative">
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap 
                            mt-12 sm:mt-16 mr-1 lg:block hidden">
                                FEASIBILITY
                            </div>
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap 
                            mt-3 sm:mt-4 absolute -right-6 sm:-right-8 lg:block hidden">
                                STUDY
                            </div>
                            {/* Mobile version - horizontal text */}
                            <div className="lg:hidden">
                                <div className="text-lg font-semibold tracking-wider">FEASIBILITY</div>
                                <div className="text-lg font-semibold tracking-wider opacity-75">STUDY</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6 lg:mb-8">
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Stowage plan</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Stability & Structural analysis</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Motion analysis</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Vessel reinforcement study</span>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="text-sm font-semibold mb-2">SOFTWARE</div>
                        <div className="text-xs leading-relaxed">
                            Patran/Nastran, X-Mesher,
                            <br />
                            Patran-Pre, AutoCAD, Sestra,
                            <br />
                            SACS, GeniE and more
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase 02 - Transport Engineering */}
            <div className="bg-[#2a5a8a] text-white relative min-h-[400px]">
                <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6 lg:mb-8">
                        <div className="text-6xl sm:text-7xl lg:text-8xl font-bold">02</div>
                        <div className="text-right">
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap 
                            mt-12 sm:mt-16 lg:block hidden">
                                TRANSPORT
                            </div>
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap 
                            mt-3 sm:mt-4 lg:block hidden">
                                ENGINEERING
                            </div>
                            {/* Mobile version - horizontal text */}
                            <div className="lg:hidden">
                                <div className="text-lg font-semibold tracking-wider">TRANSPORT</div>
                                <div className="text-lg font-semibold tracking-wider">ENGINEERING</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6 lg:mb-8">
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Voyage plan</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Intact & Damage stability</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Local & Global strength analysis</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Grillage & Seafastening design</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase 03 - Vessel Loading */}
            <div className="bg-[#1e4a72] text-white relative min-h-[400px]">
                <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6 lg:mb-8">
                        <div className="text-6xl sm:text-7xl lg:text-8xl font-bold">03</div>
                        <div className="text-right">
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap mt-12 sm:mt-16 lg:block hidden">
                                VESSEL
                            </div>
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap mt-3 sm:mt-4 lg:block hidden">
                                LOADING
                            </div>
                            {/* Mobile version - horizontal text */}
                            <div className="lg:hidden">
                                <div className="text-lg font-semibold tracking-wider">VESSEL</div>
                                <div className="text-lg font-semibold tracking-wider">LOADING</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6 lg:mb-8">
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Ballast plan for load out</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Mooring plan for load out</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Grillage installation</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Loading supervisor</span>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="text-sm font-semibold mb-2">SOFTWARE</div>
                        <div className="text-xs leading-relaxed">
                            NAPA, GHS, Cyloader, Optimoor,
                            <br />
                            HydroD Stab., X-tract, Auto Tide.
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase 04 - Voyage Monitoring */}
            <div className="bg-[#2a5a8a] text-white relative min-h-[400px] sm:col-span-1">
                <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6 lg:mb-8">
                        <div className="text-6xl sm:text-7xl lg:text-8xl font-bold">04</div>
                        <div className="text-right">
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap mt-12 sm:mt-16 lg:block hidden">
                                VOYAGE
                            </div>
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap mt-3 sm:mt-4 lg:block hidden">
                                MONITORING
                            </div>
                            {/* Mobile version - horizontal text */}
                            <div className="lg:hidden">
                                <div className="text-lg font-semibold tracking-wider">VOYAGE</div>
                                <div className="text-lg font-semibold tracking-wider">MONITORING</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6 lg:mb-8">
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Cargo safety</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Transport route</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Motion amplitude</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Weather evaluation</span>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="text-sm font-semibold mb-2">SOFTWARE</div>
                        <div className="text-xs leading-relaxed">
                            Octopus onboard, Octopus
                            <br />
                            online, Octopus office, MOSES,
                            <br />
                            Postresp and more
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase 05 - Discharging */}
            <div className="bg-[#1e4a72] text-white relative min-h-[400px] sm:col-span-1">
                <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6 lg:mb-8">
                        <div className="text-6xl sm:text-7xl lg:text-8xl font-bold">05</div>
                        <div className="text-right">
                            <div className="text-base sm:text-lg font-semibold tracking-wider transform rotate-90 origin-top-right whitespace-nowrap mt-12 sm:mt-16 lg:block hidden">
                                DISCHARGING
                            </div>
                            {/* Mobile version - horizontal text */}
                            <div className="lg:hidden">
                                <div className="text-lg font-semibold tracking-wider">DISCHARGING</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6 lg:mb-8">
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Ballast plan for load in</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Mooring plan for load in</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Grillage remove</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">—</span>
                            <span className="text-sm">Discharging supervisor</span>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="text-sm font-semibold mb-2">SOFTWARE</div>
                        <div className="text-xs leading-relaxed">
                            NAPA, GHS, Cyloader, Optimoor,
                            <br />
                            HydroD Stab., X-tract, Auto Tide
                            <br />
                            and more
                        </div>
                    </div>
                </div>
            </div>
        </div>