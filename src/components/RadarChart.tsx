import * as d3 from "d3";

type AxisConfig = {
  name: string;
  max: number;
};

type Props = {
  data: Record<string, number>;
  width: number;
  height: number;
  axisConfig: AxisConfig[];
};

const RadarChart = ({ data, width, height, axisConfig }: Props) => {
  const radius = Math.min(width, height) / 2 - 40;
  const angleSlice = (Math.PI * 2) / axisConfig.length;

  const radarLine = d3
    .lineRadial<number>()
    .radius((d, i) => {
      const axis = axisConfig[i];
      const value = data[axis.name] ?? 0;
      return (value / axis.max) * radius;
    })
    .angle((_, i) => i * angleSlice)
    .curve(d3.curveLinearClosed);

  const ticks = [0.25, 0.5, 0.75, 1];

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {/* Background circles */}
        {ticks.map((t, i) => (
          <circle
            key={i}
            r={radius * t}
            fill="none"
            stroke="#fff"
            strokeWidth={0.5}
          />
        ))}

        {/* Axis lines and labels */}
        {axisConfig.map((axis, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <g key={axis.name}>
              <line x1={0} y1={0} x2={x} y2={y} stroke="#aaa" />
              <text
                x={x * 1.1}
                y={y * 1.1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={10}
                fill="#fff"
              >
                {axis.name}
              </text>
            </g>
          );
        })}

        {/* Radar area */}
        <path
          d={radarLine(axisConfig.map((_, i) => i)) ?? ""}
          fill="rgba(30, 144, 255, 0)"
          stroke="dodgerblue"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};

export default RadarChart;
