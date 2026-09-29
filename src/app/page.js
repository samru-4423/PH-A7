
import Banner from "@/components/Banner";
import Friends from "./friends/page";


export default function Home() {
  return (
    <div className="bg-gray-100 py-15">
      <Banner></Banner>
      <Friends></Friends>
    </div>
  );
}
