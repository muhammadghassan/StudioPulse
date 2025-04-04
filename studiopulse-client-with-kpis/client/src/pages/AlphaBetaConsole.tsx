import React, { useState } from 'react';

const AlphaBetaConsole = () => {
  const [phase, setPhase] = useState('Alpha');
  const [feedbackList, setFeedbackList] = useState([]);
  const [form, setForm] = useState({ name: '', feature: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback = { ...form, phase, date: new Date().toLocaleString() };
    setFeedbackList([newFeedback, ...feedbackList]);
    setForm({ name: '', feature: '', comment: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🚀 Alpha/Beta Testing Console</h1>

      <div style={{ marginTop: '20px', display: 'flex', gap: '40px' }}>
        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <h3>📝 Submit Feedback</h3>

          <label>Tester Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ width: '100%', marginBottom: '10px' }}
          />

          <label>Feature Being Tested</label>
          <input
            type="text"
            required
            value={form.feature}
            onChange={(e) => setForm({ ...form, feature: e.target.value })}
            style={{ width: '100%', marginBottom: '10px' }}
          />

          <label>Feedback Comment</label>
          <textarea
            required
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            style={{ width: '100%', marginBottom: '10px' }}
          />

          <label>Test Phase</label>
          <select
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          >
            <option>Alpha</option>
            <option>Beta</option>
          </select>

          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px' }}>
            Submit Feedback
          </button>
        </form>

        <div style={{ flex: 2 }}>
          <h3>🗂️ Submitted Feedback</h3>
          {feedbackList.length === 0 && <p>No feedback yet.</p>}
          {feedbackList.map((entry, idx) => (
            <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <p><strong>{entry.name}</strong> ({entry.phase} phase)</p>
              <p><em>{entry.feature}</em></p>
              <p>{entry.comment}</p>
              <p style={{ fontSize: '0.8em', color: '#666' }}>{entry.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlphaBetaConsole;