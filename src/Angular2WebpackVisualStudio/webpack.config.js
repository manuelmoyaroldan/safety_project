/// <binding BeforeBuild='Watch - Development' AfterBuild='Watch - Development' Clean='Watch - Development' ProjectOpened='Run - Development, Watch - Production, Watch - Development' />
var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development") {
    module.exports = require('./webpack.dev.js');
} else {
    module.exports = require('./webpack.prod.js');
}