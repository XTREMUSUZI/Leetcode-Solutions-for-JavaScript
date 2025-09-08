function isValid(s) {
    let par={
        ')': '(',
        '}': '{',
        ']': '['
    };
    let stack=[];
    for(let i of s){
        if(Object.values(par).includes(i)){
            stack.push(i);
        } else if(par[i]){
            if (stack.length==0||stack.pop()!==par[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
};
