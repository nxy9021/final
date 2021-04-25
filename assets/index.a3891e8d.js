import"./vendor.0dd1e043.js";!function(t=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(e){const i=new URL(t,location),o=t=>{URL.revokeObjectURL(t.src),t.remove()};self[s]=t=>new Promise(((e,a)=>{const n=new URL(t,i);if(self[s].moduleMap[n])return e(self[s].moduleMap[n]);const r=new Blob([`import * as m from '${n}';`,`${s}.moduleMap['${n}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${t}`)),o(c)},onload(){e(self[s].moduleMap[n]),o(c)}});document.head.appendChild(c)})),self[s].moduleMap={}}}("assets/");const t={boy1:"boy1",boy2:"boy2",girl1:"girl1",girl2:"girl2",girl3:"girl3",girl4:"girl4"},s={default:{name:"default",cursor:"assets/img/cursors/cdefault.png",button:"",color:0},question:{name:"question",cursor:"assets/img/cursors/cyellow.png",button:"assets/img/bubbles/byellow.png",color:16251904},food:{name:"food",cursor:"assets/img/cursors/cred.png",button:"assets/img/bubbles/bred.png",color:16734810},dots:{name:"dots",cursor:"assets/img/cursors/cblue.png",button:"assets/img/bubbles/bblue.png",color:49919},wakeup:{name:"wakeup",cursor:"assets/img/cursors/cgreen.png",button:"assets/img/bubbles/bgreen.png",color:60040}};class e extends Phaser.Scene{constructor(){super("preloader")}preload(){this.load.image("ref","assets/img/lvl1layout.png"),this.load.image("bgBeige","assets/img/solidbg/bg_beige.png"),this.load.image("heatBg","assets/img/heatgauge_bg.png"),this.load.image("heatImg","assets/img/heatgauge.png");for(const[,t]of Object.entries(s)){const s=t.name.toLowerCase();this.load.animation(s,`assets/img/distractions/${s}.json`),this.load.atlas(s,`assets/img/distractions/${s}.png`,`assets/img/distractions/${s}.json`)}for(const[,s]of Object.entries(t))this.load.image(s,`assets/img/charactors/${s}.png`);for(const[,t]of Object.entries(s))"default"!==t.name&&this.load.image(`${t.name}Button`,t.button)}create(){this.scene.start("lvl1")}}function i(t,s,e){t.create({key:s,frames:e,frameRate:24,repeat:-1})}var o,a;(a=o||(o={})).Default="default",a.Question="question",a.Food="food",a.Dots="dots",a.Wakeup="wakeup";class n{constructor(t,e,a,n,r){this._distractionType=o.Default,this._backgroundVerticalOffset=10,this.isDistracted=()=>this._distractionType!==o.Default,this.clickHandler=()=>{this._scene.events.emit("distractionClick",{name:this._name,distractionType:this._distractionType})},this.setDistraction=(t,s)=>{this._distractionType=t,this.startTimer(s),this._updateDistractionVisuals()},this.reset=()=>{this._distractionType=o.Default,this.startTimer(0),this._updateDistractionVisuals()},this.startTimer=t=>{this._countdown=this._scene.time.addEvent({delay:t})},this._updateDistractionVisuals=()=>{this._sprite.setTexture(this._distractionType),this._sprite.play(`${this._distractionType}Animation`),this._distractionType==o.Default?this._background.clearTint():this._background.setTint(s[this._distractionType].color)},this._scene=t,this._name=n;for(const[,o]of Object.entries(s)){const s=`${o.name}Animation`,e=t.textures.get(o.name).getFrameNames().sort().map((t=>({key:o.name,frame:t})));i(t.anims,s,e)}this._background=this._scene.add.image(e,a-this._backgroundVerticalOffset,"bgBeige").setScale(.6,.6),this._sprite=t.add.sprite(e,a,o.Default),this._topLeft=this._background.getTopLeft(),this._topRight=this._background.getTopRight(),this._width=this._topRight.x-this._topLeft.x,this._countDownBar=this._scene.add.rectangle(this._topLeft.x,this._topLeft.y+6,0,12,25599),this._updateDistractionVisuals(),this._background.setInteractive().on("pointerdown",this.clickHandler,this._scene),this._character=this._scene.add.image(e,a+3.5,r).setScale(.6,.6)}update(){if(null!=this._countdown){let t=this._countdown.getProgress();this._countDownBar.width=this._width-this._width*t,this._countDownBar.isFilled=!0,1==t&&this.reset()}}}class r extends Phaser.Scene{constructor(){super("lvl1"),this.distractionTiles={l1c1:n,l1c2:n,l1c3:n,l2c1:n,l2c2:n,l2c3:n},this.barTimerEvents=[],this.currentClickedDistraction=o.Default,this.comboCount=0,this.gpaPoints=0,this.successCount=0,this.heatLevel=0,this.allowedDistractionTypes=[],this.setHeatLevel=()=>{this.comboCount<=0?this.heatLevel=0:this.comboCount<=2?this.heatLevel=1:this.comboCount<=5?this.heatLevel=2:this.comboCount<=8?this.heatLevel=3:this.comboCount<=10?this.heatLevel=4:this.heatLevel=5},this.getNonDistractedTileNames=()=>{const t=[];for(const s of Object.keys(this.distractionTiles))this.distractionTiles[s].isDistracted()||t.push(s);return t},this.getRandomAllowedDistractionType=()=>{const t=Phaser.Math.Between(0,this.allowedDistractionTypes.length-1);return this.allowedDistractionTypes[t]},this.handleDistractionSpawning=()=>{const t=this.getNonDistractedTileNames();if(Object.keys(this.distractionTiles).length-t.length<this.maximumActiveDistractions){const s=t[Phaser.Math.Between(0,t.length-1)];this.distractionTiles[s].setDistraction(this.getRandomAllowedDistractionType(),this.countdownInterval)}const s=Phaser.Math.Between(this.spawnIntervalRange.minimum,this.spawnIntervalRange.maximum);this.setSpawnTimer(s)},this.setSpawnTimer=t=>{this.spawnTimer=this.time.delayedCall(t,this.handleDistractionSpawning,[],this)},this.setupDistractionButton=(t,e,i)=>{let o=s[t],a=this.add.sprite(e,i,`${t}Button`);a.setInteractive({cursor:`url(${o.cursor}), pointer`}),a.on("pointerdown",(()=>{a.setTint(o.color),this.input.setDefaultCursor(`url(${o.cursor}), pointer`),this.currentClickedDistraction=t}))},this.allowedDistractionTypes.push(o.Dots),this.maximumActiveDistractions=3,this.countdownInterval=5e3,this.spawnIntervalRange={minimum:500,maximum:2e3}}handleDistractionButtonOnClick(t){this.currentClickedDistraction!==o.Default&&t.distractionType==this.currentClickedDistraction?(this.comboCount++,this.setHeatLevel(),this.successCount++,this.gpaPoints=.5*this.successCount+this.heatLevel*this.successCount,this.distractionTiles[t.name].reset()):this.comboCount=0,this.currentClickedDistraction=o.Default,this.input.setDefaultCursor(`url(${s.default.cursor}), pointer`)}onGameTimeOver(){}create(){this.add.image(460,320,"heatBg"),this.distractionTiles.l1c1=new n(this,150,196,"l1c1",t.boy1),this.distractionTiles.l1c2=new n(this,400,196,"l1c2",t.boy2),this.distractionTiles.l1c3=new n(this,650,196,"l1c3",t.girl1),this.distractionTiles.l2c1=new n(this,150,410,"l2c1",t.girl2),this.distractionTiles.l2c2=new n(this,400,410,"l2c2",t.girl3),this.distractionTiles.l2c3=new n(this,650,410,"l2c3",t.girl4),this.setupDistractionButton(o.Dots,150,570),this.setSpawnTimer(3e3),this.events.on("distractionClick",(t=>this.handleDistractionButtonOnClick(t))),this.input.setDefaultCursor("url(assets/img/cursors/cdefault.png), pointer"),this.text=this.add.text(40,40,"",{fontFamily:"Roboto"}).setFontSize(20),this.mainTimer=this.time.delayedCall(6e4,this.onGameTimeOver,[],this),this.gpaText=this.add.text(640,40,"",{fontFamily:"Roboto"}).setFontSize(20),this.heatLevel}update(){const t=this.mainTimer.getProgress().toString().substr(0,4);this.text.setText(`Time: ${t}`);const s=this.gpaPoints;this.gpaText.setText(`GPA: ${s}`),Object.keys(this.distractionTiles).forEach((t=>this.distractionTiles[t].update()))}}const c={type:Phaser.AUTO,width:900,height:640,scene:[e,r]};new Phaser.Game(c);
