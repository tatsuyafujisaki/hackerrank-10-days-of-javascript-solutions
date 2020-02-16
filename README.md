# Explanation of my solution to `Day 6: Bitwise Operators`

* `a & b` is at least `k - 2` because:
  * If `k - 2` is even, the least significant bit (LSB) of `k - 2` is `0`. Assign `a = k - 2`.
  * If `k - 1` is even, LSB of `k - 1` is 0. Assign `a = k - 1`.
  * Either way, LSB of `a + 1` is `1`. Assign `b = a + 1`. So, `a & b == a`.
* `a & b` can be `k - 1` in the following case:
  * Given the conditions `a < b` and `a & b < k`, for `a & b == k - 1` to hold, `a = k - 1`.
  * For `((k - 1) & b) === k - 1` to hold, `b` is the same as `k - 1` except one bit, which is positioned at `a`'s any bit of 0, is 1.
  * To be precise, the exception bit of `b` must be positioned at `a`'s LSB of `0` to minimize the chance of `b` exceeding `n`. Such `b` is `(k - 1) | k`.
* In conclusion, `a & b = k - 1` when `a = k - 1` and `b = (k - 1) | k` and `b < n`. Otherwise, `a & b` is `k - 2`.

The literal (naive) implementation of the above logic is:
```js
function getMaxLessThanK(n, k) {
  let a = k - 1
  let b = (k - 1) | k

  if (n < b) {
    a = k - 2
    b = a + 1
  }

  return a & b
}
```

The shorter implementation is:
```js
function getMaxLessThanK(n, k) {
  return ((k - 1) | k) <= n ? (k - 1) : (k - 2);
}
```
