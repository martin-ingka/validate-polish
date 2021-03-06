import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
        {
            file: pkg.browser,
            format: 'iife',
            name: 'validatePolish',
        },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        terser(),
    ],
};
