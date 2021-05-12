var fibbo=function*(){
   
    let previousno=0;
    let currentno=1;
    let sum;

        for(let j=1;;j++)  {
            
            console.log(previousno);
            sum=previousno+currentno;
            previousno=currentno;
            currentno=sum;

        }
    }
    

    var f=new fibbo();
    console.log(f.next().value);

