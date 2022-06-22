import {build} from "esbuild";
import {config} from "./base.mjs";
build({
    ...config,
    watch: {
        onRebuild(e) {
            e || console.log("Rebuild.")
        }
    }
  })
  .catch(() => process.exit(1))
  .then(() => {
      console.log("Watch mode build started.")
  })

