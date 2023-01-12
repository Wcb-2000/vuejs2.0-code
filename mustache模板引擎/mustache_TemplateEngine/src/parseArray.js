/*
 * Author: 吴楚标
 * Date: 2021-07-19 21:00:12
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 21:43:47
 * Description: 
*/
import lookUp from './lookUp';
import renderTemplate from './renderTemplate';

export default function parseArray(token, data){
  // 得到整体数据data中这个数组要使用的部分
  var v = lookUp(data, token[1]);
  // 结果字符串
  var resultStr = '';
  // 遍历数组v，v一定是数组
  for(let i = 0 ;i<v.length;i++){
    // 补一个“.”属性
    // 拼接
    resultStr += renderTemplate(token[2], {
      ...v[i],
      '.': v[i]
    });
  }
  return resultStr;
}