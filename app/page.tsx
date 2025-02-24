import { Hero,CustomFilter,Searchbar } from "@/components";
import {fetchCars} from '../utils/index';
import CarCard from "@/components/CarCard";


export default async function Home() {

    const allCars = await fetchCars();
    console.log(allCars);

    const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

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

            {!isDataEmpty ? (
                <section>
                    <div className="home__cars-wrapper">
                        {allCars?.map((car)=>(
                            <CarCard key={car.model} car={car}/>
                        ))}
                    </div>
                </section>
            ):(<div className="home_error-container">
                <h2 className="text-black text-xl font-bold">No results</h2>
                <p>{allCars?.message}</p>
            </div>)}
        </div>
    </main>
  );
}
