
class TV{
    constructor(brand,price,inches,status,channel=1,volume=50) {
        this.brand = brand;
        this.price=price;
        this.inches=inches;
        this.status=status;
        this.channel=channel;
        this.volume=volume;

        this.changeVolume=function(num){
            this.number=num
            if (this.volume>100){
                return this.volume;
            }
            else if(this.volume<0){
                return this.volume
            }
            else{
                this.volume=(this.volume+this.number)
                return this.volume;
            };
        }

        this.changeChannelNumber=function(number){
            this.number=number;
            if (this.number>50){
                return this.channel;
            }
            else{return this.channel=this.number};
        }

        this.reset=function(){
            this.channel=1;
            this.volume=50;
            return this.TVstatus();
        }
        
        this.TVstatus=function(){
            return this.brand+" at channel "+this.channel+", volume "+this.volume;
        }
    }
}

class LED_TV extends TV{
    constructor(screenThickness="2 inches",energyUsage="5 star rating",LifeSpan="5 years",refreshRate="90hz",viewingAngle="170 degrees", backlight="no",displayDetails="4k AMOLED"){
        this.screenThickness=screenThickness;
        this.energyUsage=energyUsage;
        this.LifeSpan=LifeSpan;
        this.refreshRate=refreshRate;

        this.viewingAngle=viewingAngle;
        this.backlight=backlight;
        this.displayDetails=displayDetails;

        this.properties=function(){
            return this.screenThickness+", "+this.energyUsage+", "+this.LifeSpan+", "+ this.refreshRate;
        }

        this.functionalities=function(){
            return this.viewingAngle+", "+this.backlight+", "+this.displayDetails;
        }
    }
}


class Plasma_TV extends TV{
    constructor(screenThickness="1.5 inches",energyUsage="5 star rating",LifeSpan="4 years",refreshRate="60hz",viewingAngle="180 degrees", backlight="yes",displayDetails="FHD Screen"){
        this.screenThickness=screenThickness;
        this.energyUsage=energyUsage;
        this.LifeSpan=LifeSpan;
        this.refreshRate=refreshRate;

        this.viewingAngle=viewingAngle;
        this.backlight=backlight;
        this.displayDetails=displayDetails;

        this.properties=function(){
            return this.screenThickness+", "+this.energyUsage+", "+this.LifeSpan+", "+ this.refreshRate;
        }

        this.functionalities=function(){
            return this.viewingAngle+", "+this.backlight+", "+this.displayDetails;
        }
    }
}


  var TVName=new TV("SONY",50000,55,"On",5,25);
  console.log(TVName);
// console.log(TVName.channel);
  console.log(TVName.changeVolume(50));
//   console.log(TVName.channel);
  console.log(TVName.changeChannelNumber(40));
  console.log(TVName.TVstatus());
  console.log(TVName.reset());

  var LEDTV=new LED_TV("2")
  console.log(LEDTV.properties());
  console.log(LEDTV.functionalities());

  
  var PlasmaTV=new Plasma_TV()
  console.log(PlasmaTV.properties());
  console.log(PlasmaTV.functionalities());
 
  

  