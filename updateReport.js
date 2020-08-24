const fs = require('fs');
var data = fs.readFileSync('./report/report.html', 'utf-8');
var newValue = data.replace('</body>', '<style> footer div{display:none;}</style></body>');
fs.writeFileSync('./report/report.html', newValue, 'utf-8');