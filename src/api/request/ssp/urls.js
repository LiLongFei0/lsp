import base from '../../base'

export default {
	//首页-数据汇总
	dataIndex: base.sspUrl + '/ssp/data_summary',
	//首页-最新发帖
	postIndex: base.sspUrl + '/ssp/index_post',
	//首页-回复效率周排名
	replyIndex: base.sspUrl + '/ssp/index_efficiency',
	//首页-满意度周排名
	satisIndex: base.sspUrl + '/ssp/index_sat',


	//首页-年度排名
	yearIndex: base.sspUrl + '/ssp/index_cat_year',
	//首页帖子查询-服务项目
	getProject: base.sspUrl + '/ssp/project_list',
	//首页帖子查询 - 服务单位
	getUnits: base.sspUrl + '/ssp/team',
	//首页帖子查询
	getSearchList: base.sspUrl + '/ssp/search',
	//首页帖子查询详情
	SearchDetail: base.sspUrl + '/ssp/detail',

	//首页 - 帖子详情历史记录
	getHistory: base.sspUrl + '/ssp/posts/history',
	//首页 - 帖子详情评论
	getComment: base.sspUrl + '/ssp/posts/reply/list',

	//首页帖子查询 - 回复人
	getReply: base.sspUrl + '/ssp/replyer',
	//导出
	exports: base.sspUrl + '/ssp/posts/export',
	//首页-分类统计
	analyzeCate: base.sspUrl + '/ssp/analyze_cate',
	//首页-单位统计
	analyzeTeam: base.sspUrl + '/ssp/analyze_team',
	//首页-项目统计
	analyzePrj: base.sspUrl + '/ssp/analyze_project',
	//首页-来源统计
	analyzeFrom: base.sspUrl + '/ssp/analyze_from',
	//首页-回复效率
	reverts: base.sspUrl + '/ssp/analyze/efficiency',
	//首页-回复效率详情
	getTeamPost: base.sspUrl + '/ssp/team_post',
	//首页-满意度
	getSatis: base.sspUrl + '/ssp/satisfaction',
	//首页-服务指南
	getGuide: base.sspUrl + '/ssp/guide',
	//首页-指南详情
	guideDetail: base.sspUrl + '/rsp/guide/detail',
	
	//测试
	testMock: base.baseUrl + '/get_user'
}