import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../utility/posts";
import styles from "../../../public/css/post.css";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import Link from "next/link";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({ id: path.params.id }));
}

export default async function Post({ params, searchParams }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 4); // Get the most recent 4 posts

  // Search functionality
  const searchQuery = searchParams.search || "";
  const filteredRecentPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TopBar />

      <div className="post_banner">
        <div className="container">
          <h2>Article Details</h2>
        </div>
      </div>
      <div className="container">
        <div className="post-container">
          <article className="single-post">
          <div className="pcards_imgs">
                                    <img src={postData.singleImage} className="featured_img" alt="logo" />
                                    <img src={postData.MobileSingleImage} className="featured_img" alt="logo" />
                                    </div>
        
            <div className="post_contents">
              <div className="post-meta">
                {/* <span className="post-date">
                  <img src="/img/artical/calendar.png" />
                  {postData.date}
                </span> */}
                {/* <span className="post-author">
                  <img src="/img/artical/user.png" /> {postData.author}
                </span> */}
              </div>
              <h1>{postData.title}</h1>

              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
              </div>
              <div className="post_comment">
              <h3>Comments</h3>
              <form action={`/api/comments/${params.id}`} method="POST">
                <textarea
                  name="comment"
                  placeholder="Leave a comment"
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
              </div>
          </article>

          <aside className="recent-posts">
          <div className="search">
          <h4>Search Recent Blogs</h4>
            <form action="/search" method="GET">
             
              <input
                type="text"
                name="q" 
                placeholder="Search recent blogs..."
                defaultValue={searchQuery}
              />
              <button type="submit">Search</button>
            </form>
          </div>
           
            <div className="recent">
            <h4>Recent Blogs</h4>
            <ul>
              {filteredRecentPosts.map(({ id, title,image }) => (
                <li key={id}>
                   <img src={image} />
                  <a href={`/article/${id}`}>{title}</a>
                </li>
              ))}
            </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}
