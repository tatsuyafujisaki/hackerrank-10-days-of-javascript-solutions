function getSecondLargest(nums) {
  return [...new Set(nums)].sort((a, b) => b - a)[1];
}
