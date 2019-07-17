import api from '../../../index'
import urls from './urls'

export default {
	//维修项目管理
	project (params, method = 'get', id = 0, headers) {
		let url = urls.project;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修区域管理
	region (params, method = 'get', id = 0, headers) {
		let url = urls.region;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修楼管理
	building (params, method = 'get', id = 0, headers) {
		let url = urls.building;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修耗材管理
	supplies (params, method = 'get', id = 0, headers) {
		let url = urls.supplies;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修班次管理
	shift (params, method = 'get', id = 0, headers) {
		let url = urls.shift;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修团队管理
	team (params, method = 'get', id = 0, headers) {
		let url = urls.team;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修人员管理
	worker (params, method = 'get', id = 0, headers) {
		let url = urls.worker;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//受理人管理
	assignee (params, method = 'get', id = 0, headers) {
		let url = urls.assignee;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修申报
	repair (params, method = 'get', id = 0, headers) {
		let url = urls.repair;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//维修申报上传图片
	upload: urls.upload,
	//维修申报查询数据导出
	exportData: urls.exportData,
	//维修统计导出
	exportStat: urls.exportStat,
}