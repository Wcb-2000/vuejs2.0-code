/*
 * Author: 吴楚标
 * Date: 2021-07-19 16:27:45
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 18:05:22
 * Description: 折叠tokens,将#和/之间的tokens能够整合起来,作为它的下标为3的项
*/
export default function nestTokens(tokens){
  // 结果数组
  var nestedTokens = [];
  // 栈结构,存放子项,再弹出嵌入的tokens
  var sections = [];
  // 收集器
  var collector = nestedTokens;

  for(let i=0; i < tokens.length; i++){
    let token = tokens[i];
    
    switch(token[0]){
      case '#':
        // 收集器中放入这个token
        collector.push(token);
        // 入栈
        sections.push(token);
        // 收集器要换人。给token添加下标为2的项，并且让收集器指向它
        collector = token[2] = [];
        break;
      case '/':
        // 出栈。pop()会返回刚刚弹出的项
        sections.pop();
        // 改变收集器为栈结构队尾（队尾是栈顶）那项的下标为2的数组
        collector = sections.length >0 ? sections[sections.length - 1][2] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nestedTokens;
};