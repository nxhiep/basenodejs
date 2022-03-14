import { google } from "googleapis";
import * as Constraint from "../utils/constant";
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
export const updateGoogleApplicationCredentials = (platform: number) => {
  if (platform == Constraint.PLATFORM_APP_FLUTTER) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = `${Constraint.KEY_FILE_NAME_APP_FLUTTER}`;
  } else {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = `${Constraint.KEY_FILE_NAME_APP_REACT}`;
  }
};

export const readFileKey = async () => {
  const data = await fs.readFileSync(Constraint.KEY_FILE_NAME_APP_FLUTTER);
  // .catch((err) => console.error("error", err));
  return data ? JSON.parse(data.toString()) : null;
};

export const readFileAppInfos = async () => {
  const data = await fs.readFileSync(Constraint.KEY_FILE_APP_INFO);
  return data ? JSON.parse(data.toString()) : null;
};

export const authJWT = async (client_email: string, private_key: string) => {
  const jwt = await new google.auth.JWT(
    client_email,
    undefined,
    private_key,
    Constraint.SCOPES
  );
  return jwt;
};

export const getGaIDs = async (
  websiteUrls: string[],
  client_email: string,
  private_key: string,
  JWT: any
) => {
  let service = google.analytics({
    version: "v3",
    auth: JWT,
  });

  const listId = await service.management.accounts.list();
  if (listId.data.items) {
    let listItem = listId.data.items;
    let accountWeb = listItem[1].id ?? "";

    let properties = await service.management.webproperties.list({
      accountId: accountWeb,
    });

    let listWebSite = await properties.data.items;
    let ids = listWebSite?.map((item) => item.id);
    console.log("listWebSite ", listWebSite);

    let webInfos: any = [];
    if (listWebSite) {
      for (let i = 0; i < listWebSite.length; i++) {
        let webSite: any = listWebSite[i];
        let data: any = await service.management.profiles.list({
          accountId: accountWeb,
          webPropertyId: webSite.id ?? "",
        });
        webInfos.push({
          name: webSite.name ?? "",
          websiteUrl: webSite.websiteUrl,
          gaIds: data.data.items[0].id,
        });
      }
      console.log("webInfos ", webInfos);
    }
  }

  // let idWebSite = listWebSite
  //   // ?.filter((site) => websiteUrls.includes(site.websiteUrl))
  //   .map((site) => {
  //     return { name: site.name, gaIds: site.internalWebPropertyId };
  //   });
  // console.log("idWebSite ", idWebSite);

  // let gaIds: string[] = idWebSite ?? [];
  // if (idWebSite) {
  //   for (let i = 0; i < idWebSite.length; i++) {
  //     let data = await service.management.profiles.list({
  //       accountId: accountWeb,
  //       webPropertyId: idWebSite[i],
  //     });
  //     gaIds.push(data.data.items[0].id);
  //   }
  // }
  // return gaIds;
};
