import api from '../../../index.js'
import urls from './urls'
export default {
	//获取table
	getGroupList(params, method = 'get', id = 0, headers) {
		let url = urls.getGroupList;//url
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取服务团队列表
	getPersonList(params, method = 'get', id = 0, headers) {
		let url = urls.getPersonList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//添加服务团队
	addPrj(params, method = 'get', id = 0, headers) {
		let url = urls.addPrj;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//删除团队
	delPrj(params, method = 'get', id = 0, headers) {
		let url = urls.delPrj;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//删除人员
	delPerson(params, method = 'get', id = 0, headers) {
		let url = urls.delPerson;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//添加人员
	addPerson(params, method = 'get', id = 0, headers) {
		let url = urls.addPerson;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取编辑人员信息
	getPeopleInfo(params, method = 'get', id = 0, headers) {
		let url = urls.getPeopleInfo;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取编辑团队信息
	getTemaInfo(params, method = 'get', id = 0, headers) {
		let url = urls.getTemaInfo;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	/*-----服务监督服务项目管理----- */
	//获取项目团队名称
	getTeamName(params, method = 'get', id = 0, headers) {
		let url = urls.getTeamName;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取项目名称
	getProName(params, method = 'get', id = 0, headers) {
		let url = urls.getProName;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//弹窗修改
	ProEdit(params, method = 'get', id = 0, headers) {
		let url = urls.ProEdit;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//详情跟据team_id获取项目详情
	prjDetails(params, method = 'get', id = 0, headers) {
		let url = urls.prjDetails;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//删除
	deleTab(params, method = 'get', id = 0, headers) {
		let url = urls.deleTab;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	// <!--管理团队管理-->
	//审核 转办 申诉
	getManage(params, method = 'get', id = 0, headers) {
		let url = urls.getManage;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	/**---------- 帖子查询--------*/
	///获取服务项目
	getPrjList(params, method = 'get', id = 0, headers) {
		let url = urls.getPrjList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取配置数据
	getconfig(params, method = 'get', id = 0, headers) {
		let url = urls.getconfig;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//帖子查询导出
	expor: urls.expor,
	//获取服务单位
	getUnitList(params, method = 'get', id = 0, headers) {
		let url = urls.getUnitList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取回复人
	getRecoList(params, method = 'get', id = 0, headers) {
		let url = urls.getRecoList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取审核人
	// getAuditList(params, method = 'get', id = 0, headers) {
	// 	let url = urls.getAuditList;
	// 	id == 0 || (url += '/' + id);
	// 	return api[method](url, params, headers)
	// },
	getPostsDeta(params, method = 'get', id = 0, headers) {
		let url = urls.getPostsDeta;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	///审核帖子
	//获取帖子列表
	getPostsList(params, method = 'get', id = 0, headers) {
		let url = urls.getPostsList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取帖子详情
	getDetails(params, method = 'get', id = 0, headers) {
		let url = urls.getDetails;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取部门
	getDeparList(params, method = 'get', id = 0, headers) {
		let url = urls.getDeparList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	//获取帖子列表审核
	getDetaList(params, method = 'get', id = 0, headers) {
		let url = urls.getDetaList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取历史记录
	getHistory(params, method = 'get', id = 0, headers) {
		let url = urls.getHistory;
		return api[method](url + '/history/' + params)
	},
	//帖子通过帖子驳回
	passORreject(params, method = 'get', id = 0, headers) {
		let url = urls.passORreject;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	batchReview(params, method = 'get', id = 0, headers) {
		let url = urls.batchReview;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},


	/*------转办审核-------*/
	//转办审核
	getTurnList(params, method = 'get', id = 0, headers) {
		let url = urls.getTurnList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取转办审核分类项目
	getTurnCategory(params, method = 'get', id = 0, headers) {
		let url = urls.getTurnCategory;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取申请转办理由
	getOfficial(params, method = 'get', id = -1, headers) {
		let url = urls.getOfficial;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	//获取评论信息
	getComment(params, method = 'get', id = 0, headers) {
		let url = urls.getComment;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取回复帖子 转办部门信息
	getTurnSection(params, method = 'get', id = 0, headers) {
		let url = urls.getTurnSection;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//回复帖子转办
	doTurn(params, method = 'get', id = 0, headers) {
		let url = urls.doTurn;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//批量转办
	batchTransfer(params, method = 'get', id = 0, headers) {
		let url = urls.batchTransfer;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	/*------申诉审核-------*/
	//申诉审核	
	getAppealList(params, method = 'get', id = 0, headers) {
		let url = urls.getAppealList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//帖子申诉详情
	getAelOfficial(params, method = 'get', id = -1, headers) {
		let url = urls.getAelOfficial;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取申诉评论信息
	getAelComment(params, method = 'get', id = 0, headers) {
		let url = urls.getAelComment;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//批量申诉
	batchAppeal(params, method = 'get', id = 0, headers) {
		let url = urls.batchAppeal;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	/*----------回复帖子--------*/
	//获取需要回复的帖子
	getAnswerList(params, method = 'get', id = 0, headers) {
		let url = urls.getAnswerList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取帖子回复详情信息
	getPostLand(params, method = 'get', id = 0, headers) {
		let url = urls.getPostLand;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//获取帖子评论
	getDiscuss(params, method = 'get', id = 0, headers) {
		let url = urls.getDiscuss;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//申请转办理由
	alyturn(params, method = 'get', id = 0, headers) {
		let url = urls.alyturn;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//帖子评论上传图片
	upload: urls.upload,

	//查看图片
	// showImgs(params, method = 'get', id = 0, headers) {
	// 	let url = urls.showImgs;
	// 	id == 0 || (url += '/' + id);
	// 	return api[method](url, params, headers)
	// },
	//回复内容提交
	submits(params, method = 'get', id = 0, headers) {
		let url = urls.submits;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//删除评论
	deleCom(params, method = 'get', id = 0, headers) {
		let url = urls.deleCom;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	delePost(params, method = 'get', id = 0, headers) {
		let url = urls.delePost;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	/**----------服务统计------- */
	//类别统计表格数据
	CataStat(params, method = 'get', id = 0, headers) {
		let url = urls.CataStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//单位统计
	unitStat(params, method = 'get', id = 0, headers) {
		let url = urls.unitStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//项目统计
	prjStat(params, method = 'get', id = 0, headers) {
		let url = urls.prjStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//来源统计
	sourStat(params, method = 'get', id = 0, headers) {
		let url = urls.sourStat;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	//回复效率排名 单位和个人
	getRevertList(params, method = 'get', id = 0, headers) {
		let url = urls.getRevertList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},

	//回复效率排名  单位详情和个人详情
	getRedetaiList(params, method = 'get', id = 0, headers) {
		let url = urls.getRedetaiList;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	//满意度排名 单位和个人
	getSatisUnit(params, method = 'get', id = 0, headers) {
		let url = urls.getSatisUnit;
		id == 0 || (url += '/' + id);
		return api[method](url, params, headers)
	},
	menu(params, method = 'get', id = 0, headers) {
		let url = urls.node;
		url += '/' + id;
		return api[method](url, params, headers)
	},
}