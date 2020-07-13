const wxUrl = 'https://api.weixin.qq.com'
const appid = 'wxb8a887f070204e09'
const secret = 'fd855acbf7b95e45dce94fc570d4f96f'
const wxApi = {
  code2Session: `${wxUrl}/sns/jscode2session` // 登录凭证校验
}

module.exports = {
  wxApi,
  appid,
  secret
}