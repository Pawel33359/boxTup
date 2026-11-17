import { usePackingStore } from "../../stores/packingStore";
import PackingItem from "./PackingItem";
import Button from "../Button";

function PackingItems() {
  const itemsLength = usePackingStore((state) => state.items.length);
  const addItem = usePackingStore((state) => state.addItem);

  return (
    <div class="packing_items__container">
      <h2>Items</h2>
      <ul className="packing_items">
        {Array.from({ length: itemsLength }, (_, i) => (
          <PackingItem key={i} index={i} length={itemsLength} />
        ))}
      </ul>

      <Button classes="packing_items__add_button" onClick={addItem}>
        Add item
      </Button>
    </div>
  );
}

export default PackingItems;
