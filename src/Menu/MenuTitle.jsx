import PropTypes from "prop-types";

function MenuTitle({ title, description }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl md:text-5xl font-bold text-primary font-cubano mb-2 tracking-wider">
        {title}
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
      {description && (
        <p className="text-xl text-gray-600 font-din2014 uppercase tracking-widest">
          {description}
        </p>
      )}
    </div>
  );
}

MenuTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MenuTitle;
