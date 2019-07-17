import base from '../../../base'
//测试
export default {
    //获取table数据
    getGroupList: base.consoleUrl + '/posts',
    //获取团队名列表
    getPersonList: base.consoleUrl + '/posts',
    //添加服务团队
    addPrj: base.consoleUrl + '/posts',
    //删除服务团队
    delPrj: base.consoleUrl + '/posts',
    //删除团队人员
    delPerson: base.consoleUrl + '/users',
    //添加团队人员
    addPerson: base.consoleUrl + '/users',
    //获取编辑人员信息
    getPeopleInfo: base.consoleUrl + '/users',
    //获取团队信息
    getTemaInfo: base.consoleUrl + '/posts/team',

    /*-----服务监督服务项目管理----- */
    //获取团队名称
    getTeamName: base.consoleUrl + '/posts',
    //获取项目名称
    getProName: base.consoleUrl + '/posts',
    //弹窗修改
    ProEdit: base.consoleUrl + '/posts',
    //项目信息
    prjDetails: base.consoleUrl + '/posts/project',
    //项目删除
    deleTab: base.consoleUrl + '/posts',


    // <!--管理团队管理-->
    //审核 转办 申诉
    getManage: base.consoleUrl + '/posts',

    /**---------- 帖子查询--------*/
    //获取服务项目
    getPrjList: base.consoleUrl + '/posts',
    //获取配置数据
    getconfig: base.consoleUrl + '/config',
    // 帖子查询导出数据
    expor: base.consoleUrl + '/posts/export',
    //获取服务单位  
    getUnitList: base.consoleUrl + '/posts',
    //获取回复人
    getRecoList: base.consoleUrl + '/posts',
    //获取审核人
    // getAuditList: base.consoleUrl + '/posts',
    getPostsDeta: base.consoleUrl + '/posts/detail',

    //获取帖子审核列表
    getPostsList: base.consoleUrl + '/posts',
    //获取帖子详情
    getDetails: base.consoleUrl + '/posts/review',
    //获取部门
    getDeparList: base.consoleUrl + '/posts',
    //获取帖子列表审核
    getDetaList: base.consoleUrl + '/posts/review/list',
    //获取历史记录
    getHistory: base.consoleUrl + '/posts',
    //帖子通过,驳回
    passORreject: base.consoleUrl + '/posts',
    //批量审核
    batchReview: base.consoleUrl + '/posts',


    /*------转办审核-------*/
    getTurnList: base.consoleUrl + '/posts',
    //转办审核分类
    getTurnCategory: base.consoleUrl + '/config',
    //申请转办理由  详情
    getOfficial: base.consoleUrl + '/post/transfer',
    //获取评论信息
    getComment: base.consoleUrl + '/posts',
    //获取转办部门信息
    getTurnSection: base.consoleUrl + '/posts',
    //帖子转办
    doTurn: base.consoleUrl + '/posts',
    //批量转办
    batchTransfer: base.consoleUrl + '/posts',


    /*------申诉审核-------*/
    getAppealList: base.consoleUrl + '/posts',
    //帖子申诉详情
    getAelOfficial: base.consoleUrl + '/posts/appeal',
    //获取评论信息
    getAelComment: base.consoleUrl + '/posts',
    batchAppeal: base.consoleUrl + '/posts',

    /*----------回复帖子--------*/
    //获取需要回复帖子列表
    getAnswerList: base.consoleUrl + '/posts',
    //获取楼主信息
    getPostLand: base.consoleUrl + '/posts/reply',
    //获取评论信息  
    getDiscuss: base.consoleUrl + '/posts',
    //申请转办 申诉提交
    alyturn: base.consoleUrl + '/posts/apply',
    // 上传图片
    upload: base.consoleUrl + '/service_upload',

    //回复内容提交
    submits: base.consoleUrl + '/posts',
    //删除帖子评论
    deleCom: base.consoleUrl + '/posts/reply',
    //删除帖子
    delePost: base.consoleUrl + '/posts',
    /**----------服务统计------- */
    //类别统计
    CataStat: base.consoleUrl + '/posts',
    //单位统计
    unitStat: base.consoleUrl + '/posts',
    //项目统计
    prjStat: base.consoleUrl + '/posts',
    //来源统计
    sourStat: base.consoleUrl + '/posts',
    //回复效率排名  单位和个人
    getRevertList: base.consoleUrl + '/posts',
    //回复效率排名 单位详情和个人详情
    getRedetaiList: base.consoleUrl + '/posts',
    //满意度排名 单位和个人
    getSatisUnit: base.consoleUrl + '/posts',

    //权限管理（菜单权限）
    node: base.consoleUrl + '/nodes',
}