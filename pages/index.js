import Header from "../components/header";
import Footer from "../components/footer";

export default function Component() {
    return (
        <div className={"layout-wrapper"}>
            <Header/>
            <div className={"homepage-container"}>
                <div className={"homepage-introduction"}>
                    <h1>My name is Bruno Lemus, and I am a full stack software developer.</h1>
                    <p>I write code in Scala, Python and JavaScript, though I've been known to dabble in other things
                        from time to time</p>
                </div>
                <div className={"homepage-latest-blog-posts"}>
                    <h2>
                        Latest Blog Posts
                        <a className={"homepage-latest-blog-posts-view-all"} href={"/blog"}>View all</a>
                    </h2>
                    <div className="homepage-latest-blog-posts-list">
                        <a href="/blog/post-title">
                            <div className="homepage-latest-blog-post">
                                <div className="homepage-latest-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="homepage-latest-blog-post-title">
                                    <h3>Your Blog Post Title</h3>
                                </div>
                            </div>
                        </a>
                        <a href="/blog/post-title">
                            <div className="homepage-latest-blog-post">
                                <div className="homepage-latest-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="homepage-latest-blog-post-title">
                                    <h3>Your Blog Post Title</h3>
                                </div>
                            </div>
                        </a>
                        <a href="/blog/post-title">
                            <div className="homepage-latest-blog-post">
                                <div className="homepage-latest-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="homepage-latest-blog-post-title">
                                    <h3>Your Blog Post Title</h3>
                                </div>
                            </div>
                        </a>
                        <a href="/blog/post-title">
                            <div className="homepage-latest-blog-post">
                                <div className="homepage-latest-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="homepage-latest-blog-post-title">
                                    <h3>Your Blog Post Title</h3>
                                </div>
                            </div>
                        </a>
                        <a href="/blog/post-title">
                            <div className="homepage-latest-blog-post">
                                <div className="homepage-latest-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="homepage-latest-blog-post-title">
                                    <h3>Your Blog Post Title</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="homepage-projects">
                <h2>My Projects</h2>
                <div className="homepage-projects-list">
                    <div className="homepage-project">
                        <h3>
                            <a href="https://github.com/discourse/discourse">
                                <div className="homepage-project-icon">????</div>
                                <div className="homepage-project-title">Discourse</div>
                            </a>
                        </h3>
                        <p>A platform for community discussion. Free, open, simple.</p>
                        <div className="homepage-project-btns">
                            <a className="homepage-project-view-btn"
                               href="https://github.com/discourse/discourse">View</a>
                        </div>
                    </div>
                    <div className="homepage-project">
                        <h3>
                            <a href="https://github.com/nmajor25/seconds-converter">
                                <div className="homepage-project-icon">???</div>
                                <div className="homepage-project-title">Seconds Converter</div>
                            </a>
                        </h3>
                        <p>Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</p>
                        <div className="homepage-project-btns">
                            <a className="homepage-project-view-btn"
                               href="https://github.com/nmajor25/seconds-converter">View</a>
                        </div>
                    </div>
                    <div className="homepage-project">
                        <h3>
                            <a href="https://github.com/showdownjs/showdown">
                                <div className="homepage-project-icon">???</div>
                                <div className="homepage-project-title">Showdown</div>
                            </a>
                        </h3>
                        <p>A bidirectional Markdown to HTML to Markdown converter written in Javascript.</p>
                        <div className="homepage-project-btns">
                            <a className="homepage-project-view-btn"
                               href="https://github.com/showdownjs/showdown">View</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
