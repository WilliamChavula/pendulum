//****************************************************************************************************************************//
// Equation Function

var dispatch = d3.dispatch("initialAngleChange", "lengthChange", "angleChange");
// var dialIDs = []
var initialAngleDial;
var r;

var numberVisibility = false;

function createEquation(){

//****************************************************************************************************************************//
// Equation Pane

	var equationPanePos = {x : 0.32*width, y : 0.13*height};
	var equationPaneSize = {width : 0.35*width, height : 0.45*height};
	var equationPane = canvas.append("g")
								.attr("id", "equationPane")
								.attr("transform", "translate(" +equationPanePos.x+ "," +equationPanePos.y+ ")");
	equationPane.append("rect")
				.attr("x", 0)
				.attr("y", 0)
				.attr("width", 1.25*equationPaneSize.width)
				.attr("height", equationPaneSize.height)
				.attr("rx", 5)
				.attr("ry", 5)
				.attr("fill", "white");

//****************************************************************************************************************************//
// Equation Values

	r = 0.1*equationPaneSize.width;

	// Angle
	var equationAngle =  equationPane.append("text")
				.attr("id", "equationAngle")
				.attr("x", 0.12*equationPaneSize.width)
				.attr("y", 0.5*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle");

	equationAngle.append("tspan")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text(theta);

	equationAngle.append("tspan")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text("(t)");

	var equationAngleValue = equationPane.append("text")
				.attr("id", "equationAngleValue")
				.attr("display", "none")
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("x", 0.12*equationPaneSize.width)
				.attr("y", 0.5*equationPaneSize.height)
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text(angle.toFixed(0) + degree);

	equationPane.append("circle")
				.attr("display", "none")
				.attr("cx", 0.12*equationPaneSize.width)
				.attr("cy", 0.5*equationPaneSize.height)
				.attr("r", r)
				.attr("fill", "#DDD")
				.attr("opacity", 0.5);

	var angleDialCenterPos = {x : 0.12*equationPaneSize.width, y : 0.5*equationPaneSize.height};
	var equationPaneID = "equationPane";
	var dialID = "angleDial";
	var dispatchIdentifier = "angleChange";
	
	createDial(angleDialCenterPos, equationPaneID, r, min_angle, max_angle, dialID, dispatchIdentifier, false, angle);
	dispatch.on("angleChange", function(d){
		angle = d.value;
		initialAngle = d.value;
		oscillationPauseTime = 0;
		oscillationTime = 0;
		update();
	})

	// Equals Sign
	equationPane.append("text")
		.attr("x", 0.12*equationPaneSize.width + 1.6*r)
		.attr("y", 0.5*equationPaneSize.height)
		.attr("text-anchor", "middle")
		.attr("dominant-baseline", "middle")
		.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
		.text("=");

	equationPane.append("circle")
				.attr("display", "none")
				.attr("cx", 0.12*equationPaneSize.width + 1.6*r)
				.attr("cy", 0.5*equationPaneSize.height)
				.attr("r", 0.5*r)
				.attr("fill", "#DDD")
				.attr("opacity", 0.5);

	//Initial Angle
	var equationInitialAngle =  equationPane.append("text")
				.attr("id", "equationInitialAngle")
				.attr("x", 0.12*equationPaneSize.width + 3.2*r)
				.attr("y", 0.5*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle");

	equationInitialAngle.append("tspan")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text(theta);

	equationInitialAngle.append("tspan")
				.attr("font-size", "18px")
				.attr("font-weight", "bold")
				.attr("baseline-shift", "sub")
				.text("0");

	equationInitialAngle.append("tspan")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text("(t)");

	var equationInitialAngleValue = equationPane.append("text")
				.attr("id", "equationInitialAngleValue")
				.attr("display", "none")
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("x", 0.12*equationPaneSize.width + 3.2*r)
				.attr("y", 0.5*equationPaneSize.height)
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text(initialAngle.toFixed(0) + degree);

	equationPane.append("circle")
				.attr("display", "none")
				.attr("cx", 0.12*equationPaneSize.width + 3.2*r)
				.attr("cy", 0.5*equationPaneSize.height)
				.attr("r", r)
				.attr("fill", "#DDD")
				.attr("opacity", 0.5);

	var initialAngleDialCenterPos = {x : 0.12*equationPaneSize.width + 3.2*r, y : 0.5*equationPaneSize.height};
	var equationPaneID = "equationPane";
	var dialID = "initialAngleDial";
	var dispatchIdentifier = "initialAngleChange";
	
	createDial(initialAngleDialCenterPos, equationPaneID, r, min_angle, max_angle, dialID, dispatchIdentifier, true, initialAngle);
	dispatch.on("initialAngleChange", function(d){
		angle = d.value;
		initialAngle = d.value;
		oscillationPauseTime = 0;
		oscillationTime = 0;
		update();
	})

shiftValue = 0.2*equationPaneSize.width;

	// cos(
	equationPane.append("text")
		.attr("x", 0.12*equationPaneSize.width + 3.2*r + shiftValue)
		.attr("y", 0.5*equationPaneSize.height)
		.attr("text-anchor", "middle")
		.attr("dominant-baseline", "middle")
		.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
		.text("cos(");

	// Gravity
	var equationGravity =  equationPane.append("text")
				.attr("id", "equationGravity")
				.attr("x", 0.12*equationPaneSize.width + 5.8*r + shiftValue)
				.attr("y", 0.3*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text("g");

	equationPane.append("circle")
				.attr("display", "none")
				.attr("cx", 0.12*equationPaneSize.width + 5.8*r)
				.attr("cy", 0.3*equationPaneSize.height)
				.attr("r", r)
				.attr("fill", "#DDD")
				.attr("opacity", 0.5);

	// Length
	var equationLength =  equationPane.append("text")
				.attr("id", "equationLength")
				.attr("x", 0.12*equationPaneSize.width + 5.8*r + shiftValue)
				.attr("y", 0.7*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text("L");

	var equationValueLength =  equationPane.append("text")
				.attr("id", "equationValueLength")
				.attr("display", "none")
				.attr("x", 0.12*equationPaneSize.width + 5.8*r + shiftValue)
				.attr("y", 0.7*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text(rope_length.toFixed(1));

	equationPane.append("circle")
				.attr("display", "none")
				.attr("cx", 0.12*equationPaneSize.width + 5.8*r + shiftValue)
				.attr("cy", 0.7*equationPaneSize.height)
				.attr("r", r)
				.attr("fill", "#DDD")
				.attr("opacity", 0.5);

	var lengthDialCenterPos = {x : 0.12*equationPaneSize.width + 5.8*r + shiftValue, y : 0.7*equationPaneSize.height};
	var equationPaneID = "equationPane";
	var dialID = "lengthDial";
	var dispatchIdentifier = "lengthChange";
	
	createDial(lengthDialCenterPos, equationPaneID, r, min_rope_Length, max_rope_Length, dialID, dispatchIdentifier, true, rope_length);
	dispatch.on("lengthChange", function(d){
		rope_length = d.value;
		oscillationPauseTime = 0;
		oscillationTime = 0;
		update();
	})

	// Time
	var equationTime =  equationPane.append("text")
				.attr("id", "equationTime")
				.attr("x", 0.12*equationPaneSize.width + 7.6*r + shiftValue)
				.attr("y", 0.5*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text("t");

	var equationTimeValue =  equationPane.append("text")
				.attr("id", "equationTimeValue")
				.attr("display", "none")
				.attr("x", 0.12*equationPaneSize.width + 7.6*r + shiftValue)
				.attr("y", 0.5*equationPaneSize.height)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
				.text(oscillationTime.toFixed(0));

	equationPane.append("circle")
				.attr("display", "none")
				.attr("cx", 0.12*equationPaneSize.width + 7.6*r + shiftValue)
				.attr("cy", 0.5*equationPaneSize.height)
				.attr("r", r)
				.attr("fill", "#DDD")
				.attr("opacity", 0.5);

	// Fraction Line
	equationPane.append("line")
				.attr("x1", 0.12*equationPaneSize.width + 5.4*r - 0.6*r + shiftValue)
				.attr("x2", 0.12*equationPaneSize.width + 5.4*r + 1.0*r + shiftValue)
				.attr("y1", 0.5*equationPaneSize.height)
				.attr("y2", 0.5*equationPaneSize.height)
				.attr("stroke", "black")
				.attr("stroke-width", 3)

	// Square Root
	equationPane.append("g")
				.attr("id", "squareRootSymbol")
				.attr("transform", "translate(" +(0.12*equationPaneSize.width + 4.4*r + shiftValue)+ "," +0.8*equationPaneSize.height+ ")");

	d3.select("#squareRootSymbol")
				.append("path")
				.attr("stroke", "black")
				.attr("stroke-width", 3)
				.attr("fill", "none")
				.attr("d", "M " +(-0.2*r)+ " " +(-0.4*r)+ " L 0 0 L " +(0.4*r)+ " " +(-0.6*equationPaneSize.height)+ "L " +(2.5*r)+ " " +(-0.6*equationPaneSize.height)+ "")

	// )
	equationPane.append("text")
		.attr("x", 0.12*equationPaneSize.width + 8.8*r + shiftValue)
		.attr("y", 0.5*equationPaneSize.height)
		.attr("text-anchor", "middle")
		.attr("dominant-baseline", "middle")
		.attr("font-size", 48*(Math.pow(scalingFactor,0.5)))
		.text(")");

	// Mouse Events

	// equationPane.on("mouseenter", function(){
	// 	numberVisibility = true;
	// 	update();
	// })

	equationPane.on("mouseleave", function(){
		numberVisibility = false;
		update();
	})

	equationPane.on("mouseover", function(){
		numberVisibility = true;
		update();
	})

}

//****************************************************************************************************************************//
// Update Dials

function updateEquationPane(){

	d3.select("#equationAngleValue").text(angle.toFixed(0) + degree);
	d3.select("#equationTimeValue").text(oscillationTime.toFixed(1));
	d3.select("#equationInitialAngleValue").text(initialAngle.toFixed(0) + degree);
	d3.select("#equationValueLength").text(rope_length.toFixed(1));

	updateDial("angleDial", min_angle, max_angle, angle, r);
	updateDial("initialAngleDial", min_angle, max_angle, initialAngle, r);
	updateDial("lengthDial", min_rope_Length, max_rope_Length, rope_length, r);

	if(numberVisibility || simulationRunning){
		d3.select("#equationLength").attr("display", "none");
		d3.select("#equationValueLength").attr("display", null);
		d3.select("#equationAngle").attr("display", "none");
		d3.select("#equationAngleValue").attr("display", null);
		d3.select("#equationInitialAngle").attr("display", "none");
		d3.select("#equationInitialAngleValue").attr("display", null);
		d3.select("#equationTime").attr("display", "none");
		d3.select("#equationTimeValue").attr("display", null);
		d3.select("#angleDial").attr("display", null);
		d3.select("#initialAngleDial").attr("display", null);
		d3.select("#lengthDial").attr("display", null);
	} else{
		d3.select("#equationLength").attr("display", null);
		d3.select("#equationValueLength").attr("display", "none");
		d3.select("#equationAngle").attr("display", null);
		d3.select("#equationAngleValue").attr("display", "none");
		d3.select("#equationInitialAngle").attr("display", null);
		d3.select("#equationInitialAngleValue").attr("display", "none");
		d3.select("#equationTime").attr("display", null);
		d3.select("#equationTimeValue").attr("display", "none");
		d3.select("#angleDial").attr("display", "none");
		d3.select("#initialAngleDial").attr("display", "none");
		d3.select("#lengthDial").attr("display", "none");
	}



}