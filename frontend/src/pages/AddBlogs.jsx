import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddBizBasicInfo from "@/components/forms/AddBizBasicInfo";

export default function AddBlogs() {
  return (
    <div className="flex-grow form-section flex justify-center">
      <Tabs defaultValue="basin-info" className="w-full">
        <center>
          <TabsList className="flex w-[450px]">
            <TabsTrigger value="basin-info" className="flex-grow">
              Basic Info
            </TabsTrigger>
            <TabsTrigger value="images" className="flex-grow">
              Images
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex-grow">
              Blog
            </TabsTrigger>
          </TabsList>
        </center>
        <TabsContent value="basin-info" className="">
          <AddBizBasicInfo />
        </TabsContent>
        <TabsContent value="images">Change your password here.</TabsContent>
        <TabsContent value="blog">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
