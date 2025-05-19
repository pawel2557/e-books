
import { ProductCard } from "../../../components";
import { useProducts } from "../../../hooks/useProducts";
export const FeaturedProducts = () => {
  const { products, loading } = useProducts("SELECT * FROM products WHERE id IN (SELECT id FROM featured_products)");
  if (loading) return <p>Loading...</p>;
  if (!Array.isArray(products)) return <p>No data</p>;

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>
    </section>
  )
}