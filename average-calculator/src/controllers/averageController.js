const { getNumbersFromAPI } = require('../services/dataService');
const { updateSlidingWindow, calculateAverage } = require('../utils/slidingWindow');

let windowState = [];

exports.fetchNumbers = async (req, res) => {
  try {
    let { type } = req.params;
    if(type == 'e'){
      type="even";
    }else if(type == 'f'){
      type="fibo";
    }else if(type == 'p'){
      type="primes";
    }else{
      type="rand";
    }
    const newNumbers = await getNumbersFromAPI(type);


    const windowPrevState = [...windowState];

    windowState = updateSlidingWindow(windowState, newNumbers, 10);
    const avg = calculateAverage(windowState);

    res.json({
      windowPrevState,
      windowCurrState: windowState,
      numbers: newNumbers,
      avg
    });
  } catch (error) {
    console.error("Error in fetchNumbers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
