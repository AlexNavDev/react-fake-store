import { useFetchCategories } from "../../hooks/useFetchCategories";
import Categories from "./Categories";

const Header = ({ setCategory, category }) => {
  const { categories } = useFetchCategories();

  return (
    <header className="h-72 min-w-64 mb-3 bg-primary">
      <nav className="h-72 flex flex-col justify-evenly">
        <h2 className="py-3 font-serif text-4xl font-bold tracking-widest text-center text-white uppercase">
          Fake Store
        </h2>

        <h3 className="font-serif text-xl italic tracking-widest text-center text-cyan-50">
          Categories
        </h3>

        <ul className="flex flex-wrap justify-center w-11/12 sm:w-3/5  max-w-screen-sm  h-40 m-auto gap-x-2">
          <li
            className={`${
              category == ""
                ? "w-10/12 order-first bg-tertiary text-white text-2xl font-bold"
                : "w-36 bg-red-200 text-primary text-base font-semibold "
            } h-12 text-center rounded-lg`}>
            <button className="w-full h-12" onClick={() => setCategory("")}>
              All Products
            </button>
          </li>
          {categories?.map((cate) => (
            <Categories
              key={cate}
              cate={cate}
              category={category}
              setCategory={setCategory}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
