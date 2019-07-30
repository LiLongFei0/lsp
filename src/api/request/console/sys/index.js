import api from '../../../index'
import urls from './urls'

export default {
	//配置信息
	config(params, method = 'get', id = 0, headers) {
		let url = urls.config;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//敏感词
	word(params, method = 'get', id = 0, headers) {
		let url = urls.word;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//组织机构
	org(params, method = 'get', id = 0, headers) {
		let url = urls.org;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//用户管理（学生和教师）
	user(params, method = 'get', id = 0, headers) {
		let url = urls.user;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//角色管理
	role(params, method = 'get', id = 0, headers) {
		let url = urls.role;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//权限管理（菜单权限）
	node(params, method = 'get', id = 0, headers) {
		let url = urls.node;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取用户权限下菜单
	menu(params, method = 'get', id = 0, headers) {
		let url = urls.node;
		url += '/' + id;
		return api[method](url, params, headers)
	},
	//获取APP二维码
	getAppScan(params, method = 'get', id = 0, headers) {
		let url = urls.getAppScan;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取微信二维码
	getWxScan(params, method = 'get', id = 0, headers) {
		let url = urls.getWxScan;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取二维码状态
	getScanStatus(params, method = 'get', id = 0, headers) {
		let url = urls.getScanStatus;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//登录
	login(params, method = 'get', id = 0, headers) {
		let url = urls.login;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//登出
	logout(params, method = 'get', id = 0, headers) {
		let url = urls.logout;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//修改密码
	password(params, method = 'get', id = 0, headers) {
		let url = urls.password;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//消息推送规则列表
	ruleList(params, method = 'get', id = 0, headers) {
		let url = urls.ruleList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//消息推送规则编辑
	ruleSave(params, method = 'get', id = 0, headers) {
		let url = urls.ruleSave;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//服务指南
	guide(params, method = 'get', id = 0, headers) {
		let url = urls.guide;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//通知公告
	notice(params, method = 'get', id = 0, headers) {
		let url = urls.notice;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//我的消息
	message(params, method = 'get', id = 0, headers) {
		let url = urls.message;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//上传头像
	avatarImage(params, method = 'get', id = 0, headers) {
		let url = urls.avatarImage;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//富文本上传图片
	uploadImage: urls.uploadImage,
	//上传附件
	fileImage: urls.fileImage,
	//服务指南列表
	guideList(params, method = 'get', id = 0, headers) {
		let url = urls.guideList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	}
}