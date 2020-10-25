// module.exports = function check(str, bracketsConfig) {
  module.exports = function check(s) {
    let pairs = {
        '}':'{',
        ']':'[',
        ')':'(',
    };
    let stack = [];
    for(let i = 0;i < s.length;++i){
        switch(s.charAt(i)){
            case '[': case '{':case '(':
                stack.push(s.charAt(i));
                break;
            case ']': case '}':case ')':
                if(isStackEmpty(stack) || peek(stack) !== pairs[s.charAt(i)]) return false;
                stack.pop();
                break;
            case '"':
                if(isStackEmpty(stack) || peek(stack) !== s.charAt(i)){
                    stack.push(s.charAt(i));
                }else{
                    stack.pop();
                }
        }
    }
    return isStackEmpty(stack);
}
    function isStackEmpty(s){
        return s.length === 0;
}
    function peek(s){
        return s[s.length-1];
}
