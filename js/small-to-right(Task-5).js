function countSmaller(nums) {
    const counts = [];

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        // Check numbers to the right of the current number
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }

        // Store the count for the current number
        counts.push(count);
    }

    return counts;
}
