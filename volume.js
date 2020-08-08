class Volume{
    constructor(){
        this.audioFi = document.getElementById("audioFile");
        this.audioFi.volume = 50/100;
this.volume_range = document.getElementById("volume_range");
this.volume_range.addEventListener("change" , ()=>{
this.audioFi.volume = this.volume_range.value/100;
} );
this.volume_speed = document.getElementById("volume_speed");
this.volume_speed = 

this.volume_speed.addEventListener("change" , ()=>{
this.audioFi.volume = this.volume_speed.value/100;

} );
    }
}
onload = new Volume();
