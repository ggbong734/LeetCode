class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        intervals = sorted(intervals)
        heap = [intervals[0][1]]
        heapq.heapify(heap)
        ans = 1
        for i in range(1, len(intervals)):
            topHeap = heap[0]
            curr = intervals[i]
            if curr[0] > topHeap:
                heapq.heappop(heap)
                heapq.heappush(heap, curr[1])
            else:
                heapq.heappush(heap, curr[1])
                ans += 1

        print(intervals)
        return ans;
