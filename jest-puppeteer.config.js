module.exports = {
    launch: {
        devtools: false,
        headless: false,
        defaulViewport: { width: 1920, height: 1000 },
        args: [
            '--start-maximized'
        ],
        ignoreDefaultArgs: ['--disable-extensions']
    },
    browserContext: 'incognito',
    exitOnPageError: false
}