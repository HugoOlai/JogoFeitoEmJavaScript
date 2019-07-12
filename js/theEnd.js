function TheEnd()
{
  this.Update=function()
  {
   	
  };
   
  this.Draw=function()
  {
		
	screen.font = "20px Comic Sans MS";
	screen.fillStyle="#000000";
	screen.fillText("THE END", 20, 20);
		
  };
   
   	this.mouse_down=function(mouse)
   	{      	
        currentScene = SCENE.INTRO;
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