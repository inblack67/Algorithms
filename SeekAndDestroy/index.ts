const seekAndDestroyThem = ( arr: any[], ...targets: any[] ): any[] =>
{
    const res = arr.filter( item =>
    {
        if ( targets.includes( item ) )
        {
            return false;
        }
        return true;
    } );
    console.log( res );
    return res;
};

const arr = [ 2, 3, 4, 6, 6, 'hello' ];
console.log( seekAndDestroyThem( arr, 'hello', 6 ) );