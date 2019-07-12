function mySprite(file, sx, sy, sw, sh, x, y, w, h, frames, fps)//tamanho_w, tamanho_h, posicao_x, posicao_y)
{//abre 

        this.img = new Image();
        this.img.src = file;
        
        this.visible = true;
		
        this.x = x;
        this.y = y;

        this.vel_x = 20;
        this.vel_y = 13;

        this.velborda = 174;
        this.velpersonagem = 10;
        this.gravidade = 15;
        this.vel = 0;
        this.velpredio = 30;
        this.vel_cenas = 40;

        
        this.scale_x = 1;
        this.scale_y = 1;

        this.scale = 1;
        
        this.sw = sw;
        this.sh = sh;
        
        this.w = w;
        this.h = h;
        
        this.sx = 0;
        this.sy = 0;
        
        this.current_frame = 0;
        
        this.frames = frames;
        
        this.fps = fps;

        this.time_per_frame = 1000/this.fps;

        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 1000/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0;
        
        this.acumulated_delta_time = 0
        
        this.last_draw_time = 0;
        
        this.Update = function()
        {//abre update
                
        }//fecha update
        
        this.Draw = function()//funcao desenhar (draw)
        {//abre draw
                
                //console.log("oioio");
                
                if(this.visible)
                screen.drawImage(this.img,
                                 this.sw*this.current_frame,
                                 this.sy,
                                 this.sw,
                                 this.sh,
                                 this.x,
                                 this.y,
                                 this.w*this.scale_x*this.scale,
                                 this.h*this.scale_y*this.scale);
                                        
                this.delta_time = Date.now() - this.last_draw_time;
                
                if(this.acumulated_delta_time > this.time_per_frame)
                {//abre if
                        
                        this.acumulated_delta_time = 0;
                        this.current_frame++;
                        if(this.current_frame >= this.frames)
                        {//abre if
                        
                                this.current_frame = 0;
                                
                        }//fecha if
                        
                }//fecha if
                else
                {//abre else
                
                        this.acumulated_delta_time += this.delta_time;
                        
                }//fecha if
                
                this.last_draw_time = Date.now();
                
        }//fecha draw

        //this.Collided = function(obj1_X,obj1_Y,obj1_W,obj1_H,obj2_X,obj2_Y,obj2_W,obj2_H)
        this.Collided = function(other)
        {
            if
                (
                    this.x + this.w*this.scale_x*this.scale < other.x //obj1 à esquerda do obj2

                    ||

                    this.x > other.x + other.w*other.scale_x*other.scale //obj1 à direita do obj2

                    ||

                    this.y + this.h*this.scale_y*this.scale < other.y //obj1 acima do obj2

                    ||

                    this.y > other.y + other.h*other.scale_x*other.scale //obj1 abaixo do obj2
                )
            {
                return false;
            }
            else
            {
                return true;
            }
        }//fecha collided        
}//fecha mySprite