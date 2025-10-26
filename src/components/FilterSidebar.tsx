import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@shared/mock-data";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
export interface Filters {
  category: string;
}
interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (newFilters: Filters) => void;
  onReset: () => void;
}
export function FilterSidebar({ filters, onFilterChange, onReset }: FilterSidebarProps) {
  const handleCategoryChange = (category: string) => {
    // If the selected category is clicked again, it gets deselected, `category` becomes "".
    // We'll treat "" as "All" to show all products.
    onFilterChange({ category: category || "All" });
  };
  return (
    <aside className="w-full lg:w-64 lg:sticky top-24">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Category</h3>
          <Button variant="ghost" size="sm" onClick={onReset}>Reset</Button>
        </div>
        <ToggleGroup
          type="single"
          value={filters.category === "All" ? "" : filters.category}
          onValueChange={handleCategoryChange}
          className="flex flex-col items-start"
        >
          {CATEGORIES.map((category) => (
            <ToggleGroupItem 
              key={category} 
              value={category} 
              className="w-full justify-start"
              variant="ghost"
            >
              {category}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </aside>
  );
}