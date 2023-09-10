import ClientLayout from "../components/ClientLayout";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import Posts from "../components/Posts";
export default function Blog() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center  ">
        <ClientLayout className="pt-16 pb-16 lg:pt-8 ">
          <AnimatedText
            text={"Relatos, historias... que quiero compartir con vosotros"}
            className="!text-xl lg:!text-4xl text-primary lg:mb-16   "
          />
          <Posts />
        </ClientLayout>
      </main>
    </>
  );
}
