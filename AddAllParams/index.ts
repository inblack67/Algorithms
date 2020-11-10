const addAllParams = ( ...params: number[] ): number => params.reduce( ( prev, curr ) => prev + curr );

console.log( addAllParams( 1, 2, 3, 5 ) );

