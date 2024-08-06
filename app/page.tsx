import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <main className="relative bg-blue-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-10xl w-full">
        <Hero />
      </div>
    </main>
  );
}
