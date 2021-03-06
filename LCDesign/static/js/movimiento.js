function transicion(curva,ms,callback){
    this.ant=0.01;
    this.done_=false;
    var _this=this;
    this.start=new Date().getTime();
    this.init=function(){
        setTimeout(function(){
                if(!_this.next()){
                    callback(1);
                    _this.done_=true;
                    window.globalIntervalo=0;
                    return;
                }
                callback(_this.next());
                _this.init();
            },13);
    }
    this.next=function(){
        var now=new Date().getTime();
        if((now-this.start)>ms)
            return false;
        return this.ant=curva((now-this.start+.001)/ms,this.ant);
    }
}
function mover(o){
    var inicio=-100,fin=20;
    var t=new transicion(linear,500,function(p){
        o.style.right=inicio+((fin-inicio)*p)+'%';
    });
    t.init();
    t=null;
    setTimeout("mover2(cartel2_cuerpo1)",1200);
    
}

function mover2(o){
    var inicio=-100,fin=18;
    var t=new transicion(linear,500,function(p){
        o.style.right=inicio+((fin-inicio)*p)+'%';
    });
    t.init();
    t=null;
}

function linear(p,a){
    return p;
} 

function elasticoSuave(p,ant){
    if(p<=0.6){
        return Math.pow(p*5/3,2);
    }else{
        return Math.pow((p-0.8)*5,2)*0.4+0.6;
    }
}