var paintboard = function(){
	var colorChoice = "";

	for (var i = 0; i <= 1000; i++){
			var newDiv = document.createElement("div");
			newDiv.id = "board";
			newDiv.style.paddingBottom = "1.5%";
			newDiv.style.backgroundColor = "white";
			newDiv.style.width= "1.5%";
			newDiv.style.float="left";
			newDiv.style.borderStyle = "groove";
			document.body.appendChild(newDiv);
	}
		var palette = document.createElement("div");
		document.body.appendChild(palette);

		var palette = document.createElement("div");
		document.body.appendChild(palette);
		
		var blueBrush = document.createElement("div");
			blueBrush.id = "paint";
			blueBrush.style.paddingBottom = "1.5%";
			blueBrush.style.backgroundColor = "#6466E8";
			blueBrush.style.width= "1.5%";
			blueBrush.style.float="left";
			blueBrush.style.borderStyle = "groove";
			palette.appendChild(blueBrush);

		var skyBlueBrush = document.createElement("div");
			skyBlueBrush.id = "paint";
			skyBlueBrush.style.paddingBottom = "1.5%";
			skyBlueBrush.style.backgroundColor = "#4DC1E8";
			skyBlueBrush.style.width= "1.5%";
			skyBlueBrush.style.float="left";
			skyBlueBrush.style.borderStyle = "groove";
			palette.appendChild(skyBlueBrush);

		var lightGreenBrush = document.createElement("div");
			lightGreenBrush.id = "paint";
			lightGreenBrush.style.paddingBottom = "1.5%";
			lightGreenBrush.style.backgroundColor = "#9ED96F";
			lightGreenBrush.style.width= "1.5%";
			lightGreenBrush.style.float="left";
			lightGreenBrush.style.borderStyle = "groove";
			palette.appendChild(lightGreenBrush);

		var greenBrush = document.createElement("div");
			greenBrush.id = "paint";
			greenBrush.style.paddingBottom = "1.5%";
			greenBrush.style.backgroundColor = "#02CF4A";
			greenBrush.style.width= "1.5%";
			greenBrush.style.float="left";
			greenBrush.style.borderStyle = "groove";
			palette.appendChild(greenBrush);

		var yellowBrush = document.createElement("div");
			yellowBrush.id = "paint";
			yellowBrush.style.paddingBottom = "1.5%";
			yellowBrush.style.backgroundColor = "#E6DF25";
			yellowBrush.style.width= "1.5%";
			yellowBrush.style.float="left";
			yellowBrush.style.borderStyle = "groove";
			palette.appendChild(yellowBrush);

		var redBrush = document.createElement("div");
			redBrush.id = "paint";
			redBrush.style.paddingBottom = "1.5%";
			redBrush.style.backgroundColor = "#E62825";
			redBrush.style.width= "1.5%";
			redBrush.style.float="left";
			redBrush.style.borderStyle = "groove";
			palette.appendChild(redBrush);

		var pinkBrush = document.createElement("div");
			pinkBrush.id = "paint";
			pinkBrush.style.paddingBottom = "1.5%";
			pinkBrush.style.backgroundColor = "#E38AC4";
			pinkBrush.style.width= "1.5%";
			pinkBrush.style.float="left";
			pinkBrush.style.borderStyle = "groove";
			palette.appendChild(pinkBrush);

		var purpleBrush = document.createElement("div");
			purpleBrush.id = "paint";
			purpleBrush.style.paddingBottom = "1.5%";
			purpleBrush.style.backgroundColor = "#A208CC";
			purpleBrush.style.width= "1.5%";
			purpleBrush.style.float="left";
			purpleBrush.style.borderStyle = "groove";
			palette.appendChild(purpleBrush);

		var brownBrush = document.createElement("div");
			brownBrush.id = "paint";
			brownBrush.style.paddingBottom = "1.5%";
			brownBrush.style.backgroundColor = "#54391B";
			brownBrush.style.width= "1.5%";
			brownBrush.style.float="left";
			brownBrush.style.borderStyle = "groove";
			palette.appendChild(brownBrush);

		var blackBrush = document.createElement("div");
			blackBrush.id = "paint";
			blackBrush.style.paddingBottom = "1.5%";
			blackBrush.style.backgroundColor = "#000";
			blackBrush.style.width= "1.5%";
			blackBrush.style.float="left";
			blackBrush.style.borderStyle = "groove";
			palette.appendChild(blackBrush);

		var whiteBrush = document.createElement("div");
			whiteBrush.id = "paint";
			whiteBrush.style.paddingBottom = "1.5%";
			whiteBrush.style.backgroundColor = "#FFF";
			whiteBrush.style.width= "1.5%";
			whiteBrush.style.float="left";
			whiteBrush.style.borderStyle = "groove";
			palette.appendChild(whiteBrush);


/*		var colorArr = ["red", "blue", "green", "yellow", "brown", "black", "white", "pink", "limegreen", "rebeccapurple", "orange"]
		for (var j = 0; j <colorArr.length; j++){
			var paintbrush = document.createElement("div");
			paintbrush.id = "paint";
			paintbrush.style.paddingBottom = "1.5%";
			paintbrush.style.backgroundColor = colorArr[j];
			paintbrush.style.width= "1.5%";
			paintbrush.style.float="left";
			paintbrush.style.borderStyle = "groove";
			palette.appendChild(paintbrush);
		}
*/
		// var paintbrush = document.querySelectorAll("div#paint");
		// for (var k = 0; k < paintbrush.length; k++){
		// 	paintbrush[k].addEventListener("click", function(){
		// 		this.style.backgroundColor

		// 	})
		// }

		var paletteDivs = document.querySelectorAll("div#paint");
		for (var j = 0; j < paletteDivs.length; j++){
			paletteDivs[j].addEventListener("click", function(){
			colorChoice = this.style.backgroundColor;
			})
		}

		var divs = document.querySelectorAll("div#board");
		for (var l = 0; l < divs.length; l++){
			divs[l].addEventListener("click", function(){
			this.style.backgroundColor = colorChoice;
			})
		}
	}
paintboard();
 