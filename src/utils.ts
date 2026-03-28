export const getPageFromPath = (pathName: string) => {
  switch (pathName) {
    case "/":
      return "whoami";
    case "/posts":
      return "ls -la posts";
    case "/projects":
      return "ls -la projects";
    case "/about":
      return "about";
    case "/contact":
      return "contact";
    default:
      if (pathName.startsWith("/posts")) {
        const [, , category, postSlug] = pathName.split("/");
        return `cat posts/${category}/${postSlug}`;
      }

      if (pathName.startsWith("/categories")) {
        const category = pathName.split("/")[2];
        return `ls -la /categories/${category}`;
      }

      return pathName.slice(1);
  }
};

/**
 * @description
 * Takes an Array<V>, and a grouping function,
 * and returns a Map of the array grouped by the grouping function.
 *
 * @param list An array of type V.
 * @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
 *                  K is generally intended to be a property key of V.
 *
 * @returns Map of the array grouped by the grouping function.
 */
export function groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
    const map = new Map<K, Array<V>>();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}
