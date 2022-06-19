import * as cases from "./cases";
import queue2Tree from "./queue2Tree";
import tree2Queue from "./tree2Queue";

const tree = queue2Tree(cases.queue);

const queue = tree2Queue(cases.tree);

const validTree = queue2Tree(queue);
const validQueue = tree2Queue(tree);

