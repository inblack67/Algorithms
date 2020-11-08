const chunkedArray = ( arr: number[], length: number ): number[][] =>
{
    let chunked: number[][] = [];
    for ( let i = 0; i < arr.length; i += length )
    {
        const slicedArr = arr.slice( i, i + length );
        chunked.push( slicedArr );
    }
    return chunked;
};

const chunkMe = [ 1, 2, 3, 4, 4, 5, 6 ];
console.log( chunkedArray( chunkMe, 2 ) );