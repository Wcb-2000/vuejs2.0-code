/*
 * Author: 吴楚标
 * Date: 2021-07-19 18:08:36
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 21:37:19
 * Description: 让tokens数组变为dom字符串
*/
import lookUp from "./lookUp";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data){
  // 结果字符串
  var resultStr = '';
  // 遍历tokens
  for (let i = 0; i<tokens.length;i++){
    let token = tokens[i];

    // 看类型
    if (token[0] == 'text'){
      // 拼起来
      resultStr += token[1];
    }else if(token[0] == 'name'){
      resultStr += lookUp(data, token[1]);
    }else if(token[0] == '#'){
      resultStr += parseArray(token, data)
    }
  }
  
  return resultStr;
}