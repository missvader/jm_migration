import React, { FC } from "react";
import ClientLayout from "../components/ClientLayout";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";

type ArticleProps = {
  title: string;
  date: string;
  text: string;
};
const Article: FC<ArticleProps> = ({ title, date, text }) => {
  return (
    <li className="relative w-full p-4 py-6 my-4 rounded-xl flex flex-col   bg-light text-dark  border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light/75">
      <span className="my-2 w-full text-left text-medium font-semibold text-primary">
        {date}
      </span>
      <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
      <p className="text-justify">{text}</p>
    </li>
  );
};
const Blog: FC = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center  ">
        <ClientLayout className="pt-16 pb-16 ">
          <AnimatedText
            text={"Relatos, historias... que quiero compartir con vosotros"}
            className="!text-xl lg:!text-4xl text-primary    "
          />

          <ul>
            <Article
              title="Primer relato de bienvenida "
              date="01/08/2023"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <Article
              title="Adelanto ciempies"
              date="07/08/2023"
              text="Lorem ipsum dolor sit amet consectetur adipiscing, elit egestas dapibus mauris non ultrices senectus, risus congue rutrum velit malesuada. Pharetra torquent leo odio lacinia aliquam aptent, vel curae venenatis dui quam tristique, taciti viverra convallis morbi varius. Commodo est lacinia facilisis semper tellus pellentesque lectus dignissim vitae, risus scelerisque inceptos cras malesuada primis convallis penatibus justo, laoreet eleifend sagittis fusce vel nascetur eros interdum.Vel quisque feugiat ligula quam nunc blandit urna vehicula dictum, risus morbi dis gravida cubilia libero phasellus sociis potenti montes, eu egestas torquent praesent mollis conubia tempus suspendisse. Potenti vel sagittis semper vitae at cum diam rutrum nulla, himenaeos enim ac parturient id congue est venenatis velit, euismod vehicula penatibus quam erat quis vulputate orci. Sociosqu ad vulputate suspendisse per rutrum molestie tempor tempus penatibus hendrerit, porttitor fermentum bibendum a nec fusce velit hac tortor maecenas ultricies, ridiculus interdum aliquet class varius lacinia ultrices taciti non.Sociis tellus diam himenaeos habitasse nam congue viverra quis nostra phasellus, tempor semper habitant volutpat eros blandit a interdum venenatis cras commodo, sollicitudin sagittis feugiat aliquet laoreet tempus convallis pellentesque integer. Nam taciti laoreet fermentum suspendisse risus elementum porttitor tristique a, eu nullam porta facilisi ante venenatis aenean class, phasellus eget per et nostra lobortis consequat bibendum. Sociis torquent risus pellentesque feugiat suspendisse purus hac velit viverra sapien, at phasellus scelerisque volutpat primis fusce litora mi potenti."
            />
          </ul>
        </ClientLayout>
      </main>
    </>
  );
};

export default Blog;
