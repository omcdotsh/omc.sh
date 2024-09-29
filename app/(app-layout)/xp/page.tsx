import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceSection } from "@/features/sections/xp-section";

export default function RoutePage() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Tabs defaultValue="professional" className="w-[100%]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="professional">professional</TabsTrigger>
          <TabsTrigger value="personal">personal</TabsTrigger>
          <TabsTrigger value="academic">academic</TabsTrigger>
        </TabsList>
        <TabsContent value="professional">
          <ExperienceSection />
        </TabsContent>
        <TabsContent value="personal">
          <ExperienceSection />
        </TabsContent>
        <TabsContent value="academic">
          <ExperienceSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
