function Ship(){
  this.x = width/2-44;
  this.y = height-90;



  this.show = function(imgWidth,imgHeight){
        image(img,this.x,this.y,imgWidth,imgHeight);
  }

  this.move = function(){
    if(dir === -1){

      while(this.x != 0){
        this.x = this.x - 50;
      }

    }

    if(dir === 1){

      while(this.x != width){
          this.x = this.x + 50;
      }

    }

  }
}
