import { useEffect, useState } from "react";
import BlogCard from "../../Component/BlogCard/BlogCard";
import {
  deleteLocalStorageData,
  getLocalStorageData,
} from "../../Utility/StoreData";
import EmptyState from "../../Component/EmptyState/EmptyState";

const Bookmark = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsData = getLocalStorageData();
    setBlogs(blogsData);
  }, []);

  const handleDeleteBlog = (id) => {
    deleteLocalStorageData(id);
    const blogsData = getLocalStorageData();
    setBlogs(blogsData);
  };

  if (blogs.length < 1) return <EmptyState message='No Bookmark found.' address='/blogs' label='Go To Blogs'/>;

  return (
    <div className="grid max-w-6xl mx-auto justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          deletable={true}
          key={blog.id}
          blog={blog}
          handleDeleteBlog={handleDeleteBlog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmark;
