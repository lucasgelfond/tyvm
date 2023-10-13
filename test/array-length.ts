import { Print, Add, Sub, Lte, Eq, ParseInt, Panic } from "./std";

// Helper type to increment array by adding an element
type Inc<ArrayType extends any[]> = [...ArrayType, unknown];

// Helper type to decrement array by removing an element
type Dec<ArrayType extends any[]> = ArrayType extends [unknown, ...infer Rest]
  ? Rest
  : [];

// Type-level addition
type Add<A extends any[], B extends any[]> = {
  0: B;
  1: Add<Dec<A>, Inc<B>>;
}[A extends [] ? 0 : 1];

// Test
type Zero = [];
type One = Inc<Zero>;
type Two = Inc<One>;
type Three = Inc<Two>;
type Four = Inc<Three>;

type TestAddition = Add<Two, Two>; // Should be equivalent to Four

export type Main<Args extends string[]> = Print<TestAddition["length"]>;
