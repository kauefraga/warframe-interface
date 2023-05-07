import { prompt } from 'enquirer';
import c from 'ansi-colors';
import { createSpinner } from 'nanospinner';
import { WarframeInterface } from '@warframe-interface/api';

export async function main() {
  const { platform } = await prompt<{ platform: string }>({
    type: 'select',
    name: 'platform',
    message: 'Enter the platform you play',
    choices: ['pc', 'ps4', 'xb1', 'swi'],
  })
    .catch(() => {
      throw new Error(c.bold.red('Prompt canceled!'));
    });

  const warframeInterface = new WarframeInterface(platform);

  const { route } = await prompt<{ route: string }>({
    type: 'select',
    name: 'route',
    message: 'What information do you want',
    choices: warframeInterface.routesNames,
  })
    .catch(() => {
      throw new Error(c.bold.red('Prompt canceled!'));
    });

  const spinner = createSpinner(c.yellow('Fetching...'));

  await warframeInterface.fetch(route)
    .then((response) => {
      spinner.success();
      console.log(response.data);
    })
    .catch((error) => {
      spinner.error({ text: error.message });
      process.exit(0);
    });
}
