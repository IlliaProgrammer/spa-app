import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-3">
                <div className="profile-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTTF7_1nxRKZ_BmyVujBY-nbQ3keehWWxvQ&usqp=CAU"/>
                    <h2>John Doe</h2>
                    <p>25 followers</p>
                </div>
            </div>
            <div className="col-6">
                <div className="post-box">
                    <textarea placeholder="What's on your mind?"></textarea>
                    <button class="button-54">Post</button>
                </div>
                <div className="post">
                    <img src="https://www.teodesk.com/wp-content/uploads/2018/01/Life-of-a-PM-2048x1316.jpg"/>
                    <h3>A Day in the Life of a Project Manager</h3>
                    <p>We don’t know whether every project manager can recall the exact moment they decided on their future profession. It may have been that they met a PM who passionately spoke about their work or maybe they saw a movie about some Wall Street shark (imagining their life would be just as exciting as it is on screen).

Nevertheless, once the profession is chosen most PMs will end up sticking to it. It’s said that after a while it sort of gets under your skin. It is hard to explain. Even though this job is highly stressful, and you can always hear a PM wining and swearing “when this quarter ends, I’m gone with the wind” – somehow, by the next quarter, his enthusiasm gets the best of them all over again.

To try and solve this mystery, we’ll go straight to the source. To a day in a PM’s life. One working day, of course (is there another kind?).

But let’s see if it’s true what they say.

Is being a PM actually something like this?</p>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default Home;