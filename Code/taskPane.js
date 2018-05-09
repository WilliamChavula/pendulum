function createTaskPane(){

//****************************************************************************************************************************//
// Task Pane

	var taskPanePos = {x : 0.68*width, y : 0.13*height};
	var taskPaneSize = { width : 0.31*width, height : 0.45*height };
	var taskPane = canvas.append("g")
								.attr("transform", "translate(" +taskPanePos.x+ "," +taskPanePos.y+ ")");
	taskPane.append("rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", taskPaneSize.width)
					.attr("height", taskPaneSize.height)
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("fill", "white");

//****************************************************************************************************************************//
// Task Pane

	taskPane.append("text")
			.attr("x", 0.01*taskPaneSize.width)
			.attr("y", 0.1*taskPaneSize.height)
			.style("font-size", 24*(scalingFactor**0.5))
			.text(instruction);

}
