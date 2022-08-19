/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
    // to find shortest length we need to use bfs
    // take A or R approach with bfs
    // memo with position and speed, use a string combination instead of an array
    // keep track of number of steps in bfs
    // don't choose A when overshot i.e. speed>2* target or posn>2*target or if A is visited
    // if new position is target, return steps + 1
    // don't choose R if visited already
    // increment step after each loop of bfs
    // time: O(V + E) ???, each target may need to be visited
    // space : O(T) target value, each target may need a node

    const visited = new Map(); // if position seen before with the same speed skip
    visited.set(0 + "," + 1, true) // key: [pos, spd], value: true

    const q = new MyQueue();
    q.push([0, 1]);

    let steps = 0;
    while (q.length > 0) {
        let qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            let [pos, spd] = q.pop();
            let Apos = pos + spd;
            if (Apos === target) return steps + 1;
            let Aspd = spd * 2;
            if (Math.abs(Apos) < 2 * target && Math.abs(Aspd) < 2 * target
                && !visited.has(Apos + "," + Aspd)) {
                q.push([Apos, Aspd]);
                visited.set(Apos + "," + Aspd, true);
            }
            let Rspd = spd > 0 ? -1 : 1;
            if (!visited.has(pos + "," + Rspd)) {
                q.push([pos, Rspd]);
                visited.set(pos + "," + Rspd, true);
            }
        }
        steps += 1;
    }

    return -1;
};


class MyQueue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.length = 0;
    }

    push(item) {
        this.queue.push(item);
        this.length++;
    }

    pop() {
        if (this.head >= this.queue.length) throw "Error";
        let toRemove = this.queue[this.head];
        this.head++;
        this.length--;
        return toRemove;
    }

}
