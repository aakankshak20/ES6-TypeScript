
var getNextArmstrong=function(){
 for(let i=100;;i++){
        let n=i.toString().length;
        let sum=0;
        let temp=i;
        while(temp>0){
            let rem=temp%10;
            sum +=rem**n;
            temp=parseInt(temp/10);
        }
        if(sum==i){
            console.log(i);
        }
        if(i>1000){
            break;
        }
 }

}

console.log(getNextArmstrong());

