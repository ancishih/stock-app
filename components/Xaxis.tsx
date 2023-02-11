import React from "react";
import * as d3 from "d3";
export default function Xaxis({
  axis,
  ticks,
  transform,
}: {
  axis: d3.Axis<string>;
  ticks: string[];
  transform: string;
}) {
  const ref = React.useRef<SVGGElement>(null);

  React.useEffect(() => {
    if (ref && ref.current) {
      d3.select(ref.current).call(axis.tickValues(ticks));
      // .call((g) => g.select(".domain").remove());
    }
  }, []);

  return <g ref={ref} transform={transform} />;
}
