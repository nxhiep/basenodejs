import { readFileAppInfos } from "./src/common/private";

const processData = async () => {
  let appInfos = await readFileAppInfos();
  let web = appInfos.filter((w) => w.gaIds);
  let app = appInfos;
  //   console.log("web ", web);
  //   console.log("app ", app);
  let all = {
    web,
    app,
  };
  console.log(all);
};

processData();
