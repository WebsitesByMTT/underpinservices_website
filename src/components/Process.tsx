
export default function Process({processes,heading}:any) {
  

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-[90%]  flex flex-col lg:flex-row md:gap-12 lg:gap-24 p-4 md:p-8 lg:p-12">
        <div className="lg:w-[50%] lg:sticky md:top-8 md:h-fit">
          <h1 className="text-[4rem] font-switzer leading-tight lg:text-[6rem] 2xl:text-[8rem]">
            {heading?.title}
          </h1>
          <div className="text-primary font-sweetSuckerPunch">
            <h2 className="text-[3.5rem] uppercase leading-none lg:text-[6rem] 2xl:text-[8rem]">
              {heading?.subtitle}
            </h2>
            <div className="text-[3.5rem] uppercase leading-none lg:text-[6rem] 2xl:text-[8rem]">
              {heading?.subtitle2}
            </div>
          </div>
        </div>

        <div className="relative lg:w-[40%] space-y-12 mt-12 md:mt-0">
          <div className="absolute left-4 top-0 hidden h-[85%] w-0.5 border-l-2 border-dashed border-gray-300 md:block lg:left-6" />

          {processes?.map((process:any, index:number) => (
            <div key={index} className="relative flex gap-6 md:gap-8 lg:gap-12">
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white lg:h-12 lg:w-12">
                <process.icon className="h-4 w-4 lg:h-6 lg:w-6" />
              </div>

              <div className="flex-1">
                <h2 className="mb-4 text-xl font-semibold lg:text-3xl">
                  {process.title}
                </h2>
                <ul className="space-y-2 text-gray-600">
                  {process?.items?.map((item:any, itemIndex:number) => (
                    <li key={itemIndex} className="text-sm lg:text-lg">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}