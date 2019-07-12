function Intro()
{
	
 this.cenas = new mySprite("imagens/Intro.png", 0, 0, 768, 6144, 0, 0, 768, 6144, 1, 1);


 this.Return = new mySprite("imagens/ReturnBut-274x50.png", 0, 0, 274, 50, 10, 900, 274, 50, 1, 1);
 this.Return2 = new Button("", 380, 70, this.Return.x, this.Return.y);

 this.pular_intro = new mySprite("imagens/PularBut-162x50.png", 0, 0, 162, 50, 570, 900, 162, 50, 1, 1);
 this.pular_intro2 = new Button("", 162, 50, this.pular_intro.x, this.pular_intro.y);

  this.tempo = 0;
  setInterval(settime, 1000)
  function settime()
  {
    if(currentScene == SCENE.INTRO)
    {
      intro.tempo ++;
    }
  }

	this.Update=function()
  { 
    
    if(this.tempo >= 5)
    {
      this.cenas.y -=  this.cenas.vel_cenas;  
    }
    

    if(this.cenas.y <= -1024)
    {
      this.cenas.vel_cenas = 0;
    }

                          if(this.tempo >= 10)
                          {
                            this.cenas.vel_cenas = 40;
                          }

                          if(this.cenas.y <= -2048)
                          {
                            this.cenas.vel_cenas = 0;
                          }

                                          if(this.tempo >= 15)
                                          {
                                            this.cenas.vel_cenas = 40;
                                          }

                                          if(this.cenas.y <= -3072)
                                          {
                                            this.cenas.vel_cenas = 0;
                                          }

                                                 if(this.tempo >= 20)
                                                {
                                                  this.cenas.vel_cenas = 40;
                                                }

                                                if(this.cenas.y <= -4096)
                                                {
                                                  this.cenas.vel_cenas = 0;
                                                }

                                                           if(this.tempo >= 25)
                                                          {
                                                            this.cenas.vel_cenas = 40;
                                                          }

                                                          if(this.cenas.y <= -5120)
                                                          {
                                                            this.cenas.vel_cenas = 0;
                                                          }

  
  if(enter_apertei && this.Return.Collided(this.Return2))
    {
      currentScene = SCENE.MENU;
      this.tempo = 0;
      this.cenas.y = 0;

    }

    if(enter_apertei && !this.Return.Collided(this.Return2))
    {
      currentScene = SCENE.LEVEL_01;
      this.tempo = 0;
      this.cenas.y = 0;
    }



    if(this.Return.Collided(this.Return2))
    {
      this.Return.sy = 50;
    }
    else
    {
      this.Return.sy = 0;
    }

    if(!this.Return.Collided(this.Return2))
    {
      this.pular_intro.sy = 49;
    }
    else
    {
      this.pular_intro.sy = 0;
    }



    if(direita_apertei && this.Return.Collided(this.Return2))
    {
      this.Return2.x = this.pular_intro.x;
      console.log("ksk")
    }

    if(esquerda_apertei && this.pular_intro.Collided(this.Return2))
    {
      this.Return2.x = this.Return.x;
      console.log("ksk")
    }


  




   	
  };
   
  this.Draw=function()
	{
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("INTRO", 20, 20);


    screen.fillText("", 20, 20);

    
		
		this.cenas.Draw();
    this.Return.Draw();
    this.pular_intro.Draw();


    screen.fillText("tempo =" + this.tempo, 20, 20);
	};
   
  this.mouse_down=function(mouse)
  {   		
    console.log("INTRO mouse down mouse X " + mouse.x + " mouse Y " + mouse.y ); 

    if(this.Return2.clicked(mouse))
    {
      currentScene = SCENE.MENU;
      this.tempo = 0;
      this.cenas.y = 0;

    }

    if(this.pular_intro2.clicked(mouse))
    {
      currentScene = SCENE.LEVEL_01;
      this.tempo = 0;
      this.cenas.y = 0;
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