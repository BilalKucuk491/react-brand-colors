
import Content from "./components/Content";
import Blog404 from "./components/Blog404";
const routes = [
  {
    path: "/",
    name:"home",
    element: <Content />
  },
  {
    name:"notFound",
    path: "*",
    element: <Blog404 />,
  },
];

export default routes;
