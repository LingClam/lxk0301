/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'mba_muid=1609832133488117848055; shshshfpa=0644c49d-d43f-a938-3c94-8e641851614f-1609832134; shshshfpb=id3MYU6b6R2M0qsmM7QsDOw%3D%3D; cid=9; webp=1; visitkey=61509807094070996; retina=1; sc_width=375; cartLastOpTime=1609854985; cartNum=29; kplTitleShow=1; wq_addr=-1001544934%7C15_1213_3038_59933%7C%u6D59%u6C5F_%u676D%u5DDE%u5E02_%u6EE8%u6C5F%u533A_%u6D66%u6CBF%u8857%u9053%7C%u6D59%u6C5F%u676D%u5DDE%u5E02%u6EE8%u6C5F%u533A%u6D66%u6CBF%u8857%u9053%u7ACB%u4E1A%u56ED%u660E%u8FDC%u9910%u5385%u5730%u4E0B%u5BA4%u83DC%u9E1F%u9A7F%u7AD9%7C120.157%2C30.1714; jdAddrId=15_1213_3038_59933; commonAddress=-1001544934; regionAddress=15%2C1213%2C3038%2C59933; jdAddrName=%u6D59%u6C5F_%u676D%u5DDE%u5E02_%u6EE8%u6C5F%u533A_%u6D66%u6CBF%u8857%u9053; mitemAddrId=15_1213_3038_59933; mitemAddrName=%u6D59%u6C5F%u676D%u5DDE%u5E02%u6EE8%u6C5F%u533A%u6D66%u6CBF%u8857%u9053%u7ACB%u4E1A%u56ED%u660E%u8FDC%u9910%u5385%u5730%u4E0B%u5BA4%u83DC%u9E1F%u9A7F%u7AD9; wxa_level=1; jxsid=16121888645785914376; __jda=122270672.1609832133488117848055.1609832133.1609854858.1612188864.3; __jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1612188864746; __jdc=122270672; autoOpenApp_downCloseDate_auto=1612188866224_10800000; PPRD_P=UUID.1609832133488117848055; 3AB9D23F7A4B3C9B=CJH7JRPZURK6XOE7AW2CL36I4JAWCY7ZNSOESWYRDZMRKTO742ZSRSR3HUNZTZ543JANNGASDF3QQBKV7YROMK5UEE; jcap_dvzw_fp=5zLGGK970ljk0qJpiByX7oge7F8lOn4iGCP4MJrXcmeLtQuWbyF62fCpQOJYprA5mBKItA==; pt_token=sifzu7lp; pwdt_id=_Truth_; sfstoken=tk01ma9d91bc9a8sM3gyeDF3UlFPClbSStHRKPguz3KEj6dXW0sP6kj2hXHQ8olaYYkFfhRe/0tnCuq48rFDH+V/yBYG; wqmnx1=MDEyNjM2NTplLnl3YT92dTg4ME1hKGUgZTNsYVhsaS4oLCApaS5vMSBpMUYybi0zUVVPKiZI; __wga=1612188972494.1612188869137.1609854873455.1609854873455.3.2; jxsid_s_t=1612188972566; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; shshshfp=330bae8510d969382dc57e0759ee9724',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
