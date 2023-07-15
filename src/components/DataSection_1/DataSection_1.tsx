import { ReactNode } from "react";
import { Slider } from "./components/Slider";

interface Props {
  title: string;
  data: Array<any>;
  renderer(data: any): ReactNode;
  titleClassName?: string;
  sliderClassName?: string;
  isSlider?: boolean;
  dataSectionClassName?: string;
}

function DataSection_1({ data = [], dataSectionClassName="", title, renderer, sliderClassName, titleClassName, isSlider=true }: Props) {
  return (
    <>
      <p
        className={`text-2xl text-gray-800 font-[vazirBold] flex items-center gap-x-2 ${titleClassName}`}
      >
          {title}
      </p>

      <div className="mt-8">
        {
          isSlider
          ?
          <Slider
          sliderClassName={sliderClassName}
            data={data}
            renderer={renderer}
          />
          :
          <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${dataSectionClassName}`}>
            {
              data?.length > 0
              &&
              data.map(item => renderer(item))
            }
          </div>
        }
      </div>
    </>

  )
}

export default DataSection_1