class MasterConfig {
  static activeConfig = {
  };

  static findModule (moduleName, config) {
    return config.modules.find((module) => module.module === moduleName);
  }

  static removeModule (moduleName, config) {
    config.modules = config.modules.filter((module) => module.module !== moduleName);
  }

  // Filepath not final yet
  static defaultPathActive = "/home/smartMirror/MagicMirror/config/config.js";

  static defaultConfig = {
    address: "localhost",
    port: 8080,
    basePath: "/",
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",

    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"],
    timeFormat: 24,
    units: "metric",

    modules: [
      {
        module: "clock",
        position: "top_left",
      },
      {
        module: "alert",
      },
      {
        module: "updatenotification",
        position: "top_bar",
      },
      {
        module: "calendar",
        header: "US Holidays",
        position: "top_left",
        config: {
          calendars: [
            {
              symbol: "calendar-check",
              url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
            },
          ],
        },
      },
      {
        module: "compliments",
        position: "lower_third",
      },
      {
        module: "weather",
        position: "top_right",
        config: {
          weatherProvider: "openweathermap",
          type: "current",
          location: "New York",
          locationID: "5128581",
          apiKey: "YOUR_OPENWEATHER_API_KEY",
        },
      },
      {
        module: "weather",
        position: "top_right",
        header: "Weather Forecast",
        config: {
          weatherProvider: "openweathermap",
          type: "forecast",
          location: "New York",
          locationID: "5128581",
          apiKey: "YOUR_OPENWEATHER_API_KEY",
        },
      },
      {
        module: "newsfeed",
        position: "bottom_bar",
        config: {
          feeds: [
            {
              title: "New York Times",
              url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
            },
          ],
          showSourceTitle: true,
          showPublishDate: true,
          broadcastNewsFeeds: true,
          broadcastNewsUpdates: true,
        },
      },
    ],
  };
}

module.exports = MasterConfig;
