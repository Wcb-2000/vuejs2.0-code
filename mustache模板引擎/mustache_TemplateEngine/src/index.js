/*
 * Author: 吴楚标
 * Date: 2021-07-17 19:36:47
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 21:48:17
 * Description:
 */
import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate.js";

// 全局提供templateEngine
window.templateEngine = {
  // 渲染方法
  render(templateStr, data) {
    var tokens = parseTemplateToTokens(templateStr);
    // 调用renderTemplate函数，让tokens数组变为dom字符串
    var domStr = renderTemplate(tokens, data);

    return domStr;
  }
};
