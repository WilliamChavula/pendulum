const BASE_URL = "http://localhost:8081/interaction";

/**
 * Using this object directly is strongly discouraged! Use the {newInteraction} function defined below.
 * This object is merely a template for interactions.
 * Using this object on a stage where multiple interactions occur will cause values to be overwritten by other interactions.
 * This is because objects are passed by reference.
 * @type {{
 * interaction_end: null,
 * duration: null,
 * evt_label: {
 *     evt_label: null
 *     interaction_type: null
 *      },
 * evt_x_coord: null,
 * index: null,
 * interaction_start: null,
 * timestamp: null,
 * stage_name: null,
 * aoi_name: null,
 * evt_y_coord: null}}
 */
const interaction = {
    interaction_start: null,
    interaction_end: null,
    index: null,
    timestamp: null,
    evt_label: null,
    duration: null,
    stage_name: null,
    aoi_name: null,
    evt_x_coord: null,
    evt_y_coord: null,
};

const assessmentInteraction = {
    ...interaction,
    assessment: {
        correct_answer: null,
        answer_chosen: null,
        question: null
    }
};

/**
 * Makes an API request to the backend to store a user's interaction.
 * @param {string} path - The route to send the POST request
 * @param {Object} interaction_obj - The interactions that are captured about a user. This object is sent to the backend.
 * @param interaction_obj.interaction_start - When interaction started
 * @param interaction_obj.interaction_end - When interaction ended
 * @param interaction_obj.index - Chronological rank of the event in the sequence of events
 * @param interaction_obj.timestamp - Local/universal time-stamp of the event
 * @param interaction_obj.evt_label - Nature of event (e.g. click)
 * @param interaction_obj.duration - How long the event tok place
 * @param interaction_obj.stage_name - The name of the stage of the simulation in which this event happened
 * @param interaction_obj.aoi_name - The name of the area of interest (AOI) of the screen in which this event happened e.g. pendulum
 * @param interaction_obj.evt_x_coord - X coordinate of the point at which the event occurred
 * @param interaction_obj.evt_y_coord - Y coordinate of the point at which the event occurred
 * @returns {Promise<void>}
 */
const postInteraction = async (interaction_obj, path="/") => {
    const res = await fetch(BASE_URL+path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(interaction_obj)
    })
    const payload = await res.json();
};

const Interaction = function (
    interaction_start,
    interaction_end,
    index,
    timestamp,
    event_info,
    duration,
    stage_name,
    aoi_name,
    evt_x_coord,
    evt_y_coord
) {
    this.interaction_start = interaction_start;
    this.interaction_end = interaction_end;
    this.index = index;
    this.timestamp = timestamp;
    this.event_info = event_info;
    this.duration = duration
    this.stage_name = stage_name;
    this.aoi_name = aoi_name;
    this.evt_x_coord = evt_x_coord;
    this.evt_y_coord = evt_y_coord;
}

const InteractionBuilder = function () {

    return {
        /**
         * The time the interaction started
         * @param {number} interaction_start
         */
        setInteractionStart(interaction_start) {
            this.interaction_start = interaction_start;
            return this;
        },
        /**
         * The time the interaction Finished
         * @param {number} interaction_end
         */
        setInteractionEnd(interaction_end) {
            this.interaction_end = interaction_end;
            return this;
        },
        /**
         * The unique index for this interaction
         * @param {number} index
         */
        setIndex(index) {
            this.index = index;
            return this;
        },
        /**
         * The time the interaction started as a timestamp
         * @param {number} timestamp
         */
        setTimestamp(timestamp) {
            this.timestamp = timestamp;
            return this;
        },
        /**
         * The object describing the nature of the event
         * @param {Object} event_info
         * @param {string} event_info.evt_label
         * @param {string} event_info.interaction_type
         */
        setEventInfo({evt_label = "", interaction_type = ""} = {}) {
            this.event_info = {evt_label, interaction_type};
            return this;
        },
        /**
         * How long the user interacted with an aoi
         * @param {number} duration
         */
        setDuration(duration) {
            this.duration = duration;
            return this;
        },
        /**
         * The name of the stage in the simulation. In this case, screens during the simulation
         * @param {string} stage_name
         */
        setAOIStageName(stage_name) {
            this.stage_name = stage_name;
            return this;
        },
        /**
         * The name of the aoi within the stage
         * @param {string} aoi_name
         */
        setAOIName(aoi_name) {
            this.aoi_name = aoi_name;
            return this;
        },
        /**
         * The x-coordinate of the aoi
         * @param {number} evt_x_coord
         */
        setEventXCoord(evt_x_coord) {
            this.evt_x_coord = evt_x_coord;
            return this;
        },
        /**
         * The y-coordinate of the aoi
         * @param {number} evt_y_coord
         */
        setEventYCoord(evt_y_coord) {
            this.evt_y_coord = evt_y_coord;
            return this;
        },
        /**
         * The built interaction object
         * @returns {Interaction}
         */
        build() {
            return new Interaction(this.interaction_start,
                this.interaction_end,
                this.index,
                this.timestamp,
                this.event_info,
                this.duration,
                this.stage_name,
                this.aoi_name,
                this.evt_x_coord,
                this.evt_y_coord);
        }
    };
};
