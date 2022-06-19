import { QueueItem, TreeItem } from "./cases";

const queue: QueueItem[] = [];

export default function tree2Queue(tree: TreeItem[], parentTree?: TreeItem): QueueItem[] {
    for (const item of tree) {
        if(parentTree) { item.parentId = parentTree?.id || null; }
        queue.push(item as any);
    
        if(item.children.length > 0) {
            tree2Queue(item.children, item);
        }
    }

    return queue;
}