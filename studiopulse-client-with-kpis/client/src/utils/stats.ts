export const computePageStats = (logs) => {
  const grouped = {};
  logs.forEach(log => {
    if (!grouped[log.page]) grouped[log.page] = { time: 0, clicks: 0, count: 0 };
    grouped[log.page].time += log.timeOnPage;
    grouped[log.page].clicks += log.clicks;
    grouped[log.page].count += 1;
  });

  return Object.entries(grouped).map(([page, data]) => {
    const avgTime = data.time / data.count;
    const avgClicks = data.clicks / data.count;
    const friction = avgTime < 10 || avgClicks === 0 ? "High" : avgTime < 20 ? "Medium" : "Low";
    return { page, avgTime, avgClicks, friction };
  });
};