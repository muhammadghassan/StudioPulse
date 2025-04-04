import React from 'react';
import { abTestSessions } from '../data/abTests';
import { calculateConversionRates } from '../utils/abTestStats';

const ABTestManager = () => {
  const { A, B } = calculateConversionRates(abTestSessions);

  return (
    <div style={{ padding: '20px' }}>
      <h1>A/B Test Results: Membership Conversion</h1>
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Total Sessions</th>
            <th>Conversion Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: A.conversionRate > B.conversionRate ? '#d4edda' : '#fff3cd' }}>
            <td>A</td>
            <td>{A.count}</td>
            <td>{A.conversionRate.toFixed(2)}</td>
          </tr>
          <tr style={{ backgroundColor: B.conversionRate > A.conversionRate ? '#d4edda' : '#fff3cd' }}>
            <td>B</td>
            <td>{B.count}</td>
            <td>{B.conversionRate.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '20px' }}>
        <strong>Winning Variant:</strong> {A.conversionRate > B.conversionRate ? 'A' : 'B'}
      </p>
    </div>
  );
};

export default ABTestManager;