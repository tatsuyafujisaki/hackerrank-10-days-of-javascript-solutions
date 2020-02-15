Prove that the answer `a & b` is at least `k - 2`.
* If `k - 2` is even, the least significant bit (LSB) of `a = k - 2` is 0.
* If `k - 1` is even, LSB of `a = k - 1` is 0.
* Either way, LSB of `b = a + 1` is 1. So, `a & b === a` where `a` is `k - 2` or `k - 1`.
