//****************************************************************************************************************************//
// Graph Function

var graphDrag = d3.drag();
var graphDragged = false;
var backgroundGraphVisible = true;
	var xPoint, yPoint;
	var graphArray = [], graphString = "", backgroundGraphString = "";

var xAxis_time_to_pixel_Scale,
	xAxis_pixel_to_time_Scale,
	yAxis_angle_to_pixel_Scale,
	yAxis_pixel_to_angle_Scale;

function createGraph(){

//****************************************************************************************************************************//
// Graph Pane

	var graphPanePos = {x : 0.32*width, y : 0.60*height};
	var graphPaneSize = { width : 0.67*width, height : 0.385*height };
	var graphPane = canvas.append("g")
								.attr("transform", "translate(" +graphPanePos.x+ "," +graphPanePos.y+ ")");
	graphPane.append("rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", graphPaneSize.width)
					.attr("height", graphPaneSize.height)
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("fill", "white");

	graphPane.call(graphDrag);

//****************************************************************************************************************************//
// Background Button

	var backgroundGraphButton = graphPane.append("g")
					.attr("transform", "translate(" +0.4*graphPaneSize.width+ "," +0.9*graphPaneSize.height+ ")")
					.attr("id", "backgroundGraphButton")
					.style("cursor", "pointer");

	backgroundGraphButton.append("circle")
					.attr("id", "button")
					.attr("cx", 0)
					.attr("cy", 0)
					.attr("r", 8*scalingFactor)
					.attr("fill", "lightblue")
					.attr("stroke", "black")
					.attr("stroke-width", 3*scalingFactor);

	backgroundGraphButton.append("g")
					.attr("transform", "translate(" +(15*scalingFactor)+ "," +(0*scalingFactor)+ ")")
					.append("text")
					.attr("dominant-baseline", "middle")
					.attr("text-baseline", "middle")
					.style("font-size", 28*scalingFactor)
					.text(" Background Graph");

	backgroundGraphButton.on("click", function(){
		backgroundGraphVisible = !backgroundGraphVisible;
		if(!backgroundGraphVisible){
			d3.select("#button").attr("fill", "white");
			d3.select("#backgroundGraph").attr("display", "none");
		}	else {
			d3.select("#button").attr("fill", "lightblue");
			d3.select("#backgroundGraph").attr("display", null);		
		}
	})

//****************************************************************************************************************************//
// Graph

	var graph = graphPane.append("g")
						.attr("transform", "translate(" +0.1*graphPaneSize.width+ "," +0.5*graphPaneSize.height+ ")");

	// x Axis
	xAxis_time_to_pixel_Scale = d3.scaleLinear()
	                     .domain([0,15])
	                     .range([0,0.8*graphPaneSize.width]);

	xAxis_pixel_to_time_Scale = d3.scaleLinear()
	                     .domain([0,0.8*graphPaneSize.width])
	                     .range([0,15]);

    var xAxis = d3.axisBottom(xAxis_time_to_pixel_Scale);

	var xAxisGroup = graph.append("g")
							.attr("class", "x axis")
							.call(xAxis);

	graph.append("text")
			.attr("x", 0.82*graphPaneSize.width)
			.attr("y", 20*scalingFactor)
			.style("font-size", 28*scalingFactor)
			.text("time");

	d3.select(".tick").attr("display", "none");

	// y Axis
	yAxis_angle_to_pixel_Scale = d3.scaleLinear()
	                         .domain([45,-45])
	                         .range([-0.45*graphPaneSize.height,0.45*graphPaneSize.height]);

 	yAxis_pixel_to_angle_Scale = d3.scaleLinear()
	                         .domain([-0.45*graphPaneSize.height,0.45*graphPaneSize.height])
	                         .range([45,-45]);

	var yAxis = d3.axisLeft(yAxis_angle_to_pixel_Scale);

	var yAxisGroup = graph.append("g")
							.attr("class", "y axis")
							.call(yAxis);

	graph.append("text")
			.attr("x", -85)
			.attr("y", -0.40*graphPaneSize.height)
			.style("font-size", 28*scalingFactor)
			.text("Angle");

	// Graph
	graph.append("path")
		.attr("id", "backgroundGraph")
		.attr("stroke", "grey")
		.attr("stroke-width", 1)
		.attr("fill", "none")
		.attr("d", backgroundGraphString);

	graph.append("path")
		.attr("id", "graph")
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("fill", "none")
		.attr("d", graphString);

	graph.append("line")
		.attr("id", "graphXpoint")
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("stroke-dasharray", ("3, 3"));

	graph.append("line")
		.attr("id", "graphYpoint")
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("stroke-dasharray", ("3, 3"));

	graph.append("circle")
		.attr("id", "graphPoint")
		.attr("fill", "red")
		.attr("r", 3)
		.attr("stroke", "none")
		.attr("display", "none");

//****************************************************************************************************************************//
// Graph Drag Events

	// var angleNow, initialAngleNow, lengthNow, oscillationTimeNow;
	// graphDrag.on("dragstart", function(){
	// 	angleNow = angle;
	// 	initialAngleNow = initialAngle;
	// 	lengthNow = length;
	// 	oscillationTimeNow = oscillationTime;
	// 	simulationRunning = false;
	// 	graphDragged = true;
	// })


}

//****************************************************************************************************************************//
// Update Graph

function updateBackgroundGraph(){
	var angleToRotate = initialAngle * Math.cos(Math.sqrt(9.8/rope_length)*oscillationTime);
	xPoint = xAxis_time_to_pixel_Scale(simulationTime);
	yPoint = yAxis_angle_to_pixel_Scale(angleToRotate);

	backgroundGraphString = "M " + xPoint + " " + yPoint;

	for(var t = 0; t<=15 - simulationTime; t=t+0.01){
		var angleToRotate = initialAngle * Math.cos(Math.sqrt(9.8/rope_length)*(t + oscillationTime));
		xPoint = xAxis_time_to_pixel_Scale(t+simulationTime);
		yPoint = yAxis_angle_to_pixel_Scale(angleToRotate);
		backgroundGraphString = backgroundGraphString + "L " + xPoint + " " + yPoint;
	}
	d3.select("#backgroundGraph").attr("d", backgroundGraphString);
}

function updateGraphPane(){

	if(simulationTime == 0){
		d3.select("#graph").attr("d", "");
		xPoint = xAxis_time_to_pixel_Scale(simulationTime);
		yPoint = yAxis_angle_to_pixel_Scale(angle);
		graphString = "M " + xPoint + " " + yPoint;
	}

	if(simulationRunning){
		xPoint = xAxis_time_to_pixel_Scale(simulationTime);
		yPoint = yAxis_angle_to_pixel_Scale(angle);
		graphString = graphString + "L " + xPoint + " " + yPoint;
		d3.select("#graph").attr("d", graphString);
		
		graphArray.push({angle : angle, 
						length : length, 
						rope_length : rope_length, 
						initialAngle : initialAngle, 
						oscillationTime : oscillationTime, 
						xPoint : xPoint.toFixed(5), 
						yPoint : yPoint});
	}

	if(!simulationRunning && !graphDragged){
		xPoint = xAxis_time_to_pixel_Scale(simulationTime);
		yPoint = yAxis_angle_to_pixel_Scale(angle);
		graphString = graphString + "M " + xPoint + " " + yPoint;
	}

}
