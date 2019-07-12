function Credit()
{
  this.Fundo = new mySprite("imagens/CreditsGround-768x1024.png", 0, 0, 768, 1024, 0, 0, 768, 1024, 1, 1 )
  this.Return = new mySprite("imagens/ReturnBut-274x50.png", 0, 0, 274, 50, 470, 900, 274, 50, 1, 1);
  this.Return2 = new Button("", 380, 70, this.Return.x, this.Return.y);

	  	


  var tempo = 0;
  setInterval(this.contaTempo, 1000)
  this.contaTempo = function ()
  {
    tempo ++;
    console.log("erro");
  }


   this.Update=function()
  {
   	credit.contaTempo();


    if (tempo >= 60)
    {
      tempo = 40;
    }

    if(enter_apertei && this.Return.Collided(this.Return2))
    {
      currentScene = SCENE.MENU;
      tempo = 0;
    }

    if(this.Return.Collided(this.Return2))
    {
      this.Return.sy = 50;
    }
  };
   
  this.Draw=function()
	{
		
		screen.font = "30px Comic Sans MS";
		screen.fillStyle="#000000";
		//screen.fillText("CREDIT", 20, 20);
    this.Fundo.Draw();
    this.Return.Draw();


    if(tempo >= 50)
    {
      screen.fillText("Precione backspac para voltar para o menu", 440, 1100);
    }
	};
   
   	this.mouse_down=function(mouse)
   	{      	
        if(this.Return2.clicked(mouse))
        {
            currentScene = SCENE.MENU;          
        }
        
    };

    this.mouse_up=function(mouse)
  	{
  		
  	};
   
   	this.key_down=function(key)
   	{
   		
   	};
   	
  	this.key_up=function(key)
  	{
  		
  	};
   
}