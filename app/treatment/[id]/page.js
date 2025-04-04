import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../utility/treatments";
import styles from "../../../public/css/post.css";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({ id: path.params.id }));
}

export default async function Post({ params, searchParams }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 8); // Get the most recent 4 posts

  const searchQuery = searchParams?.search || "";
  const filteredRecentPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TopBar />
      <div style={{ backgroundImage: `url(${postData.breadcrmb})` }}  className="treatment_banner">
        <div className="container">
          <h1>{postData.title}</h1>
        </div>
      </div>
      <div className="container">
        <div className="post-container">
          <aside className="recent-posts">
            <div className="treatment-recent">
              <h4>All Treatments</h4>
              <ul>
                {filteredRecentPosts.map(({ id, title }) => (
                  <li
                    key={id} 
                    className={id === params.id ? 'current' : ''}
                  >
                    <Link className="treatment_link" href={`/treatment/${id}`}>
                    <span><Link href={`/treatment/${id}`}>{title}</Link></span>
                    <img src="/img/artical/next.png" alt="Customer Care" />
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
            <div className="treatment-help">
              <h4>
                Do You Need <br />
                Any <span>Help?</span>
              </h4>
              <img src="/img/about/customer-care.png" alt="Customer Care" />
              <div className="treatment-contact">
                <a href="mailto:drgvimal@gmail.com">drgvimal@gmail.com</a>
              </div>
            </div>
          </aside>
          <article className="single-treat">
            <div className="post_contents">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>
          </article>
        </div>
      </div>

     <Footer />
    </>
  );
}
