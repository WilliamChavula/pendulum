function createControls({stage_name = ""} = {}) {

//****************************************************************************************************************************//
// Controls Pane

    let controls_Pane_Pos = {x: 0.01 * width, y: 0.6 * height};
    let controls_Pane_Size = {width: 0.3 * width, height: 0.12 * height};
    let controls_Pane = canvas.append("g")
        .attr("transform", "translate(" + controls_Pane_Pos.x + "," + controls_Pane_Pos.y + ")");

//****************************************************************************************************************************//
// Handlers
    const playButtonClicked = async () => {
        const start = Date.now();
        startTimer();
        const interaction = new InteractionBuilder()
            .setInteractionStart(Date.now())
            .setTimestamp(Date.now())
            .setIndex(idx_gen.next().value)
            .setEventXCoord(d3.event.offsetX)
            .setEventYCoord(d3.event.offsetY)
            .setAOIName(aoiLabel.aoiPlayBtn)
            .setAOIStageName(stage_name)
            .setEventInfo({
                evt_label: interaction_events.SINGLE_CLICK,
                interaction_type: interaction_events.LEFT_CLICK
            })
            .setInteractionEnd(Date.now())
            .setDuration(Date.now() - start)
            .build();

        await postInteraction(interaction);
    }

    const pauseButtonClicked = async () => {
        const start = Date.now();
        pauseTimer();
        const interaction = new InteractionBuilder()
            .setInteractionStart(Date.now())
            .setTimestamp(Date.now())
            .setIndex(idx_gen.next().value)
            .setEventXCoord(d3.event.offsetX)
            .setEventYCoord(d3.event.offsetY)
            .setAOIName(aoiLabel.aoiPauseBtn)
            .setAOIStageName(stage_name)
            .setEventInfo({
                evt_label: interaction_events.SINGLE_CLICK,
                interaction_type: interaction_events.LEFT_CLICK
            })
            .setInteractionEnd(Date.now())
            .setDuration(Date.now() - start)
            .build();

        await postInteraction(interaction);
    }

    const resetButtonClicked = async () => {
        const start = Date.now();
        reset();
        const interaction = new InteractionBuilder()
            .setInteractionStart(Date.now())
            .setTimestamp(Date.now())
            .setIndex(idx_gen.next().value)
            .setEventXCoord(d3.event.offsetX)
            .setEventYCoord(d3.event.offsetY)
            .setAOIName(aoiLabel.aoiResetBtn)
            .setAOIStageName(stage_name)
            .setEventInfo({
                evt_label: interaction_events.SINGLE_CLICK,
                interaction_type: interaction_events.LEFT_CLICK
            })
            .setInteractionEnd(Date.now())
            .setDuration(Date.now() - start)
            .build();

        await postInteraction(interaction);
    }

// Controls Icons

    controls_Pane.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", controls_Pane_Size.width)
        .attr("height", controls_Pane_Size.height)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "white");

    controls_Pane.append("g")
        .attr("transform", "translate(" + 0.04 * width + "," + 0.025 * height + ")")
        .append("image")
        .attr("xlink:href", "../../Images/play.jpg")
        .attr("id", "playButton")
        .style("cursor", "hand")
        .attr("width", 0.07 * height)
        .attr("height", 0.07 * height)
        .on("click", playButtonClicked)
        .append("title")
        .text("Play");

    controls_Pane.append("g")
        .attr("transform", "translate(" + 0.12 * width + "," + 0.025 * height + ")")
        .append("image")
        .attr("xlink:href", "../../Images/pause.png")
        .style("cursor", "hand")
        .attr("id", "pauseButton")
        .attr("display", "none")
        .attr("width", 0.07 * height)
        .attr("height", 0.07 * height)
        .on("click", pauseButtonClicked)
        .append("title")
        .text("Pause");

    controls_Pane.append("g")
        .attr("transform", "translate(" + 0.2 * width + "," + 0.025 * height + ")")
        .append("image")
        .style("cursor", "hand")
        .attr("xlink:href", "../../Images/reset.png")
        .attr("width", 0.07 * height)
        .attr("height", 0.07 * height)
        .on("click", resetButtonClicked)
        .append("title")
        .text("Reset");

}
