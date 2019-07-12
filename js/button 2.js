function Button(file, file2, sw, sh, x, y, w, h)
{
    
   this.button = new mySprite(file, 0, 0, sw, sh, x, y, w, h, 1, 1);
    this.button2 = new mySprite(file2, 0, 0, sw, sh, x, y, w, h, 1, 1);
    this.visible = true;
    
    this.DrawMouseOverImage = false;
      
    this.Draw = function()
    {  
        this.button.visible = this.visible;
        this.button2.visible = this.visible;
        if(this.DrawMouseOverImage && file2 != "")
        {
            this.button2.Draw();
        }
        else
        {
            this.button.Draw();    
        }        
    };

    this.isMouseIn = function(mouse)
    {
        this.test = new mySprite("", 0, 0, 1, 1, mouse.x, mouse.y, 1, 1, 1, 1);

        if(this.button.Collided(this.test))
        {
            this.DrawMouseOverImage = true;    
        }        
    }

    this.isMouseOut = function(mouse)
    {
        this.test = new mySprite("", 0, 0, 1, 1, mouse.x, mouse.y, 1, 1, 1, 1);

        if(!this.button.Collided(this.test))
        {
            this.DrawMouseOverImage = false;    
        }        
    }

    //chama essa funcao no update
    this.isMouseOver = function(mouse)
    {
        this.isMouseIn(mouse);
        this.isMouseOut(mouse);
    }
    
    this.isClicked = function(mouse)
    {    
        this.test = new mySprite("", 0, 0, 1, 1, mouse.x, mouse.y, 1, 1, 1, 1);

        if(this.button.Collided(this.test))
        {
            
           return true;
        }
        
            
        return false;
            
        
    };
}