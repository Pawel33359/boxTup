import PackingBox from "./PackingBox";
import PackingButtons from "./PackingButtons";
import PackingItems from "./PackingItems";
import PackingSettings from "./PackingSettings";

function PackingControls() {
  return (
    <div class="packing_container">
      <PackingSettings />
      <PackingBox />
      <PackingItems />
      <PackingButtons />
    </div>
  );
}

export default PackingControls;
