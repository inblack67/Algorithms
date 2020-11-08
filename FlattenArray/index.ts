const flattenMe = ( arr: number[][] ): number[] =>
{
    return [].concat( ...arr );
};

const bloated = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ];
console.log( flattenMe( bloated ) );