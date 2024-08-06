import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <main className="relative bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
