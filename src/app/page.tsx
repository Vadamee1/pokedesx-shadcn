import MenuCard from "@/components/home/MenuCard";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="pl-32 pt-28 pr-32">
      <div className="flex justify-between">
        <Welcome />
        <MenuCard />
      </div>
    </main>
  );
}
