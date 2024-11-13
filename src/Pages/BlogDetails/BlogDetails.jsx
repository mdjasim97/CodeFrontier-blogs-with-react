import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { saveLocalStorageData } from "../../Utility/StoreData";

const BlogDetails = () => {
  const blog = useLoaderData();

  const [tabIndex, setTabIndex] = useState(0);

  const {
    title,
    reading_time_minutes,
    public_reactions_count,
    comments_count,
    published_at,
  } = blog;


  const handleBookMark = (blog) => {
    console.log(blog);
    saveLocalStorageData(blog)


  }

  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
            <div className="flex items-center md:space-x-2">
              <img
                src="https://source.unsplash.com/75x75/?portrait"
                alt=""
                className="w-4 h-4 border rounded-full"
              />
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>

          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0
                  ? "border border-b-0 border-gray-500"
                  : "border-b"
              }  border-gray-500`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>

            <Link
              to={`author`}
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1
                  ? "border border-b-0 border-gray-500"
                  : "border-b"
              }} border-b border-gray-500`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>

            {/* Bookmark button  */}
            <div
              onClick={() => handleBookMark(blog)}
              className="ml-5 p-3 bg-opacity-20 hover:bg-opacity-30 bg-primary rounded-full cursor-pointer hover:scale-105 overflow-hidden"
            >
              <MdBookmarkAdd size={20} className="text-secondary" />
            </div>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  );
};

export default BlogDetails;
