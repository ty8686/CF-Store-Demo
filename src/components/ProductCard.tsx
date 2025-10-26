import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Zap, icons } from "lucide-react";
import type { Product } from "@shared/types";
import { useCartStore } from "@/lib/cart-store";
import { toast } from "sonner";
interface ProductCardProps {
  product: Product;
}
const DifficultyBar = ({ value }: { value: number }) => {
  const percentage = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1 text-xs text-muted-foreground">
        <span>Easy</span>
        <span>Complex</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 relative">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `calc(${percentage}% - 8px)` }}
        >
          <div className="w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground shadow-md" />
        </div>
      </div>
    </div>
  );
};
const DynamicIcon = ({ name, ...props }: { name: string, [key: string]: any }) => {
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) {
    return null; // Or a fallback icon
  }
  return <LucideIcon {...props} />;
};
export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const handleAddToCart = () => {
    addItem(product.id);
    toast.success(`${product.name} added to cart!`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-primary/20">
        <CardHeader>
          <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
            <DynamicIcon name={product.icon} className="w-24 h-24 object-contain text-brand" />
          </div>
          <CardTitle className="text-xl font-bold font-display">{product.name}</CardTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {product.categories.map((cat) => (
              <Badge key={cat} variant="secondary">{cat}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Cost</h4>
            <div className="flex items-center text-brand text-2xl">
              {'$$$$$'.split('').map((char, i) => (
                <span key={i} className={i < product.cost ? 'text-brand' : 'text-muted-foreground/30'}>$</span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" /> Implementation Difficulty
            </h4>
            <DifficultyBar value={product.difficulty} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full btn-gradient" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}