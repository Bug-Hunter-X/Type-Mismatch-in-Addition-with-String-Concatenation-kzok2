# Type Mismatch in Addition with String Concatenation

This code demonstrates a common yet subtle error in TypeScript where type mismatches can lead to unexpected behavior.  While TypeScript is known for its strong typing, there are instances where implicit type coercion can lead to surprising results. 

This specific example involves adding a number and a string. While this is generally an error in many statically-typed languages, TypeScript allows this. However, instead of a runtime error, the behavior may not match what the developer intends.  The result is string concatenation, not addition.

The solution involves using type guards or explicit type assertions to ensure that the values being added are both numbers before proceeding with the addition operation.