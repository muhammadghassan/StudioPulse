export const calculateConversionRates = (sessions) => {
  const grouped = { A: { total: 0, converted: 0 }, B: { total: 0, converted: 0 } };

  sessions.forEach(session => {
    const group = session.variant;
    grouped[group].total += 1;
    if (session.converted) grouped[group].converted += 1;
  });

  return {
    A: {
      conversionRate: (grouped.A.converted / grouped.A.total) * 100,
      count: grouped.A.total
    },
    B: {
      conversionRate: (grouped.B.converted / grouped.B.total) * 100,
      count: grouped.B.total
    }
  };
};