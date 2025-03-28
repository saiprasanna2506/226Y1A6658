const dataService = require('../services/dataService');
const { updateWindow, calculateAverage } = require('../utils/slidingWindow');


let windowState = [];

exports.getNumbers = async (req, res) => {
  try {
    const { type } = req.params;
    const prevState = [...windowState];

    const newNumbers = await dataService.fetchNumbers(type);

    windowState = updateWindow(windowState, newNumbers, 10);

    const avg = calculateAverage(windowState);

    const responsePayload = {
      windowPrevState: prevState,
      windowCurrState: windowState,
      numbers: newNumbers,
      avg: avg
    };

    return res.json(responsePayload);
  } catch (error) {
    console.error('Error in getNumbers:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
