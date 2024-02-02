//****************************************************************************************************************************//
// Create Dials

function createDial(dial_CenterPos, PaneID, dialRadius, minDialValue, maxDialValue, dialID, dispatchIdentifier, controller, dialValue){

	var minDialAngle = -0.8*Math.PI,
		maxDialAngle = 0.8*Math.PI;

	var dialAngle;

	var dial_value_to_angle_scale = d3.scaleLinear()
								.domain([minDialValue, maxDialValue])
								.range([minDialAngle, maxDialAngle]);

	var dial_angle_to_value_scale = d3.scaleLinear()
								.domain([minDialAngle, maxDialAngle])
								.range([minDialValue, maxDialValue]);

	var dialAngle = dial_value_to_angle_scale(dialValue);

	var dial_knobCenter = {};

	dial_knobCenter.x = 0.95*dialRadius * Math.sin(dialAngle);
	dial_knobCenter.y = -0.95*dialRadius * Math.cos(dialAngle);

	var dial = d3.select("#" + PaneID)
				.append("g")
				.attr("id", dialID)
				.attr("transform", "translate(" +dial_CenterPos.x+ "," +dial_CenterPos.y+ ")");

	dial.append("circle")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", dialRadius)
		.attr("stroke", "none")
		.attr("fill", "grey")
		.attr("fill-opacity", 0.2);

	arc.innerRadius(0.9*dialRadius)
	    .outerRadius(dialRadius)
	    .startAngle(-0.8 * Math.PI)
	    .endAngle(dialAngle);

	dial.append("path")
		.attr("d", arc)
		.attr("id", "dial_Arc1" + dialID)
		.attr("fill", "blue");

	arc.innerRadius(0.9*dialRadius)
	    .outerRadius(dialRadius)
	    .startAngle(dialAngle)
	    .endAngle(0.8 * Math.PI);

	dial.append("path")
		.attr("d", arc)
		.attr("id", "dial_Arc2" + dialID)
		.attr("fill", "lightblue");

	var dial_Drag = d3.drag();

	dial.append("circle")
		.attr("id", "dial_knob" + dialID)
		.attr("cx", dial_knobCenter.x)						
		.attr("cy", dial_knobCenter.y)						
		.attr("r", 0.15*dialRadius)
		.attr("stroke", "blue")
		.attr("stroke-width", 3)
		.attr("fill", "lightblue")
		.attr("fill-opacity", 1)
		.style("cursor", "hand")
		.call(dial_Drag);

	if(!controller){
		d3.select("#dial_knob" + dialID).attr("display", "none");
	}

	d3.select("#dial_knob" + dialID).on("mouseover", function(){
		d3.select(this).attr("r", 0.18*dialRadius);
	})

	d3.select("#dial_knob" + dialID).on("mouseleave", function(){
		d3.select(this).attr("r", 0.15*dialRadius);
	})

	dial_Drag.on("start", function(){
		stopTimer();
		d3.select("#dial_knob").attr("r", 0.2*dialRadius);
		d3.select("#dial_knob").on("mouseleave", null);
	})

	dial_Drag.on("drag", function(){

		dialAngle = Math.atan2(d3.event.x,-d3.event.y);

		if(dialAngle < -0.8*Math.PI) { dialAngle = -0.8*Math.PI; }
		if(dialAngle > 0.8*Math.PI) { dialAngle = 0.8*Math.PI; }

		dialValue = dial_angle_to_value_scale(dialAngle);

		dispatch.call(dispatchIdentifier, this, {value : dialValue});

	})

	dial_Drag.on("end", function(){
		d3.select("#dial_knob").attr("r", 0.15*dialRadius);

		d3.select("#dial_knob" + dialID).on("mouseleave", function(){
			d3.select(this).attr("r", 0.15*dialRadius);
		})
	})

}

//****************************************************************************************************************************//
// Update function

var updateDial = function(dialID, minDialValue, maxDialValue, dialValue, dialRadius){

	var dial_value_to_angle_scale = d3.scaleLinear()
								.domain([minDialValue, maxDialValue])
								.range([-0.8*Math.PI, 0.8*Math.PI]);

	var dialAngle = dial_value_to_angle_scale(dialValue);

	var dial_knobCenter = {};

	dial_knobCenter.x = 0.95*dialRadius * Math.sin(dialAngle);
	dial_knobCenter.y = -0.95*dialRadius * Math.cos(dialAngle);

	arc.innerRadius(0.9*dialRadius)
	    .outerRadius(dialRadius)
	    .startAngle(-0.8 * Math.PI)
	    .endAngle(dialAngle);

	d3.select("#dial_Arc1" + dialID)
		.attr("d", arc);

	arc.innerRadius(0.9*dialRadius)
	    .outerRadius(dialRadius)
	    .startAngle(dialAngle)
	    .endAngle(0.8 * Math.PI);

	d3.select("#dial_Arc2" + dialID)
		.attr("d", arc);

	d3.select("#dial_knob" + dialID)
		.attr("cx", dial_knobCenter.x)						
		.attr("cy", dial_knobCenter.y)						


}
