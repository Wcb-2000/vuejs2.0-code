/*
 * Author: 吴楚标
 * Date: 2021-07-19 14:18:37
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 22:13:11
 * Description:扫描文本转为tokens数组
 */
import Scanner from "./Scanner.js";
import nestTokens from "./nestTokens.js";

export default function parseTemplateToTokens(templateStr) {
  let tokens = [];
  // 实例化一个扫描器，构造时候提供一个参数，这个参数就是模板字符串
  // 也就是说这个扫描器就是针对这个模板字符串工作的
  const scanner = new Scanner(templateStr);
  let words;
  // 当scanner没有到头
  while (!scanner.eos()) {
    // 收集开始标记出现之前的文字
    words = scanner.scanUntil("{{");
    if (words != "") {
      // 存起来
      tokens.push(["text", words]);
    }
    scanner.scan("{{");

    words = scanner.scanUntil("}}");
    if (words != "") {
      // 这个words就是{{}}中间的东西,判断一下首字符
      if (words[0] == "#") {
        tokens.push(["#", words.substring(1)]);
      } else if (words[0] == "/") {
        tokens.push(["/", words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }
    scanner.scan("}}");
  }

  // 返回折叠的tokens
  return nestTokens(tokens);
}
