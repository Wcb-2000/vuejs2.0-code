/*
 * Author: 吴楚标
 * Date: 2021-07-18 16:40:17
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-19 15:20:18
 * Description: 
*/
/**
 * 扫描器类
 */
export default class Scanner {
  constructor(templateStr) {
    // 将模板字符串写道自己身上 
    this.templateStr = templateStr;
    // 指针
    this.pos = 0;
    // 尾巴，一开始就是模板字符串原文
    this.tail = templateStr;
      
  }
  
  // 功能弱，就是走过指定内容，没有返回值
  scan(tag){
    if(this.tail.indexOf(tag) == 0){
      // tag有多长,比如{{长度为2, 就让指针后移多少位
      this.pos += tag.length;
      // 尾巴也要变
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUntil(stopTag){
    // 记录一下执行本方法的时候pos的值
    const pos_backup = this.pos;
    // 当尾巴的开头不是stopTag的时候，说明还没有扫描到stopTag
    // 写&&很有必要,因为防止找不到,那么到最后也要停下来,防止死循环
    while(!this.eos() && this.tail.indexOf(stopTag) != 0  ){
      this.pos++;
      // 改变尾巴为从当前指针这个字符开始，到最后的全部字符
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }
 
  // 判断指针是否已到结尾,返回布尔值, end of string
  eos(){
    return this.pos >= this.templateStr.length;
  }
}