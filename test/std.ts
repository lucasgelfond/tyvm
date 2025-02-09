export type Print<T> = T;

export type Rand<Min extends number, Max extends number> = number;
export type Floor<A extends number> = number;
export type Mod<A extends number, B extends number> = number;
export type Add<A extends number, B extends number> = number;
export type Sub<A extends number, B extends number> = number;
export type Mul<A extends number, B extends number> = number;
export type Div<A extends number, B extends number> = number;
export type Exp<A extends number, B extends number> = number;
export type Min<A extends number, B extends number> = number;
export type Max<A extends number, B extends number> = number;
export type Lte<A extends number, B extends number> = boolean;
export type Lt<A extends number, B extends number> = boolean;
export type Gte<A extends number, B extends number> = boolean;
export type Eq<A extends number, B extends number> = boolean;
export type And<A extends boolean, B extends boolean> = boolean;
export type Or<A extends boolean, B extends boolean> = boolean;
export type WriteFile<Path extends string, Content extends string> = never;
export type ToTypescriptSource<Name extends string, T extends any> = never;
export type Panic<Msg extends string> = never;
export type NewArray<T, N extends number> = T[];
export type Fill<A extends any[], B extends any> = A;
export type RequestAnimFrame<
  State extends { drawCommands: Array<DrawCommand> }
> = void;
// export type Update<F, A extends F, B extends F> = Omit<A, keyof B> & B;
// export type Update<A extends any, B extends A> = Omit<A, keyof B> & B;
export type Update<A, B> = {
  [K in keyof A]: K extends keyof B ? B[K] : A[K];
};
export type SetArray<A extends any[], B extends any, I extends number> = A;
export type DrawCommandKindImage = 0;
export type DrawCommandKindClearCanvas = 1;
export type DrawCommandKindFill = 2;
export type DrawCommand =
  | {
      type: DrawCommandKindImage;
      img: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: DrawCommandKindClearCanvas;
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: DrawCommandKindFill;
      fillStyle: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
export type AssertEq<A, B> = void;
