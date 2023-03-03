class charML{
        constructor(lokasiX, lokasiY, hero, peran, level, skill){
            this.postX = lokasiX
            this.postY = lokasiY
            this.hero = hero;
            this.role = peran;
            this.level = level;
            this.skill = skill;
        }
        show (){
            noStroke();
            fill("#B20D75")
            ellipse(this.postX, this.postY,this.level, this.level);
        }

        step(){
            var choice = int(random(4));
            if (choice == 0){
            this.postX = this.postX + 5
            }
            else if (choice == 1){
                this.postX = this.postX - 5
                }
                else if (choice == 2){
                this.postY = this.postY + 5
                }
                else{
                this.postY = this.postY - 5
                }
                }
               }


    
    let yola
    let holau
    
    function setup() {
        // put setup code here 
        yola = new charML(120,120, "Aurora", "Mage", 20, "High Damage");
        holau = new charML(100,200, "gusion", "assasin", 60, "Instant Heal");
    }
   
    function windowResized(){
        resizeCanvas(windowWidth, windowHeight)
    }

    function draw(){
        background("#70F6FF")
        yola.show()
        yola.step()
        holau.show()
        holau.step()
        
    }