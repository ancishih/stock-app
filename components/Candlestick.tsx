import React from "react";
import Xaxis from "@/components/Xaxis";
import Yaxis from "@/components/Yaxis";
import * as d3 from "d3";
import dayjs from "@/utils/dayjs";

export default function Chart({
  dimensions,
  data,
}: {
  dimensions: {
    width: number;
    height: number;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  data: {
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    symbol: string;
    date: string;
  }[];
}) {
  // const ref = React.useRef<SVGSVGElement>(null);

  const x_axis_range =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;

  const y_axis_range =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const y_range = [
    dimensions.height - dimensions.margin.bottom,
    dimensions.margin.top,
  ];

  const x_range = d3.range(data.length);

  const y_open = data.map((d) => d.open);
  const y_close = data.map((d) => d.close);
  const y_high = data.map((d) => d.high);
  const y_low = data.map((d) => d.low);

  const y_domain = [d3.min(y_low), d3.max(y_high)] as [number, number];

  const x_accessor = d3.utcDay
    .range(
      dayjs(data[0].date).toDate(),
      dayjs(data[data.length - 1].date)
        .add(1, "millisecond")
        .toDate()
    )
    .filter((d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6)
    .map((d) => dayjs(d).format("YYYY-MM-DD"));

  const x_scale = d3
    .scaleBand()
    .domain(x_accessor)
    .range([0, x_axis_range])
    .padding(0.5);

  const axis_bottom = d3.axisBottom(x_scale);

  const x_ticks = d3.utcMonday
    .every(2)
    ?.range(
      dayjs(data[0].date).toDate(),
      dayjs(data[data.length - 1].date)
        .add(1, "millisecond")
        .toDate()
    )
    .map((d) => dayjs(d).format("YYYY-MM-DD"));

  const y_scale = d3.scaleLinear().domain(y_domain).rangeRound(y_range).nice();

  const axis_right = d3.axisRight(y_scale);

  // React.useEffect(() => {
  //   if (ref && ref.current) {
  //     // d3.select(ref.current).call(axis_bottom.tickValues(x_ticks as string[]));
  //     // d3.select(ref.current).call(axis_right);
  //   }
  // }, []);

  return (
    <svg
      className="svg-class"
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      {data.map((d) => (
        <g
          key={d.date}
          transform={`translate(${x_scale(
            dayjs(d.date).format("YYYY-MM-DD")
          )},0)`}
        >
          <line y1={y_scale(d.low)} y2={y_scale(d.high)} />
          <line
            y1={y_scale(d.open)}
            y2={y_scale(d.low)}
            strokeWidth={x_scale.bandwidth()}
            stroke={
              d.open > d.close
                ? d3.schemeSet1[0]
                : d.close > d.open
                ? d3.schemeSet1[2]
                : d3.schemeSet1[8]
            }
          />
        </g>
      ))}
      <Xaxis
        axis={axis_bottom}
        ticks={x_ticks as string[]}
        transform={`translate(0,${y_axis_range + 15})`}
      />
      <Yaxis
        axis={axis_right}
        transform={`translate(${dimensions.width - 75},0)`}
      />
      {/* <g
        transform={`translate(${dimensions.margin.left},${dimensions.margin.top})`}
      >
      </g> */}
    </svg>
  );
}
