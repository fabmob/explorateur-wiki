const baseUrl = "https://wiki.lafabriquedesmobilites.fr/api.php";

export const fetchLastCommuns = (then) => {
  const params = {
    action: "query",
    generator: "categorymembers",
    gcmtitle: "Category:Commun",
    gcmsort: "timestamp",
    gcmdir: "desc",
    format: "json",
    prop: "info|revisions|image",
    rvprop: "content",
    inprop: "url",
  };

  const url =
    baseUrl +
    "?origin=*" +
    Object.keys(params).reduce(
      (memo, key) => memo + "&" + key + "=" + params[key],
      ""
    );

  fetch(url)
    .then((res) => res.json())
    .then((list) => {
      const elements = list.query.pages;
      const parsed = Object.values(elements).map((e) => {
        const content = e.revisions[0]["*"];
        const dataPairs = content
            .split("{{")[1]
            .split("}}")[0]
            .split("|")
            .map((el) => el.split("=")),
          data = Object.fromEntries(dataPairs);

        return {
          ...e,
          content,
          data,
        };
      });

      then(parsed);
    })
    .catch((e) => console.log(e));
};
