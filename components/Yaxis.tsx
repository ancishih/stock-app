import React from "react";
import * as d3 from "d3";
export default function Yaxis({
  axis,
  transform,
}: {
  axis: d3.Axis<d3.NumberValue>;
  transform: string;
}) {
  const ref = React.useRef<SVGGElement>(null);

  React.useEffect(() => {
    if (ref && ref.current) {
      d3.select(ref.current).call(axis);
    }
  }, []);

  return <g ref={ref} transform={transform} />;
}
