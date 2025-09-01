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

// good luck with that
function groupAnagrams(words: string[]): string[][] {
  const anagramGroups = new Map<string, string[]>();

  for (const word of words) {
    const frequencyKey = Array.from(word).reduce((frequency, char) => {
      frequency[char.charCodeAt(0) - 97]++;
      return frequency;
    }, Array(26).fill(0)).join("#");

    (anagramGroups.get(frequencyKey) || anagramGroups.set(frequencyKey, []).get(frequencyKey)).push(word);
  }

  return [...anagramGroups.values()];
}
