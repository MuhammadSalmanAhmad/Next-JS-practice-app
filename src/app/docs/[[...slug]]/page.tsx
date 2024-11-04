import React from 'react';

async function blogs({ params }: { params: { slug: string[] } }) {
    let { slug } = await params;

   if (slug?.length === 2) {
        return (
            <div>
                <h1>Nextjs Blog</h1>
                <p>Nextjs is a React framework that allows you to build static and server-side rendered applications.</p>
            </div>
        );
    } else if (slug?.length === 1) {
        return (
            <div>
                <h1>React Blog</h1>
                <p>React is a JavaScript library for building user interfaces.</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Nodejs Blog</h1>
                <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
            </div>
        );
    }
}

export default blogs;