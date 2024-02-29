import MenuTitle from "./MenuTitle";
import MenuSubTitle from "./MenuSubTitle";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.menuSection}>
        <div className={styles.breakfastSection}>
          <MenuTitle title="BREAKFAST" description="SERVED ALL DAY" />
          <div>
            <MenuSubTitle
              title="Omlettes"
              description="All omlettes are served with one choice of homefries, grits, or tomato slices and buttered toast."
            />
            <MenuItem
              title="Western Omlette"
              price="13.95"
              description="green peppers, sautéed onions, and ham"
              additions=" add cheese (1)"
            />
            <MenuItem
              title="Bacon & Cheese Omlette"
              price="13.95"
              description="american cheese and perfectly crispy bacon bits"
            />
            <MenuItem
              title="Veggie & Cheese Omlette"
              price={13.95}
              description="Mushrooms, green peppers, onions, with melted american and swiss cheese"
            />
            <MenuItem
              title="Ham & Cheese Omlette"
              price="13.95"
              description="Melted american cheese with diced ham"
            />
          </div>
          <div>
            <MenuSubTitle title="Egg Dishes" />
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
