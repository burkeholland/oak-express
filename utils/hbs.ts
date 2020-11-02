import { Handlebars } from "../deps.ts";

const handlebars = new Handlebars();

export async function render(view: string, context: Object) {
  return await handlebars.renderView(view, context);
}
