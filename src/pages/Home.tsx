import { useContext } from "react";
import { ThemeContext } from "../App";

const Home: React.FC = () => {
  // Theme of the application: either light or dark. See 'App' component.
  const { theme } = useContext(ThemeContext);

  return (
    <main className="flex items-center justify-center mt-10 sm:mt-20 lg:mt-32 lg:flex-row flex-col w-full">
      <div className="xl:max-w-xl max-w-md order-2 lg:order-1 animate-slideInFromLeft">
        <h1 className="sm:text-6xl text-5xl lg:text-7xl lg:mt-0 mt-10 lg:text-left text-center">
          Hi, my name is <strong className="text-green-600">Isaac</strong>.
        </h1>

        <p className="sm:mt-10 mt-5 sm:text-2xl lg:text-left text-center">
          I'm an <strong className="font-bold text-green-600">aspiring software engineer </strong>
          from Haywards Heath, West Sussex.
        </p>

        <div className="flex mr-10 gap-2.5 p-2 justify-end mt-5 sm:mt-10">
          <a
            href="https://www.linkedin.com/in/isaac-clark-2b3259247"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Isaac Clark's LinkedIn page"
          >
            <svg
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === "light" ? "#2563eb" : "#fff"}
              viewBox="0 0 24 24"
            >
              <title>LinkedIn Logo</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="https://github.com/isaacclark1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Isaac Clark's GitHub page"
          >
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
              <title>GitHub Icon</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill={theme === "light" ? "#24292f" : "#fff"}
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="lg:ml-16 relative lg:h-96 h-56 w-52 order-1 lg:order-2 animate-slideInFromTop">
        <img
          src="/images/IsaacClark.jpeg"
          alt="Picture of Isaac Clark."
          className="relative h-full w-full object-cover rounded-3xl shadow-custom shadow-black dark:shadow-white"
        />
      </div>
    </main>
  );
};

export default Home;
