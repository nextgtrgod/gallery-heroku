
const config = require('../config/pages');


// temp
const path = require('path');
const fs = require('fs');
const pug = require('pug');
const images = require('../api/images');


function writeHtml(req, res, filename, data) {

	let html = pug.renderFile(path.join(__dirname, '..', 'views', `${filename}.pug`), data);

	fs.writeFile(
		path.join(__dirname, '..', 'public', `${filename}.html`),
		html,
		'utf-8',
		error => {
			if (error) throw error;
			res.sendFile(path.join(__dirname, '..', 'public', `${filename}.html`));
		}
	);
};
// end temp


function route(req, res, name) {

	const deviceType = req.device.type;
	console.log('\nRoute name:', name);
	console.log('Device:', req.device.type);

	if (name === 'admin') { writeHtml(req, res, 'admin', config.admin) }
	else if (name === '404') { writeHtml(req, res, 'admin', config[404]) }
	else {
		switch (deviceType) {
			case 'phone':
				writeHtml(req, res, 'mobile', Object.assign({}, config.mobile, images));
				break;
			default:
				writeHtml(req, res, 'index', Object.assign({}, config.index, images));
				break;
		}
	};
};


module.exports = route;