# Incorrect Comparison of Nested Objects in TypeScript

This repository demonstrates a common bug in TypeScript when comparing nested objects using a simple equality check. The provided code implements a function `compareObjects` that attempts to compare two objects for equality, but fails when dealing with nested objects due to its reliance on strict equality.  This leads to inaccurate comparison results.

The solution showcases a revised `compareObjects` function that recursively compares nested objects, addressing the limitations of the original implementation.

## Bug

The original `compareObjects` function only performs a shallow comparison, failing to properly compare nested objects.

## Solution

The solution employs a recursive approach to correctly compare nested objects. This recursive strategy enables a deep comparison, ensuring that nested structures are appropriately analyzed for equality.