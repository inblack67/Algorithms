class Stack
{
    items: number | string[];
    size: number;
    top: number;
    constructor ( size: number )
    {
        this.items = new Array( size );
        this.size = size;
        this.top = -1;
    }
    push ( el: number | string )
    {
        if ( this.top >= this.size - 1 )
        {
            throw new Error( 'StackOverflow' );
        }
        this.items[ ++this.top ] = el;
    }
    pop ()
    {
        if ( this.top === -1 )
        {
            throw new Error( 'Stack Is Empty' );
        }
        const poppedItem = this.items[ this.top ];
        delete this.items[ this.top-- ];
        return poppedItem;
    }
    isEmpty ()
    {
        return this.top === -1 ? true : false;
    }
    display ()
    {
        console.log( this.items );
    }
}

const stackAlgorithms = {
    parenthesisMatching: ( expr: string ) =>
    {
        const stack = new Stack( expr.length );
        for ( let i = 0; i < expr.length; i++ )
        {
            if ( expr[ i ].match( /[\(|\{|\[]/g ) )
            {
                stack.push( '(' );
            }
            if ( expr[ i ].match( /[\)|\}|\]]/g ) )
            {
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
};

const parenthesis = '{{{{}}()}}()[]';
const isBalanced = stackAlgorithms.parenthesisMatching( parenthesis );
console.log( isBalanced );