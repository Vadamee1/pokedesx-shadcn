import MenuCard from "@/components/home/MenuCard";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="px-2 md:pl-32 md:pt-28 md:pr-32">
      <div className="sm:grid md:flex md:justify-between">
        <Welcome />
        <MenuCard />
      </div>
    </main>
  );
}
