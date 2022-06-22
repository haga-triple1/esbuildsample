import {resolve} from "path";

/**
 * @type {import("esbuild").BuildOptions}
 */
export const config = {
    entryPoints: [resolve('src','index.ts')],
    bundle: true,
    minify: true,
    outdir: 'dist',
}