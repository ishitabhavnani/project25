class Dustbin{
    constructor(x,y,width,height){
        
        this.width=width;
        this.height=height;
        this.myRectBody=Bodies.rectangle(x,y,width,height, {isStatic:true});
        this.image=loadImage("dustbingreen.png");

        World.add(myWorld , this.myRectBody);
        
    }
    display(){
        push();  ///save my settings before translation
        rectMode (CENTER);
        fill("yellow")
        imageMode(CENTER);
        image(this.image , this.myRectBody.position.x,this.myRectBody.position.y,this.width, this.height)
        //rect(this.myRectBody.position.x,this.myRectBody.position.y,this.width, this.height);
        pop(); //go back to my previous settings
    }
}