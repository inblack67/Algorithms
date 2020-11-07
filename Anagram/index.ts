const purifyString = ( str: string ) => str.toLowerCase().split( '' ).sort().join( '' );

const isAnagram = ( str1: string, str2: string ) =>
{
    const purifiedStr1 = purifyString( str1 );
    const purifiedStr2 = purifyString( str2 );
    return purifiedStr1 === purifiedStr2;
};

console.log( isAnagram( 'aman', 'maan' ) );