/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  // max heap approach, store all the fuel capacity of visited stations
  // when we run out of fuel we pick the station with the highest fuel to refill
  // loop through each station, because we need to reach target at the end of stations
  // calculate remaining tank by subtracting diff in curr - prev from tank
  // then if tank is negative, we need to keep taking fuel and raising ans by 1 until
  // steps is positive
  // if after using all the capacity, tank is still negative return -1
  // then push current capacity into the heap
  // time complexity is O(n log n) may need to push all stations into heap
  // space: O(n) for heap
  const pq = [];
  stations.push([target, Infinity]);

  let ans = 0;
  let prev = 0;
  let tank = startFuel;

  for (let [location, capacity] of stations) {
    tank -= (location - prev);
    while (pq.length > 0 && tank < 0) {
      tank += pq.pop();
      ans += 1;
    }
    if (tank < 0) return -1;
    pq.push(capacity);
    pq.sort((a, b) => a - b);
    prev = location;
  }
  return ans;
};
