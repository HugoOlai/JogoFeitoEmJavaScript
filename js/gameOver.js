function GameOver()
{
  this.dinovo = new mySprite("imagens/StartBut-223x49.png", 0, 0, 223, 49, 50, 370, 223, 49, 1, 1);
  this.dinovo2 = new Button("", 223, 49, this.dinovo.x, this.dinovo.y );

  this.volta = new mySprite("imagens/ReturnBut-274x50.png", 0, 0, 274, 50, 50, 570, 274, 50, 1, 1);
  this.volta2 = new Button("", 274, 50, this.volta.x, this.volta.y );
  this.cenas = new mySprite("imagens/GameOver-768x1024.png", 0, 0, 768, 1024, 0, 0, 768, 1024, 1, 1)
	
	  	
  this.Update=function()
  { 
    if(enter_apertei && this.dinovo.Collided(this.dinovo2))
    {
      currentScene = SCENE.LEVEL_01;
    }

     if(enter_apertei && !this.dinovo.Collided(this.dinovo2))
    {
      currentScene = SCENE.MENU;
    }


    if(this.dinovo.Collided(this.dinovo2))
    {
      this.dinovo.sy = 50;
    }
    else
    {
        this.dinovo.sy = 0;
    }

    if(!this.dinovo.Collided(this.dinovo2))
    {
      this.volta.sy = 50;
    }
    else
    {
      this.volta.sy = 0;
    }

    if(baixo_apertei && this.dinovo.Collided(this.dinovo2) )
    {
      this.dinovo2.y = this.volta.y;
      console.log("kdk")
    }

    if(cima_apertei && this.volta.Collided(this.dinovo2) )
    {
      this.dinovo2.y = this.dinovo.y;
      console.log("kdk")
    }
   	
  };
   
  this.Draw=function()
  {
    this.cenas.Draw();
    this.dinovo.Draw();
    this.volta.Draw();


		
	screen.font = "40px 20px Karmatic Arcade";
	screen.fillStyle="#000000";
	//screen.fillText("GAME OVER", 20, 20);
  //screen.fillText("press enter", 50, 390)

  level_01.Draw2();

  };
   
   	this.mouse_down=function(mouse)
   	{    if(this.dinovo2.clicked(mouse))
        {  	
          currentScene = SCENE.LEVEL_01;
        }

         if(this.volta2.clicked(mouse))
        {   
          currentScene = SCENE.MENU;
        }

        
    };

    
   
   
   
}