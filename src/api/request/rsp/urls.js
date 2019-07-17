import base from '../../base'

export default {
	//维修区域列表
	region: base.rspUrl + '/rsp/region',
	//维修楼宇列表
	building: base.rspUrl + '/rsp/building',
	//维修项目列表
	project: base.rspUrl + '/rsp/project',
	//维修单位列表
	team: base.rspUrl + '/rsp/team',
	//维修受理人列表
	assignee: base.rspUrl + '/rsp/assignee',
	//维修工列表
	worker: base.rspUrl + '/rsp/work',
	//维修数据查询
	repair: base.rspUrl + '/rsp/search',
	//维修数据详情
	progress: base.rspUrl + '/rsp/detail',
	//维修配置
	config: base.rspUrl + '/rsp/search_config',
	//数据汇总
	summary: base.rspUrl + '/rsp/data_summary',
	//时间分析
	hour: base.rspUrl + '/rsp/analysis_hour',
	//时间分析（周）
	week: base.rspUrl + '/rsp/analysis_week',
	//来源分析
	source: base.rspUrl + '/rsp/analysis_from',
	//评价分析
	score: base.rspUrl + '/rsp/analysis_common',
	//区域分析
	regionStat: base.rspUrl + '/rsp/analysis_region',
	//维修项目统计
	projectStat: base.rspUrl + '/rsp/project_count',
	//维修时长统计
	timeStat: base.rspUrl + '/rsp/finished_time_count',
	//工作效率排名
	efficie: base.rspUrl + '/rsp',
	//满意度排名
	satis: base.rspUrl + '/rsp/satis_count',
	//工作量统计
	work: base.rspUrl + '/rsp',
	//返修率统计
	after: base.rspUrl + '/rsp',
	//区域报修量统计
	regionRepair: base.rspUrl + '/rsp/region_count',
	//楼宇报修量统计
	buildRepair: base.rspUrl + '/rsp/building_count',
	//报修量明细
	repairDetail: base.rspUrl + '/rsp',
	//维修耗材统计
	supplyStat: base.rspUrl + '/rsp/supply_count',
	//维修耗材统计
	supplyStat: base.rspUrl + '/rsp/supply_count',
	//数据统计（首页）
	dataIndex: base.rspUrl + '/rsp/index_group',
	//满意度分析（首页）
	satisIndex: base.rspUrl + '/rsp/index_sat',
	//数据分析近30天（首页）
	monthIndex: base.rspUrl + '/rsp/index_time',
	//维修项目统计（首页）
	projectIndex: base.rspUrl + '/rsp/index_project_count',
	//最新申报（首页）
	repairIndex: base.rspUrl + '/rsp/index_repair',
	//回复效率周排名（首页）
	replyRank: base.rspUrl + '/rsp/index_efficiency_rank',
	//满意度周排名（首页）
	satisRank: base.rspUrl + '/rsp/index_satis_rank',
	//工作量周排名（首页）
	workRank: base.rspUrl + '/rsp/index_work_count_rank',
	//楼宇维修量周排名（首页）
	buildRank: base.rspUrl + '/rsp/index_building_rank',
	//维修申报查询数据导出
	exportData: base.rspUrl + '/rsp/repair_export',
	//服务指南
	guide: base.rspUrl + '/rsp/guide/detail',
	//服务指南
	guideTeam: base.rspUrl + '/rsp/repair_team',
	//api
	api: 'http://lspapi.gm365.cc'
}