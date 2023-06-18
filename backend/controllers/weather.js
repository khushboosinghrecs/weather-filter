const weatherRecord = require('../models/weather');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error')

const getHour = asyncWrapper(async (req, res)=>{
    console.log(weatherRecord);
    const weather = await weatherRecord.findOne({}, { "hourly": 1 });
    if (!weather) {
        return next(createCustomError(`No weather recored is found : ${weather}`, 404))
      }
    console.log(weather);
    res.status(200).json({weather});
})


module.exports={getHour};