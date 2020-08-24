const { regions, sites, environments } = require('../config/base.config');

exports.pagesToTest = (path = '', excludeSites, excludeRegions) => {
    const environment = environments[process.env.NODE_ENV.trim()];
    const sitesList = excludeValues(sites, excludeSites);
    const regionList = excludeValues(regions, excludeRegions);

    let pages = [];
    sitesList.forEach(site => {
        regionList.forEach(region => {
            const pageToTest = `${environment.replace('@site@', site)}/${path}`; // ${region}/
            pages.push(pageToTest)
        })
    });
    return pages;
}

function excludeValues(list, valuesToExclude) {
    if (!valuesToExclude) return list;
    return list.filter(item => valuesToExclude.indexOf(item) === -1)
}