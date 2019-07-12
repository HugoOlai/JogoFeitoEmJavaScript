function Menu()
{ 
  this.Fundo = new mySprite("imagens/MenuGround-768x1024.png", 0, 0, 768, 1024, 0, 0, 768, 1024, 1, 1);
  this.Play = new mySprite("imagens/StartBut-223x49.png", 0, 0, 220, 49, 550, 600, 220, 49, 1, 1);
  this.Play2 = new Button("", 310, 70, this.Play.x, this.Play.y);
  this.Creditos = new mySprite("imagens/CreditsBut-294x50.png", 0, 0, 294, 50, 475, 774, 294, 50, 1, 1);
  this.Creditos2 = new Button("",408, 70, this.Creditos.x, this.Creditos.y);
  this.manual = new mySprite("imagens/IstructionsBut-492x50.png", 0, 0, 492, 50, 280, 900, 492, 50, 1, 1);
  this.manual2 = new Button("",492, 50, this.manual.x, this.manual.y);


  this.Personagem = new mySprite("imagens/HeroSprite-662x554.png", 0, 0, 622, 554, 35, 501, 622, 554, 5, 10);


  this.bordadeselecao = new mySprite("imagensdetest/borda.png", 0, 0, 310, 70, this.Play.x, 600, 310, 70, 1, 1);
  

  

    	
   this.Update=function()
  {
    this.bordadeselecao.visible = false;
   


    if(this.bordadeselecao.y == this.Play.y)
      {
        this.Play.sy = 50;
      }
      else
      {this.Play.sy = 0;}

    if(this.bordadeselecao.y == this.manual.y)
      {
        this.manual.sy = 50;
      }
      else
      {this.manual.sy = 0;}


      if(this.bordadeselecao.y == this.Creditos.y)
      {
        this.Creditos.sy = 50;
      }
      else
        {this.Creditos.sy = 0;}



    
    if(baixo_apertei  && this.bordadeselecao.y == this.Play.y )
    {
      this.bordadeselecao.y = this.Creditos.y;
      console.log("oi");

    }

    if(baixo_apertei  && this.bordadeselecao.y == this.Creditos.y )
    {
      this.bordadeselecao.y = this.manual.y;
      console.log("oi");

    }

    if(baixo_apertei && this.bordadeselecao.y == this.manual.y)
    {}


  

    
    if(cima_apertei  && this.bordadeselecao.y == this.Creditos.y )
    {
      this.bordadeselecao.y -= this.bordadeselecao.velborda ;
      console.log("oi");

    }

    if(cima_apertei  && this.bordadeselecao.y == this.manual.y )
    {
      this.bordadeselecao.y = this.Creditos.y;     
      console.log("oi");

    }

    if(cima_apertei && this.bordadeselecao.y == this.Play.y)
    {}

  


    if(this.bordadeselecao.y == this.Play.y &&  enter_apertei)
    {
      currentScene = SCENE.INTRO;
    }

   
     if(this.bordadeselecao.y == this.Creditos.y &&  enter_apertei)
    {
      currentScene = SCENE.CREDIT;
    }

    if(this.bordadeselecao.y == this.manual.y &&  enter_apertei)
    {
      currentScene = SCENE.TUTORIAL;
    }



  };
   
  this.Draw=function()
	{
    this.Fundo.Draw();
    this.Personagem.Draw();
    this.Play.Draw();
    this.Creditos.Draw();
    this.manual.Draw();

    


   /* this.botoes.Draw();
    this.botoes1.Draw();
    this.botoes2.Draw();

    this.borda.Draw();
    this.borda1.Draw();
    this.borda2.Draw();*/

    this.bordadeselecao.Draw();

    

		
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		//screen.fillText("MENU", 20, 20);
   

		
		//this.button_credit.draw();
	};
   
  this.mouse_down=function(mouse)
  {   		
    console.log("INTRO mouse down mouse X " + mouse.x + " mouse Y " + mouse.y ); 

     if(this.Play2.clicked(mouse))
     {
        currentScene = SCENE.INTRO; 
     }

     if(this.Creditos2.clicked(mouse))
     {
        currentScene = SCENE.CREDIT;
     }

     if(this.manual2.clicked(mouse))
     {
        currentScene = SCENE.TUTORIAL;
     }
     	
  };
  
  this.mouse_up=function(mouse)
  {
    console.log("INTRO mouse up mouse X " + mouse.x + " mouse Y " + mouse.y );
  };

  this.key_down=function(key)
  {
    console.log("INTRO key down keyCode " + key.keyCode );		
  };
  
  this.key_up=function(key)
  {
  	console.log("INTRO key up keyCode " + key.keyCode );
  };   
}