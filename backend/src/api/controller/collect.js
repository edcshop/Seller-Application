const Base = require('./base.js');

module.exports = class extends Base {
  async createAction(){
	const firstName = this.post('firstName');
	const lastName = this.post('lastName');
	const category = this.post('category');
	const link = this.post('link');
	const linkAuthored = this.post('linkAuthored');
	const hasOnlineShop = this.post('hasOnlineShop');
	const sellUrls = this.post('sellUrls');
	const quality = this.post('quality');
	const experience = this.post('experience');
	const understanding = this.post('understanding');
	//检查输入参数
	let collectRes = await this.model('collection').add({
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
		return this.success();
	}
	return this.fail("operate failed, please retry!");
  }

};
