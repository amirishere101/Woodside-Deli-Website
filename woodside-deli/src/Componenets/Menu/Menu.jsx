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
          <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-min">
            <div>
              {/* omlettes */}
              <MenuSubTitle
                title="Omlettes"
                description="All omlettes are 3 eggs and served with one choice of homefries, grits, or tomato slices and buttered toast."
              />
              <MenuItem
                title="Western Omlette"
                price={13.95}
                description="green peppers, sautéed onions, and ham"
                additions=""
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
                additions=""
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
              {/* breakfast treats */}
              <MenuSubTitle
                title="Breakfast Treats"
                description="can be served with eggs and/or meat for a discounted price"
              />
              <MenuItem
                title="Pancakes"
                price="10.95"
                description="buttermilk, blueberry, or chocolate chip. A choice of one, two, or three pancakes"
              />
              <MenuItem
                title="French Toast"
                price="10.95"
                description="Three slices of thick french toast served with syrup"
              />
              <MenuItem
                title="Cheese Blintzes"
                price="10.95"
                description="Served with a choice of sour cream or applesauce"
              />
              <MenuItem
                title="Belgian Waffle"
                price="10.95"
                description="Served with syrup"
              />
              <MenuItem
                title="^Above can be served with two eggs and/or a choice of meat^"
                price="10.95"
                description=""
              />
              <MenuItem
                title="Sausage Biscuits & Gravy"
                price="3.95"
                description="our homemade sausage gravy topped over fresh buttermilk biscuits"
              />
              <MenuItem
                title="Creamed Chip Beef"
                price="3.95"
                description="Over homefries or Toast"
              />
            </div>
            <div>
              {/* Egg Dishes */}
              <MenuSubTitle
                title="Egg Dishes"
                description="we offer egg whites upon request for all egg dishes."
              />
              <MenuItem
                title="Two Eggs Any Style"
                price="12.95"
                description="two eggs cooked anyway you'd like served with your choice of breakfast meat, a choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                additions=""
              />
              <MenuItem
                title="Morning Special"
                price="10.95"
                description="two eggs cooked anyway you'd like served with your choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                additions=""
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
              <MenuItem
                title="Corned Beef Hash Platter"
                price="10.95"
                description="corned beef hash served with two eggs cooked any style and a choice of buttered toast, an english muffin, or a bagel"
              />
              <MenuItem
                title="Rancheros"
                price="10.95"
                description="a soft tortilla stuffed with over easy eggs and refried beans topped with melted cheddar cheese. Served with sour cream and salsa."
              />
              {/* breakfast sandwhiches */}
              <MenuSubTitle
                title="Breakfast Sandwhiches"
                description="Cheese and other toppings added upon request. Toast options: white, wheat, rye, sourdough, bagels, and rolls."
              />
              <MenuItem
                title="BLT"
                price="10.95"
                description=" bacon, lettuce, and tomato layered on toasted bread with mayo."
              />
              <MenuItem
                title="Bacon & Egg"
                price="10.95"
                description="on toasted bread & cheese is added upon request"
              />
              <MenuItem
                title="Turkey Sausage & Egg"
                price="10.95"
                description="on toasted bread & cheese is added upon request"
              />
              <MenuItem
                title="Link or Patties Sausage & Egg"
                price="10.95"
                description="on toasted bread & cheese is added upon request"
              />
              <MenuItem
                title="Ham & Egg"
                price="10.95"
                description="on toasted bread & cheese is added upon request"
              />
              <MenuItem
                title="Scrapple & Egg"
                price="10.95"
                description="on toasted bread & cheese is added upon request"
              />
              <MenuItem
                title="Beef Sausage & Egg"
                price="10.95"
                description="on toasted bread & cheese is added upon request"
              />
              <MenuItem
                title="Nova Lox Sandwhich"
                price="10.95"
                description="served with cream cheese & a choice of bagel"
              />
              <MenuItem
                title="White Fish Sandwhich"
                price="10.95"
                description="served with choice of bagel"
              />
            </div>
            <div>
              {/* breakfast sides */}
              <MenuSubTitle title="Breakfast Sides" description="" />
              <MenuItem title="4 Slices of Bacon" price="3.95" description="" />
              <MenuItem
                title="Beef, Turkey, or Patties Sasuage"
                price="3.95"
                description=""
              />
              <MenuItem title="Ham Steak" price="3.95" description="" />
              <MenuItem title="Chipped Beef" price="3.95" description="" />
              <MenuItem title="Sausage and Gravy" price="3.95" description="" />
              <MenuItem title="Scrapple" price="3.95" description="" />
              <MenuItem title="Corned Beef Hash" price="3.95" description="" />
              <MenuItem title="Homefries" price="3.95" description="" />
              <MenuItem title="Grits" price="3.95" description="" />
              <MenuItem title="Tomato Slices" price="3.95" description="" />
              <MenuItem title="Hard Boiled Egg" price="3.95" description="" />
              <MenuItem title="English Muffin" price="3.95" description="" />
              <MenuItem title="Toasted Bagel" price="3.95" description="" />
              <MenuItem title="Side of Toast" price="3.95" description="" />
              <MenuItem title="Cream Cheese" price="3.95" description="" />
              <MenuSubTitle title="Smoked Fish Platters" description="" />
              <MenuItem
                title="Nova Scotia Salmon Platter"
                price="3.95"
                description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
              />
              <MenuItem
                title="White Fish Salad Platter"
                price="3.95"
                description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
              />
              <MenuItem
                title="Nova Scotia Salmon & White Fish Salad"
                price="3.95"
                description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
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
