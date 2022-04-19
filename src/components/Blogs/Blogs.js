import React from 'react';

const Blogs = () => {
    return (
        <div className='container aboutme'>
            <h3>Different between Authorization and authentication</h3>
            <p>Authentication means verify a user directly and Authorization means user verify but indirectly </p>
            <p>Authentication example is create a user on the depend on email and password and Authorization example is create a user on the depend on 3rd party verify user.like google, github, facebook </p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.
                <p>firebase like service provider: Back4App. ...
AWS Amplify ,Kuzzle ,Couchbase ,NativeScript ,RxDB ,Flutter, Parse.</p>
            </p>
            <h3>What other services does firebase provide other than authentication</h3>
            <p>Other service of firebase provede: Cloud Firestore
                Cloud Functions,Authentication,Hosting
                Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config
</p>
        </div>
    );
};

export default Blogs;