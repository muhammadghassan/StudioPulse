import React from 'react';
import { sessionLogs } from '../data/sessionLogs';
import { computePageStats } from '../utils/stats';

const UXAnalyzer = () => {
  const stats = computePageStats(sessionLogs);

  return (
    <div style={{ padding: '20px' }}>
      <h1>UX Friction Analyzer</h1>
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Page</th>
            <th>Avg. Time on Page (s)</th>
            <th>Avg. Clicks</th>
            <th>Friction Score</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((row, idx) => (
            <tr key={idx} style={{ backgroundColor: row.friction === "High" ? '#ffd6d6' : row.friction === "Medium" ? '#fff3cd' : '#d4edda' }}>
              <td>{row.page}</td>
              <td>{row.avgTime.toFixed(2)}</td>
              <td>{row.avgClicks.toFixed(2)}</td>
              <td>{row.friction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UXAnalyzer;