function Button(arquivo, tam_x, tam_y, x, y)
{
	this.buttonCollision = new mySprite(arquivo, 0, 0, tam_x, tam_y, x, y, tam_x, tam_y, 1, 1);
    
    this.Draw=function()
    {  	
    	this.buttonCollision.Draw();
    };

    
    
    this.clicked = function(mouse)
    {
        this.test = new mySprite("", 0, 0, 1, 1, mouse.x, mouse.y, 1, 1, 0, 0);
        if(this.buttonCollision.Collided(this.test))
        {
            return true;
        }
        return false;
    };
}