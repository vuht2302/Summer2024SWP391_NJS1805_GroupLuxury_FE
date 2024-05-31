import Banner from "./home/Banner";
import Category from "./home/Category";
import Department from "./home/Department";
import Featured from "./home/FeaturedProduct";
import HomeBlog from "./home/HomeBlog";
import LastestProduct from "./home/LastestProduct";

export default function HomeMain() {
  return (
    <>
      <Department />
      <Category />
      <Featured />
      <Banner />
      <LastestProduct />
      <HomeBlog />
    </>
  );
}
