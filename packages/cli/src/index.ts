import { prompt } from 'enquirer';
import c from 'ansi-colors';
import { createSpinner } from 'nanospinner';
import {
  api,
  WarframeRoutes,
} from '@warframe-interface/api';

export async function main() {
  const platformPrompt = await prompt({
    type: 'select',
    name: 'platform',
    message: 'Enter the platform you play',
    choices: ['pc', 'ps4', 'xb1', 'swi'],
  })
    .then((res) => JSON.stringify(res))
    .catch(() => {
      throw new Error(c.bold.red('Prompt canceled!'));
    });

  const { platform } = JSON.parse(platformPrompt);

  const warframeRoutes = new WarframeRoutes(platform);

  const answer = await prompt({
    type: 'select',
    name: 'route',
    message: 'What information do you want',
    choices: warframeRoutes.routesNames,
  })
    .then((res) => JSON.stringify(res))
    .catch(() => {
      throw new Error(c.bold.red('Prompt canceled!'));
    });

  const { route } = JSON.parse(answer);

  const spinner = createSpinner('Fetching...');

  await api.get(warframeRoutes.getRoute(route))
    .then((response) => {
      spinner.success();
      console.log(response.data);
    })
    .catch((error) => {
      spinner.error({ text: error.message });
      process.exit(0);
    });
}
