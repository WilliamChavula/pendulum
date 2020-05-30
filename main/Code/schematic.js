//****************************************************************************************************************************//
// Schematic Variables

var line_Length,
	min_line_Length, 
	max_line_Length;

var line_to_rope_length_scale;
var rope_to_line_length_scale;

var drag = d3.drag();
var schematic_Pane_Pos;
var schematic_Pane_Size;

//****************************************************************************************************************************//
// Schematic Function

function createSchematic(){

//****************************************************************************************************************************//
// Schematic Variables

	min_line_Length = 0.04*width, 
	max_line_Length = 0.15 * width;

	line_to_rope_length_scale = d3.scaleLinear()
								.domain([min_line_Length, max_line_Length])
								.range([min_rope_Length, max_rope_Length]);

	rope_to_line_length_scale = d3.scaleLinear()
								.domain([min_rope_Length, max_rope_Length])
								.range([min_line_Length, max_line_Length]);

	line_Length = rope_to_line_length_scale(rope_length);

//****************************************************************************************************************************//
// Schematic Pane

	schematic_Pane_Pos = {x : 0.01*width, y : 0.13*height};
	schematic_Pane_Size = { width : 0.3*width, height : 0.45*height };
	var schematic_Pane = canvas.append("g")
								.attr("transform", "translate(" +schematic_Pane_Pos.x+ "," +schematic_Pane_Pos.y+ ")");

	schematic_Pane.append("rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", schematic_Pane_Size.width)
					.attr("height", schematic_Pane_Size.height)
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("fill", "#FFF");

	var hingePos = {x : 0.5*schematic_Pane_Size.width, y : 0.05*height};

	var schematic = schematic_Pane.append("g")
							.attr("transform", "translate(" +hingePos.x+ "," +hingePos.y+ ")")
							.append("g")
							.attr("transform", "rotate(" +90+ ")")
							.append("g")
							.attr("id", "angle")
							.attr("transform", "rotate(" +angle+ ")");

	schematic.append("circle")
			.attr("cx", 0)
			.attr("cy", 0)
			.attr("r", 2.5)
			.attr("fill", "black");

	schematic.append("circle")
			.attr("id", "bob")
			.attr("cx", line_Length)
			.attr("cy", 0)
			.attr("r", 0.035*height)
			.attr("fill", "white")
			.attr("stroke", "black")
			.attr("stroke-width", 1.5)
			.style("cursor", "hand")
			.attr("class", "schematicBare")
			.call(drag);

	schematic.append("line")
			.attr("id", "string")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", line_Length)
			.attr("y2", 0)
			.attr("stroke", "black")
			.attr("stroke-width", 2);

	schematic.append("circle")
			.attr("id", "bobKnot")
			.attr("cx", line_Length)
			.attr("cy", 0)
			.attr("r", 2.5)
			.attr("fill", "black");

//****************************************************************************************************************************//
// Timer Line

	schematic_Pane.append("rect")
				.attr("id", "timer")
				.attr("x", 0)
				.attr("y", 0.43*height)
				.attr("width", schematic_Pane_Size.width*simulationTime/15)
				.attr("height", 0.01*height)
				.attr("stroke", "gray")
				.attr("stroke-width", 1)
				.attr("fill", "green");

//****************************************************************************************************************************//
// Hover Events

	var bobSelected = false;
	var bobHovered = false;

	d3.select("#bob").on("mouseover", function(){
		bobHovered = true;
		if(!bobSelected){  
			d3.select(this).attr("class", "schematicHover");
		}
	})

	d3.select("#bob").on("mouseleave", function(){
		bobHovered = false;
		if(!bobSelected){  
			d3.select(this).attr("class", "schematicBare");
		}
	})
		
//****************************************************************************************************************************//
// Drag Events

	var changeMode = "Angle";
	var frameCount = 0;
	var xMove = 0, yMove = 0;

	drag.filter(1);

	drag.on("start", function(){
		bobSelected = true;
		stopTimer();
		d3.select("#bob").attr("class", "schematicSelect");
		schematic_Pane.style("cursor", "pointer");
		frameCount = 0;
		xMove = 0;
		yMove = 0;	
	})

	drag.on("end", function(){
		bobSelected = false;
		stopTimer();
		if(bobHovered){
			d3.select("#bob").attr("class", "schematicHover");
		} else{
			d3.select("#bob").attr("class", "schematicBare");
		}
		schematic_Pane.style("cursor", "default");
		frameCount = 0;
		xMove = 0;
		yMove = 0;
	})	

	drag.on("drag", function(){	

		if(simulationRunning){ stopTimer(); }

		if(frameCount < 4){
			xMove += d3.event.dx;
			yMove += d3.event.dy;
			frameCount++;
		}

		if(Math.abs(yMove) > Math.abs(xMove)){
			var dx = d3.event.dx;
			var dy = d3.event.dy;
			var arcLength = Math.sqrt(dx*dx + dy*dy);
			var deltaAngle = 40*arcLength/line_Length;
			if(dy < 0) { deltaAngle = -deltaAngle; }
			var newAngle = angle + deltaAngle;
			if(Math.abs(newAngle) <= max_angle){
				angle = newAngle;
				initialAngle = newAngle;
				oscillationPauseTime = 0;
				oscillationTime = 0;
				update();
			}
		} else {
			var y = d3.event.dx;
			if(line_Length + y >= min_line_Length && line_Length + y <= max_line_Length){
				line_Length = line_Length + y;
				rope_length = line_to_rope_length_scale(line_Length);
				initialAngle = angle;
				oscillationPauseTime = 0;
				oscillationTime = 0;
				update();
			}
		}

	})

}

//****************************************************************************************************************************//
// Update Function

function updateSchematicPane(){

	line_Length = rope_to_line_length_scale(rope_length);

	d3.select("#angle").attr("transform", "rotate(" +angle+ ")");
	d3.select("#bob").attr("cx", line_Length);
	d3.select("#string").attr("x2", line_Length);
	d3.select("#bobKnot").attr("cx", line_Length);

	d3.select("#timer").attr("width", schematic_Pane_Size.width*simulationTime/15);	

}