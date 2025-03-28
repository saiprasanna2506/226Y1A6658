exports.updateSlidingWindow = (window, newNumbers, maxSize) => {
  const updatedWindow = [...new Set([...window, ...newNumbers])];
  return updatedWindow.length > maxSize ? updatedWindow.slice(-maxSize) : updatedWindow;
};

exports.calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return parseFloat((sum / numbers.length).toFixed(2));
};
