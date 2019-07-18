import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/get_user', 'post', { code: 0, msg: 'success', result: "管理员" })