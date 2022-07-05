const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/rest-rant-home.jpg" alt="Rest-Rant Home Picture" class="foodPicture"/>
                    <div>
                    Photo by <a href="https://unsplash.com/es/@antenna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Antenna</a> on <a href="https://unsplash.com/s/photos/dinner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                     <button className="btn-primary">RANT Here!</button>
                </a>
            </main>
        </Def>
    )
}



module.exports = home