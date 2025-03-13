import { getSortedPostsData } from "../../utility/treatments";
import Link from "next/link";
import styles from "../../public/css/post.css";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";

export default async function Blogs({ searchParams }) {
    const allPostsData = getSortedPostsData();
    const searchQuery = searchParams.search || "";

    const filteredPosts = allPostsData.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <TopBar />
            <div className="post_banner">
                <div className="container">
                    <h2>Articles</h2>
                </div>
            </div>
            <section className="posts">
                <div className="container">
                    <div className="search_post">
                        <form action="/blogs" method="GET">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search blogs..."
                                defaultValue={searchQuery}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className="post_cards">
                        {filteredPosts.map(({ id, date, title, image, author }) => (
                            <a href={`/article/${id}`}>
                                <div className="post_card" key={id}>
                                    <img src={image} />
                                    <div className="post-meta">
                                        <span className="post-date">
                                            <img src="/img/artical/calendar.png" />
                                            {date}
                                        </span>
                                        <span className="post-author">
                                            <img src="/img/artical/user.png" /> {author}
                                        </span>
                                    </div>
                                    <h3>{title}</h3>
                                    <a className="readmore" href={`/article/${id}`}>
                                        Read More
                                    </a>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            {/* CopyRightText and other sections */}
            <div
                className="iknow_tm_copyright"
                style={{ paddingTop: 40, paddingBottom: 40 }}
            >
                <div className="container">
                    <footer className="footer">
                        <div className="footer-column">
                            <a href="/">

                                <img src="/img/logo/logo.png" alt="logo" />


                            </a>
                            <p>
                                Our dedicated team ensures children receive personalized, compassionate care every step of the way.
                            </p>
                        </div>
                        <div className="footer-column">
                            <h3>Doctors</h3>
                            <ul>

                                <Link href="/vimal" className="footer-item">Dr Vimal Kumar G</Link>
                                <Link href="/deena" className="footer-item">Dr. M. Deenadayalan </Link>
                                <Link href="/rishab" className="footer-item">Dr. Rishab Bharadwaj </Link>


                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Usefull Links</h3>
                            <ul>
                                <Link href="/" className="footer-item">About Us</Link>
                                <Link href="/articles" className="footer-item">Articles</Link>
                                <Link href="/" className="footer-item">FAQ </Link>
                                <Link href="/contact" className="footer-item">Contact Us </Link>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="mailto:drgvimal@gmail.com">drgvimal@gmail.com</a></li>
                                <li>MGM Cancer Institute : MGM Cancer Institute, Nelson Manickam Road, Rajeswari St, Rajaram Mehta Nagar, Aminjikarai, Chennai, Tamil Nadu 600029</li>

                            </ul>
                        </div>
                    </footer>
                    <div className="inner">
                        <div className="left">
                            <p>
                                Copyright © PHOchennai. All Rights Reserved.
                            </p>
                        </div>
                        <div className="right">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img className="svg" src="/img/svg/social/facebook.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="svg" src="/img/svg/social/twitter.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="svg" src="/img/svg/social/youtube.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
