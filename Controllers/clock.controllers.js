const getClockSettings = (req, res) => {
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
    },
  });
};
const postClockSettings = (req, res) => {};

module.exports = {
  getClockSettings,
  postClockSettings,
};
