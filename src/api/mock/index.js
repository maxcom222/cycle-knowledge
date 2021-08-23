import { Server } from "miragejs";

export default function ({ environment = "development" } = {}) {
  return new Server({
    environment,

    routes() {
      this.get("/api/categories", (schema) => {
        return schema.db.categories;
      });
      this.get("/api/category/:id", (schema, request) => {
        return schema.db.categories.find(request.params.id);
      });
      this.get("/api/:category_id/articles", (schema, request) => {
        return schema.db.articles.where({
          category_id: request.params.category_id,
        });
      });
      this.get("/api/articles/:article_id", (schema, request) => {
        return schema.db.articles.find(request.params.article_id);
      });
      this.get("/api/bookmarks", (schema) => {
        return schema.db.articles.where({ is_bookmark: true });
      });
      this.post("/api/bookmarks/:article_id", (schema, request) => {
        schema.db.articles.update(request.params.article_id, {
          is_bookmark: true,
        });
        return schema.db.articles.where({ is_bookmark: true });
      });
      this.delete("/api/bookmarks/:article_id", (schema, request) => {
        schema.db.articles.update(request.params.article_id, {
          is_bookmark: false,
        });
        return request.params.article_id;
      });
      this.passthrough();
    },
    seeds(server) {
      server.db.loadData({
        categories: [
          {
            id: 1,
            name: "NFP Regeln",
            img: "../category1.png",
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          },
          {
            id: 2,
            name: "Temperatur",
            img: "../category2.png",
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          },
          {
            id: 3,
            name: "Zervixschleim",
            img: "../category3.png",
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          },
          {
            id: 4,
            name: "Fruchtbarkeit",
            img: "../category4.png",
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          },
        ],
        articles: [
          {
            category_id: 1,
            id: 1,
            is_bookmark: false,
            title: "Minus-8-Regel",
            img: "../category1.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 1,
            id: 2,
            is_bookmark: false,
            title: "5-Tage-Regel",
            img: "../category2.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 1,
            id: 3,
            is_bookmark: false,
            title: "Doppelte Kontroll",
            img: "../category3.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 1,
            id: 4,
            is_bookmark: false,
            title: "Minus-20-Regel",
            img: "../category4.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 2,
            id: 5,
            is_bookmark: false,
            title: "Minus-8-Regel",
            img: "../category1.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 3,
            id: 6,
            is_bookmark: true,
            title: "5-Tage-Regel",
            img: "../category2.png",
            description:
              "sdfsdfdDiese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 3,
            id: 9,
            is_bookmark: false,
            title: "Doppelte Kontroll",
            img: "../category3.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 4,
            id: 7,
            is_bookmark: false,
            title: "Doppelte Kontroll",
            img: "../category3.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
          {
            category_id: 4,
            id: 8,
            is_bookmark: true,
            title: "Minus-20-Regel",
            img: "../category4.png",
            description:
              "Diese Regel gilt während der ersten 12 Diese Regel gilt während der ersten 12 sensiplan® auswertest. \n Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, darfst du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen.",
          },
        ],
      });
    },
  });
}
