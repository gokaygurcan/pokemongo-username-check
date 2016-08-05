# pokemongo-username-check

Check if your username is valid and/or in use.

---

## Install

```bash
$ [sudo] npm install --global pokemongo-username-check
```

## Usage

```bash
$ pokemongo-username -h

Check if your username is valid and/or in use.

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
```

## License

MIT © [Gökay Gürcan](https://www.gokaygurcan.com/)
