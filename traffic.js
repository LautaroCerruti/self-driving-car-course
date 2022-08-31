class Traffic{
    constructor(rowsQuantity = 7, lanes = 3, minPerRow = 1, maxPerRow = 2,
        minDistance = 100, maxDistance = 200, minWidth= 30, maxWidth = 30, 
        minHeigth= 50, maxHeigth = 50, minSpeed = 2, maxSpeed = 2) {
        this.trafficCars = [];
        
        let lastY = -0;
        for(let r = 0; r < rowsQuantity; ++r) {
            const many = getRandomInt(Math.min(minPerRow, lanes-1), Math.max(maxPerRow,lanes-1));
            let possibleLanes = [...Array(lanes).keys()];
            const newY = lastY - getRandomInt(minDistance, maxDistance);
            for(let c = 0; c < many; ++c) { 
                const lane = possibleLanes[getRandomInt(0, possibleLanes.length)];
                possibleLanes = possibleLanes.filter(e => e != lane);
                this.trafficCars.push(new Car(road.getLaneCenter(lane), newY, getRandomInt(minWidth, maxWidth), getRandomInt(minHeigth, maxHeigth), "DUMMY", getRandomArbitrary(minSpeed, maxSpeed)));
            }
            lastY = newY;
        }
    }

    update() {
        for(let i = 0; i < this.trafficCars.length; ++i) {
            this.trafficCars[i].update(road.borders, []);
        }
    }

    draw() {
        for(let i = 0; i < this.trafficCars.length; ++i) {
            this.trafficCars[i].draw(carCtx, "red");
        }
    }
}