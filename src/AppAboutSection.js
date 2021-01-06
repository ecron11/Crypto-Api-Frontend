import React from 'react'

export default function AppAbout() {
    return (
        <section>
            <h2>About this App</h2>
            <hr />
            <p>This is an application created by 
                <a href="https://www.erik-longepee.com" target="_blank" rel="noreferrer"> Erik Longuepee </a>
                to demonstrate different Hashing algorithms. It consists of a React front end, 
                which calls a NodeJs and Express API on the backend. I could most likely have done all of the hashing locally,
                however I wanted to use this as a chance to create an API and work with Node/express without any sort of database involved.
                I wanted the chance to focus on Node exclusively.
                </p>
        </section>
    )
}
