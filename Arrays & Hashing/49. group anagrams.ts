function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string,string[]>();
    for(const str of strs){
        let arr: number[] = Array(26).fill(0)
        for(let i=0; i<str.length; i++){
            arr[str.charCodeAt(i)-97]++
        }
        const strConv = arr.join("#")
        if(map.has(strConv)) map.get(strConv).push(str)
        else map.set(strConv, [str])
    }
    return Array.from(map.values())
};
