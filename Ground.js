class Ground{
    constructor(x,y,width,height){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
var options={
    isStatic:true
};
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);

    }
    show(){
rectMode(CENTER);
fill("white");
rect(this.body.position.x,this.body.position.y,this.width,this.height);


    }
}
