import AddButton from "@/components/dialogs/AddButton";
import CategoriesTable from "@/components/tables/CategoriesTable";

export default function ManageCategories() {
  return (
    <section className="flex-grow p-4 space-y-8">
      <div className="bg-accent text-accent-foreground rounded p-2 flex items-center justify-between">
        <h3 className="h5">123</h3>
        <AddButton type={"category"} />
      </div>
      <CategoriesTable />
    </section>
  );
}
