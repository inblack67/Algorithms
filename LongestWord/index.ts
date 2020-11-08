const longestWords = ( str: string ): string | string[] =>
{
    const strArr = str.split( ' ' );
    let maxLength = 0;
    strArr.forEach( word =>
    {
        if ( word.length >= maxLength )
        {
            maxLength = word.length;
        }
    } );
    const resultantWords: string[] = strArr.filter( word => word.length === maxLength );
    return resultantWords.length > 1 ? resultantWords : resultantWords.join( '' );
};

const str = 'Jim Moriarty sends his love Eightsss';
console.log( longestWords( str ) );