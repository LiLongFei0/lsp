import api from '../../index'
import urls from './urls'

export default {
	//首页-数据汇总
	dataIndex(params, method = 'get', id = 0, headers) {
		let url = urls.dataIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-最新发帖
	postIndex(params, method = 'get', id = 0, headers) {
		let url = urls.postIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-回复效率周排名
	replyIndex(params, method = 'get', id = 0, headers) {
		let url = urls.replyIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-满意度周排名
	satisIndex(params, method = 'get', id = 0, headers) {
		let url = urls.satisIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},


	//首页-年度排名
	yearIndex(params, method = 'get', id = 0, headers) {
		let url = urls.yearIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-帖子查询 服务项目
	getProject(params, method = 'get', id = 0, headers) {
		let url = urls.getProject;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-帖子查询 服务单位
	getUnits(params, method = 'get', id = 0, headers) {
		let url = urls.getUnits;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-帖子查询
	getSearchList(params, method = 'get', id = 0, headers) {
		let url = urls.getSearchList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-帖子查询详情
	SearchDetail(params, method = 'get', id = 0, headers) {
		let url = urls.SearchDetail;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页 - 帖子详情历史记录
	getHistory(params, method = 'get', id = 0, headers) {
		let url = urls.getHistory;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页 - 帖子详情评论
	getComment(params, method = 'get', id = 0, headers) {
		let url = urls.getComment;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-回复人
	getReply(params, method = 'get', id = 0, headers) {
		let url = urls.getReply;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-导出
	exports: urls.exports,
	//首页-分类统计
	analyzeCate(params, method = 'get', id = 0, headers) {
		let url = urls.analyzeCate;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-单位统计
	analyzeTeam(params, method = 'get', id = 0, headers) {
		let url = urls.analyzeTeam;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-项目统计
	analyzePrj(params, method = 'get', id = 0, headers) {
		let url = urls.analyzePrj;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-来源统计
	analyzeFrom(params, method = 'get', id = 0, headers) {
		let url = urls.analyzeFrom;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-回复效率
	reverts(params, method = 'get', id = 0, headers) {
		let url = urls.reverts;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页回复效率 详情
	getTeamPost(params, method = 'get', id = 0, headers) {
		let url = urls.getTeamPost;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-满意度
	getSatis(params, method = 'get', id = 0, headers) {
		let url = urls.getSatis;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-服务指南
	getGuide(params, method = 'get', id = 0, headers) {
		let url = urls.getGuide;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//首页-指南详情
	guideDetail(params, method = 'get', id = 0, headers) {
		let url = urls.guideDetail;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	}
}