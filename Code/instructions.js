var backButton, nextButton;

function createInstructions(text){

//****************************************************************************************************************************//
// Instructions Pane

	var instructionPanePos = {x : 0.01*width, y : 0.01*height};
	var instructionPaneSize = { width : 0.98*width, height : 0.1*height };
	var instructionPane = canvas.append("g")
								.attr("transform", "translate(" +instructionPanePos.x+ "," +instructionPanePos.y+ ")");
	instructionPane.append("rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", instructionPaneSize.width)
					.attr("height", instructionPaneSize.height)
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("fill", "white");

//****************************************************************************************************************************//
// Instructions

	instructionPane.append("text")
					.attr("x", 0.01*instructionPaneSize.width)
					.attr("y", 0.6*instructionPaneSize.height)
					.attr("inline-size", instructionPaneSize.width)
					.style("font-size", 24*(Math.pow(scalingFactor,0.5)))
					.text("Pendulum Simulation : " + text);

//****************************************************************************************************************************//
// Back Button

	backButton = instructionPane.append("g").attr("transform", "translate(" +0.84*instructionPaneSize.width+ "," +0.25*instructionPaneSize.height+ ")");

	backButton.append("text")
				.attr("x", 0.5*75*(Math.pow(scalingFactor,0.5)))
				.attr("y", 0.5*36*(Math.pow(scalingFactor,0.5)))
				.style("font-size", 22*(Math.pow(scalingFactor,0.5)))
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.text("Back")
				.style("cursor", "hand");

	backButton.append("rect")
				.attr("rx", 10)
				.attr("ry", 10)
				.attr("width", 75*(Math.pow(scalingFactor,0.5)))
				.attr("height", 36*(Math.pow(scalingFactor,0.5)))
				.attr("stroke", "gray")
				.attr("stroke-width", 3)
				.attr("fill", "white")
				.attr("fill-opacity", 0.2)
				.style("cursor", "pointer")
				.on("mouseover", function(){
					d3.select(this).attr("fill", "gray");
				})
				.on("mouseout", function(){
					d3.select(this).attr("fill", "white");
				});

//****************************************************************************************************************************//
// Next Button

	nextButton = instructionPane.append("g").attr("transform", "translate(" +0.92*instructionPaneSize.width+ "," +0.25*instructionPaneSize.height+ ")");
				
	nextButton.append("text")
				.attr("x", 0.5*75*(Math.pow(scalingFactor,0.5)))
				.attr("y", 0.5*36*(Math.pow(scalingFactor,0.5)))
				.style("font-size", 22*(Math.pow(scalingFactor,0.5)))
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.text("Next")
				.style("cursor", "pointer");

	nextButton.append("rect")
				.attr("rx", 10)
				.attr("ry", 10)
				.attr("width", 75*(Math.pow(scalingFactor,0.5)))
				.attr("height", 36*(Math.pow(scalingFactor,0.5)))
				.attr("stroke", "gray")
				.attr("stroke-width", 3)
				.attr("fill", "white")
				.attr("fill-opacity", 0.2)
				.style("cursor", "pointer")
				.on("mouseover", function(){
					d3.select(this).attr("fill", "gray");
				})
				.on("mouseout", function(){
					d3.select(this).attr("fill", "white");
				});

}