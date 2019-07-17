import base from '../../../base'

export default {
	//维修项目管理
	project: base.consoleUrl + '/projects',
	//维修区域管理
	region: base.consoleUrl + '/regions',
	//维修楼管理
	building: base.consoleUrl + '/buildings',
	//维修耗材管理
	supplies: base.consoleUrl + '/supplies',
	//维修班次管理
	shift: base.consoleUrl + '/shifts',
	//维修团队管理
	team: base.consoleUrl + '/teams',
	//维修人员管理
	worker: base.consoleUrl + '/workers',
	//受理人管理
	assignee: base.consoleUrl + '/assignees',
	//维修申报
	repair: base.consoleUrl + '/repairs',
	//维修申报上传图片
	upload: base.consoleUrl + '/upload',
	//维修申报查询数据导出
	exportData: base.consoleUrl + '/repairs/export',
	//维修统计导出
	exportStat: base.consoleUrl + '/repairs',
}