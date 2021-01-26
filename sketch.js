var player;
var blockPlacement;
var x1,y1,x2,y2;
var blockGroup;
var blockType;
var test;
var intr;
var blockSound;
var pos1, pos2, pos3, pos4;
var database;
var saveStuffObject;
var index = 1;
var blockCount = 0;

function preload(){
	blockSound = loadSound("Sounds/placementSound.mp3");
}

function setup(){
createCanvas(1000,750);


database = firebase.database();
saveStuffObject = new SaveBlocks();

pos1 = 0;
pos2 = 0;
pos3 = 0;
pos4 = 0;
x2 = 0;
y2 = 0;

player = createSprite(500,375,50,50);
player.shapeColor = "red";
blockPlacement = createSprite(500,500,50,50);
blockPlacement.tint = 50;

intr = createSprite(100,75,50,100);
intr.visible = false;

test = 0;

x1 = 0;
y1 = 0;

blockGroup = new Group();
blockType = "stone";
}

function draw(){
	background("green");
	textSize(25);
	text("Instrutions(Q)", 50, 75);
	if (keyDown("Q")){
		textSize(20);
		text("E = Stone, R = Wood, Z = Eraser, Shift = Build Lock, Space = No Clip, F = push", 50, 150)
	}

	console.log(pos1,pos2,pos3,pos4);

	if (keyDown("E")){
		blockType = "stone";
	}
	if (keyDown("R")){
		blockType = "wood";
	}
	
	if (y1 > -6){
	if (keyDown("UP") || keyDown("W")){
		y1 = y1 - 10;
		y2 = y2 - 1;
	}
	}
	if (y1 < 6){
	if (keyDown("DOWN") || keyDown("S")){
		y1 = y1 + 10;
		y2 = y2 + 1;
	}
	}
	if (x1 > -6){
	if (keyDown("LEFT") || keyDown("A")){
		x1 = x1 - 10;
		x2 = x2 - 1;
	}
	}
	if (x1 < 6){
	if (keyDown("RIGHT") || keyDown("D")){
		x1 = x1 + 10
		x2 = x2 + 1;
	}
	}
	blockPlacement.x = mouseX;
	blockPlacement.y = mouseY;

	if (mousePressedOver(blockPlacement)){
		
		
		if (keyDown("SHIFT")){
		for(var i = 25; i < 1000; i = i + 50){
			var grid1 = createSprite(i,25,50,50);
			grid1.shapeColor = "green";
			if (blockPlacement.isTouching(grid1)){
				blockPlacement.x = grid1.x;
				blockPlacement.y = grid1.y;
			}
			grid1.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid2 = createSprite(i,75,50,50);
			grid2.shapeColor = "green";
			if (blockPlacement.isTouching(grid2)){
				blockPlacement.x = grid2.x;
				blockPlacement.y = grid2.y;
			}
			grid2.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid3 = createSprite(i,125,50,50);
			grid3.shapeColor = "green";
			if (blockPlacement.isTouching(grid3)){
				blockPlacement.x = grid3.x;
				blockPlacement.y = grid3.y;
			}
			grid3.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid4 = createSprite(i,175,50,50);
			grid4.shapeColor = "green";
			if (blockPlacement.isTouching(grid4)){
				blockPlacement.x = grid4.x;
				blockPlacement.y = grid4.y;
			}
			grid4.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid5 = createSprite(i,225,50,50);
			grid5.shapeColor = "green";
			if (blockPlacement.isTouching(grid5)){
				blockPlacement.x = grid5.x;
				blockPlacement.y = grid5.y;
			}
			grid5.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid6 = createSprite(i,275,50,50);
			grid6.shapeColor = "green";
			if (blockPlacement.isTouching(grid6)){
				blockPlacement.x = grid6.x;
				blockPlacement.y = grid6.y;
			}
			grid6.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid7 = createSprite(i,325,50,50);
			grid7.shapeColor = "green";
			if (blockPlacement.isTouching(grid7)){
				blockPlacement.x = grid7.x;
				blockPlacement.y = grid7.y;
			}
			grid7.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid8 = createSprite(i,375,50,50);
			grid8.shapeColor = "green";
			if (blockPlacement.isTouching(grid8)){
				blockPlacement.x = grid8.x;
				blockPlacement.y = grid8.y;
			}
			grid8.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid9 = createSprite(i,425,50,50);
			grid9.shapeColor = "green";
			if (blockPlacement.isTouching(grid9)){
				blockPlacement.x = grid9.x;
				blockPlacement.y = grid9.y;
			}
			grid9.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid10 = createSprite(i,475,50,50);
			grid10.shapeColor = "green";
			if (blockPlacement.isTouching(grid10)){
				blockPlacement.x = grid10.x;
				blockPlacement.y = grid10.y;
			}
			grid10.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid11 = createSprite(i,525,50,50);
			grid11.shapeColor = "green";
			if (blockPlacement.isTouching(grid11)){
				blockPlacement.x = grid11.x;
				blockPlacement.y = grid11.y;
			}
			grid11.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid12 = createSprite(i,575,50,50);
			grid12.shapeColor = "green";
			if (blockPlacement.isTouching(grid12)){
				blockPlacement.x = grid12.x;
				blockPlacement.y = grid12.y;
			}
			grid12.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid13 = createSprite(i,625,50,50);
			grid13.shapeColor = "green";
			if (blockPlacement.isTouching(grid13)){
				blockPlacement.x = grid13.x;
				blockPlacement.y = grid13.y;
			}
			grid13.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid14 = createSprite(i,675,50,50);
			grid14.shapeColor = "green";
			if (blockPlacement.isTouching(grid14)){
				blockPlacement.x = grid14.x;
				blockPlacement.y = grid14.y;
			}
			grid14.lifetime = 0;
		}
		for(var i = 25; i < 1000; i = i + 50){
			var grid15 = createSprite(i,725,50,50);
			grid15.shapeColor = "green";
			if (blockPlacement.isTouching(grid15)){
				blockPlacement.x = grid15.x;
				blockPlacement.y = grid15.y;
			}
			grid15.lifetime = 0;
		}
		}
		
		if (blockPlacement.isTouching(blockGroup)){
			console.log("no");
		}
		else{
			test = test + 1;
		placeBlock();
		
		}
		
		
	}
	//player.collide(blockGroup);
	//console.log(player.collide(blockGroup));
	if (keyDown("F")){
		blockGroup.collide(player);
		blockGroup.collide(blockGroup);
	}
	else{
	if (keyDown("SPACE")){
		console.log("yes2");
	}
	else{
	if (player.collide(blockGroup)){
		x1 = 0;
		y1 = 0;
	}
	}
	}
	for (var i = 0; i < blockGroup.length; i++){
		blockGroup.get(i).x -= x1;
		blockGroup.get(i).y -= y1;
	}
	if (test > 0){
	testBlock();
	}
	console.log(blockCount);
	drawSprites();




	x1 = 0;
	y1 = 0;
}

function placeBlock(){
	var block = createSprite(blockPlacement.x,blockPlacement.y,50,50);
	if (blockType === "stone"){
	block.shapeColor = "grey";
	}
	if (blockType === "wood"){
	block.shapeColor = "brown";
	}
	pos1 = block.x;
	pos2 = block.y;
	pos3 = x2;
	pos4 = y2;
	blockGroup.add(block);
	saveStuffObject.saveBlock();
	saveStuffObject.writeBlock();
	index++;
	blockCount++;
	blockSound.play();
	
	
}
 function testBlock(){
	if (test > 0){
		//console.log("a"+blockGroup.get(0).x);
		index--
		blockCount--
		saveStuffObject.updateBlock();
		
			//console.log("b");
			for (var i = 0; i < blockGroup.length; i++){
				if (blockGroup.get(i).isTouching(blockPlacement) && keyDown("Z")){
				//console.log("loop");
				blockGroup.get(i).lifetime = 0;
				test = test - 1;
				}
				}
		
	}
}
