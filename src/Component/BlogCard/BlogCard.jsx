import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import errorImage from "../../assets/404.jpg";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDeleteBlog }) => {
  const { title, cover_image, description, id, published_timestamp } = blog;

 
  return (
    <div className="transition flex mt-10 relative border-opacity-30 border-2 hover:scale-105 border-primary hover:border-secondary">
      <Link
        to={`/blogDetails/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || errorImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_timestamp).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deletable && (
        <div
          onClick={() => handleDeleteBlog(id)}
          className="absolute bg-primary ml-5 rounded-full p-3 hover:bg-secondary group cursor-pointer hover:scale-105 -top-5 -right-5"
        >
          <MdDelete
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.bool,
  handleDeleteBlog : PropTypes.func,
};

export default BlogCard;
