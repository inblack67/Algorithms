const isEven = ( num: number ): boolean => num % 2 === 0;

const evenOddSum = ( arr: number[] ): object =>
{
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach( item =>
    {
        if ( isEven( item ) )
        {
            evenSum += item;
        }
        else
        {
            oddSum += item;
        }
    } );
    return { evenSum, oddSum };
};

const arr: number[] = [ 1, 2, 3, 4, 5 ];
console.log( evenOddSum( arr ) );