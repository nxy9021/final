import"./vendor.0dd1e043.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(s){const i=new URL(t,location),a=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((s,o)=>{const n=new URL(t,i);if(self[e].moduleMap[n])return s(self[e].moduleMap[n]);const r=new Blob([`import * as m from '${n}';`,`${e}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){o(new Error(`Failed to import: ${t}`)),a(l)},onload(){s(self[e].moduleMap[n]),a(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("assets/");const t={boy1:"boy1",boy2:"boy2",girl1:"girl1",girl2:"girl2",girl3:"girl3",girl4:"girl4"},e={default:{name:"default",cursor:"assets/img/cursors/cdefault.png",button:"",color:0,x:0,y:0},question:{name:"question",cursor:"assets/img/cursors/cyellow.png",button:"assets/img/bubbles/byellow.png",color:16251904,x:325,y:570},food:{name:"food",cursor:"assets/img/cursors/cred.png",button:"assets/img/bubbles/bred.png",color:16734810,x:475,y:570},dots:{name:"dots",cursor:"assets/img/cursors/cblue.png",button:"assets/img/bubbles/bblue.png",color:49919,x:175,y:570},wakeup:{name:"wakeup",cursor:"assets/img/cursors/cgreen.png",button:"assets/img/bubbles/bgreen.png",color:60040,x:625,y:570}};class s extends Phaser.Scene{constructor(){super("preloader")}preload(){this.load.image("ref","assets/img/lvl1layout.png"),this.load.image("selectlvlbg","assets/img/selectlvlbg.png"),this.load.image("tutorial","assets/img/tutorial.png"),this.load.image("close","assets/img/close.png"),this.load.image("startnow","assets/img/startnow.png"),this.load.image("title","assets/img/title.png"),this.load.image("start","assets/img/start.png"),this.load.image("instruction","assets/img/instruction.png");for(let t=0;t<=3;t++)this.load.image(`${t}star`,`assets/img/stars/${t}star.png`);for(let t=0;t<=3;t++)this.load.image(`${t}starlvl`,`assets/img/stars/${t}starlvl.png`);this.load.image("selectedlvl","assets/img/selectedlvl.png"),this.load.image("nonselectedlvl","assets/img/nonselectedlvl.png"),this.load.image("lockedlvl","assets/img/lockedlvl.png"),this.load.image("bgBeige","assets/img/solidbg/bg_beige.png"),this.load.image("heatBg","assets/img/heatgauge_bg.png"),this.load.image("heatImg","assets/img/heat_gauge.png"),this.load.audio("tadara","assets/audio/tadara.wav"),this.load.audio("correct","assets/audio/correct.wav"),this.load.audio("incorrect","assets/audio/wrong.wav"),this.load.audio("bgm","assets/audio/bgm.wav"),this.load.audio("countdown","assets/audio/countdown.wav");for(const[,t]of Object.entries(e)){const e=t.name.toLowerCase();this.load.animation(e,`assets/img/distractions/${e}.json`),this.load.atlas(e,`assets/img/distractions/${e}.png`,`assets/img/distractions/${e}.json`)}for(const[,e]of Object.entries(t))this.load.image(e,`assets/img/charactors/${e}.png`);for(let t=1;t>=5;t++)this.load.image(`tier${t}`,`assets/img/cursors/tier${t}.png`);for(const[,t]of Object.entries(e))"default"!==t.name&&this.load.image(`${t.name}Button`,t.button);this.load.image("heat_gauge","assets/img/heat_gauge.png")}create(){this.scene.start("start")}}class i extends Phaser.Scene{constructor(){super("start")}create(){this.cameras.main.backgroundColor.setTo(244,244,244),this.screenCenterX=this.cameras.main.worldView.x+this.cameras.main.width/2,this.input.setDefaultCursor("url(assets/img/cursors/cdefault.png), pointer"),this.title=this.add.image(this.screenCenterX,80,"title").setOrigin(.5,0),this.startText=this.add.text(this.screenCenterX,335,"Start Game",{fontFamily:"Roboto",color:"#888888",resolution:2.5}).setOrigin(.5,0).setFontSize(15),this.instructionText=this.add.text(this.screenCenterX,495,"Instructions",{fontFamily:"Roboto",color:"#888888",resolution:2.5}).setOrigin(.5,0).setFontSize(15),this.subtitle=this.add.text(this.screenCenterX,140,"A zoom class inspired game",{fontFamily:"Roboto",color:"#666666",resolution:2.5}).setOrigin(.5,0).setFontSize(22),this.startButton=this.add.image(this.screenCenterX,240,"start").setOrigin(.5,0).setScale(.6),this.instructionButton=this.add.image(this.screenCenterX,400,"instruction").setOrigin(.5,0).setScale(.6),this.bgm=this.sound.add("bgm",{volume:.5}),this.bgm.loop=!0,this.bgm.play(),this.startButton.setInteractive(),this.startButton.on("pointerdown",(()=>{this.correctClickSound=this.sound.add("correct"),this.scene.stop("start"),this.bgm.stop(),this.scene.start("selectlvl")})),this.startText.setInteractive(new Phaser.Geom.Rectangle(0,0,this.startText.width,this.startText.height),Phaser.Geom.Rectangle.Contains),this.startText.on("pointerdown",(()=>{this.correctClickSound=this.sound.add("correct"),this.scene.stop("start"),this.bgm.stop(),this.scene.start("selectlvl")})),this.instructionButton.setInteractive(),this.instructionButton.on("pointerdown",(()=>{this.correctClickSound=this.sound.add("correct"),this.scene.stop("start"),this.bgm.stop(),this.scene.start("instructions")}))}}function a(t,e,s){t.create({key:e,frames:s,frameRate:24,repeat:-1})}var o,n;(n=o||(o={})).Default="default",n.Question="question",n.Food="food",n.Dots="dots",n.Wakeup="wakeup";class r{constructor(t,s,i,n,r){this._distractionType=o.Default,this._backgroundVerticalOffset=10,this.isDistracted=()=>this._distractionType!==o.Default,this.emitClickEvent=()=>{this._scene.events.emit("distractionClick",{name:this._name,distractionType:this._distractionType})},this.emitExpiredDistractionEvent=()=>{this._scene.events.emit("expiredDistraction")},this.setDistraction=(t,e)=>{this._distractionType=t,this.startTimer(e),this._updateDistractionVisuals()},this.reset=()=>{this._distractionType=o.Default,this.startTimer(0),this._updateDistractionVisuals()},this.startTimer=t=>{this._countdown=this._scene.time.addEvent({delay:t})},this._updateDistractionVisuals=()=>{this._sprite.setTexture(this._distractionType),this._sprite.play(`${this._distractionType}Animation`),this._distractionType==o.Default?this._background.clearTint():this._background.setTint(e[this._distractionType].color)},this._scene=t,this._name=n;for(const[,o]of Object.entries(e)){const e=`${o.name}Animation`,s=t.textures.get(o.name).getFrameNames().sort().map((t=>({key:o.name,frame:t})));a(t.anims,e,s)}this._background=this._scene.add.image(s,i-this._backgroundVerticalOffset,"bgBeige").setScale(.6,.6),this._sprite=t.add.sprite(s,i,o.Default),this._topLeft=this._background.getTopLeft(),this._topRight=this._background.getTopRight(),this._width=this._topRight.x-this._topLeft.x,this._countDownBar=this._scene.add.rectangle(this._topLeft.x,this._topLeft.y+6,0,12,25599),this._updateDistractionVisuals(),this._background.setInteractive().on("pointerdown",this.emitClickEvent,this._scene),this._character=this._scene.add.image(s,i+3.5,r).setScale(.6,.6)}update(){if(null!=this._countdown){let t=this._countdown.getProgress();this._countDownBar.width=this._width-this._width*t,this._countDownBar.isFilled=!0,1==t&&(this.emitExpiredDistractionEvent(),this.reset())}}}const l={lvl1:{name:"lvl1",allowedDistractionTypes:[o.Dots],maximumActiveDistractions:3,countdownInterval:5e3,spawnIntervalRange:{minimum:500,maximum:2e3},levelDuration:45e3},lvl2:{name:"lvl2",allowedDistractionTypes:[o.Dots,o.Question],maximumActiveDistractions:3,countdownInterval:5e3,spawnIntervalRange:{minimum:800,maximum:2e3},levelDuration:45e3},lvl3:{name:"lvl3",allowedDistractionTypes:[o.Dots,o.Question,o.Food],maximumActiveDistractions:3,countdownInterval:5e3,spawnIntervalRange:{minimum:800,maximum:2e3},levelDuration:45e3},lvl4:{name:"lvl4",allowedDistractionTypes:[o.Dots,o.Question,o.Food,o.Wakeup],maximumActiveDistractions:3,countdownInterval:5e3,spawnIntervalRange:{minimum:800,maximum:2e3},levelDuration:45e3},lvl5:{name:"lvl5",allowedDistractionTypes:[o.Dots,o.Question,o.Food,o.Wakeup],maximumActiveDistractions:3,countdownInterval:5e3,spawnIntervalRange:{minimum:500,maximum:1500},levelDuration:45e3},lvl6:{name:"lvl6",allowedDistractionTypes:[o.Dots,o.Question,o.Food,o.Wakeup],maximumActiveDistractions:4,countdownInterval:5e3,spawnIntervalRange:{minimum:1e3,maximum:2e3},levelDuration:45e3},lvl7:{name:"lvl7",allowedDistractionTypes:[o.Dots,o.Question,o.Food,o.Wakeup],maximumActiveDistractions:5,countdownInterval:5e3,spawnIntervalRange:{minimum:1e3,maximum:2e3},levelDuration:45e3},lvl8:{name:"lvl8",allowedDistractionTypes:[o.Dots,o.Question,o.Food,o.Wakeup],maximumActiveDistractions:6,countdownInterval:5e3,spawnIntervalRange:{minimum:1200,maximum:2200},levelDuration:45e3},lvl9:{name:"lvl9",allowedDistractionTypes:[o.Dots,o.Question,o.Food,o.Wakeup],maximumActiveDistractions:6,countdownInterval:5e3,spawnIntervalRange:{minimum:1e3,maximum:2e3},levelDuration:45e3}};class c extends Phaser.Scene{constructor(){super("lvl"),this.isGameOver=!1,this.gpa="0.00",this.comboCount=0,this.earnedPoints=0,this.successCount=0,this.heatLevel=0,this.totalSpawnedDistractions=0,this.totalPossibleScore=0,this.currentClickedDistraction=o.Default,this.allowedDistractionTypes=[],this.distractionTiles={l1c1:r,l1c2:r,l1c3:r,l2c1:r,l2c2:r,l2c3:r},this.gameOverScreenComponents={description:Phaser.GameObjects.Text,title:Phaser.GameObjects.Text,gpa:Phaser.GameObjects.Text,accuracy:Phaser.GameObjects.Text,button:Phaser.GameObjects.Text,retry:Phaser.GameObjects.Text,exit:Phaser.GameObjects.Text,buttonArea:Phaser.Geom.Rectangle,stars:Phaser.GameObjects.Image},this.updateGpa=()=>{0===this.earnedPoints?this.gpa="0.00":this.gpa=(this.earnedPoints/this.totalPossibleScore*4).toFixed(2),this.gpaText.setText(`GPA: ${this.gpa}`)},this.setHeatLevel=()=>{this.comboCount<=2?this.heatLevel=1.5:this.comboCount<=5?this.heatLevel=2.25:this.comboCount<=8?this.heatLevel=3.25:this.comboCount<=10?this.heatLevel=3.5:this.heatLevel=3.75},this.incrementTotalPossibleScore=()=>{this.totalSpawnedDistractions<=2?this.totalPossibleScore+=1.5:this.totalSpawnedDistractions<=5?this.totalPossibleScore+=2.25:this.totalSpawnedDistractions<=8?this.totalPossibleScore+=3.25:this.totalSpawnedDistractions<=10?this.totalPossibleScore+=3.5:this.totalPossibleScore+=3.75},this.resetCursor=()=>{this.input.setDefaultCursor(`url(${e.default.cursor}), pointer`)},this.getNonDistractedTileNames=()=>{const t=[];for(const e of Object.keys(this.distractionTiles))this.distractionTiles[e].isDistracted()||t.push(e);return t},this.getRandomAllowedDistractionType=()=>{const t=Phaser.Math.Between(0,this.allowedDistractionTypes.length-1);return this.allowedDistractionTypes[t]},this.handleDistractionSpawning=()=>{const t=this.getNonDistractedTileNames(),e=Object.keys(this.distractionTiles).length-t.length,s=this.mainTimer.getRemaining()>this.countdownInterval;if(e<this.maximumActiveDistractions&&s){const e=t[Phaser.Math.Between(0,t.length-1)];this.distractionTiles[e].setDistraction(this.getRandomAllowedDistractionType(),this.countdownInterval),this.totalSpawnedDistractions++,this.incrementTotalPossibleScore()}if(s){const t=Phaser.Math.Between(this.spawnIntervalRange.minimum,this.spawnIntervalRange.maximum);this.setSpawnTimer(t)}},this.setSpawnTimer=t=>{this.spawnTimer=this.time.delayedCall(t,this.handleDistractionSpawning,[],this)},this.setupDistractionButton=(t,s,i)=>{let a=e[t],o=this.add.sprite(s,i,`${t}Button`);o.setInteractive({cursor:`url(${a.cursor}), pointer`}),o.on("pointerdown",(()=>{this.isGameOver||(o.setTint(a.color),this.input.setDefaultCursor(`url(${a.cursor}), pointer`),this.currentClickedDistraction=t)}))},this.generateDistractionButtons=()=>{for(const[,t]of Object.entries(e))this.allowedDistractionTypes.includes(t.name)&&this.setupDistractionButton(t.name,t.x,t.y)},this.updateRemainingTime=()=>{const t=this.mainTimer.getRemainingSeconds().toFixed(2),e=t.indexOf("."),s=t.substring(e+1);let i=t.substring(0,e);i.length<2&&(i=`0${i}`),this.text.setText(`Time: ${i}:${s}`)},this.updateTiles=()=>{Object.keys(this.distractionTiles).forEach((t=>this.distractionTiles[t].update()))},this.returnToLevelSelector=()=>{this.turnOffEvents(),this.scene.stop("lvl"),this.scene.start("start")},this.nextLevel=()=>{this.turnOffEvents();const t=parseInt(this.name[this.name.length-1]),e=l[`lvl${t+1}`];this.scene.restart(e)},this.restartLevel=()=>{this.turnOffEvents(),this.scene.restart(l[this.name])},this.turnOffEvents=()=>{this.events.off("distractionClick"),this.events.off("expiredDistraction"),this.events.off("pointerdown")},this.saveLevelStarsToLocalStorage=()=>{this.previousStars?parseInt(this.previousStars)<this.numberOfStars&&localStorage.setItem(this.name,this.numberOfStars.toString()):localStorage.setItem(this.name,this.numberOfStars.toString())}}resetSceneParameters(){this.isGameOver=!1,this.gpa="0.00",this.comboCount=0,this.earnedPoints=0,this.successCount=0,this.heatLevel=0,this.totalSpawnedDistractions=0,this.totalPossibleScore=0,this.currentClickedDistraction=o.Default,this.allowedDistractionTypes=[],this.distractionTiles={l1c1:r,l1c2:r,l1c3:r,l2c1:r,l2c2:r,l2c3:r}}setSceneData(t){this.resetSceneParameters(),this.name=t.name,this.allowedDistractionTypes=t.allowedDistractionTypes,this.maximumActiveDistractions=t.maximumActiveDistractions,this.countdownInterval=t.countdownInterval,this.spawnIntervalRange=t.spawnIntervalRange,this.levelDuration=t.levelDuration,this.previousStars=localStorage.getItem(this.name)}handleDistractionButtonOnClick(t){this.currentClickedDistraction!==o.Default&&t.distractionType==this.currentClickedDistraction?(this.comboCount++,this.setHeatLevel(),this.successCount++,this.earnedPoints+=this.heatLevel,this.distractionTiles[t.name].reset(),this.correctClickSound.play()):(this.comboCount=0,this.incorrectClickSound.play()),this.currentClickedDistraction=o.Default,this.resetCursor()}updateHeatGauge(){let t;t=this.comboCount>=11?1:this.comboCount/11;const e=Math.floor(this.heatGauge.height*t);this.heatGauge.frame.height=e<=0?1:e,this.heatGauge.frame.cutHeight=e,this.heatGauge.flipY=!0}handleGameSound(){let t=this.gameSound.rate;!this.gameSound.loop&&t<1.5?(t+=.051,this.gameSound.setRate(t),this.gameSound.play(),this.gameSound.once("complete",(()=>this.handleGameSound()))):(this.gameSound.setLoop(!0),this.gameSound.play())}drawGameOverScreen(){let t,e,s,i=Math.floor(this.successCount/this.totalSpawnedDistractions*100);const a=parseFloat(this.gpa),o=`GPA: ${this.gpa}/4.00`;i||(i=0),a<2?(s=0,e="No one is paying attention",t="Poor Class",this.numberOfStars=0):a<2.6?(s=1,e="It’s one of those classes, isn’t it",t="Average Class",this.numberOfStars=1):a<3.6?(s=2,e="Students are slightly distracted",t="Good Class",this.numberOfStars=2):(s=3,e="Everyone is paying attention",t="Excellent Class!",this.numberOfStars=3),this.gameOverScreenComponents.stars=this.add.image(this.screenCenterX,250,`${s}star`),this.graphics.fillStyle(16777215,1),this.graphics.fillRect(180,84.5,540,417),this.graphics.fillStyle(16777215,1),this.gameOverScreenComponents.description=this.add.text(this.screenCenterX,150,e,{fontFamily:"Roboto",resolution:2.5}).setFontSize(20).setOrigin(.5,0).setColor("grey"),this.gameOverScreenComponents.title=this.add.text(this.screenCenterX,180,t,{fontFamily:"Roboto",fontStyle:"bold",resolution:2.5}).setFontSize(30).setOrigin(.5,0).setColor("black"),this.gameOverScreenComponents.gpa=this.add.text(this.screenCenterX,290,o,{fontFamily:"Roboto",resolution:2.5}).setFontSize(20).setOrigin(.5,0).setColor("grey"),this.gameOverScreenComponents.accuracy=this.add.text(this.screenCenterX,320,`Accuracy: ${i}%`,{fontFamily:"Roboto",resolution:2.5}).setFontSize(20).setOrigin(.5,0).setColor("grey"),this.gameOverScreenComponents.button=this.add.text(this.screenCenterX,375,"Next Class",{fontFamily:"Roboto",fontStyle:"bold",resolution:2.5}).setFontSize(20).setOrigin(.5,0).setColor("white");let n=this.gameOverScreenComponents.button.getBounds();this.gameOverScreenComponents.buttonArea=this.add.rectangle(n.x-20,n.y-7.5,n.width+40,n.height+15).setOrigin(.5,0),this.previousStars&&parseInt(this.previousStars)>=1||this.numberOfStars>=1?(this.gameOverScreenComponents.buttonArea.setInteractive().on("pointerdown",(()=>this.nextLevel())),this.graphics.fillStyle(255,1)):this.graphics.fillStyle(12895428,1),this.graphics.fillRoundedRect(n.x-20,n.y-7.5,n.width+40,n.height+15,4),this.graphics.fillStyle(255,1),this.gameOverScreenComponents.retry=this.add.text(this.screenCenterX,430,"Try Again",{fontFamily:"Roboto",fontSize:"400",resolution:3}).setColor("blue").setFontSize(15).setInteractive().setOrigin(.5,0).on("pointerdown",(()=>this.restartLevel()));let r=this.gameOverScreenComponents.retry.getBounds();this.graphics.fillRect(r.x,r.bottom-2,r.width,1),this.gameOverScreenComponents.exit=this.add.text(this.screenCenterX,465,"Back to home screen",{fontFamily:"Roboto",fontSize:"400",resolution:3}).setFontSize(15).setColor("blue").setInteractive().setOrigin(.5,0).on("pointerdown",(()=>this.returnToLevelSelector()));let l=this.gameOverScreenComponents.exit.getBounds();this.graphics.fillRect(l.x,l.bottom-2,l.width,1)}onGameTimeOver(){this.isGameOver=!0,this.resetCursor(),this.gameSound.stop(),this.drawGameOverScreen(),this.saveLevelStarsToLocalStorage()}create(e){this.setSceneData(e),this.screenCenterX=this.cameras.main.worldView.x+this.cameras.main.width/2,this.heatGauge=this.add.sprite(826,294,"heat_gauge"),this.add.image(460,322,"heatBg"),this.distractionTiles.l1c1=new r(this,150,196,"l1c1",t.boy1),this.distractionTiles.l1c2=new r(this,400,196,"l1c2",t.boy2),this.distractionTiles.l1c3=new r(this,650,196,"l1c3",t.girl1),this.distractionTiles.l2c1=new r(this,150,410,"l2c1",t.girl2),this.distractionTiles.l2c2=new r(this,400,410,"l2c2",t.girl3),this.distractionTiles.l2c3=new r(this,650,410,"l2c3",t.girl4),this.generateDistractionButtons(),this.setSpawnTimer(3e3),this.events.on("distractionClick",(t=>{this.isGameOver||this.handleDistractionButtonOnClick(t)})),this.events.on("expiredDistraction",(()=>{this.comboCount=0,this.incorrectClickSound.play()})),this.resetCursor(),this.text=this.add.text(40,40,"",{fontFamily:"Roboto",resolution:2.5}).setFontSize(20),this.mainTimer=this.time.delayedCall(this.levelDuration,this.onGameTimeOver,[],this),this.gpaText=this.add.text(640,40,"",{fontFamily:"Roboto",resolution:2.5}).setFontSize(20),this.correctClickSound=this.sound.add("correct",{volume:.5}),this.incorrectClickSound=this.sound.add("incorrect",{volume:.3}),this.gameSound=this.sound.add("tadara"),this.handleGameSound(),this.graphics=this.add.graphics()}update(){this.updateRemainingTime(),this.updateGpa(),this.updateTiles(),this.updateHeatGauge()}}class h extends Phaser.Scene{constructor(){super("instructions")}create(){this.screenCenterX=this.cameras.main.worldView.x+this.cameras.main.width/2,this.instructionScreen=this.add.image(0,0,"tutorial").setOrigin(0,0),this.input.setDefaultCursor("url(assets/img/cursors/cdefault.png), pointer"),this.close=this.add.image(70,80,"close").setInteractive().setScale(.6).on("pointerdown",(()=>{this.scene.stop("instruction"),this.bgm.stop(),this.scene.start("start")})),this.startNowButton=this.add.image(this.screenCenterX,550,"startnow").setOrigin(.5,0),this.bgm=this.sound.add("bgm"),this.bgm.loop=!0,this.bgm.play(),this.startNowButton.setInteractive().on("pointerdown",(()=>{this.scene.stop("instruction"),this.bgm.stop(),this.scene.start("selectlvl")}))}}class m extends Phaser.Scene{constructor(){super("selectlvl"),this.levelCompletionData={lvl1:{stars:0,isUnlocked:!0,selector:{}},lvl2:{stars:0,isUnlocked:!1,selector:{}},lvl3:{stars:0,isUnlocked:!1,selector:{}},lvl4:{stars:0,isUnlocked:!1,selector:{}},lvl5:{stars:0,isUnlocked:!1,selector:{}},lvl6:{stars:0,isUnlocked:!1,selector:{}},lvl7:{stars:0,isUnlocked:!1,selector:{}},lvl8:{stars:0,isUnlocked:!1,selector:{}},lvl9:{stars:0,isUnlocked:!1,selector:{}}}}getLocalStorageData(){for(const[t,e]of Object.entries(this.levelCompletionData)){let s=localStorage.getItem(t);e.stars=s?parseInt(s):0}for(let t=9;t>=1;t--){let e=this.levelCompletionData[`lvl${t}`];if(1==t)e.isUnlocked=!0;else{let s=this.levelCompletionData["lvl"+(t-1)];e.isUnlocked=s.stars>=1}}}renderLevelTiles(){let t=325,e=200;for(const[s,i]of Object.entries(this.levelCompletionData)){let a=parseInt(s[s.length-1]);i.selector=this.add.image(t,e,"").setScale(.6);let o=i.selector.getBounds();i.isUnlocked?(i.selector.setTexture("nonselectedlvl").setInteractive().on("pointerdown",(()=>{this.selectedLevel&&this.levelCompletionData[this.selectedLevel].selector.setTexture("nonselectedlvl"),i.selector.setTexture("selectedlvl"),this.selectedLevel=s})),this.add.text(o.centerX,o.y,a.toString(),{fontFamily:"Roboto",fontStyle:"bold",resolution:3}).setFontSize(45).setOrigin(.5,.5),this.add.image(o.centerX,o.centerY+10,`${i.stars}starlvl`).setScale(.6).setOrigin(.5,0)):i.selector.setTexture("lockedlvl"),a%3==0&&a<=9?(e+=115,t=325):t+=125}}create(){this.getLocalStorageData(),this.cameras.main.backgroundColor.setTo(188,188,188),this.screenCenterX=this.cameras.main.worldView.x+this.cameras.main.width/2,this.screenCenterY=this.cameras.main.worldView.y+this.cameras.main.height/2,this.selectLvlBg=this.add.image(this.screenCenterX,this.screenCenterY,"selectlvlbg").setOrigin(.5,.5).setScale(.6),this.bgm=this.sound.add("bgm",{volume:.5}),this.bgm.loop=!0,this.bgm.play(),this.close=this.add.image(175,120,"close").setInteractive().setScale(.6).setTint(0).on("pointerdown",(()=>{this.scene.stop("selectlvl"),this.bgm.stop(),this.scene.start("start")})),this.startNowButton=this.add.image(this.screenCenterX,520,"startnow").setOrigin(.5,0),this.startNowButton.setInteractive().on("pointerdown",(()=>{this.scene.stop("instruction"),this.bgm.stop();const t=l[this.selectedLevel];this.scene.start("lvl",t)})),this.renderLevelTiles()}}const d={type:Phaser.AUTO,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},width:900,height:640,scene:[s,i,m,c,h]};new Phaser.Game(d);
