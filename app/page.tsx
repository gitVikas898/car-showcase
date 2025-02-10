import { Hero,CustomFilter,Searchbar } from "@/components";
export default function Home() {
  return (
    <main className="overflow-hidden">
        <Hero/>
        <div id="discover" className=" max-width  mt-12 padding-x padding-y">
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className="home__filters">
                <Searchbar/>
                <div className="home__filter-container">
                    <CustomFilter title="fuel" />
                    <CustomFilter title="year" />
                </div>
            </div>
        </div>
    </main>
  );
}
