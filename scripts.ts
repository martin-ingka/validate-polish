import { packageScripts } from '@radrat-scripts/package';
import { readmeScripts } from '@radrat-scripts/readme';
import { IRadratCli } from '@radrat/cli';

const scripts = async (cli: IRadratCli) => {
    await packageScripts(cli);
    await readmeScripts(cli);

    // Bundle.
    cli.command({
        name: `rollup.build`,
        executeString: `npx rollup -c ./config/rollup.config.js`,
    });

    // Run tests.
    cli.command({
        name: `test`,
        executeString: `npx jest`,
    });

    cli.command({
        name: `test.watch`,
        executeString: `npx jest --watch`,
    });
};

export default scripts;
