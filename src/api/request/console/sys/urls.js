import base from '../../../base'

export default {
	//配置信息
	config: base.consoleUrl + '/config',
	//敏感词
	word: base.consoleUrl + '/words',
	//组织机构
	org: base.consoleUrl + '/org',
	//用户管理（学生和教师）
	user: base.consoleUrl + '/users',
	//角色管理
	role: base.consoleUrl + '/roles',
	//权限管理（菜单权限）
	node: base.consoleUrl + '/nodes',
	//获取APP登录二维码
	getAppScan: base.consoleUrl + '/scan_code/show',
	//获取微信登录二维码
	getWxScan: base.consoleUrl + '/wx_scan_code/show',
	//获取二维码状态
	getScanStatus: base.consoleUrl + '/scan/status',
	//登录
	login: base.consoleUrl + '/login',
	//登出
	logout: base.consoleUrl + '/logout',
	//修改密码
	password: base.consoleUrl + '/users/password',
	//消息推送规则列表
	ruleList: base.consoleUrl + '/sys/rule_list',
	//消息推送规则编辑
	ruleSave: base.consoleUrl + '/sys/rule',
	//服务指南
	guide: base.consoleUrl + '/guide',
	//通知公告
	notice: base.consoleUrl + '/sys_inform',
	//我的消息
	message: base.consoleUrl + '/message',
	//富文本上传图片
	uploadImage: base.consoleUrl + '/upload',
	//上传附件
	fileImage: base.consoleUrl + '/upload_file',
	//上传头像
	avatarImage: base.consoleUrl + '/upload_file',
	//服务指南列表
	guideList: base.consoleUrl + '/guide/list'
}