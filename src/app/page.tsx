import About from "@/components/About";
import Blog from "@/components/Blog";
import ContactUsForm from "@/components/ContactUs";
import Experience from "@/components/Experience";
import Project from "@/components/Projects";

import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex  flex-col justify-center items-center">
      <Blog />
      <About />
      <Project />
      <Skills />
      <Experience />
      <ContactUsForm />
    </div>
  );
}
