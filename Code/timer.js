//****************************************************************************************************************************//
// Timer variables

var startTime, 
	nowTime, 
	simulationTime = 0, 
	simulationPauseTime = 0, 
	oscillationTime = 0, 
	oscillationPauseTime = 0;

var simulationRunning = false;

function timer(){
	d3.timer(function(){
		if(simulationRunning){
			nowTime = Date.now() / 1000;
			simulationTime = simulationPauseTime + (nowTime - startTime);
			oscillationTime = oscillationPauseTime + (nowTime - startTime);
			var angleToRotate = initialAngle * Math.cos(Math.sqrt(9.8/rope_length)*oscillationTime);
			angle = angleToRotate;
			update();
			if(simulationTime >= 15){
				prepareForReset();
			}
		}
	});
}

function prepareForReset(){
	simulationRunning = false;
	d3.select("#playButton").attr("display", "none");
	d3.select("#pauseButton").attr("display", "none");	
	update();
}

function startTimer(){
	startTime = Date.now() / 1000;
	if(simulationTime < 15) { simulationRunning = true; }
	update();

	d3.select("#playButton").attr("display", "none");
	d3.select("#pauseButton").attr("display", null);

}

function pauseTimer(){
	simulationPauseTime = simulationTime;
	oscillationPauseTime = oscillationTime;
	simulationRunning = false;
	update();

	d3.select("#playButton").attr("display", null);
	d3.select("#pauseButton").attr("display", "none");

}

function stopTimer(){
	simulationPauseTime = simulationTime;
	oscillationPauseTime = 0;
	simulationRunning = false;
	update();

	d3.select("#playButton").attr("display", null);
	d3.select("#pauseButton").attr("display", "none");

}

function reset(){
	simulationTime = 0;	
	angle = initialAngle;
	simulationPauseTime = 0;
	oscillationPauseTime = 0;
	simulationTime = 0;
	oscillationTime = 0;
	simulationRunning = false;
	update();

	d3.select("#playButton").attr("display", null);
	d3.select("#pauseButton").attr("display", "none");

}