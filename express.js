const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        return res
                .status(400)
                .json("Error: Numbers are required.")
    };

    const nums = req.query.nums.split(",").map(Number);

    if (nums.includes(NaN)){
        return res
                .status(400)
                .json("Error: includes non-number")
    };

    console.log(nums);
    let mean = getMean(nums);
    return res.json({
        operation: "mean",
        value: `${mean}`
    });
});


app.get('/median', (req, res) => {
    if (!req.query.nums) {
        return res
                .status(400)
                .json("Error: Numbers are required.")
    };

    const nums = req.query.nums.split(",").map(Number);

    if (nums.includes(NaN)){
        return res
                .status(400)
                .json("Error: includes non-number")
    };

    let median = getMedian(nums);
    return res.json({
        operation: "median",
        value: `${median}`
    });
});


app.get('/mode', (req, res) => {
    if (!req.query.nums) {
        return res
                .status(400)
                .json("Error: Numbers are required.")
    };

    const nums = req.query.nums.split(",").map(Number);

    if (nums.includes(NaN)){
        return res
                .status(400)
                .json("Error: includes non-number")
    };

    let mode = getMode(nums);
    return res.json({
        operation: "mode",
        value: `${mode}`
    });
});



function getMean(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i += 1) {
        total += (nums[i]);
    }
    return total / nums.length;
};

function getMedian(nums){
    let index = (nums.length / 2) - .5;

    if (Number.isInteger(index)){
        return nums[index]
    } else {
        return (nums[Math.floor(index)] + nums[Math.ceil(index)]) / 2
    };
};

function getMode(nums){
    let counts = {};

    for (let i =0; i < nums.length; i++){
        if (!counts[nums[i]]) {
            counts[nums[i]] = 0;
        }
        counts[nums[i]] += 1;
    };

    let greatestValue = 0;
    let keys = Object.keys(counts);
    let mode;

    for (let i=0; i < keys.length; i++) {
        if (counts[keys[i]] > greatestValue){
            greatestValue = counts[keys[i]];
            mode = keys[i];
        };
    };
    if (Object.values(counts).every((val, i, arr) => val === arr[0])){
        return "NA";
    }
    return Number(mode);
};

module.exports = { getMean, getMedian, getMode }

// app.listen(3000, function () {
//     console.log('App on port 3000');
// });

