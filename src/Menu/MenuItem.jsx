import PropTypes from "prop-types";

function MenuItem({ title, description, additions }) {
  return (
    <div className="mb-6 group">
      <div className="flex items-baseline justify-between mb-1 border-b border-dashed border-gray-300 pb-1">
        <h3 className="text-lg font-bold text-gray-800 font-din2014 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      {description && (
        <p className="text-sm text-gray-600 font-din2014 leading-relaxed">
          {description}
        </p>
      )}
      {additions && (
        <p className="text-xs text-gray-500 font-din2014 italic mt-1">
          {additions}
        </p>
      )}
    </div>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  additions: PropTypes.string,
};
export default MenuItem;
