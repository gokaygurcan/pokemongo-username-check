#!/usr/bin/env node

// pokemongo-username-check

'use strict';

const chalk = require('chalk');
const meow = require('meow');
const request = require('request');

const cli = meow(`
	Examples:
	  $ pokemongo-username poke
	  [✗] It's not a valid username. Please enter minimum 6 characters. 
	  
	  $ pokemongo-username pokemon
	  [✗] It's valid but in use. Sorry.
    - pokemon897146
    - pokemon498721
    - pokemon190898
    
	  $ pokemongo-username pokemon897146
	  [✓] It's valid and not in use. Go and get it!
	
	Options:
	  --help, -h   Help
  `,
  {
    alias: {
      h: 'help'
    }
  }
);

const input = cli.input[0];

if (input) {
  const options = {
    method: 'POST',
    url: 'https://club.pokemon.com/api/signup/verify-username',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json; charset=utf-8'
    },
    body: `{"name": "${input}"}`
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
    }

    const result = JSON.parse(body);

    if (result.valid) {
      if (result.inuse) {
        console.log(`[${chalk.red('✗')}] It's valid but in use. Sorry.`);

        result.suggestions.forEach(suggestion => {
          console.log(`- ${suggestion}`);
        });
      } else {
        console.log(`[${chalk.green('✓')}] It's valid and not in use. Go and get it!`);
      }
    } else {
      console.log(`[${chalk.red('✗')}] It's not a valid username. Please enter minimum 6 characters.`);
    }
  });
}
