# Express-Style Oak

Oak is a web framework for Deno. It is not Express. In fact, it's modeled (and also somewhat named) after Koa. But Express comes with a nice, opinionated setup for scaffolding a new application. I like that. But I don't have time to create a Yeoman generator (looks hard) so here is a template repo instead.

## Running

Execute the `www.ts` file from the "bin" folder...

```bash
ENV="development" deno run --watch --allow-all --unstable bin/www.ts
```

Deno requires permissions to do anything - access the net, read files, even read env variables. The "allow-all" flag just...well it allows all. Specific permissions are...

1. --allow-net: Needed for the web server to be able to bind to the address/port
1. --allow-read: Needed by Handlebars to read templates
1. --allow-env: Needed to read that "development" env variable
