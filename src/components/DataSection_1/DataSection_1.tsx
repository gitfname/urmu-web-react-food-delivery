import { ReactNode } from "react";
import { Slider } from "./components/Slider";

interface Props {
  title: string;
  data: any;
  renderer(data: any): ReactNode;
  titleClassName?: string;
  sliderClassName?: string;
}

function DataSection_1({ data = undefined, title, renderer, sliderClassName, titleClassName }: Props) {
  return (
    <>
      <p
        className={`text-2xl text-gray-800 font-[vazirBold] flex items-center gap-x-2 ${titleClassName}`}
      >
          {title}
      </p>

      <div className="mt-8">
        <Slider
        sliderClassName={sliderClassName}
          data={data}
          renderer={renderer}
        />
      </div>
    </>

  )
}

export default DataSection_1