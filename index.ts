// import { start } from "./core/startup.ts";
import { start } from "https://raw.githubusercontent.com/krasaler/rapid/master/mod.ts";
// import {start} from "file:///D:/webserver/deno/myProject/mod.ts"
/**
 * Запуск АПИ
 */
await start({
  db: {},
});
