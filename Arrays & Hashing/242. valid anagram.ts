function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const arr: number[] = Array(26).fill(0);
    for (let i=0; i<s.length; i++){
        arr[s.charCodeAt(i)-97]++
        arr[t.charCodeAt(i)-97]--
    }

    // can be switched to every fn
    // for(let i in arr){
    //     if (arr[i]!==0) return false
    // }
    // return true

    return arr.every(num => num === 0)
};
