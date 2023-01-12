/*
 * Author: 吴楚标
 * Date: 2021-07-19 18:42:15
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 21:45:02
 * Description: 识别字符串中的.元素
*/
export default function lookUp(dataObj, keyName){
  // 看看keyName中有没有点符号,但是不能是.本身
  if(keyName.indexOf('.') != -1 && keyName != '.'){
    // 如果有点符号，那么拆开
    var keys = keyName.split('.');
    // 设置一个临时变量，这个临时变量用于周转，一层一层找下去
    var temp = dataObj;
    // 每找一层，就把他设置为新的临时变量
    for(let i = 0;i<keys.length;i++){
      temp = temp[keys[i]];
    }
    return temp;
  }
  // 如果这里没有标点符号
  return dataObj[keyName];
}