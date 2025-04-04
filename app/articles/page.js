import { getSortedPostsData } from "../../utility/posts";
import Link from "next/link";
import styles from "../../public/css/post.css";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import Footer from "@/components/Footer";

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
                        {filteredPosts.map(({ id, date, title, image,mobile, author }) => (
                            <a href={`/article/${id}`}>
                                <div className="post_card" key={id}>
                                    <div className="pcards_imgs">
                                    <img src={image} />
                                    <img src={mobile} />
                                    </div>
                                    {/* <div className="post-meta">
                                        <span className="post-date">
                                            <img src="/img/artical/calendar.png" />
                                            {new Intl.DateTimeFormat("en-GB").format(date)}
                                        </span>
                                        <span className="post-author">
                                            <img src="/img/artical/user.png" /> {author}
                                        </span>
                                    </div> */}
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
            <Footer />
        </>
    );
}
