import Admission from "./_components/Admission";
import Banner from "./_components/Banner";
import BlogSection from "./_components/Blog";
import Calendar from "./_components/Calendar";
import Glance from "./_components/Glance";
import Testimonials from "./_components/Testimonials";
import About from "./_components/welcome";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Glance />
      <Admission />
      <BlogSection />
      <Calendar />
      <Testimonials />
    </main>
  );
}
