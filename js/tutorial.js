function Tutorial()
{
   this.fundo =  new mySprite ("imagens/help-768x976.png", 0, 0, 768, 976, 0, 0, 768, 976, 1, 1);
   this.botoes = new mySprite("imagens/ReturnBut-274x50.png", 0, 0, 274, 50, 480, 900, 274, 50, 1, 1);
   this.botoes2 = new Button("", 274, 50, this.botoes.x, this.botoes.y);
	
  
	this.Update=function()
  {
   	if(this.botoes.Collided(this.botoes2))
    {
      this.botoes.sy = 50;
    }

    if(this.botoes.Collided(this.botoes2) && enter_apertei)
    {
      currentScene = SCENE.MENU;
    }
  };
   
  this.Draw=function()
	{
    screen.clearRect(0,0,canvas.width, canvas.height);

		screen.font = "20px Comic Sans MS";
    screen.fillStyle="#000000";
    screen.fillText("Tutorial", 20, 20);
    this.fundo.Draw();
    this.botoes.Draw();

		
		
	};
   
  this.mouse_down=function(mouse)
  {   		
    console.log("INTRO mouse down mouse X " + mouse.x + " mouse Y " + mouse.y ); 
    if(this.botoes2.clicked(mouse))
     {
        currentScene = SCENE.MENU;
     }
   // currentScene = SCENE.LEVEL_1;

    

  };
  
  
  
   
}