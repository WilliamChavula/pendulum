const interaction_events = {
    RIGHT_CLICK: "RIGHT_CLICK",
    LEFT_CLICK: "LEFT_CLICK",
    SINGLE_CLICK: "SINGLE_CLICK",
    DOUBLE_CLICK: "DOUBLE_CLICK",
    SCROLL_UP: "SCROLL_UP",
    SCROLL_DOWN: "SCROLL_DOWN",
    DRAG: "DRAG",
}

const aoiLabel = {
    aoiBackBtn: "Back Button",
    aoiNextBtn: "Next Button",
    aoiPlayBtn: "Play Button",
    aoiPauseBtn: "Pause Button",
    aoiResetBtn: "Reset Button",
    aoiPendulum: "Pendulum",
    aoiGraph: "Graph Chart",
    aoiGraphBtn: "Toggle Graph Button",
}

const answerLabel = {
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4"
}

const aoiStage = {
    "screen_1": "Screen 1",
    "screen_2": "Screen 2",
    "screen_3": "Screen 3",
    "screen_4": "Screen 4",
    "screen_5": "Screen 5",
    "screen_6": "Screen 6", // <-- Done up to here
    "screen_7": "Screen 7",
    "screen_8": "Screen 8",
    "screen_9": "Screen 9",
    "screen_10": "Screen 10",
    "screen_11": "Screen 11",
    "screen_12": "Screen 12",
    "screen_13": "Screen 13",
    "screen_14": "Screen 14",
    "screen_15": "Screen 15",
    "screen_16": "Screen 16",
    "screen_17": "Screen 17",
    "screen_18": "Screen 18",
    "screen_19": "Screen 19",
    "screen_20": "Screen 20"
}

function indexGenerator(startFrom) {
    return (function* () {
        let i = startFrom;
        while (true) yield i++;
    })();
}

// const generator = (init) => indexGenerator(init);
// const getIndex = () => generator().next()

const validateInput = (value) => value !== "" && value !== null && value !== undefined;


/**
 * @typedef Coordinate
 * @type {object}
 * @property {number} x - representing the x-coordinate
 * @property {number} y - representing the y-coordinate
 */

/**
 * @typedef CoordinateRange
 * @type {object}
 * @property {Coordinate} min
 * @property {Coordinate} max
 */

/**
 * @typedef CoordinateRegion
 * @type {object}
 *
 * @property { number} minX
 * @property { number} maxX
 * @property { number} minY
 * @property { number} maxY
 */

/** @type {Coordinate[]} */
const screen_10_coordinates = [
    {
        "x": 533.3688888888889,
        "y": 114.34999999999997
    },
    {
        "x": 545.3688888888889,
        "y": 113.34999999999997
    },
    {
        "x": 611.3688888888889,
        "y": 113.34999999999997
    },
    {
        "x": 635.3688888888889,
        "y": 112.34999999999997
    },
    {
        "x": 702.3688888888889,
        "y": 111.34999999999997
    },
    {
        "x": 725.3688888888889,
        "y": 112.34999999999997
    },
    {
        "x": 793.3688888888889,
        "y": 111.34999999999997
    },
    {
        "x": 815.3688888888889,
        "y": 111.34999999999997
    },
    {
        "x": 883.3688888888889,
        "y": 111.34999999999997
    },
    {
        "x": 905.3688888888889,
        "y": 112.34999999999997
    },
    {
        "x": 971.3688888888889,
        "y": 111.34999999999997
    },
    {
        "x": 995.3688888888889,
        "y": 111.34999999999997
    },
    {
        "x": 1061.368888888889,
        "y": 114.34999999999997
    }
];

/** @type {Coordinate[]} */
const screen_11_coordinates = [
    {
        "x": 607.3955555555556,
        "y": 257.29999999999995
    },
    {
        "x": 638.3955555555556,
        "y": 257.29999999999995
    },
    {
        "x": 677.3955555555556,
        "y": 257.29999999999995
    },
    {
        "x": 739.3955555555556,
        "y": 259.29999999999995
    },
    {
        "x": 779.3955555555556,
        "y": 259.29999999999995
    },
    {
        "x": 842.3955555555556,
        "y": 257.29999999999995
    },
    {
        "x": 881.3955555555556,
        "y": 258.29999999999995
    },
    {
        "x": 944.3955555555556,
        "y": 258.29999999999995
    },
    {
        "x": 984.3955555555556,
        "y": 257.29999999999995
    },
    {
        "x": 1045.3955555555556,
        "y": 257.29999999999995
    },
    {
        "x": 1084.3955555555556,
        "y": 256.29999999999995
    },
    {
        "x": 1146.3955555555556,
        "y": 256.29999999999995
    },
    {
        "x": 1187.3955555555556,
        "y": 257.29999999999995
    }
];

