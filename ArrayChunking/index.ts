const chunkedArray = ( arr: number[], length: number ): number[] =>
{
    let chunked = [];
    for ( let i = 0; i < arr.length; i += length )
    {
        const slicedArr = arr.slice( i, i + length );
        chunked.push( slicedArr );
    }
    return chunked;
};

const arr = [ 1, 2, 3, 4, 4, 5, 6 ];
console.log( chunkedArray( arr, 2 ) );