import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

//This operation is done on the client side
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by name price(low-first)" },

          {
            value: "regularPrice-desc",
            label: "Sort by name price(high-first)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by name capacity (low-first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by name capacity (high-first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
