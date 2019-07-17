import base from '../../base'

export default {
	//正在进行
	process: base.homeUrl + '/process',
	//历史记录
	history: base.homeUrl + '/history',
	//草稿
	draft: base.homeUrl + '/draft',
	//删除草稿
	delDraft: base.homeUrl + '/post_repair',
	//草稿提交
	saveDraft: base.homeUrl + '/apply/commit',
	//我的消息
	message: base.homeUrl + '/message',
	//维修服务
	repair: base.homeUrl + '/repairs',
	//获取服务单位
	units: base.homeUrl + '/post',
	//服务监督
	post: base.homeUrl + '/post',
	//提交
	apply: base.homeUrl + '/apply',
	//详情
	info: base.homeUrl + '/info/detail',
	//修改密码
	password: base.homeUrl + '/users/password',
	//个人中心
	user: base.homeUrl + '/users',
	//通知公告
	notice: base.homeUrl + '/sys_inform',
	//图片上传
	upload: base.homeUrl + '/service_upload',
	//上传头像
	avatarImage: base.homeUrl + '/upload_file',


	/**帖子详情 */
	postDetail: base.homeUrl + '/info/detail',
	//获取评论
	discussList: base.homeUrl + '/posts/reply/list',
	//获取历史记录
	getHistory: base.homeUrl + '/posts/progress',
	//回复
	Postreply: base.homeUrl + '/posts/reply',
	//评价
	PostEvaluate: base.homeUrl + '/posts/satis_comment',
	//删除帖子
	deletePost: base.homeUrl + '/posts',
	//取消
	cancelPost: base.homeUrl + '/posts/cancel'
}