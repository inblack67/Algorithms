const ransomNote = 'I Own You';
const dictionary = 'Like I said before, knowing is owning. I own you';

const isAWorthyNote = ( ransomNote: string, dictionary: string ): boolean =>
{
    const noteArray = ransomNote.toLowerCase().split( ' ' );
    const dictionaryArray = dictionary.toLowerCase().split( ' ' );
    let isIt = true;
    noteArray.forEach( word =>
    {
        const index = dictionaryArray.indexOf( word );
        console.log( index );
        if ( index === -1 )
        {
            isIt = false;
        }
    } );
    return isIt;
};

console.log( isAWorthyNote( ransomNote, dictionary ) );