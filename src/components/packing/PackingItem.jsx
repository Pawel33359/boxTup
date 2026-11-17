import { usePackingStore } from "../../stores/packingStore";
import Button from "../Button";
import Input from "../Input";

function PackingItem({ index, length }) {
  const { x, y, z } = usePackingStore((state) => state.items[index]);
  const removeItem = usePackingStore((state) => state.removeItem);
  const changeItem = usePackingStore((state) => state.changeItem);

  const inputProperties = (dimensionSign, value) => ({
    min: "0",
    type: "number",
    id: `item-${index}-${value}`,
    value: value,
    onChange: (e) => {
      changeItem({ index, dimension: dimensionSign, value: e.target.value });
    },
  });

  return (
    <li className="packing_items__single">
      <h3 className="packing_items__single_title">item #{index}</h3>
      <div className="packing_items__single_inputs">
        <Input {...inputProperties("x", x)}>Item's width</Input>
        <Input {...inputProperties("y", y)}>Item's height</Input>
        <Input {...inputProperties("z", z)}>Item's depth</Input>
      </div>
      <Button
        classes="packing_items__single_remove_btn"
        data-btn-type="danger"
        onClick={() => removeItem(index)}
        disabled={length === 1}
      >
        X
      </Button>
    </li>
  );
}

export default PackingItem;
