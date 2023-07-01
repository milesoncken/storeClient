import ProductList from "./ProductList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";

function Home() {
  return (
    <div className='home'>
      <MainCarousel />
      <ProductList />
      <Subscribe />
    </div>
  );
}

export default Home;
