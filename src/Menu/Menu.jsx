import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import MenuTitle from "./MenuTitle";
import MenuSubTitle from "./MenuSubTitle";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

function Menu({ setPage }) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("breakfast");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver-based scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("#breakfast, #lunch, #dinner");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-150px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
  ];

  return (
    <>
      <span id="menu"></span>
      <div className="pt-[76px] pb-12 bg-light min-h-screen">
        {/* Sticky Sub-Navigation */}
        <div className="sticky top-[52px] sm:top-[58px] z-40 bg-white shadow-md mb-12 transition-all duration-300 border-b border-gray-100">
          <div className="container flex flex-nowrap w-full justify-between sm:justify-center gap-1 sm:gap-6 px-2 sm:px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex-1 text-center px-1 py-2 sm:px-8 sm:py-3 whitespace-nowrap rounded-full font-din2014 font-bold text-xs sm:text-lg transition-all duration-300 border-2 ${
                  activeSection === item.id
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-transparent text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    const headerOffset = 130;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    setActiveSection(item.id);
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/catering"
              className="flex-1 text-center px-1 py-2 sm:px-8 sm:py-3 whitespace-nowrap font-bold text-xs sm:text-lg text-white transition-all duration-300 border-2 rounded-full bg-secondary border-secondary hover:bg-primary hover:border-primary font-din2014"
            >
              Catering
            </Link>
          </div>
        </div>

        <div className="container px-4 mx-auto">
          {/* Breakfast Section */}
          <div id="breakfast" className="scroll-mt-32 mb-20">
            <div className="p-8 mb-10 text-center bg-white rounded-3xl shadow-xl border border-gray-100">
              <MenuTitle title="BREAKFAST" description="SERVED ALL DAY" />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                <div>
                  {/* omlettes */}
                  <MenuSubTitle
                    title="Omlettes"
                    description="All omlettes are 3 eggs and served with one choice of homefries, grits, or tomato slices and buttered toast."
                  />
                  <MenuItem
                    title="Western Omlette"
                    description="green peppers, sautéed onions, and ham"
                    additions=""
                  />
                  <MenuItem
                    title="Bacon & Cheese Omlette"
                    description="melted american cheese and perfectly crispy bacon bits"
                  />
                  <MenuItem
                    title="Veggie & Cheese Omlette"
                    description="Mushrooms, green peppers, onions, with melted american and swiss cheese"
                  />
                  <MenuItem
                    title="Ham & Cheese Omlette"
                    description="Melted american cheese with diced ham"
                  />
                  <MenuItem
                    title="Italian Sausage Omlette"
                    description="spicy italian sausage with onions, green peppers and tomato sauce, topped with melted provolone cheese"
                  />
                  <MenuItem
                    title="Mushroom, Ham & Swiss Omlette"
                    description="melted swiss cheese with diced ham and sautéed mushrooms"
                  />
                  <MenuItem
                    title="Cheese Omlette"
                    description="creamy melted american cheese on top and inside of the omlette"
                  />
                  <MenuItem
                    title="Corned Beef & Swiss Omlette"
                    description="melted swiss cheese with chopped corned beef slices"
                  />
                  <MenuItem
                    title="Minced Nova Scotia Lox Omlette"
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    additions=""
                  />
                  <MenuItem
                    title="Burrito Omlette"
                    description="sausage, green peppers, onion, tomatoes, and refried beans, topped with melted cheddar cheese and montery jack cheese in a warm tortilla, served with salsa and sour cream on the side"
                  />
                  <MenuItem
                    title="Spinach & Feta with Mushrooms"
                    description="diced feta with spinach and mushrooms inside an omlette"
                  />
                  <MenuItem
                    title="Broccoli & Cheddar Omlette"
                    description="melted cheddar cheese with broccoli and minced onions"
                  />
                  {/* breakfast treats */}
                  <MenuSubTitle
                    id="breakfast-treats"
                    title="Breakfast Treats"
                    description="can be served with eggs and/or meat for a discounted price"
                  />
                  <MenuItem
                    title="Pancakes"
                    description="buttermilk, blueberry, or chocolate chip. A choice of one, two, or three pancakes"
                  />
                  <MenuItem
                    title="French Toast"
                    description="Three slices of thick french toast served with syrup"
                  />
                  <MenuItem
                    title="Cheese Blintzes"
                    description="Served with a choice of sour cream or applesauce"
                  />
                  <MenuItem
                    title="Belgian Waffle"
                    description="Served with syrup"
                  />
                  <MenuItem
                    title="^Above can be served with two eggs and/or a choice of meat^"
                    description=""
                  />
                  <MenuItem
                    title="Sausage Biscuits & Gravy"
                    description="our homemade sausage gravy topped over fresh buttermilk biscuits"
                  />
                  <MenuItem
                    title="Creamed Chip Beef"
                    description="Over homefries or Toast"
                  />
                </div>
                <div>
                  {/* Egg Dishes */}
                  <MenuSubTitle
                    id="egg-dishes"
                    title="Egg Dishes"
                    description="we offer egg whites upon request for all egg dishes."
                  />
                  <MenuItem
                    title="Two Eggs Any Style"
                    description="two eggs cooked anyway you'd like served with your choice of breakfast meat, a choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                    additions=""
                  />
                  <MenuItem
                    title="Morning Special"
                    description="two eggs cooked anyway you'd like served with your choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                    additions=""
                  />
                  <MenuItem
                    title="Eggs Benedict"
                    description="topped with hollandaise sauce and served With your choice of homefries, grits or tomato slices"
                  />
                  <MenuItem
                    title="Lox Benedict"
                    description="topped with hollandaise sauce and served With your choice of homefries, grits or tomato slices"
                  />
                  <MenuItem
                    title="Corned Beef Hash Platter"
                    description="corned beef hash served with two eggs cooked any style and a choice of buttered toast, an english muffin, or a bagel"
                  />
                  <MenuItem
                    title="Rancheros"
                    description="a soft tortilla stuffed with over easy eggs and refried beans topped with melted cheddar cheese. Served with sour cream and salsa."
                  />
                  {/* breakfast sandwhiches */}
                  <MenuSubTitle
                    id="breakfast-sandwiches"
                    title="Breakfast Sandwhiches"
                    description="Cheese and other toppings added upon request. Toast options: white, wheat, rye, sourdough, bagels, and rolls."
                  />
                  <MenuItem
                    title="BLT"
                    description=" bacon, lettuce, and tomato layered on toasted bread with mayo."
                  />
                  <MenuItem
                    title="Bacon & Egg"
                    description="on toasted bread & cheese is added upon request"
                  />
                  <MenuItem
                    title="Turkey Sausage & Egg"
                    description="on toasted bread & cheese is added upon request"
                  />
                  <MenuItem
                    title="Link or Patties Sausage & Egg"
                    description="on toasted bread & cheese is added upon request"
                  />
                  <MenuItem
                    title="Ham & Egg"
                    description="on toasted bread & cheese is added upon request"
                  />
                  <MenuItem
                    title="Scrapple & Egg"
                    description="on toasted bread & cheese is added upon request"
                  />
                  <MenuItem
                    title="Beef Sausage & Egg"
                    description="on toasted bread & cheese is added upon request"
                  />
                  <MenuItem
                    title="Nova Lox Sandwhich"
                    description="served with cream cheese & a choice of bagel"
                  />
                  <MenuItem
                    title="White Fish Sandwhich"
                    description="served with choice of bagel"
                  />
                </div>
                <div>
                  {/* breakfast sides */}
                  <MenuSubTitle
                    id="breakfast-sides"
                    title="Breakfast Sides"
                    description=""
                  />
                  <MenuItem title="4 Slices of Bacon" description="" />
                  <MenuItem
                    title="Beef, Turkey, or Patties Sasuage"
                    description=""
                  />
                  <MenuItem title="Ham Steak" description="" />
                  <MenuItem title="Chipped Beef" description="" />
                  <MenuItem title="Sausage and Gravy" description="" />
                  <MenuItem title="Scrapple" description="" />
                  <MenuItem title="Corned Beef Hash" description="" />
                  <MenuItem title="Homefries" description="" />
                  <MenuItem title="Grits" description="" />
                  <MenuItem title="Tomato Slices" description="" />
                  <MenuItem title="Hard Boiled Egg" description="" />
                  <MenuItem title="English Muffin" description="" />
                  <MenuItem title="Toasted Bagel" description="" />
                  <MenuItem title="Side of Toast" description="" />
                  <MenuItem title="Cream Cheese" description="" />
                  <MenuSubTitle title="Smoked Fish Platters" description="" />
                  <MenuItem
                    title="Nova Scotia Salmon Platter"
                    description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
                  />
                  <MenuItem
                    title="White Fish Salad Platter"
                    description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
                  />
                  <MenuItem
                    title="Nova Scotia Salmon & White Fish Salad"
                    description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lunch Section */}
          <div id="lunch" className="scroll-mt-32 mb-20">
            <div className="p-8 mb-10 text-center bg-white rounded-3xl shadow-xl border border-gray-100">
              <MenuTitle title="LUNCH" description="SERVED ALL DAY" />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                <div>
                  {/* Woodside Burgers */}
                  <MenuSubTitle
                    title="Woodside Burgers"
                    description="All our handmade charbroiled patties served with chips and a pickle. All burgers cooked medium-well unless otherwise requested."
                  />
                  <MenuItem title="Hamburger" />
                  <MenuItem title="Cheeseburger" />
                  <MenuItem title="Bacon Cheeseburger" />
                  <MenuItem title="Mushroom Swiss Burger" />
                  <MenuItem title="Turkey Burger" />

                  {/* Burger Platters */}
                  <MenuSubTitle
                    title="Burger Platters"
                    description="Burger platters served with lettuce, tomato, pickle, and fries."
                  />
                  <MenuItem title="Hamburger Royale Platter" />
                  <MenuItem title="Bacon Cheeseburger Royale Platter" />
                  <MenuItem title="Cheeseburger Royale Platter" />
                  <MenuItem title="Turkey Burger Royale Platter" />
                  <MenuItem title="Veggie Burger Platter" />
                  <MenuItem
                    title="The General Jubal Burger Platter"
                    description="American cheese, butter, lettuce, tomato, Russian dressing, served with fries and a pickle."
                  />
                  <MenuItem
                    title="The Rex Burger Platter"
                    description="Our burger on grilled rye, Russian dressing with melted Swiss cheese, served with fries and a pickle."
                  />
                  <MenuItem
                    title="The Montgomery Burger"
                    description="Melted Swiss cheese, smothered with sautéed onions, Russian dressing on grilled rye, served with fries and a pickle."
                  />

                  {/* Koehler Dogs */}
                  <MenuSubTitle title="Kosher Dogs" description="" />
                  <MenuItem title="All-Beef Hot Dog" />
                  <MenuItem
                    title="Chili Hot Dog"
                    description="Our homemade chili, shredded cheese, and diced onions."
                  />

                  {/* Club Sandwiches */}
                  <MenuSubTitle
                    title="Club Sandwiches"
                    description="All clubs served on toasted white bread unless otherwise requested."
                  />
                  <MenuItem
                    title="Ham Club"
                    description="Pit-smoked ham, bacon, lettuce, tomato, and mayo, served with potato chips and a pickle."
                  />
                  <MenuItem
                    title="Turkey Club"
                    description="Fresh turkey breast – served as above."
                  />
                  <MenuItem
                    title="Combo Club"
                    description="Combination of ham and turkey, served with chips and a pickle."
                  />
                  <MenuItem
                    title="Tuna Club"
                    description="Our homemade tuna salad and bacon, served with potato chips and a pickle."
                  />
                  <MenuItem
                    title="Charbroiled Chicken Club"
                    description="Charbroiled chicken breast, lettuce, tomato, Cheddar cheese, and mayo, served with potato chips and a pickle."
                  />

                  {/* Hot Sandwich Platters */}
                  <MenuSubTitle title="Hot Sandwich Platters" description="" />
                  <MenuItem
                    title="Hot Meatloaf"
                    description="Our famous meatloaf with mashed potatoes and gravy."
                  />
                  <MenuItem
                    title="Hot Turkey"
                    description="Fresh turkey breast with mashed potatoes and gravy."
                  />
                  <MenuItem
                    title="Hot Beef Sandwich"
                    description="Top round of beef with mashed potatoes and gravy."
                  />
                  <MenuSubTitle title="Woodside Soups" description="" />
                  <MenuItem title="Homemade Chili" />
                </div>
                <div>
                  {/* Woodside Triple Decker Combos */}
                  <MenuSubTitle
                    title="Woodside Triple Decker Combos"
                    description="Named in honor of our famous patrons. all combos are served on rye bread with chips and dill pickle."
                  />
                  <MenuItem
                    title="No. 1 The Cyrano De Bergerac"
                    description="Hot pastrami, corned beef, Russian dressing topped with creamy slaw and melted Swiss cheese."
                  />
                  <MenuItem
                    title="No. 2 The Romeo & Juliet"
                    description="Roast beef, Swiss cheese topped with coleslaw and Russian dressing."
                  />
                  <MenuItem
                    title="No. 3 The Lord Byron"
                    description="Corned beef, turkey, coleslaw, Swiss cheese, and Russian dressing."
                  />
                  <MenuItem
                    title="No. 4 The Lancelot de Guinevere"
                    description="Chicken Salad, bacon, lettuce, tomato, and Russian dressing."
                  />
                  <MenuItem
                    title="No. 5 The Baby Jane"
                    description="Hot ham and bacon topped with melted Swiss and American cheese with mayonaise."
                  />
                  <MenuItem
                    title="No. 6 The Henry VIII"
                    description="Hot ham, pastrami, melted Swiss, creamy coleslaw, and Russian dressing."
                  />
                  <MenuItem
                    title="No. 7 The Toulouse-Lautrec"
                    description="A great tuna melt, swiss cheese, Russian dressing, on grilled rye."
                  />
                  <MenuItem
                    title="No. 8 The Alfredo & Violetta"
                    description="Roast beef, turkey, Swiss cheese, coleslaw, topped with Russian dressing."
                  />
                  <MenuItem
                    title="No. 9 The Frederick The Great"
                    description="Turkey breast, ham, melted Swiss cheese, Russian dressing on grilled rye."
                  />
                  <MenuItem
                    title="No. 10 Athena & Prince Champopolos"
                    description="Turkey, corned beef, and chopped liver with coleslaw, and Russian dressing."
                  />

                  {/* Submarine Sandwiches */}
                  <MenuSubTitle
                    title="Submarine Sandwiches"
                    description="All served with chips and a pickle."
                  />
                  <MenuItem
                    title="SS-1 Italian Cold Cut Sub"
                    description="Ham, hard salami, mortadella, provolone cheese, lettuce, tomato, mayo, and vinaigrette dressing."
                  />
                  <MenuItem
                    title="SS-2 Philadelphia Steak & Cheese Sub"
                    description="Thinly sliced ribeye steak, provolone cheese, grilled onions, lettuce, tomato, and mayo."
                  />
                  <MenuItem
                    title="SS-3 Tuna Sub"
                    description="Our famous tuna salad."
                  />
                  <MenuItem
                    title="SS-4 Hamburger Sub"
                    description="Two charbroiled patties (10 oz)."
                  />
                  <MenuItem
                    title="SS-5 Cheeseburger Sub"
                    description="With american cheese."
                  />
                  <MenuItem
                    title="SS-6 Ham & Cheese Sub"
                    description="Pit-smoked ham, choice of cheese – served hot or cold."
                  />
                  <MenuItem
                    title="SS-7 Turkey Sub"
                    description="The finest turkey breast available."
                  />
                  <MenuItem
                    title="SS-8 Roast Beef Sub"
                    description="Thinly sliced top round, served with your choice of dressing."
                  />
                  <MenuItem
                    title="SS-9 Hot Veggie Sub"
                    description="Swiss, American, and provolone cheese, mushrooms, green peppers, onions, lettuce, tomato, oil and viniegar, served hot."
                  />
                  <MenuItem
                    title="SS-10 The Deli Sub"
                    description="Corned beef, turkey, roast beef, Swiss cheese, lettuce, tomato, and spicy mustard."
                  />
                  <MenuItem
                    title="SS-11 Chicken Salad Sub"
                    description="Our homemade deluxe chicken salad."
                  />
                  <MenuItem
                    title="SS-12 Fish Filet Sub"
                    description="Two fish fillets, lettuce, tomato, and tartar sauce."
                  />
                  <MenuItem
                    title="SS-13 Philadelphia Chicken & Cheese Sub"
                    description="Grilled chicken with provolone, onions, lettuce, tomato, and mayo."
                  />
                  <MenuItem
                    title="SS-14 Meatball & Cheese Sub"
                    description="Served with marinara & melted provolone cheese."
                  />
                  <MenuItem
                    title="SS-15 Chicken Tenderloin Sub"
                    description="Strips of chicken tenders with melted cheddar cheese."
                  />
                  <MenuItem
                    title="SS-16 French Dip Platter"
                    description="Served french fries and a pickle."
                  />
                  <MenuItem
                    title="SS-17 New York Deli Sub"
                    description="Roast beef, cappicola ham, salami and mozzarella with oil and vinegar. Served with fries."
                  />
                </div>
                <div>
                  {/* Appetizers */}
                  <MenuSubTitle title="Appetizers" description="" />
                  <MenuItem
                    title="Buffalo Wings"
                    description="Served with carrot and celery sticks, with a side of blue cheese dressing."
                  />
                  <MenuItem
                    title="Potato Skins"
                    description="Loaded with cheddar cheese and chopped bacon, served with sour cream and chives."
                  />
                  <MenuItem
                    title="Cheese Nachos"
                    description="Tortilla chips topped with refried beans and melted cheese blend. Served with pico de gallo and sour cream."
                  />
                  <MenuItem
                    title="Fried Mozzarella"
                    description="Breaded and fried, served with marinara sauce."
                  />
                  <MenuItem
                    title="Chicken Tender Basket"
                    description="Served with honey mustard dressing. Can be served with fries upon request"
                  />

                  {/* Specialty Sandwiches */}
                  <MenuSubTitle title="Specialty Sandwiches" description="" />
                  <MenuItem
                    title="The Woodside Reuben"
                    description="Hot corned beef, sauerkraut, Swiss cheese, and Russian dressing on grilled rye."
                  />
                  <MenuItem
                    title="Beef Barbecue"
                    description="A delicous Texas-style barbeque with creamy slaw, french fries and dill pickle."
                  />
                  <MenuItem
                    title="European Medley"
                    description="Turkey breast, bacon, melted provolone, and Russian dressing on rye."
                  />
                  <MenuItem
                    title="The Mermaid"
                    description="Tuna, bacon, Swiss, and tomato on grilled wheat bread."
                  />
                  <MenuItem
                    title="Roast Beef Grill"
                    description="Top round with sautéed mushrooms and onions on a kaiser roll, served with chips and a pickle."
                  />
                  <MenuItem
                    title="Pita lite"
                    description="Turkey breast, swiss cheese, tossed salad, tomato and green pepper in a pocket pita bread with vinaigrette dressing."
                  />
                  <MenuItem
                    title="Charbroiled Chicken"
                    description="Charbroiled boneless chicken breast on a Kaiser roll with lettuce, tomato, fries, coleslaw, and a pickle."
                  />
                  <MenuItem
                    title="Gyro"
                    description="Sliced lamb in pita. Served with french fries and herb yogurt sauce"
                  />

                  {/* Delicatessen Favorites */}
                  <MenuSubTitle title="Delicatessen Favorites" description="" />
                  <MenuItem title="Ham Sandwich" />
                  <MenuItem title="Grilled Ham & Cheese" />
                  <MenuItem title="Corned Beef" />
                  <MenuItem title="Roast Beef" />
                  <MenuItem title="Pastrami" />
                  <MenuItem title="Turkey" />
                  <MenuItem title="Fish Filet" />
                  <MenuItem title="BLT" />
                  <MenuItem title="Tuna Salad" />
                  <MenuItem title="Chicken Salad" />
                  <MenuItem title="Grilled Cheese" />
                  <MenuItem title="Grilled Cheese & Tomato" />
                  <MenuItem title="Grilled Cheese & Bacon" />
                  <MenuItem title="Chopped Liver" />
                  <MenuItem title="Egg Salad" />

                  {/* Mediterranean Specials */}
                  <MenuSubTitle title="Mediterranean Specials" description="" />
                  <MenuItem
                    title="Falafel in Pita"
                    description="Falafel, salad, and tahini stuffed in pita."
                  />
                  <MenuItem
                    title="Falafel Platter"
                    description="Falafel, salad, and tahini on a platter, served with pita."
                  />
                  <MenuItem title="Tahini Plate" description="" />
                  <MenuItem title="Israeli Salad" description="" />
                  <MenuItem
                    title="Mediterranean Combo Platter"
                    description=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dinner Section */}
          <div id="dinner" className="scroll-mt-32 mb-20">
            <div className="p-8 mb-10 text-center bg-white rounded-3xl shadow-xl border border-gray-100">
              <MenuTitle title="DINNER" description="SERVED ALL DAY" />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                <div>
                  {/* Traditional Favorites */}
                  <MenuSubTitle
                    title="Traditional Favorites"
                    description="Main Dishes"
                  />
                  <MenuItem
                    title="Meatloaf"
                    description="Our homemade meatloaf, served with gravy, whipped potatoes, and vegetables."
                  />
                  <MenuItem
                    title="Liver & Onions"
                    description="Tender beef liver, grilled with sauteed onions, served with whipped potatoes and vegetables"
                  />
                  <MenuItem
                    title="Salisbury Steak"
                    description="An American favorite, served with whipped potatoes and vegetables."
                  />
                  <MenuItem
                    title="Stuffed Cabbage"
                    description="Stuffed with ground beef and rice, topped with out sweer & sour sauce, served with rice."
                  />
                  <MenuItem
                    title="Sliced Breast of Turkey"
                    description="Pure turkey breast, whipped potatoes and gravy, stuffing, cranberry sauce, and vegetable."
                  />
                  <MenuItem
                    title="Chicken Tenderloin"
                    description="Smothered with mushroom gravy, served with whipped potatoes and vegetables."
                  />
                  <MenuItem
                    title="Boneless Chicken Breast"
                    description="Charbroiled with tomatoes and spices, served with rice and vegetables."
                  />
                  <MenuItem
                    title="Fried Chicken Steak"
                    description="Breaded boneless chicken breast, fried and smothered with mushroom gravy, served with whipped potatoes and vegetables"
                  />
                  <MenuItem
                    title="Roasted Chicken"
                    description="A half of chicken seasoned to perfection with garden herbs, served with roasted potatoes and vegetable of the day."
                  />
                  <MenuItem
                    title="Fried Chicken with Mashed Potatoes, Gravy, and Veg of the day"
                    description=""
                  />
                  <MenuItem title="Brisket Dinner" description="" />
                  <MenuItem title="Potato Pancake" description="" />
                  {/* From The Sea */}
                  <MenuSubTitle title="From The Sea" description="" />
                  <MenuItem
                    title="Fried Shrimp"
                    description="Deep fried breade shrimp served with fries, coleslaw, and cocktail sauce."
                  />
                  <MenuItem
                    title="Breaded Flounder"
                    description="Deep fried breaded flounder served with fries, coleslaw, and tartar sauce."
                  />
                  <MenuItem
                    title="Seafood Combo"
                    description="Golden fried shrimp, fried fillet of fish served with french fries, cole slaw, cocktail and tartar sauce."
                  />
                  <MenuItem
                    title="Baked Flounder"
                    description="Topped with lemon dill sauce, served with rice and vegetable."
                  />
                  <MenuItem
                    title="Fish & Chips"
                    description="Served with creamy coleslaw."
                  />
                </div>
                <div>
                  {/* Salads & Cold Platters */}
                  <MenuSubTitle title="Salads & Cold Platters" description="" />
                  <MenuItem
                    title="Garden Salad"
                    description="Fresh lettuce and tomatoes."
                  />
                  <MenuItem
                    title="Greek Salad"
                    description="Romaine lettuce topped with feta cheese, diced tomato, diced red onion - pepperochini and anchovies mixed with greek dressing."
                  />
                  <MenuItem
                    title="Tuna Salad Platter"
                    description="Served on a bed of lettuce with tomatoes, hard-boiled egg, coleslaw, pickles, and saltines."
                  />
                  <MenuItem
                    title="Chicken Salad Platter"
                    description="Our deluxe chicken salad-syled as above."
                  />
                  <MenuItem
                    title="Woodside Chef Salad"
                    description="Pit ham, pure turkey breast, lettuce, tomato, red cabbage, green peppers, mushrooms, oninos, American, Swiss and provolone cheese, topped with sliced egg and choice of dressing."
                  />
                  <MenuItem
                    title="Vegetable Salad"
                    description="Lettuce, tomatoes, red cabbage, green peppers, mushrooms, onions, American, swiss, and provolone cheese, topped with sliced egg and choice of dressing."
                  />
                  <MenuItem
                    title="Grilled Chicken Caesar Salad"
                    description="Tender chicken strips over tossed greens with ceasar dressing, croutons and topped with parmesan cheese."
                  />
                  <MenuItem
                    title="Taco Salad"
                    description="Spicy chili, shredded cheese, tomatoes, and lettuce on chips, topped with sour cream and picante sauce."
                  />
                  <MenuItem
                    title="Southwestern Fried Chicken Salad"
                    description="Crispy battered chicken on fresh greens with tomatoes, eggs, and chopped bacon. Served with house honey mustard dressing."
                  />
                  <MenuItem
                    title="Cobb Salad"
                    description="Chargrilled chicken, chopped bacon, chopped egg, shredded cheddar, avocado, served with your choice of dressing."
                  />
                  <MenuSubTitle title="Italian Favorites" description="" />
                  <MenuItem
                    title="Baked Lasagna"
                    description="Baked homemade lasgna, served with garlic bread."
                  />
                  <MenuItem
                    title="Spaghetti & Meatballs"
                    description="Served with garlic bread."
                  />
                  <MenuItem
                    title="Chicken Parmesan"
                    description="Breaded grilled boneless breast of chicken, topped with parmesan, provolone cheese and spaghetti sauce, served with spaghetti."
                  />
                </div>
                <div>
                  {/* Children’s Menu */}
                  <MenuSubTitle
                    title="Children’s Menu (Ages 12 and under)"
                    description=""
                  />
                  <MenuItem
                    title="Kid's Grilled Cheese w/ French Fries"
                    description=""
                  />
                  <MenuItem
                    title="Kid's All-Beef Hot Dog w/ French Fries"
                    description=""
                  />
                  <MenuItem
                    title="Kid's Chicken Tenders w/ French Fries"
                    description=""
                  />
                  <MenuItem
                    title="Kid's Spaghetti & Meatballs"
                    description=""
                  />
                  <MenuItem title="Kid's Spaghetti" description="" />
                  {/* Sides */}
                  <MenuSubTitle title="Sides" description="" />
                  <MenuItem title="French Fries" description="" />
                  <MenuItem title="French Fries with Gravy" description="" />
                  <MenuItem title="Onion Rings" description="" />
                  <MenuItem title="Coleslaw" description="" />
                  <MenuItem
                    title="Whipped Potatoes with Gravy"
                    description=""
                  />
                  <MenuItem title="Loaded Baked Potato" description="" />
                  <MenuItem title="Vegetable of the Day" description="" />
                  <MenuItem title="Rice" description="" />
                  <MenuItem title="Apple Sauce" description="" />
                  <MenuItem title="Garlic Sub Roll" description="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed p-4 text-white rounded-full shadow-xl bottom-6 right-6 bg-primary hover:bg-secondary transition-all duration-300 hover:scale-110 hover:shadow-2xl z-40"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
}

export default Menu;
