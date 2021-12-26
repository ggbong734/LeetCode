/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // https://dev.to/cod3pineapple/207-course-schedule-javascript-solution-24e5

    // Kahn's algorithm to check if we can topologically sort a graph
    // first find vertices with no incoming edges, and remove outgoing edges from these vertices
    //
    // use an array of fixed size to keep track of courses that have prerequisites
    // If imagined as a graph, these courses will have no edges pointing into them
    const inDegree = new Array(numCourses).fill(0);

    // Count how many times each course is an 'a'
    // Each course count will be placed at a corresponding index in the inDegree array
    for (const prereq of prerequisites) {
        inDegree[prereq[0]]++;
    }
    // store the courses which have no prerequisites, have inDegree of zero
    const zeroDegree = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) zeroDegree.push(i);
    }

    // if there is no zeroDegree courses, there is no heirarchical relation because you cannot not take a single course without needing to take another one first
    if (zeroDegree.length === 0) return false;

    // loop until no more zeroDegree
    // remove each outgoing edge from zeroDegree
    while (zeroDegree.length) {

        // Remove a course from the array on every iteration
        const course = zeroDegree.pop();

        // Account for all the times in the prerequisites array that this course was a precourse to another course, i.e. course was in the 'b' position
        for (const pre of prerequisites) {
            // if the popped zeroDegree is a prereq, subtract 1 from the inDegree course
            if (pre[1] === course) {
                inDegree[pre[0]]--;
                // if the inDegree has been completed, we have accounted for all edges leading into this vertex, we push it into zeroDegree and check if it is needed for any other course
                if (inDegree[pre[0]] === 0) {
                    zeroDegree.push(pre[0]);
                }
            }
        }
    }
    // if there are prereqs that we cannot complete return false
    for (const num of inDegree) {
        if (num !== 0) return false;
    }

    return true;

};
