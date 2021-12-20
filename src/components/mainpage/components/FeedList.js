import React from 'react'
import Feeditem from './Feeditem'

function FeedList ( {samples} ) {
    return (
        <div>
         
            { samples.map(( samples, id) =>( <Feeditem {...samples} key={id}/> ))}
        </div>
    )
}

export default FeedList

