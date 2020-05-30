function createAnswerButtons(){

var answerButton1 = answerPane.append("g")
								.attr("id", "answerButton1")
								.attr("transform", "translate(" +0.1*answerPaneSize.width+ "," +0.3*answerPaneSize.height+ ")");

	answerButton1.append("circle")
		.attr("id", "circle1")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton1.append("text")
					.attr("x", 0.02*answerPaneSize.width)
					.attr("y", 0.03*answerPaneSize.height)
					.attr("inline-size", answerPaneSize.width)
					.style("font-size", "24px")
					.text(answers[0]);

	var answerButton2 = answerPane.append("g")
								.attr("transform", "translate(" +0.6*answerPaneSize.width+ "," +0.3*answerPaneSize.height+ ")");

	answerButton2.append("circle")
		.attr("id", "circle2")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton2.append("text")
					.attr("x", 0.02*answerPaneSize.width)
					.attr("y", 0.03*answerPaneSize.height)
					.attr("inline-size", answerPaneSize.width)
					.style("font-size", "24px")
					.text(answers[1]);


	var answerButton3 = answerPane.append("g")
								.attr("transform", "translate(" +0.1*answerPaneSize.width+ "," +0.7*answerPaneSize.height+ ")");

	answerButton3.append("circle")
		.attr("id", "circle3")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton3.append("text")
					.attr("x", 0.02*answerPaneSize.width)
					.attr("y", 0.03*answerPaneSize.height)
					.attr("inline-size", answerPaneSize.width)
					.style("font-size", "24px")
					.text(answers[2]);


	var answerButton4 = answerPane.append("g")
								.attr("transform", "translate(" +0.6*answerPaneSize.width+ "," +0.7*answerPaneSize.height+ ")");

	answerButton4.append("circle")
		.attr("id", "circle4")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton4.append("text")
					.attr("x", 0.02*answerPaneSize.width)
					.attr("y", 0.03*answerPaneSize.height)
					.attr("inline-size", answerPaneSize.width)
					.style("font-size", "24px")
					.text(answers[3]);


	// Mouse Events

	answerButton1
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=1){
				d3.select("#circle1").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=1){
				d3.select("#circle1").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle1").attr("fill", "blue");
			d3.select("#circle2").attr("fill", "white");
			d3.select("#circle3").attr("fill", "white");
			d3.select("#circle4").attr("fill", "white");
			answer = 1;
			nextButton.attr("display", null);
		})

	answerButton2
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=2){
				d3.select("#circle2").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=2){
				d3.select("#circle2").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle2").attr("fill", "blue");
			d3.select("#circle1").attr("fill", "white");
			d3.select("#circle3").attr("fill", "white");
			d3.select("#circle4").attr("fill", "white");
			answer = 2;
			nextButton.attr("display", null);
		})

	answerButton3
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=3){
				d3.select("#circle3").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=3){
				d3.select("#circle3").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle3").attr("fill", "blue");
			d3.select("#circle2").attr("fill", "white");
			d3.select("#circle1").attr("fill", "white");
			d3.select("#circle4").attr("fill", "white");
			answer = 3;
			nextButton.attr("display", null);
		})

	answerButton4
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=4){
				d3.select("#circle4").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=4){
				d3.select("#circle4").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle4").attr("fill", "blue");
			d3.select("#circle2").attr("fill", "white");
			d3.select("#circle3").attr("fill", "white");
			d3.select("#circle1").attr("fill", "white");
			answer = 4;
			nextButton.attr("display", null);
		})

}

function createAnswerButtonsGraph(){

	var answerButton1 = answerPane.append("g")
								.attr("transform", "translate(" +0.1*answerPaneSize.width+ "," +0.3*answerPaneSize.height+ ")");

	answerButton1.append("circle")
		.attr("id", "circle1")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton1.append("image")
				.attr("xlink:href", answers[0])
				.attr("width", 0.3*answerPaneSize.width)
				.attr("height", 0.45*answerPaneSize.height)
				.attr("x", 0)
				.attr("y", -0.2*answerPaneSize.height);


	var answerButton2 = answerPane.append("g")
								.attr("transform", "translate(" +0.6*answerPaneSize.width+ "," +0.3*answerPaneSize.height+ ")");

	answerButton2.append("circle")
		.attr("id", "circle2")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton2.append("image")
				.attr("xlink:href", answers[1])
				.attr("width", 0.3*answerPaneSize.width)
				.attr("height", 0.45*answerPaneSize.height)
				.attr("x", 0.01*answerPaneSize.width)
				.attr("y", -0.2*answerPaneSize.height);



	var answerButton3 = answerPane.append("g")
								.attr("transform", "translate(" +0.1*answerPaneSize.width+ "," +0.7*answerPaneSize.height+ ")");

	answerButton3.append("circle")
		.attr("id", "circle3")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton3.append("image")
				.attr("xlink:href", answers[2])
				.attr("width", 0.3*answerPaneSize.width)
				.attr("height", 0.45*answerPaneSize.height)
				.attr("x", -0.00*answerPaneSize.width)
				.attr("y", -0.15*answerPaneSize.height);


	var answerButton4 = answerPane.append("g")
								.attr("transform", "translate(" +0.6*answerPaneSize.width+ "," +0.7*answerPaneSize.height+ ")");

	answerButton4.append("circle")
		.attr("id", "circle4")
		.attr("cx", 0)						
		.attr("cy", 0)						
		.attr("r", 8)
		.attr("stroke", "black")
		.attr("stroke-width", 2)
		.attr("fill", "white")
		.attr("fill-opacity", 1);

	answerButton4.append("image")
				.attr("xlink:href", answers[3])
				.attr("width", 0.3*answerPaneSize.width)
				.attr("height", 0.45*answerPaneSize.height)
				.attr("x", 0)
				.attr("y", -0.15*answerPaneSize.height);


	// Mouse Events

	answerButton1
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=1){
				d3.select("#circle1").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=1){
				d3.select("#circle1").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle1").attr("fill", "blue");
			d3.select("#circle2").attr("fill", "white");
			d3.select("#circle3").attr("fill", "white");
			d3.select("#circle4").attr("fill", "white");
			answer = 1;
			nextButton.attr("display", null);
		})

	answerButton2
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=2){
				d3.select("#circle2").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=2){
				d3.select("#circle2").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle2").attr("fill", "blue");
			d3.select("#circle1").attr("fill", "white");
			d3.select("#circle3").attr("fill", "white");
			d3.select("#circle4").attr("fill", "white");
			answer = 2;
			nextButton.attr("display", null);
		})

	answerButton3
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=3){
				d3.select("#circle3").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=3){
				d3.select("#circle3").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle3").attr("fill", "blue");
			d3.select("#circle2").attr("fill", "white");
			d3.select("#circle1").attr("fill", "white");
			d3.select("#circle4").attr("fill", "white");
			answer = 3;
			nextButton.attr("display", null);
		})

	answerButton4
		.style("cursor", "hand")

		.on("mouseover", function(){
			if(answer!=4){
				d3.select("#circle4").attr("fill", "lightblue");
			}
		})

		.on("mouseleave", function(){
			if(answer!=4){
				d3.select("#circle4").attr("fill", "white");
			}
		})

		.on("click", function(){
			d3.select("#circle4").attr("fill", "blue");
			d3.select("#circle2").attr("fill", "white");
			d3.select("#circle3").attr("fill", "white");
			d3.select("#circle1").attr("fill", "white");
			answer = 4;
			nextButton.attr("display", null);
		})


}