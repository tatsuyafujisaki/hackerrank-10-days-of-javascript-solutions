# Explanation of my solution to "Day 6: Bitwise Operators"
All we have to do is the following two.
1. Prove that `a & b` is at least `k - 2`.
  * If `k - 2` is even, the least significant bit (LSB) of `a (= k - 2)` is 0.
  * If `k - 1` is even, LSB of `a (= k - 1)` is 0.
  * Either way, LSB of `b (= a + 1)` is 1. So, `a & b == a >= k - 2`.
2. Determine when `a & b` is `k - 1`.
  * Given the restriction `a < b`, for `a & b == k - 1` to hold, `a` must be `k - 1`.
  * For `((k - 1) & b) == k - 1` to hold, `b`'s bits, which correspond to `a`'s bits of 1, must be 1s. Also, at least one of `b`'s bits, which corresponds to `a`'s bits of 0, are 0. We set `b`'s bit to 1 that corresponds to `a`'s least significant bit of 0 instead of `a`'s any bit of 0 to minimize the chance of `b` exceeding `n`.
