import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import errorImage from "../../assets/404.jpg";

const BlogCard = ({ blog }) => {
  const { title, cover_image, description, id, published_timestamp } = blog;
  return (
    <div className="transition border-opacity-30 border-2 hover:scale-105 border-primary hover:border-secondary">
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
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.array,
};

export default BlogCard;
