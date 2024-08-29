function longestConsecutive(nums) {
    // Create a set from the array to remove duplicates and allow fast lookups
    const numSet = new Set(nums);
    let longestChain = 0;

    // Loop through each number in the array
    for (let num of nums) {
        // Check if the number is the start of a chain (no number smaller by 1 exists)
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentChain = 1;

            // Count how long the chain is by checking the next numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentChain += 1;
            }

            // Update the longest chain if the current one is longer
            longestChain = Math.max(longestChain, currentChain);
        }
    }

    return longestChain;
}
