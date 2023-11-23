// import BasicUseMemo from "./components/BasicUseMemo";
import BlogPosts from "./components/BlogPosts";
import "./App.css";

const posts = [
  {
    id: 1,
    slug: "beginning-html-day-one",
    date: "Tue May 10 2023 18:03:07 GMT-0700 (Pacific Daylight Time)",
    data: "Lorem ipsum",
  },
  {
    id: 2,
    slug: "beginning-css-day-one",
    date: "Tue January 16 2023 18:03:07 GMT-0700 (Pacific Daylight Time)",
    data: "Lorem ipsum",
  },
  {
    id: 3,
    slug: "beginning-javascript-day-one",
    date: "Tue April 11 2022 18:03:07 GMT-0700 (Pacific Daylight Time)",
    data: "Lorem ipsum",
  },
  {
    id: 4,
    slug: "beginning-react-day-one",
    date: "Tue August 20 2023 18:03:07 GMT-0700 (Pacific Daylight Time)",
    data: "Lorem ipsum",
  },
  {
    id: 5,
    slug: "beginning-node-day-one",
    date: "Tue November 26 2023 18:03:07 GMT-0700 (Pacific Daylight Time)",
    data: "Lorem ipsum",
  },
];

function App() {
  return (
    <>
      {/* <BasicUseMemo /> */}
      <BlogPosts posts={posts} />
    </>
  );
}

export default App;
