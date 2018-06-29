function Ship(){
  this.x = width/2-44;
  this.y = height-90;



  this.show = function(imgWidth,imgHeight){
        image(img,this.x,this.y,imgWidth,imgHeight);
  }

  this.move = function(dir){


      if(dir === -1){


          this.x = this.x + dir*50;


      }

      if(dir === 1){


            this.x = this.x + dir*50;




      }



  }
}
