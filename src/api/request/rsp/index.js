import api from '../../index'
import urls from './urls'

export default {
	//维修区域列表
	region (params, method = 'get', id = 0, headers) {
		let url = urls.region;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修楼宇列表
	building (params, method = 'get', id = 0, headers) {
		let url = urls.building;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修项目列表
	project (params, method = 'get', id = 0, headers) {
		let url = urls.project;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修单位列表
	team (params, method = 'get', id = 0, headers) {
		let url = urls.team;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修受理人列表
	assignee (params, method = 'get', id = 0, headers) {
		let url = urls.assignee;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修工列表
	worker (params, method = 'get', id = 0, headers) {
		let url = urls.worker;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修数据查询
	repair (params, method = 'get', id = 0, headers) {
		let url = urls.repair;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修数据详情
	progress (params, method = 'get', id = 0, headers) {
		let url = urls.progress;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修配置
	config (params, method = 'get', id = 0, headers) {
		let url = urls.config;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//数据汇总
	summary (params, method = 'get', id = 0, headers) {
		let url = urls.summary;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//时间分析
	hour (params, method = 'get', id = 0, headers) {
		let url = urls.hour;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//时间分析（周）
	week (params, method = 'get', id = 0, headers) {
		let url = urls.week;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//来源分析
	source (params, method = 'get', id = 0, headers) {
		let url = urls.source;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//评价分析
	score (params, method = 'get', id = 0, headers) {
		let url = urls.score;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//区域分析
	regionStat (params, method = 'get', id = 0, headers) {
		let url = urls.regionStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修项目统计
	projectStat (params, method = 'get', id = 0, headers) {
		let url = urls.projectStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修时长统计
	timeStat (params, method = 'get', id = 0, headers) {
		let url = urls.timeStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//工作效率排名
	efficie (params, method = 'get', id = 0, headers) {
		let url = urls.efficie;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//满意度排名
	satis (params, method = 'get', id = 0, headers) {
		let url = urls.satis;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//工作量统计
	work (params, method = 'get', id = 0, headers) {
		let url = urls.work;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//返修率统计
	after (params, method = 'get', id = 0, headers) {
		let url = urls.after;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//区域报修量统计
	regionRepair (params, method = 'get', id = 0, headers) {
		let url = urls.regionRepair;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//楼宇报修量统计
	buildRepair (params, method = 'get', id = 0, headers) {
		let url = urls.buildRepair;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//报修量明细
	repairDetail (params, method = 'get', id = 0, headers) {
		let url = urls.repairDetail;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修耗材统计
	supplyStat (params, method = 'get', id = 0, headers) {
		let url = urls.supplyStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//数据统计（首页）
	dataIndex (params, method = 'get', id = 0, headers) {
		let url = urls.dataIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//满意度分析（首页）
	satisIndex (params, method = 'get', id = 0, headers) {
		let url = urls.satisIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//数据分析近30天（首页）
	monthIndex (params, method = 'get', id = 0, headers) {
		let url = urls.monthIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修项目统计（首页）
	projectIndex (params, method = 'get', id = 0, headers) {
		let url = urls.projectIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//最新申报（首页）
	repairIndex (params, method = 'get', id = 0, headers) {
		let url = urls.repairIndex;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//回复效率周排名（首页）
	replyRank (params, method = 'get', id = 0, headers) {
		let url = urls.replyRank;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//满意度周排名（首页）
	satisRank (params, method = 'get', id = 0, headers) {
		let url = urls.satisRank;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//工作量周排名（首页）
	workRank (params, method = 'get', id = 0, headers) {
		let url = urls.workRank;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//楼宇维修量周排名（首页）
	buildRank (params, method = 'get', id = 0, headers) {
		let url = urls.buildRank;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修申报查询数据导出
	exportData: urls.exportData,
	//服务指南
	guide (params, method = 'get', id = 0, headers) {
		let url = urls.guide;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//服务指南维修团队
	guideTeam (params, method = 'get', id = 0, headers) {
		let url = urls.guideTeam;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//api
	api (params, method = 'get', id = 0, headers) {
		let url = urls.api;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
}