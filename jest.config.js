const envNames = {
    prod: "Production",
    dev: "Development"
}

const environmentName = envNames[process.env.NODE_ENV.trim()];

module.exports = {
    preset: 'jest-puppeteer',

    reporters: [
        "default",
        ["jest-html-reporters", {
            publicPath: "./report",
            filename: 'report.html',
            hideIcon: true,
            pageTitle: "Test Puppeteer and jest",
            customInfos: [{
                title: 'Environment',
                value: environmentName
            }]
        }]
    ]
}