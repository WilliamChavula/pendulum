/**
 * Click event handler for question arrays
 * @param {number} selectedAnswer
 * @param {string} stage_name
 * @param {string} question
 * @param {string} correctAnswer
 */
const answerButtonHandler = async (selectedAnswer, stage_name, question, correctAnswer) => {

    [1, 2, 3, 4].map(item => {
        if (item === selectedAnswer) {
            d3.select(`#circle${item}`).attr("fill", "blue");
            answer = item;
            nextButton.attr("display", null);

        } else
            d3.select(`#circle${item}`).attr("fill", "white");
    })

    const assessInteraction = new InteractionBuilder()
        .setTimestamp(Date.now())
        .setInteractionStart(Date.now())
        .setAOIName(answerLabel[`answer${selectedAnswer}`])
        .setAOIStageName(stage_name)
        .setEventInfo({
            evt_label: interaction_events.SINGLE_CLICK,
            interaction_type: interaction_events.LEFT_CLICK
        })
        .setIndex(idx_gen.next().value)
        .setEventXCoord(d3.event.x)
        .setEventYCoord(d3.event.y)
        .setInteractionEnd(Date.now())
        .setDuration(0)
        .build();

    assessInteraction.assessment = {
        values: {
            correct_answer: correctAnswer,
            answer_chosen: selectedAnswer,
        },
        question,
    }

    await postInteraction(assessInteraction, "/assess");
}


function createAnswerButtons({stage_name = "", question= "", correctAnswer = ""} = {}) {

    let answerButton1 = answerPane.append("g")
        .attr("id", "answerButton1")
        .attr("transform", "translate(" + 0.1 * answerPaneSize.width + "," + 0.3 * answerPaneSize.height + ")");

    let answerButton2 = answerPane.append("g")
        .attr("transform", "translate(" + 0.6 * answerPaneSize.width + "," + 0.3 * answerPaneSize.height + ")");

    let answerButton3 = answerPane.append("g")
        .attr("transform", "translate(" + 0.1 * answerPaneSize.width + "," + 0.7 * answerPaneSize.height + ")");

    let answerButton4 = answerPane.append("g")
        .attr("transform", "translate(" + 0.6 * answerPaneSize.width + "," + 0.7 * answerPaneSize.height + ")");

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
        .attr("x", 0.02 * answerPaneSize.width)
        .attr("y", 0.03 * answerPaneSize.height)
        .attr("inline-size", answerPaneSize.width)
        .style("font-size", "24px")
        .text(answers[0]);

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
        .attr("x", 0.02 * answerPaneSize.width)
        .attr("y", 0.03 * answerPaneSize.height)
        .attr("inline-size", answerPaneSize.width)
        .style("font-size", "24px")
        .text(answers[1]);

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
        .attr("x", 0.02 * answerPaneSize.width)
        .attr("y", 0.03 * answerPaneSize.height)
        .attr("inline-size", answerPaneSize.width)
        .style("font-size", "24px")
        .text(answers[2]);

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
        .attr("x", 0.02 * answerPaneSize.width)
        .attr("y", 0.03 * answerPaneSize.height)
        .attr("inline-size", answerPaneSize.width)
        .style("font-size", "24px")
        .text(answers[3]);


    // Mouse Events
    // /**
    //  * Click event handler for question arrays
    //  * @param {number} selectedAnswer
    //  */
    // const answerButtonHandler = async (selectedAnswer) => {
    //
    //     [1, 2, 3, 4].map(item => {
    //         if (item === selectedAnswer) {
    //             d3.select(`#circle${item}`).attr("fill", "blue");
    //             answer = item;
    //             nextButton.attr("display", null);
    //
    //         } else
    //             d3.select(`#circle${item}`).attr("fill", "white");
    //     })
    //
    //     const assessInteraction = new InteractionBuilder()
    //         .setTimestamp(Date.now())
    //         .setInteractionStart(Date.now())
    //         .setAOIName(answerLabel[`answer${selectedAnswer}`])
    //         .setAOIStageName(stage_name)
    //         .setEventInfo({
    //             evt_label: interaction_events.SINGLE_CLICK,
    //             interaction_type: interaction_events.LEFT_CLICK
    //         })
    //         .setIndex(getIndex().value)
    //         .setEventXCoord(d3.event.x)
    //         .setEventYCoord(d3.event.y)
    //         .setInteractionEnd(Date.now())
    //         .setDuration(0)
    //         .build();
    //
    //     assessInteraction.assessment = {
    //         correct_answer: "",
    //         answer_chosen: selectedAnswer,
    //         question
    //     }
    //
    //     await postInteraction(assessInteraction, "/assess");
    // }

    answerButton1
        .style("cursor", "hand")
        .on("mouseover", function () {
            if (answer !== 1) {
                d3.select("#circle1").attr("fill", "lightblue");
            }
        })
        .on("mouseleave", function () {
            if (answer !== 1) {
                d3.select("#circle1").attr("fill", "white");
            }
        })
        .on("click", () => answerButtonHandler(1, stage_name, question, correctAnswer))

    answerButton2
        .style("cursor", "hand")
        .on("mouseover", function () {
            if (answer !== 2) {
                d3.select("#circle2").attr("fill", "lightblue");
            }
        })
        .on("mouseleave", function () {
            if (answer !== 2) {
                d3.select("#circle2").attr("fill", "white");
            }
        })
        .on("click", () => answerButtonHandler(2, stage_name, question, correctAnswer))

    answerButton3
        .style("cursor", "hand")
        .on("mouseover", function () {
            if (answer !== 3) {
                d3.select("#circle3").attr("fill", "lightblue");
            }
        })
        .on("mouseleave", function () {
            if (answer !== 3) {
                d3.select("#circle3").attr("fill", "white");
            }
        })
        .on("click", () => answerButtonHandler(3, stage_name, question, correctAnswer))

    answerButton4
        .style("cursor", "hand")
        .on("mouseover", function () {
            if (answer !== 4) {
                d3.select("#circle4").attr("fill", "lightblue");
            }
        })
        .on("mouseleave", function () {
            if (answer !== 4) {
                d3.select("#circle4").attr("fill", "white");
            }
        })
        .on("click", () => answerButtonHandler(4, stage_name, question, correctAnswer))

}

