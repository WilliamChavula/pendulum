function createNumerics(){

//****************************************************************************************************************************//
// Numerics Pane

	var numerics_Pane_Pos = {x : 0.01*width, y : 0.745*height};
	var numerics_Pane_Size = { width : 0.3*width, height : 0.24*height };
	var numerics_Pane = canvas.append("g")
								.attr("transform", "translate(" +numerics_Pane_Pos.x+ "," +numerics_Pane_Pos.y+ ")");

//****************************************************************************************************************************//
// Numerics Text

	numerics_Pane.append("rect")
				.attr("x", 0)
				.attr("y", 0)
				.attr("width", numerics_Pane_Size.width)
				.attr("height", numerics_Pane_Size.height)
				.attr("rx", 5)
				.attr("ry", 5)
				.attr("fill", "white");

	var initialAngleText = numerics_Pane.append("text")
									.attr("x", 0.03*width)
									.attr("y", 0.05*height)
									.style("font-size", 24*(Math.pow(scalingFactor,0.5)))
									.style("font-family", "sans serif");

	initialAngleText.append("tspan")
				.attr("font-size", 24*(Math.pow(scalingFactor,0.5)))
				.text("Initial Angle : " + theta);

	initialAngleText.append("tspan")
				.attr("font-size", 18*(Math.pow(scalingFactor,0.5)))
				.attr("font-weight", "normal")
				.attr("baseline-shift", "sub")
				.text("0");

	initialAngleText.append("tspan")
				.attr("id", "initialAngleText")
				.attr("font-size", 24*(Math.pow(scalingFactor,0.5)))
				.text("(t) = " + initialAngle.toFixed(0) + degree);

	numerics_Pane.append("text")
				.attr("id", "angleText")
				.attr("x", 0.03*width)
				.attr("y", 0.1*height)
				.style("font-size", 24*(Math.pow(scalingFactor,0.5)))
				.text("Angle : " +theta+ "(t) = " + angle.toFixed(0) + degree);

	numerics_Pane.append("text")
				.attr("id", "lengthText")
				.attr("x", 0.03*width)
				.attr("y", 0.15*height)
				.style("font-size", 24*(Math.pow(scalingFactor,0.5)))
				.text("Length : L = " + rope_length.toFixed(1) + " metres");

	numerics_Pane.append("text")
				.attr("id", "timeText")
				.attr("x", 0.03*width)
				.attr("y", 0.2*height)
				.style("font-size", 24*(Math.pow(scalingFactor,0.5)))
				.text("Time : t = " + simulationTime.toFixed(1) + " seconds");

}

//****************************************************************************************************************************//
// Update Function

function updateNumericsPane(){
	d3.select("#initialAngleText").text("(t) = " + initialAngle.toFixed(0) + degree);
	d3.select("#lengthText").text("Length : L = " + rope_length.toFixed(1) + " metres");
	d3.select("#angleText").text("Angle : " +theta+ "(t) = " + angle.toFixed(0) + degree);
	d3.select("#timeText").text("Time : t = " + oscillationTime.toFixed(1) + " seconds");
}
