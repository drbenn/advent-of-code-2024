import { part1 } from './days/day1.ts';
import * as day2 from './days/day2.ts';

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(part1());
  // console.log(day2.run());
  // console.log("\x1b[37;44m This is white text on a blue background! \x1b[0m");
  // console.log("\x1b[37;42m This is black text on a green background! \x1b[0m");
  // console.log("\x1b[37;41m This is white text on a red background! \x1b[0m");
  // console.log("\x1b[37;43m This is black text on a yellow background! \x1b[0m");
}
