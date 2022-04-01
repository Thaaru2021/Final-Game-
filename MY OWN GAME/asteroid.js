class asteroid {
   constructor(){
   this.xPosition = 400;
   this.yPosition = 400;
   this.width = 50;
   this.height = 50;
   this.image("asteroid.png");
   }
   display(){
    Rect(this.xPosition,this.yPosition,
     this.width,this.height)
    }






}