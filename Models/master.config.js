class MasterConfig {
  constructor () {
    console.log("TEST");
  }

  static config = {
    modules: [
      {
        module: "clock",
        position: "top_left",
        config: {
          showPeriod: true,
          showPeriodUpper: true,
          timeFormat: true,
          displaySeconds: false,
          showWeek: true,
          clockBold: true,
          showSunTimes: false,
          showDate: true,
          showMoonTimes: true,
        },
      },
    ],
  };
}

module.exports = MasterConfig;
