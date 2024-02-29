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
              description="All omlettes are served with one choice of homefries, grits, or tomato slices."
            />
            <MenuItem
              title="Western Omlette"
              price="13.95"
              description="Green peppers, onions, and ham served with one side of homefries, grits, or tomato slices."
            />
            <MenuItem
              title="Bacon & Cheese Omlette"
              price="13.95"
              description="Melted american cheese and bacon bits served with one side of homefries, grits, or tomato slices."
            />
            <MenuItem
              title="Veggie & Cheese Omlette"
              price="13.95"
              description="Mushrooms, green peppers, onions, with melted american and swiss cheese served with one side of homefries, grits, or tomato slices."
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
