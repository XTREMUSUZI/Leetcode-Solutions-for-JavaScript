function romanToInt(s) {
    let number=0;
    if(s.length>=1&&s.length<=15){
        for (i=0;i<s.length;i++){
        if(conversion(s[i-1])<conversion(s[i])){
            number+=conversion(s[i])-conversion(s[i-1])-conversion(s[i-1]);
        }else{
            number+=conversion(s[i]);
        }
    }
    }
    return number;
};
function conversion(num){
    if(num==="I"){
            return 1;
        }else if(num==="V"){
            return 5;
        }else if(num==="X"){
            return 10;
        }else if(num==="L"){
            return 50;
        }else if(num==="C"){
            return 100;
        }else if(num==="D"){
            return 500;
        }else if(num==="M"){
            return 1000;

    }
}
