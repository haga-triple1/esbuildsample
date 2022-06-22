import {build} from "esbuild";
import {config} from "./base.mjs";
build({
    ...config
  })
  .catch(() => process.exit(1))
  .then(() => {
      console.log("Done.")
  })

