"use client";

import { navItems } from "@/data";
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNavbar";
const Home = () => {
  return (
    <main className="relative bg-gray-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
