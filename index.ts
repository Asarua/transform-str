export type TransformStr<
  S extends string,
  A extends Array<string>,
  Char extends string = '%s',
> = S extends `${infer Before}${Char}${infer After}`
      ? A extends [infer One, ...infer Other]
        ? TransformStr<
            `${Before}${One extends string ? One : ''}${After}`,
            Other extends Array<string> ? Other : []
          >
        : never
      : S
