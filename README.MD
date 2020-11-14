# Oak Express

[Oak](https://github.com/oakserver/oak) is a web framework for [Deno](https://deno.land). It is not Express. In fact, it's modeled (and also named) after [Koa](https://github.com/koajs/koa). But Express comes with a nice, opinionated setup for scaffolding a new application. I like that. So I attempted to create that same scaffolding for Oak.

But I don't have time to create a Yeoman generator (looks hard) so here is a template repo instead.

## Running

Execute the `www.ts` file from the "bin" folder...

```bash
ENV="development" deno run --watch --allow-all --unstable bin/www.ts
```

> If you run a file without a .js or .ts extension, Deno will assume it's JavaScript and we don't want that. Or maybe you do, but I don't. I never liked the "no file extension on the www" file anyway.

Deno requires permissions to do anything - access the net, read files, even read env variables, say the word "Deno" out loud. The "allow-all" flag just...well it allows all. Specific permissions are...

1. --allow-net: Needed for the web server to be able to bind to the address/port
1. --allow-read: Needed by Handlebars to read templates
1. --allow-env: Needed to read that "development" env variable

## Caveats

Handlebars is used for the templating. This is not template engine middleware. There is a library for that and I didn't use it because it felt a little heavy. But if you want template caching and all that, check out the view-engine project for Oak.

The --unstable flag is required. I think Oak needs it, but I'm not 100% sure. Anyway. It's unstable.
