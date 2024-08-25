import { useSelector } from "react-redux";
import AddButton from "@/components/dialogs/AddButton";
import CategoriesTable from "@/components/tables/CategoriesTable";
import AddCategoryForm from "@/components/forms/AddCategoryForm";

export default function ManageCategories() {
  const [data] = useSelector((state) => [state.categories]);
  return (
    <section className="flex-grow p-4 space-y-8">
      <div className="bg-accent text-accent-foreground rounded p-2 flex items-center justify-between">
        <h3 className="h5">{data ? data.length : 0}</h3>
        <AddButton heading={"Add new category"}>
          <AddCategoryForm />
        </AddButton>
      </div>
      <CategoriesTable data={data} />
    </section>
  );
}
