const express = require("express");
const dataMock = [
    {
        neighborhood:'Upper West Side',
        value: 0,
        id: 000123,
        coordinates: '0.0009, 09900'
        // should give you green
    },
    {
        neighborhood:'Columbus Circle',
        value: 2,
        id: 000123,
        coordinates: '0.0009, 09900'
        // should give you yellow
    },
    {
        neighborhood:'Times Square',
        value: 20,
        id: 000123,
        coordinates: '0.0009, 09900'
        // should give you orange
    },
    {
        neighborhood:'Union Square',
        value: 30,
        id: 000123,
        coordinates: '0.0009, 09900'
        // should give you red
    },
    {
        neighborhood:'Meatpacking District',
        value: 50,
        id: 000123,
        coordinates: '0.0009, 09900'
        // should give you red
    },
]


const router = express.Router();

// router.get('/', (req, res) => res.send('Yay!'))
router.get('/', (req, res) => {
    let result = dataMock.map((ele) => {
        return {
            neighborhood: ele.neighborhood,
            color: getColor(ele.value)
        }
    })
    function getColor(val) {
        if(val === 0) return "green";
        if(val > 0 && val <= 10) return "yellow";
        if(val > 10 && val <= 20) return "orange"; 
        return "red";
    }
    console.log('result **', result)
    res.send(result)
})


module.exports = router;