import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { funnelData } from '../data/funnel';

const FunnelChart: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    const width = 600;
    const height = 400;
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove(); // Clear previous render

    const x = d3.scaleLinear().domain([0, d3.max(funnelData, d => d.count)!]).range([0, width]);
    const yStep = height / funnelData.length;

    funnelData.forEach((d, i) => {
      svg.append('rect')
        .attr('x', (width - x(d.count)) / 2)
        .attr('y', i * yStep + 10)
        .attr('width', x(d.count))
        .attr('height', yStep - 20)
        .attr('fill', '#3498db')
        .attr('opacity', 0.8);

      svg.append('text')
        .attr('x', width / 2)
        .attr('y', i * yStep + yStep / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .attr('font-size', '14px')
        .attr('dy', '.35em')
        .text(\`\${d.stage} — \${d.count}\`);
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📉 Recruitment Funnel Analysis</h2>
      <svg ref={ref}></svg>
    </div>
  );
};

export default FunnelChart;