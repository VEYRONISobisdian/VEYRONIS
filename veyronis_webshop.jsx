import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Veyronis Noir", price: "€149", image: "/product.jpg" },
  { id: 2, name: "Veyronis Shadow", price: "€149", image: "/product.jpg" },
  { id: 3, name: "Veyronis Elite", price: "€179", image: "/product.jpg" }
];

export default function VeyronisStore() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-semibold tracking-widest">VEYRONIS</h1>
        <Button className="flex gap-2"><ShoppingCart size={18}/> Cart</Button>
      </header>

      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-6">Luxury Eyewear</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Discover premium handcrafted sunglasses from Veyronis. Designed for elegance, power and timeless style.
        </p>
        <div className="mt-8">
          <Button size="lg">Shop Now</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-zinc-400 mt-2">{product.price}</p>
              <Button className="mt-4 w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © {new Date().getFullYear()} Veyronis. All rights reserved.
      </footer>
    </div>
  );
}
