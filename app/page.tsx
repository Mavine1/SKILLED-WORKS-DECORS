import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <main className="relative bg-blue-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'>
      <div className="max-w-10xl w-full">
        <Hero />
      </div>
    </main>
  );
}
