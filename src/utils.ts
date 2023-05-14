export const getPageFromPath = (pathName: string) => {
  switch (pathName) {
    case "/":
      return "index";
    case "/posts":
      return "posts";
    case "/about":
      return "about";
    case "/contact":
      return "contact";
    default:
      return "404";
  }
};
