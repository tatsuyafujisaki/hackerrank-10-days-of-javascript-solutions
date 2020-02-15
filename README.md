# Explanation of my solution to "Day 6: Bitwise Operators"

Prove that the answer `a & b` is at least `k - 2`.
* If `k - 2` is even, the least significant bit (LSB) of `a = k - 2` is 0.
* If `k - 1` is even, LSB of `a = k - 1` is 0.
* Either way, LSB of `b = a + 1` is 1. So, `a & b == a >= k - 2.

Determine when the answer is `k - 1`.
* Given the restriction `a < b`, for `a & b == k - 1` to hold, `a` must be `k - 1`.
* For `((k - 1) & b) == k - 1` to hold, `b`'s bits must be 1s where `a`'s bits are 1s. Also, at least one of `b`'s bits must be 1 where `a`'s bits are 0.
