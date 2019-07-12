 function Level_01()
{	
    this.escudo = new mySprite("imagens/Escudo-112x112.png", 0, 0, 112, 112, 530, -100, 112, 112, 1, 1);
    this.HUD = new mySprite("imagens/Hud-229x101.png", 0, 0, 229, 101, 0, 0, 229, 101, 1, 1);
    this.Vida_bonos = new mySprite("imagens/Vida-37x30.png", 0, 0, 37, 30, 530, -30, 37, 30, 1, 1);
    this.Vida1 = new mySprite("imagens/Vida-37x30.png", 0, 0, 37, 30, this.HUD.x + 100, this.HUD.y + 35, 37, 30, 1, 1);
    this.Vida2 = new mySprite("imagens/Vida-37x30.png", 0, 0, 37, 30, this.Vida1.x + 37, this.Vida1.y, 37, 30, 1, 1);
    this.Vida3 = new mySprite("imagens/Vida-37x30.png", 0, 0, 37, 30, this.Vida1.x + 74, this.Vida1.y, 37, 30, 1, 1);
    this.personagem = new mySprite("imagens/Arquivos/PlayerFlying-130x143.png", 0, 0, 130, 143, 330, canvas.height - 143, 130, 143, 1, 100);
    this.vitimaH = new mySprite("imagens/VitimaH-223x99.png", 0, 0, 223, 99, 530, -93, 223, 99, 1, 1);
    this.vitimaM = new mySprite("imagens/VitimaM-230x131.png", 0, 0, 230, 131, 530, -93, 223, 99, 1, 1);
    this.vitimaM1 = new mySprite("imagens/VitimaM1-230x131.png", 0, 0, 230, 131, 530, -93, 223, 99, 1, 1);

    this.tela_de_pause = new mySprite("imagens/pauseFundo-665-x-239.png", 0, 0, 665, 239, 150, 244, 665, 239, 1, 1);
    this.tela_de_pause.scale_x = 0.7;
    this.butao_pause = new mySprite("imagens/pauseButon-94x87.png", 0, 0, 94, 87, 670, 0, 94, 87, 1, 1);
    this.butao_pause2 = new Button("", 94, 87, this.butao_pause.x, this.butao_pause.y);
    this.resumir = new mySprite("imagens/resume-130x178.png", 0, 0, 130, 178, this.tela_de_pause.x +10, this.tela_de_pause.y +30, 130, 178, 1, 1);
    this.resumir2 = new Button("", 130, 178, this.resumir.x, this.resumir.y);
    this.restart = new mySprite("imagens/restart-145x184.png", 0, 0, 145, 184, this.resumir.x +165, this.resumir.y -6, 145, 184, 1, 1);
    this.restart2 = new Button("", 145, 184, this.restart.x, this.restart.y);
    this.voltar_menu = new mySprite("imagens/menu-105-x-180.png", 0, 0, 105, 180, this.restart.x +165, this.restart.y +3, 105, 180, 1, 1);
    this.voltar_menu2 = new Button("", 105, 180, this.voltar_menu.x, this.voltar_menu.y);




    this.OBT = new mySprite("imagens/ObstaculoPedra-143x187.png", 0, 0, 143, 187, 530, -187, 143, 187, 1, 1);
    this.OBT1 = new mySprite("imagens/ObstaculoSofa-182x355.png", 0, 0, 182, 355, 530, -355, 182, 355, 1, 1);
    this.OBT2 = new mySprite("imagens/ObstaculoViga-165x278.png", 0, 0, 165, 278, 530, -278, 165, 278, 1, 1);



    //this.listVitimas = new Array();

    this.bola = new mySprite("imagens/Arquivos/bola17x17.png", 0, 0, 17, 17, 600, 900, 17, 17, 1, 1);
    this.bola2 = new Button("", 17, 17, this.bola.x, this.bola.y);
    this.cima = new mySprite("imagens/SetaCima-44x66.png", 0, 0, 44, 66, this.bola.x + 4, this.bola.y - 56, 44, 66, 1, 1);
    this.cima2 = new Button("", 44, 66, this.cima.x, this.cima.y);
    this.baixo = new mySprite("imagens/SetaCima-44x66.png", 0, 0, 44, 66, this.bola.x + 5, this.bola.y + 57, 44, 66, 1, 1);
    this.baixo2 = new Button("", 44, 66, this.baixo.x, this.baixo.y);
    this.esquerda = new mySprite("imagens/SetaLado-66x44.png", 0, 0, 66, 44, this.bola.x - 65, this.bola.y +4, 66, 44, 1, 1);
    this.esquerda2 = new Button("imagensdetest/borda.png", 66, 44, this.esquerda.x, this.esquerda.y);
    this.direita = new mySprite("imagens/SetaLado-66x44.png", 0, 0, 66, 44, this.bola.x + 65, this.bola.y +4, 66, 44, 1, 1);
    this.direita2 = new Button("imagensdetest/borda.png", 66, 44, this.direita.x, this.direita.y);





    this.chao =  new mySprite ("imagens/Chao-601x459.png", 0, 0, 601, 459, 90, canvas.height - 459, 601, 459, 1, 1);
    this.chao2 =  new mySprite ("", 0, 0, 1060, 30, 130, canvas.height - 30, 1060, 30, 1, 1);

    this.predio =  new mySprite ("imagens/PredioChamas-556x4799.png", 0, 0, 556, 4799, 120, - 4233, 556, 4799, 2, 10);
    this.fundo =  new mySprite ("imagens/BackGround-768x1024.png", 0, 0, 768, 1024, 0, 0, 768, 1024, 1, 1);
  
   

    var pulo = -5; 
    var inpulso = -10;
    var pontos = 0;
    var ultimaPontuacao = 0;

    var vida = 3;
    var liberar = 0;

    this.isPaused = false;


	//começa em 60 e termina em 0
	this.tempo = false;
    this.tempo_de_inicio = 0;
    this.tempo_escudo = 0;
    this.tempo_escudo_personagem = 0;
    this.tempo_vida = 0;

    setInterval(contaTempo, 1000)
    function contaTempo ()
    {

        if(currentScene == SCENE.LEVEL_01 )
        {
            if(level_01.tempo == false)
            {            
                level_01.tempo_de_inicio ++;

                level_01.tempo_escudo ++;
                level_01.tempo_escudo_personagem ++;

                level_01.tempo_vida ++;
            }
        }

        console.log("erro");
    };//to do: refactor, take care...

	
				
	this.Update=function()
	{
         if(pause_apertei)
        {
            this.isPaused = !this.isPaused;
            this.tempo = !this.tempo;
            
        }

        if(this.isPaused) return;
        if(this.tempo) return;
        
        if(this.tempo_de_inicio >= 3)
        {

                        if(this.Vida_bonos.y <= -49 )
                        {
                        this.Vida_bonos.x = Math.floor(Math.random()*canvas.width);
                        }

                        if(this.vitimaH.y <= -90)
                        {
                        this.vitimaH.x = Math.floor(Math.random()*canvas.width);
                        }  

                        if(this.vitimaM.y <= -90)
                        {
                        this.vitimaM.x = Math.floor(Math.random()*canvas.width);
                        }  

                        if(this.vitimaM1.y <= -90)
                        {
                        this.vitimaM1.x = Math.floor(Math.random()*canvas.width);
                        } 
	

        

                         this.personagem.y += this.personagem.gravidade;
                        if(espaco_apertando && this.personagem.y >= 90 || cima_apertando && this.personagem.y >= 90)
                        {
                            this.personagem.y += (pulo) + (inpulso);
                            this.chao.y += this.chao.velpredio;
                            this.chao2.y += this.chao2.velpredio;
                            this.predio.y += this.predio.velpredio;
                        }

                        if(baixo_apertando )
                    	{
                    		this.personagem.y += this.personagem.vel_x; 
                    		
                    	}

                    	if(esquerda_apertando && this.personagem.x >= 10)
                    	{
                    		this.personagem.x -= this.personagem.vel_x; 
                    		this.personagem.sy = 143;
                    		console.log("esquerda")
                    	}
                    	
                        
                        if(direita_apertando  && this.personagem.x <= canvas.width - 140 )
                    	{
                    		this.personagem.x += this.personagem.vel_x;
                    		this.personagem.sy = 286;
                    		console.log("direita") 
                    	}	
                    	
                        if(esquerda_solto && direita_solto)
                        {
                            this.personagem.sy = 0;
                        }


                        if(this.personagem.Collided(this.chao2))
                        {
                            this.personagem.gravidade = 0;
                        }
                        else
                        {
                            this.personagem.gravidade = 10;
                        }

                        if(this.personagem.y >= canvas.height)
                        {
                            vida = vida - 1;
                            this.personagem.y = 900;
                        }


	


        if (this.predio.y >= 0)
        {
        this.predio.y = -3775;
        }  


   
                        this.vitimaH.y += this.vitimaH.vel_y;
                        if(this.vitimaH.Collided(this.personagem))
                        {   
                        	this.vitimaH.x = -423;
                        	pontos = pontos + 10;
                        }

                         this.vitimaM.y += this.vitimaM.vel_y;
                        if(this.vitimaM.Collided(this.personagem))
                        {   
                        	this.vitimaM.x = -423;
                        	pontos = pontos + 10;
                        }

                        this.vitimaM1.y += this.vitimaM1.vel_y;
                        if(this.vitimaM1.Collided(this.personagem))
                        {   
                        	this.vitimaM1.x = -223;
                        	pontos = pontos + 10;
                        }

                        if (this.vitimaH.y >= 1200)
                        {
                        	this.vitimaH.y = -90;
                        	this.vitimaH.x = 530;
                        }


                        if (this.vitimaM1.y >= 1200)
                        {
                        	this.vitimaM1.y = -190;
                        	this.vitimaM1.x = 530;
                        }

                        if (this.vitimaM.y >= 1200)
                        {
                        	this.vitimaM.y = -290;
                        	this.vitimaM.x = 530;
                        }

                        if( this.vitimaH.y >= 1197)
                        	{
                        		pontos = pontos - 10;
                        		console.log("menos10");
                        	}

   






                        if(this.OBT.y <= -187)
                        {
                    	  this.OBT.x = Math.floor(Math.random()*canvas.width);
                    	}  


                        if(this.OBT1.y <= -355)
                        {
                    	  this.OBT1.x = Math.floor(Math.random()*canvas.width);
                    	}  


                        if(this.OBT2.y <= -278)
                        {
                    	  this.OBT2.x = Math.floor(Math.random()*canvas.width);
                    	}  


                         this.OBT.y += this.OBT.vel_y;
                        if(this.OBT.Collided(this.personagem))
                        {   
                        	this.OBT.x = -223;
                        	vida --;
                        }

                        this.OBT1.y += this.OBT1.vel_y;
                        if(this.OBT1.Collided(this.personagem))
                        {   
                        	this.OBT1.x = -223;
                        	vida --;
                        }

                        this.OBT2.y += this.OBT2.vel_y;
                        if(this.OBT2.Collided(this.personagem))
                        {   
                        	this.OBT2.x = -223;
                        	vida --;
                        }



										    if(this.OBT.Collided(this.vitimaH) && this.OBT.x >= this.vitimaH.w)
										    {
										    	this.OBT.x -= 7 * -1;
										    } else if(this.OBT.Collided(this.vitimaH) && this.OBT.x <= this.vitimaH.w)

										    {this.OBT.x -= 7;}


											if(this.OBT.Collided(this.vitimaM) && this.OBT.x >= this.vitimaM.w)
										    {
										    	this.OBT.x -= 7 * -1;
										    }else if(this.OBT.Collided(this.vitimaM) && this.OBT.x <= this.vitimaM.w)

										    {this.OBT.x -= 7;}

											if(this.OBT.Collided(this.vitimaM1) && this.OBT.x >= this.vitimaM1.w)
										    {
										    	this.OBT.x -= 7 * -1;
										    }else if(this.OBT.Collided(this.vitimaM1) && this.OBT.x <= this.vitimaM1.w)

										    {this.OBT.x -= 7;}


																if(this.OBT1.Collided(this.vitimaH) && this.OBT1.x >= this.vitimaH.w)
															    {
															    	this.OBT1.x -= 7 * -1;
															    }else if(this.OBT1.Collided(this.vitimaH) && this.OBT1.x <= this.vitimaH.w)

															    {this.OBT1.x -= 7;}


																if(this.OBT1.Collided(this.vitimaM) && this.OBT1.x >= this.vitimaM.w)
															    {
															    	this.OBT1.x -= 7 * -1;
															    }else if(this.OBT1.Collided(this.vitimaH) && this.OBT1.x <= this.vitimaM.w)

															    {this.OBT1.x -= 7;}


																if(this.OBT1.Collided(this.vitimaM1) && this.OBT1.x >= this.vitimaM1.w)
															    {
															    	this.OBT1.x -= 7 * -1;
															    }else if(this.OBT1.Collided(this.vitimaH) && this.OBT1.x <= this.vitimaM1.w)

															    {this.OBT1.x -= 7;}

															    

											if(this.OBT2.Collided(this.vitimaH) && this.OBT2.x >= this.vitimaH.w)
										    {
										    	this.OBT2.x -= 7  * -1;
										    }else if(this.OBT2.Collided(this.vitimaH) && this.OBT2.x <= this.vitimaH.w)

											{this.OBT2.x -= 7;}


											if(this.OBT2.Collided(this.vitimaM) && this.OBT2.x >= this.vitimaM.w)
										    {
										    	this.OBT2.x -= 7 * -1;
										    }else if(this.OBT2.Collided(this.vitimaH) && this.OBT2.x <= this.vitimaM.w)

											{this.OBT2.x -= 7;}


											if(this.OBT2.Collided(this.vitimaM1) && this.OBT2.x >= this.vitimaM1.w)
										    {
										    	this.OBT2.x -= 7 * -1;
										    }else if(this.OBT2.Collided(this.vitimaH) && this.OBT2.x <= this.vitimaM1.w)

											{this.OBT2.x -= 7;}
											













											if(this.OBT.Collided(this.OBT1) && this.OBT.x >= this.OBT1.w)
											{
											this.OBT.x -= 7 ;
											} else if(this.OBT.Collided(this.OBT1) && this.OBT.x <= this.OBT1.w)

											{this.OBT.x -= 7 * -1;}


											if(this.OBT.Collided(this.OBT2) && this.OBT.x >= this.OBT2.w)
											{
											this.OBT.x -= 7 ;
											}else if(this.OBT.Collided(this.OBT2) && this.OBT.x <= this.OBT2.w)

											{this.OBT.x -= 7 * -1;}




																if(this.OBT1.Collided(this.OBT) && this.OBT1.x >= this.OBT.w)
																{
																this.OBT1.x -= 7 * -1;
																}else if(this.OBT1.Collided(this.OBT) && this.OBT1.x <= this.OBT.w)

																{this.OBT1.x -= 7;}


																if(this.OBT1.Collided(this.OBT2) && this.OBT1.x >= this.OBT2.w)
																{
																this.OBT1.x -= 7 ;
																}else if(this.OBT1.Collided(this.OBT2) && this.OBT1.x <= this.OBT2.w)

																{this.OBT1.x -= 7 * -1;}




											if(this.OBT2.Collided(this.OBT) && this.OBT2.x >= this.OBT.w)
											{
											this.OBT2.x -= 7  * -1;
											}else if(this.OBT2.Collided(this.OBT) && this.OBT2.x <= this.OBT.w)

											{this.OBT2.x -= 7;}


											if(this.OBT2.Collided(this.OBT1) && this.OBT2.x >= this.OBT1.w)
											{
											this.OBT2.x -= 7 * -1;
											}else if(this.OBT2.Collided(this.OBT1) && this.OBT2.x <= this.OBT1.w)

											{this.OBT2.x -= 7;}


                         if (this.OBT.y >= 1200)
                        {
                        	this.OBT.y = -290;
                        	this.OBT.x = 530;
                        }

                        if (this.OBT1.y >= 1200)
                        {
                        	this.OBT1.y = -355;
                        	this.OBT1.x = 530;
                        }

                        if (this.OBT2.y >= 1200)
                        {
                        	this.OBT2.y = -290;
                        	this.OBT2.x = 530;
                        }



                    if(vida == 0)
                    {
                    	vida = 3;
                    	//pontos = 0;
                        this.tempo_escudo = 0;
                    	this.personagem.y = canvas.height - 143;
                    	this.personagem.x = 330;
                    	this.chao.y = canvas.height - 459;
                        this.chao2.y =  canvas.height -30;
                    	this.predio.y = -4233;
                    	this.tempo = 0;
                    	this.tempo_de_inicio = 0;

                    	this.OBT.y = -278;
                    	this.OBT1.y = -278;
                    	this.OBT2.y = -278;

                    	this.vitimaH.y = -93;
                    	this.vitimaM.y = -93;
                    	this.vitimaM1.y = -93;
                        this.Vida1.visible = true;
                        this.Vida2.visible = true;
                        this.Vida_bonos.y = -49;

                        this.vitimaH.vel_y = 20;
                        this.vitimaM.vel_y = 20;
                        this.vitimaM1.vel_y = 20;
                        this.OBT.vel_y = 20;
                        this.OBT1.vel_y = 20;
                        this.OBT2.vel_y = 20;
                        this.personagem.vel_x = 20;
                        this.escudo.y = -112;

                        ultimaPontuacao = localStorage.getItem("ultima-Pontuacao");
                        
                        localStorage.setItem("ultima-Pontuacao", pontos);



                    	currentScene = SCENE.GAME_OVER;
                    }

                    if(vida == 2  || vida <= 2)
                    {
                        this.Vida1.visible =  false;
                    }
                    else
                    {this.Vida1.visible = true;}
                     if(vida == 1 || vida <= 1)
                    {
                        this.Vida2.visible =  false;
                    }
                    else
                        {this.Vida2.visible = true;}
                    



                    if(this.tempo_de_inicio == 10 || this.tempo_de_inicio == 20 || this.tempo_de_inicio == 30 || this.tempo_de_inicio == 40 || this.tempo_de_inicio == 50 || this.tempo_de_inicio == 60 )
                    {
                    	this.vitimaH.vel_y = this.vitimaH.vel_y + 0.2;
                    	this.vitimaM.vel_y = this.vitimaM.vel_y + 0.2;
                    	this.vitimaM1.vel_y = this.vitimaM1.vel_y + 0.2;
                    	this.OBT.vel_y = this.OBT.vel_y + 0.2;
                    	this.OBT1.vel_y = this.OBT1.vel_y + 0.2;
                    	this.OBT2.vel_y = this.OBT2.vel_y + 0.2;
                        this.personagem.vel_x =  this.personagem.vel_x + 0.2;
                    	console.log('+ 2')
                    }

                    if(this.tempo_de_inicio >= 80)
                    {
                        this.tempo_de_inicio = 31;
                    }





                        if(this.tempo_escudo >= 20)
                        {
                            this.escudo.y += this.escudo.vel_y;
                        }

                        if(this.escudo.Collided(this.personagem))
                        {
                            this.escudo.x = this.personagem.x + 10
                            this.escudo.y = this.personagem.y -50;
                            this.escudo.sy = 112;
                           // this.tempo_escudo_personagem ++;
                            this.tempo_escudo = 0;
                            
                        }

                        if(!this.escudo.Collided(this.personagem))
                        {
                            this.tempo_escudo_personagem = 0;
                            this.escudo.sy = 0;
                           // this.tempo_escudo ++;
                        }

                        if(this.tempo_escudo_personagem == 15)
                        {
                            this.escudo.y = -112;
                            this.escudo.x = 530;
                        }

                        if(this.escudo.y <= -112)
                        {
                          this.escudo.x = Math.floor(Math.random()*canvas.width);
                        }

                        if(this.escudo.y >= 1200)
                        {
                            this.escudo.y = -112;
                            this.tempo_escudo = 0;
                        }  

                        if(this.escudo.Collided(this.personagem) && this.escudo.Collided(this.OBT))
                        {
                            this.OBT.x = -400;
                        }

                         if(this.escudo.Collided(this.personagem) && this.escudo.Collided(this.OBT1))
                        {
                            this.OBT1.x = -400;
                        }

                         if(this.escudo.Collided(this.personagem) && this.escudo.Collided(this.OBT2))
                        {
                            this.OBT2.x = -400;
                        }




   
                        /*else
                        {
                        	this.personagem.velpersonagem = 10;
                        	this.chao.velpredio = 30;
                        	this.predio.velpredio = 30;
                        	this.vitimaH.vel_y = 20;
                        	this.vitimaM.vel_y = 20;
                        	this.vitimaM1.vel_y = 20;
                        	this.OBT.vel_y = 20;
                        	this.OBT1.vel_y = 20;
                        	this.OBT2.vel_y = 20;
                        	pulo = -5;
                        	inpulso = -10;
                        	//this.personagem.gravidade = 10;
                        }*/


                        if(this.Vida1.visible == false )
                        {
                            this.Vida_bonos.y += this.Vida_bonos.vel_y ;
                        }
                        
                        if(this.Vida_bonos.Collided(this.personagem))
                        {
                            vida ++;
                            this.Vida_bonos.x = -60;

                        }

                        if(this.Vida_bonos.y >= 1200)
                        {
                            this.Vida_bonos.y = -30;
                            this.Vida_bonos.x = 530;
                        }

                        if(vida >= 3)
                        {
                            vida = 3;
                        } 


                        /*if(mouse_apertando)
                        {
                            this.personagem.y -= this.personagem.vel_y;
                        }*/


                      if(mouse_apertando && liberar == 1)
                            {
                                this.personagem.y += (pulo) + (inpulso);
                                this.chao.y += this.chao.velpredio;
                                this.chao2.y += this.chao2.velpredio;
                                this.predio.y += this.predio.velpredio;
                                console.log("oioio");
                            }

                      if(mouse_apertando && liberar == 2)
                      {
                        this.personagem.y += this.personagem.vel_x;
                      }

                      if(mouse_apertando && liberar == 3)
                      {
                                            
                            this.personagem.x -= this.personagem.vel_x; 
                            this.personagem.sy = 143;
                            console.log("esquerda")
                        
                      }

                      if(mouse_apertando && liberar == 4)
                      {
                                            
                            this.personagem.x += this.personagem.vel_x;
                            this.personagem.sy = 286;
                            console.log("direita") 
                                                  
                      }
                        
                        
}
   

                        if(this.tempo_de_inicio == 1)
                        {
                            pontos = 0;
                        }

	}//fim update
      
	this.Draw=function()
	{
		screen.clearRect(0,0,canvas.width, canvas.height);
		this.fundo.Draw()
		this.chao.Draw();
		this.predio.Draw();

		
   	 	

	   this.personagem.Draw();
		
		this.vitimaH.Draw();
		this.vitimaM.Draw();
		this.vitimaM1.Draw();


		this.OBT.Draw();
		this.OBT1.Draw();
		this.OBT2.Draw();
        this.Vida_bonos.Draw();
        this.escudo.Draw();
        this.HUD.Draw();
        this.Vida1.Draw();
        this.Vida2.Draw();
        this.Vida3.Draw();
        this.butao_pause.Draw();

      /*  this.bola.Draw();
        this.cima.Draw();
        this.baixo.Draw();
        this.esquerda.Draw();
        this.direita.Draw();

        this.cima2.Draw();
        this.baixo2.Draw();
        this.esquerda2.Draw();
        this.direita2.Draw();
      */
      if(this.isPaused)
      {
        this.tela_de_pause.Draw();
        this.resumir.Draw();
        this.restart.Draw();
        this.voltar_menu.Draw();
      }

      if(this.isPaused)return;

      





		//this.camada.Draw();	
	

		screen.font = "20px Karmatic Arcade";
		screen.fillStyle="#000000";
		//screen.fillText("Level_01", 20, 20);
		//screen.fillText("pontos =" + pontos, 20, 60);
		//screen.fillText("vidas =" + vida, 20, 90);
		screen.fillText("tempo escudo =" + this.tempo_escudo_personagem, 20, 120);
        screen.fillText("tempo inicial =" + this.tempo_escudo, 20, 620);

		
	};  

    this.Draw2=function()
    {
        screen.fillText("pontos =" + pontos, 50, 290);

        screen.fillText("ultima Pontuacao =" + ultimaPontuacao, 50, 350);

    }

    
       
            this.mouse_down=function(mouse)
  {         
            console.log("INTRO mouse down mouse X " + mouse.x + " mouse Y " + mouse.y ); 
             if(this.cima2.clicked(mouse) )
            {
                 liberar = 1;           
            }
            else
                {liberar = 0;}

            if(this.baixo2.clicked(mouse) )
            {
                 liberar = 2;           
            }

             if(this.esquerda2.clicked(mouse) )
            {
                 liberar = 3;           
            }

             if(this.direita2.clicked(mouse) )
            {
                 liberar = 4;           
            }

            if(this.butao_pause2.clicked(mouse))
            {
                this.isPaused = !this.isPaused;
            }

            if(this.resumir2.clicked(mouse))
            {
                this.isPaused = !this.isPaused;
                //this.isPaused = false;
            }

             if(this.restart2.clicked(mouse))
             {  
                        this.tempo_escudo = 0;
                        this.personagem.y = canvas.height - 143;
                        this.personagem.x = 330;
                        this.chao.y = canvas.height - 459;
                        this.chao2.y =  canvas.height -30;
                        this.predio.y = -4233;
                        this.tempo = 0;
                        this.tempo_de_inicio = 0;

                        this.OBT.y = -278;
                        this.OBT1.y = -278;
                        this.OBT2.y = -278;

                        this.vitimaH.y = -93;
                        this.vitimaM.y = -93;
                        this.vitimaM1.y = -93;
                        this.Vida1.visible = true;
                        this.Vida2.visible = true;
                        this.Vida_bonos.y = -49;

                        this.vitimaH.vel_y = 20;
                        this.vitimaM.vel_y = 20;
                        this.vitimaM1.vel_y = 20;
                        this.OBT.vel_y = 20;
                        this.OBT1.vel_y = 20;
                        this.OBT2.vel_y = 20;
                        this.personagem.vel_x = 20;
                        this.escudo.y = -112;
                        this.isPaused = !this.isPaused;
             }

            if(this.voltar_menu2.clicked(mouse))
            {
                currentScene = SCENE.MENU;
                vida = 3;
                        //pontos = 0;
                        this.tempo_escudo = 0;
                        this.personagem.y = canvas.height - 143;
                        this.personagem.x = 330;
                        this.chao.y = canvas.height - 459;
                        this.chao2.y =  canvas.height -30;
                        this.predio.y = -4233;
                        this.tempo = 0;
                        this.tempo_de_inicio = 0;

                        this.OBT.y = -278;
                        this.OBT1.y = -278;
                        this.OBT2.y = -278;

                        this.vitimaH.y = -93;
                        this.vitimaM.y = -93;
                        this.vitimaM1.y = -93;
                        this.Vida1.visible = true;
                        this.Vida2.visible = true;
                        this.Vida_bonos.y = -49;

                        this.vitimaH.vel_y = 20;
                        this.vitimaM.vel_y = 20;
                        this.vitimaM1.vel_y = 20;
                        this.OBT.vel_y = 20;
                        this.OBT1.vel_y = 20;
                        this.OBT2.vel_y = 20;
                        this.personagem.vel_x = 20;
                        this.escudo.y = -112;
                         this.isPaused = !this.isPaused;

            }

           
                   

  }


}