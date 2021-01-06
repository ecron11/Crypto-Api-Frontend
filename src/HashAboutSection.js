import React from 'react'

export default function HashAboutSection() {
    return (
        <section>
            <h2>
                What is a hash?
            </h2>
            <p>A hash is a type of cryptographic algorithm used often in different computer science applications 
                for a variety of security purposes. It has a few key features:
            </p>
            <ul>
                <li>It is one way. This means that after a message has been 'hashed', it cannot be 'un-hashed'</li>
                <li>It produces a value that is fixed-size. That is to say, it will always produce a value that is the same length
                    no matter what data you put in it. You could run the word "Gandalf" through the hashing algorithm and it would produce
                     a value that is same length as if you put the entire Lord of the Rings Trilogy through.
                </li>
                <li>
                    A hash is deterministic. This means that if you put the same data into the same hashing algorithm, it will always 
                    produce the same result.
                </li>
                <li>
                    Any change to the data input into a hashing algorithm, no matter how small, will change the output completely so that
                    it would impossible to correlate the two. This prevents recognizable patterns from emerging that could be used to
                    figure out the data put into the hashing algorithm.
                </li>
            </ul>
        </section>
    )
}
