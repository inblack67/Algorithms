const isItPrime = ( num: number ): boolean =>
{
    if ( num < 2 )
    {
        return false;
    }
    const numSqrt = Math.floor( Math.sqrt( num ) );
    for ( let i = 2; i <= numSqrt; i++ )
    {
        if ( num % i === 0 )
        {
            return false;
        }
    }
    return true;
};

console.log( isItPrime( 1 ) );