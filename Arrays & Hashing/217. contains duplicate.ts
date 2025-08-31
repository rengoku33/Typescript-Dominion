function containsDuplicate(nums: number[]): boolean {
    // approach 1 
   const sett = new Set<number>();
    for(const num of nums){
        if(sett.has(num)) return true
        sett.add(num)
    }
    return false

    // approach 2
    return new Set(nums).size !== nums.length;
};
