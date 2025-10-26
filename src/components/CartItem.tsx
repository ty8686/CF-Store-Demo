import { motion } from "framer-motion";
import { X, icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import type { Product } from "@shared/types";
import { toast } from "sonner";
interface CartItemProps {
  product: Product;
  quantity: number;
}
const DynamicIcon = ({ name, ...props }: { name: string, [key: string]: any }) => {
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) {
    return null; // Or a fallback icon
  }
  return <LucideIcon {...props} />;
};
export function CartItem({ product, quantity }: CartItemProps) {
  const removeItem = useCartStore((state) => state.removeItem);
  const handleRemove = () => {
    removeItem(product.id);
    toast.error(`${product.name} removed from cart.`);
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between gap-4 p-4 border-b"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
          <DynamicIcon name={product.icon} className="w-10 h-10 object-contain text-brand" />
        </div>
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">Quantity: {quantity}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={handleRemove} aria-label="Remove item">
        <X className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}