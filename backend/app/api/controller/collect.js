function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');

module.exports = class extends Base {
  createAction(){
  	var _this2 = this;
	return _asyncToGenerator(function* (){
	const firstName = _this2.post('firstName');
	const lastName = _this2.post('lastName');
	const category = _this2.post('category');
	const link = _this2.post('link');
	const linkAuthored = _this2.post('linkAuthored');
	const hasOnlineShop = _this2.post('hasOnlineShop');
	const sellUrls = _this2.post('sellUrls');
	const quality = _this2.post('quality');
	const experience = _this2.post('experience');
	const understanding = _this2.post('understanding');
	//检查输入参数
	let collectRes = yield _this2.model('collection').add({
		firstName: firstName,
		lastName: lastName,
		category: category,
		link: link,
		linkAuthored: linkAuthored,
		hasOnlineShop: hasOnlineShop,
		sellUrls: sellUrls,
		quality: quality,
		experience: experience,
		understanding: understanding
	});
	if(collectRes > 0){
		return _this2.success();
	}
	return _this2.fail("operate failed, please retry!");
	})();
  }
};
//# sourceMappingURL=collect.js.map
