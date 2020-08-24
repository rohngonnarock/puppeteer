const { baseTestTimeout } = require('../config/base.config');
const { pagesToTest } = require('../helpers/pages-to-test');
const { basicLoadTest, pageLoadTestName } = require('../helpers/page-functions');

describe("Test", () => {
    test.each(
        pagesToTest("", "", [])
    )(pageLoadTestName, basicLoadTest, baseTestTimeout);
})