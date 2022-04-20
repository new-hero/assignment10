import React from 'react';

const Blogs = () => {
    return (
        <div className='container aboutme'>
            <h3>Different between Authorization and authentication</h3>
            <p>Authentication means verify a user directly and Authorization means user verify but indirectly </p>
            <p>Authentication example is create a user on the depend on email and password and Authorization example is create a user on the depend on 3rd party verify user.like google, github, facebook </p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.
            <p>firebase like service provider: </p>
               <ul>
                <li> Back4App </li>
                <li> AWS Amplify </li> 
                <li> Kuzzle </li> 
                <li> Couchbase </li> 
                <li> NativeScript </li> 
                <li> RxDB  </li>
                <li> Flutter </li>
                <li> Parse </li>
                </ul>
            </p>
            <h3>What other services does firebase provide other than authentication</h3>
            <p>Firebase provided other service : </p>
            <ul>
                <li> Cloud Firestore</li>
                <li> Cloud Functions</li>
                <li> Authentication</li>
                <li> Hosting</li>
                <li> Cloud Storage</li>
                <li> Google Analytics</li>
                <li> Predictions</li>
                <li> Cloud Messaging</li>
                <li> Dynamic Links</li> 
                <li> Remote Config</li>
            </ul>
        </div>
    );
};

export default Blogs;