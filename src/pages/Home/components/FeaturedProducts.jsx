
import { ProductCard } from "../../../components";
import { useQuery } from "../../../hooks/useQuery";
export const FeaturedProducts = () => {
  const { data, loading } = useQuery("SELECT * FROM products WHERE id IN (SELECT id FROM featured_products)");
  if (loading) return <section className="my-20"><h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Loading...</h1></section>;
  if (!Array.isArray(data)) return <section className="my-20"><h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">No data</h1></section>;

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {data.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>
    </section>
  )
}