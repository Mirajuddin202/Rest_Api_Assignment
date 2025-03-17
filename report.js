const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    // collection: require('./collection/dmoney.json'),
    collect`,
    // environment: require('./collection/env.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/`
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("Collection run complete!");
  }
);
