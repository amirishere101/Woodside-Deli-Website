import MenuTitle from "./MenuTitle";
import MenuSubTitle from "./MenuSubTitle";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <span id="menu"></span>
      <div className={styles.menuSection}>
        <MenuTitle title="BREAKFAST" description="SERVED ALL DAY" />
        <div className={styles.breakfastSection}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <MenuSubTitle
                title="Omlettes"
                description="All omlettes are 3 eggs and served with one choice of homefries, grits, or tomato slices and buttered toast."
              />
              <MenuItem
                title="Western Omlette"
                price={13.95}
                description="green peppers, sautéed onions, and ham"
                additions=" add cheese (1)"
              />
              <MenuItem
                title="Bacon & Cheese Omlette"
                price={13.45}
                description="melted american cheese and perfectly crispy bacon bits"
              />
              <MenuItem
                title="Veggie & Cheese Omlette"
                price={13.45}
                description="Mushrooms, green peppers, onions, with melted american and swiss cheese"
              />
              <MenuItem
                title="Ham & Cheese Omlette"
                price={13.45}
                description="Melted american cheese with diced ham"
              />
              <MenuItem
                title="Italian Sausage Omlette"
                price={13.95}
                description="spicy italian sausage with onions, green peppers and tomato sauce, topped with melted provolone cheese"
              />
              <MenuItem
                title="Mushroom, Ham & Swiss Omlette"
                price={13.45}
                description="melted swiss cheese with diced ham and sautéed mushrooms"
              />
              <MenuItem
                title="Cheese Omlette"
                price={11.95}
                description="creamy melted american cheese on top and inside of the omlette"
              />
              <MenuItem
                title="Corned Beef & Swiss Omlette"
                price={13.95}
                description="melted swiss cheese with chopped corned beef slices"
              />
              <MenuItem
                title="Minced Nova Scotia Lox Omlette"
                price={15.95}
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                additions="add onions (1)"
              />
              <MenuItem
                title="Burrito Omlette"
                price={14.45}
                description="sausage, green peppers, onion, tomatoes, and refried beans, topped with melted cheddar cheese and montery jack cheese in a warm tortilla, served with salsa and sour cream on the side"
              />
              <MenuItem
                title="Spinach & Feta with Mushrooms"
                price={13.95}
                description="diced feta with spinach and mushrooms inside an omlette"
              />
              <MenuItem
                title="Broccoli & Cheddar Omlette"
                price={14.45}
                description="melted cheddar cheese with broccoli and minced onions"
              />
            </div>
            <div>
              <MenuSubTitle
                title="Egg Dishes"
                description="we offer egg whites upon request for all egg dishes."
              />
              <MenuItem
                title="Two Eggs Any Style"
                price="12.95"
                description="two eggs cooked anyway you'd like served with your choice of breakfast meat, a choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                additions=" add cheese (1) bagel with cream cheese (1.50)"
              />
              <MenuItem
                title="Morning Special"
                price="10.95"
                description="two eggs cooked anyway you'd like served with your choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                additions=" add cheese (1) bagel with cream cheese (1.50)"
              />
              <MenuItem
                title="Eggs Benedict"
                price="10.95"
                description="topped with hollandaise sauce and served With your choice of homefries, grits or tomato slices"
              />
              <MenuItem
                title="Lox Benedict"
                price="10.95"
                description="topped with hollandaise sauce and served With your choice of homefries, grits or tomato slices"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menuSection}>
        <div className={styles.lunchSection}>
          <MenuTitle title="LUNCH" description="SERVED ALL DAY" />
          <MenuSubTitle
            title="Sandwiches"
            description="All sandwiches are served with a pickle and a bag of chips."
          />
        </div>
      </div>
      <div className={styles.menuSection}>
        <MenuTitle title="DINNER" description="SERVED ALL DAY" />
      </div>
    </>
  );
}

export default Menu;
