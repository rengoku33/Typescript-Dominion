function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    nums.forEach(n => freq.set(n, (freq.get(n) || 0) + 1));

    const buckets: number[][] = Array(nums.length + 1).fill(0).map(() => []);
    freq.forEach((count, num) => buckets[count].push(num));

    const result: number[] = [];
    for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }
    return result;
}
