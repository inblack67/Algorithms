const isPrimeNumber = ( num: number ): boolean =>
{
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

const primeSum = ( range: number ): number =>
{
    let sum = 0;
    for ( let i = 2; i <= range; i++ )
    {
        const isPrime = isPrimeNumber( i );
        if ( isPrime )
        {
            sum += i;
        }
    }
    return sum;
};

console.log( primeSum( 5 ) );