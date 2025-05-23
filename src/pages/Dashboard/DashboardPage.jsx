import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import {DashboardCard} from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { useTitle } from "../../hooks/useTitle";


export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Dashboard");
  useEffect(() => {
    async function fetchOrders() {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("User error:", userError?.message);
        setOrders([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("orders") 
        .select("*")
        .eq("user_id", user.id); 

      if (error) {
        console.error("Product fetch error:", error.message);
        setOrders([]);
      } else {
        setOrders(data || []);
      }

      setLoading(false);
    }

    fetchOrders();
  }, []);

  if (loading) return <main><section> <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Loading...</p></section></main> ;

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
        {orders.length === 0 ? (
          <DashboardEmpty/>
        ) : (
          <div className="flex flex-col gap-4 px-4">
            {orders.map((order) => (
              <DashboardCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
