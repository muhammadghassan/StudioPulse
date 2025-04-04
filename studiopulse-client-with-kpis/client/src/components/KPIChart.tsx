import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { kpiMetrics } from '../data/kpis';

const colors = {
  CAC: '#1f77b4',
  LTV: '#2ca02c',
  CTR: '#ff7f0e',
  churn: '#d62728'
};

const KPIChart: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    const margin = { top: 40, right: 60, bottom: 40, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(ref.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

    const months = kpiMetrics.map(d => d.month);
    const x = d3.scalePoint().domain(months).range([0, width]);

    const y = d3.scaleLinear().domain([0, d3.max(kpiMetrics, d => d.LTV)! + 50]).range([height, 0]);

    svg.append('g')
      .attr('transform', \`translate(0,\${height})\`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    const metrics = ['CAC', 'LTV', 'CTR', 'churn'];
    metrics.forEach(metric => {
      const line = d3.line()
        .x(d => x(d.month)!)
        .y(d => y(d[metric]))
        .curve(d3.curveMonotoneX);

      svg.append('path')
        .datum(kpiMetrics)
        .attr('fill', 'none')
        .attr('stroke', colors[metric])
        .attr('stroke-width', 2)
        .attr('d', line);

      svg.append('text')
        .attr('x', width - 60)
        .attr('y', y(kpiMetrics[kpiMetrics.length - 1][metric]))
        .attr('fill', colors[metric])
        .text(metric)
        .attr('font-size', '12px')
        .attr('alignment-baseline', 'middle');
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📈 Marketing KPI Dashboard</h2>
      <svg ref={ref}></svg>
    </div>
  );
};

export default KPIChart;