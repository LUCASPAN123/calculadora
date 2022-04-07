var initCalc = {
    res:"",
    type:"",
    n1:"",
    n2:""
}

function setVisor(Value){
    var visor = document.getElementById("visor")
    visor.value=Value
    
    
}

function getRes(){
    if(initCalc.n2 !== ""){
        var res = calcular()
        resetObj()
        setVisor(res)
       
    }
}

function setType(type){
    if (initCalc.n1 === ""){
        setVisor("Invalida!")
        
    }
    else if(initCalc.n2 !== ""){
        initCalc.type=type 
        console.log(initCalc.n1, initCalc.n2)
        var num = calcular()
        initCalc.n1 = num
        initCalc.n2 = ""
        

    }
    initCalc.type=type
    setVisor("0")
    console.log(initCalc.type)
}

function setNum(firstNum){
    
    if(initCalc.type === ""){
        initCalc.n1 += firstNum
        setVisor(initCalc.n1)
        
    }
    else{
        initCalc.n2 += firstNum
        console.log(initCalc.n2)
        setVisor(initCalc.n2)
    }

    if(firstNum==="" && initCalc.n1!==""){
        initCalc.n2=""
        setVisor("0")
    }
    
   
}

function calcular(){
    if(initCalc.type==="+"){
       var num1 = Number(initCalc.n1)
       var num2 = Number(initCalc.n2)
       
       return (num1+num2).toString()
    }
    if(initCalc.type==="-"){
        var num1 = Number(initCalc.n1)
        var num2 = Number(initCalc.n2)
        
        return (num1-num2).toString()
     }
     if(initCalc.type==="*"){
        var num1 = Number(initCalc.n1)
        var num2 = Number(initCalc.n2)
        
        return (num1*num2).toString()
     }
     if(initCalc.type==="/"){
        var num1 = Number(initCalc.n1)
        var num2 = Number(initCalc.n2)
        
        return (num1/num2).toString()
     }
}

 console.log(resultado)

function resetObj(){
    initCalc.n1=""
    initCalc.n2=""
    initCalc.type=""
    initCalc.res=""
    setVisor("0")
}
