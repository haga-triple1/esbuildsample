import {serve} from "esbuild";
import {config} from "./base.mjs";
serve({
    port: 3000,
    servedir: "public"
},{
    ...config
  })
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .then(() => {
      console.log("Watch mode build started.")
  })

