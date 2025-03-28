function updateWindow(currentWindow, newNumbers, maxSize) {
    const existingSet = new Set(currentWindow);

    newNumbers.forEach((num) => {
      if (!existingSet.has(num)) {
        currentWindow.push(num);
        existingSet.add(num);
      }
    });

    while (currentWindow.length > maxSize) {
      currentWindow.shift();
    }
  
    return currentWindow;
  }
  
  function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return parseFloat((sum / numbers.length).toFixed(2));
  }
  
  module.exports = {
    updateWindow,
    calculateAverage
  };
  