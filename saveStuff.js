class SaveBlocks{
    constructor(){













    }
    saveBlock(){
        var positionRef = database.ref("blocks").on("value",(data)=>{
            positionRef = data.val();

        });




    }
    writeBlock(){
        var blockIndex = "blocks/block"+index
        database.ref(blockIndex).update({
            x1 : pos1,
            y1 : pos2,
            x2 : pos3,
            y2 : pos4,
            type : blockType
        });

    }
    updateBlock(){
        console.log("yes3");
        var blockIndex = "blocks/block"+index
        database.ref("blocks").update({
            blockIndex : null
        });
    }
}