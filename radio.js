class Player{
    constructor(){
var heightMain = document.getElementById("player");
heightMain.style.height = screen.height + "px";
if(screen.width<500){
    heightMain.style.width = screen.width + "px";

}
var heightDiv = document.getElementById("content");
heightDiv.style.height = screen.height-300 + "px";
    }
}
onload = new Player();


// class button
class AudioP{
    constructor(){
this.audioF = document.getElementById("audioFile");
this.title_audio = document.getElementById("titleS");
this.play_pause_button = document.getElementById("play_pause");
this.isPlayed;
this.play_pause_button.addEventListener("click", ()=>{
this.playPause();
});

this.names_audio = [];
this.names_audio[0] = "Radio1 algeria";
this.names_audio[1] = "Radio2";
this.names_audio[2] = "Radio3";

this.source_audio = [];
this.source_audio[0] = "https://ch1.ice.infomaniak.ch/ch1-32.aac";
this.source_audio[1] = "https://ch2.ice.infomaniak.ch/ch2-32.aac";
this.source_audio[2] = "https://elbahdja.ice.infomaniak.ch/elbahdja-32.aac";
this.server = 0;

this.setresouce();

document.getElementById("nextC").addEventListener("click" , ()=>{
if(this.server<this.source_audio.length -1){
    ++this.server;
    this.isPlayed = false;
}else{
    this.server= 0;
}
this.setresouce();
});
document.getElementById("backC").addEventListener("click" , ()=>{
    if(this.server>0){
        --this.server;
    }else{
        this.server = this.source_audio.length -1;
    }
    localStorage.setItem("save-position" , this.server);
    this.setresouce();

});

}
setresouce(){
    if(localStorage.getItem("save-position")!=null){
        this.server = localStorage.getItem("save-position");

    }
    this.audioF.src = this.source_audio[this.server];
    this.title_audio.innerHTML = this.names_audio[this.server];
    this.playPause();
}
playPause(){
if(this.isPlayed == false){
    this.play_pause_button.src = "pause.jpg";

    this.audioF.play();
    this.isPlayed = true;

}else{
    this.audioF.pause();
    
    this.isPlayed=false;
}
    }

}
onload = new AudioP();