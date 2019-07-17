import api from '../../index'
import urls from './urls'

export default {
	//正在进行
	process(params, method = 'get', id = 0, headers) {
		let url = urls.process;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//历史记录
	history(params, method = 'get', id = 0, headers) {
		let url = urls.history;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//草稿
	draft(params, method = 'get', id = 0, headers) {
		let url = urls.draft;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//删除草稿
	delDraft(params, method = 'get', id = 0, headers) {
		let url = urls.delDraft;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//草稿提交
	saveDraft(params, method = 'get', id = 0, headers) {
		let url = urls.saveDraft;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//我的消息
	message(params, method = 'get', id = 0, headers) {
		let url = urls.message;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修服务
	repair(params, method = 'get', id = 0, headers) {
		let url = urls.repair;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//服务监督项目管理
	units(params, method = 'get', id = 0, headers) {
		let url = urls.units;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//服务监督项目管理
	post(params, method = 'get', id = 0, headers) {
		let url = urls.post;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//提交
	apply(params, method = 'get', id = 0, headers) {
		let url = urls.apply;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//详情
	info(params, method = 'get', id = 0, headers) {
		let url = urls.info;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//修改密码
	password(params, method = 'get', id = 0, headers) {
		let url = urls.password;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//个人中心
	user(params, method = 'get', id = 0, headers) {
		let url = urls.user;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//通知公告
	notice(params, method = 'get', id = 0, headers) {
		let url = urls.notice;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//上传头像
	avatarImage(params, method = 'get', id = 0, headers) {
		let url = urls.avatarImage;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//上传图片
	upload: urls.upload,

	/***帖子详情 */
	postDetail(params, method = 'get', id = 0, headers) {
		let url = urls.postDetail;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取评论
	discussList(params, method = 'get', id = 0, headers) {
		let url = urls.discussList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//历史记录
	getHistory(params, method = 'get', id = 0, headers) {
		let url = urls.getHistory;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//回复
	Postreply(params, method = 'get', id = 0, headers) {
		let url = urls.Postreply;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//评价
	PostEvaluate(params, method = 'get', id = 0, headers) {
		let url = urls.PostEvaluate;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//删除帖子
	deletePost(params, method = 'get', id = 0, headers) {
		let url = urls.deletePost;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//取消
	cancelPost(params, method = 'get', id = 0, headers) {
		let url = urls.cancelPost;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	}
}