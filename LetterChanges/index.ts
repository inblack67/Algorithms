const isAVowel = ( letter: string ) => letter.match( /[a|e|i|o|u]/gi ) ? true : false;

const changeLetters = ( str: string ): string =>
{
    const strArr = str.split( '' );
    const res = strArr.map( letter =>
    {
        if ( letter.match( /[z]/gi ) )
        {
            return 'A';
        }
        const ahead = letter.charCodeAt( 0 ) + 1;
        const newLetter = String.fromCharCode( ahead );
        const isVowel = isAVowel( newLetter );
        if ( isVowel )
        {
            return newLetter.toUpperCase();
        }
        return newLetter;
    } );
    console.log( res );
    return res.join( '' );
};

const str = 'zahelloworlds';
console.log( changeLetters( str ) );