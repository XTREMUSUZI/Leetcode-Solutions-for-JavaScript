function longestCommonPrefix(strs) {
    

    let prefix = strs[0];
    if(strs.length){
        for (i=1;i<strs.length;i++){
            while (strs[i].indexOf(prefix)!==0) {
                prefix = prefix.slice(0,-1);
                if (!prefix) {
                    return "";
                }
            }
        }
    } else{
        prefix="";
    }
    return prefix;
}
