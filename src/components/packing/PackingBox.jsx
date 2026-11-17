import { usePackingStore } from "../../stores/packingStore";
import Input from "../Input";

function PackingBox() {
  const { x, y, z } = usePackingStore((state) => state.box);
  const changeBox = usePackingStore((state) => state.changeBox);

  const inputProperties = (dimensionSign, value) => ({
    min: "0",
    type: "number",
    id: `box-${dimensionSign}`,
    value: value,
    onChange: (e) => {
      changeBox({ dimension: dimensionSign, value: e.target.value });
    },
  });

  return (
    <div className="packing_box">
      <h2>Box Params</h2>
      <div className="packing_box__inputs">
        <Input {...inputProperties("x", x)}>Box's width</Input>
        <Input {...inputProperties("y", y)}>Box's height</Input>
        <Input {...inputProperties("z", z)}>Box's depth</Input>
      </div>
    </div>
  );
}

export default PackingBox;
