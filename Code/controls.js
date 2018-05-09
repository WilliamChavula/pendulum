function createControls(){

//****************************************************************************************************************************//
// Controls Pane

	var controls_Pane_Pos = {x : 0.01*width, y : 0.6*height};
	var controls_Pane_Size = { width : 0.3*width, height : 0.12*height };
	var controls_Pane = canvas.append("g")
								.attr("transform", "translate(" +controls_Pane_Pos.x+ "," +controls_Pane_Pos.y+ ")");

//****************************************************************************************************************************//
// Controls Icons

	controls_Pane.append("rect")
				.attr("x", 0)
				.attr("y", 0)
				.attr("width", controls_Pane_Size.width)
				.attr("height", controls_Pane_Size.height)
				.attr("rx", 5)
				.attr("ry", 5)
				.attr("fill", "white");

	controls_Pane.append("g")
				.attr("transform", "translate(" +0.04*width+ "," +0.025*height+ ")")
				.append("image")
				.attr("xlink:href", "../Images/play.jpg")
				.attr("id", "playButton")
				.style("cursor", "hand")
				.attr("width", 0.07*height)
				.attr("height", 0.07*height)
				.on("click", function(){
					startTimer();
				})
				.append("title")
				.text("Play");

	controls_Pane.append("g")
				.attr("transform", "translate(" +0.12*width+ "," +0.025*height+ ")")
				.append("image")
				.attr("xlink:href", "../Images/pause.png")
				.style("cursor", "hand")
				.attr("id", "pauseButton")
				.attr("display", "none")
				.attr("width", 0.07*height)
				.attr("height", 0.07*height)
				.on("click", function(){
					pauseTimer();
				})
				.append("title")
				.text("Pause");

	controls_Pane.append("g")
				.attr("transform", "translate(" +0.2*width+ "," +0.025*height+ ")")
				.append("image")
				.style("cursor", "hand")
				.attr("xlink:href", "../Images/reset.png")
				.attr("width", 0.07*height)
				.attr("height", 0.07*height)
				.on("click", function(){
					reset();
				})
				.append("title")
				.text("Reset");

}
