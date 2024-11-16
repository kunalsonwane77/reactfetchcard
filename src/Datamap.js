import React from 'react'

function Datamap({name,email,body,post}) {
  return (
    <div className='cards'>
        <h1>Name : {name}</h1>
        <p>email: {email}</p>
        <h3>{body}</h3>
        <h2>post : {post}</h2>
    </div>
  )
}

export default Datamap;