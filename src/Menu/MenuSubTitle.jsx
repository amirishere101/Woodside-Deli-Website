import PropTypes from "prop-types";

function MenuSubTitle({ title, description, id }) {
  return (
    <div className="mb-6 mt-8 border-b-2 border-primary/20 pb-2" id={id}>
      <h3 className="text-2xl font-bold text-secondary font-cubano tracking-wide">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 font-din2014 mt-1 italic">
          {description}
        </p>
      )}
    </div>
  );
}

MenuSubTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};
export default MenuSubTitle;
