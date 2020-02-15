# Explanation of "Day 6: Bitwise Operators"
All we have to do is the following two.
1. Prove that `a & b` is at least `k - 2`.
  * If `k - 2` is even, the least significant bit (LSB) of `a (= k - 2)` is 0.
  * If `k - 1` is even, LSB of `a (= k - 1)` is 0.
  * Either way, LSB of `b (= a + 1)` is 1. So, `a & b === a >= k - 2`.
2. Determine when `a & b` is `k - 1`.
  * Given the restriction `a < b`, for `a & b == k - 1` to hold, `a` must be `k - 1`.
  * For `((k - 1) & b) === k - 1` to hold, `b` must be `(k - 1) | k` that equals `k - 1` except one bit, which corresponds to `a`'s LSB of 0 instead of `a`'s any bit of 0, is 1. to minimize the chance of `b` exceeding `n`.

In conclusion, `a & b` is `k - 1` as long as `b (= (k - 1) | k)` does not exceed `n`. If it does, `a & b` is `k - 2`.
