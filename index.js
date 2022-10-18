const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
app.use(cors({
    origin: 'http://127.0.0.1:5173'
}));

app.get('/clockSettings', (req, res) => {
    res.json({
        clockSettings: {
            showPeriod: true,
            periodUpper: true,
            timeFormat: true,
            showSecond: false,
            showWeek: false,
            modernLook: false,
            showSuntimes: true,
            showDate: true,
            showMoonTimes: true,
        }
    })
});

app.post('/clockSettings', (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/clockSettings`)
});