function createAnswerButtonsGraph({stage_name = "", question= "", correctAnswer = ""} = {}) {

    let answerButton1 = answerPane.append("g")
        .attr("transform", "translate(" + 0.1 * answerPaneSize.width + "," + 0.3 * answerPaneSize.height + ")");

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
        .attr("width", 0.3 * answerPaneSize.width)
        .attr("height", 0.45 * answerPaneSize.height)
        .attr("x", 0)
        .attr("y", -0.2 * answerPaneSize.height);


    let answerButton2 = answerPane.append("g")
        .attr("transform", "translate(" + 0.6 * answerPaneSize.width + "," + 0.3 * answerPaneSize.height + ")");

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
        .attr("width", 0.3 * answerPaneSize.width)
        .attr("height", 0.45 * answerPaneSize.height)
        .attr("x", 0.01 * answerPaneSize.width)
        .attr("y", -0.2 * answerPaneSize.height);


    let answerButton3 = answerPane.append("g")
        .attr("transform", "translate(" + 0.1 * answerPaneSize.width + "," + 0.7 * answerPaneSize.height + ")");

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
        .attr("width", 0.3 * answerPaneSize.width)
        .attr("height", 0.45 * answerPaneSize.height)
        .attr("x", -0.00 * answerPaneSize.width)
        .attr("y", -0.15 * answerPaneSize.height);


    let answerButton4 = answerPane.append("g")
        .attr("transform", "translate(" + 0.6 * answerPaneSize.width + "," + 0.7 * answerPaneSize.height + ")");

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
        .attr("width", 0.3 * answerPaneSize.width)
        .attr("height", 0.45 * answerPaneSize.height)
        .attr("x", 0)
        .attr("y", -0.15 * answerPaneSize.height);


    // Mouse Events

    answerButton1
        .style("cursor", "hand")

        .on("mouseover", function () {
            if (answer !== 1) {
                d3.select("#circle1").attr("fill", "lightblue");
            }
        })

        .on("mouseleave", function () {
            if (answer !== 1) {
                d3.select("#circle1").attr("fill", "white");
            }
        })

        .on("click", () => answerButtonHandler(1, stage_name, question, correctAnswer))

    answerButton2
        .style("cursor", "hand")

        .on("mouseover", function () {
            if (answer !== 2) {
                d3.select("#circle2").attr("fill", "lightblue");
            }
        })

        .on("mouseleave", function () {
            if (answer !== 2) {
                d3.select("#circle2").attr("fill", "white");
            }
        })

        .on("click", () => answerButtonHandler(2, stage_name, question, correctAnswer))

    answerButton3
        .style("cursor", "hand")

        .on("mouseover", function () {
            if (answer !== 3) {
                d3.select("#circle3").attr("fill", "lightblue");
            }
        })

        .on("mouseleave", function () {
            if (answer !== 3) {
                d3.select("#circle3").attr("fill", "white");
            }
        })

        .on("click", () => answerButtonHandler(3, stage_name, question, correctAnswer))

    answerButton4
        .style("cursor", "hand")

        .on("mouseover", function () {
            if (answer !== 4) {
                d3.select("#circle4").attr("fill", "lightblue");
            }
        })

        .on("mouseleave", function () {
            if (answer !== 4) {
                d3.select("#circle4").attr("fill", "white");
            }
        })

        .on("click", () => answerButtonHandler(4, stage_name, question, correctAnswer))


}