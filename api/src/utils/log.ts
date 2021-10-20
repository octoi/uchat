import chalk from 'chalk';

const clg = console.log; // its pain to write whole `console.log` 😫

export const log = {
  success: (msg: any) => clg(chalk.green(`[+] ${msg}`)),

  info: (msg: any) => clg(chalk.blue(`[?] ${msg}`)),

  warning: (msg: any) => clg(chalk.yellow(`[!] ${msg}`)),

  error: (msg: any) => clg(chalk.red(`[-] ${msg}`)),
};