/** @type {Coordinate[]} */
const screen_12_coordinates = [
    {
        "x": 600.3955555555556,
        "y": 88.29999999999995
    },
    {
        "x": 652.3955555555556,
        "y": 88.29999999999995
    },
    {
        "x": 758.3955555555556,
        "y": 88.29999999999995
    },
    {
        "x": 863.3955555555556,
        "y": 88.29999999999995
    },
    {
        "x": 967.3955555555556,
        "y": 89.29999999999995
    },
    {
        "x": 1071.3955555555556,
        "y": 88.29999999999995
    },
    {
        "x": 1176.3955555555556,
        "y": 88.29999999999995
    }
];

/**
 * Checks if the userCoordinate (x, y) is greater than the maximum x or y coordinate in the range of correct points
 * @param {number} userCoordinate
 * @param {number} controlCoordinate
 * @return {boolean}
 */
const checkMin = (userCoordinate, controlCoordinate) => {
    return userCoordinate >= controlCoordinate;
}

/**
 * Checks if the userCoordinate (x, y) is less than the maximum x or y coordinate in the range of correct points
 * @param {number} userCoordinate
 * @param {number} controlCoordinate
 * @return {boolean}
 */
const checkMax = (userCoordinate, controlCoordinate) => {
    return userCoordinate <= controlCoordinate;
}

/**
 * Cycles through the screen_*_coordinates and gets the max and min x,y-coordinates from the array
 * @param {Array<Coordinate>} graphCoordinatesArray
 * @return {CoordinateRange}
 */
const getCoordinatesRange = (graphCoordinatesArray) => {
    const minX = graphCoordinatesArray.reduce(function (previous, current) {
        return previous.x < current.x ? previous : current;
    });

    const minY = graphCoordinatesArray.reduce(function (previous, current) {
        return previous.y < current.y ? previous : current;
    });

    const maxX = graphCoordinatesArray.reduce(function (previous, current) {
        return previous.x > current.x ? previous : current;
    });

    const maxY = graphCoordinatesArray.reduce(function (previous, current) {
        return previous.y > current.y ? previous : current;
    });

    // allow for a 5-point deviation of the actual point per requirement.
    return {min: {x: minX.x - 10, y: minY.y - 10}, max: {x: maxX.x + 10, y: maxY.y + 10}}
}
/**
 * Checks whether the userCoordinates are within the range of the point whether the pendulum is likely to be.
 *
 * @param {(Coordinate | Coordinate[])} userCoordinates - The coordinates for the point the user selected
 * @param {String} screen - the screen where the graph is displayed
 * @param {CoordinateRegion} answerCoordinatePoints - Defines the region on the graph containing the likely position(s) of the pendulum
 * @return {string} - whether the user coordinates are within range or not
 */
const checkCoordinates = (userCoordinates, screen, answerCoordinatePoints) => {
    if (userCoordinates === null || userCoordinates === undefined || JSON.stringify(userCoordinates) === '{}') {
        return "Incorrect";
    }

    if (userCoordinates instanceof Array) {
        /** @type boolean[] */
        const isWithinRange = []
        for (const coordinate of userCoordinates) {
            // Handle case when user selects multiple points on the graph
            const xWithinRange = checkMin(coordinate.x, answerCoordinatePoints.minX) && checkMax(coordinate.x, answerCoordinatePoints.maxX);
            const yWithinRange = checkMin(coordinate.y, answerCoordinatePoints.minY) && checkMax(coordinate.y, answerCoordinatePoints.maxY);

            isWithinRange.push(xWithinRange && yWithinRange);
        }

        if (isWithinRange.some(elm => elm === true)) {
            return "Correct";
        } else {
            return "Incorrect";
        }
    } else {
        const isWithinXRange = checkMin(userCoordinates.x, answerCoordinatePoints.minX) && checkMax(userCoordinates.x, answerCoordinatePoints.maxX);
        const isWithinYRange = checkMin(userCoordinates.y, answerCoordinatePoints.minY) && checkMax(userCoordinates.y, answerCoordinatePoints.maxY);


        if (isWithinXRange && isWithinYRange) {
            return "Correct";
        }

        return "InCorrect";
    }
}

