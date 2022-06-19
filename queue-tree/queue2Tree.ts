import { QueueItem, TreeItem } from "./cases";

export default function queue2Tree(queue: QueueItem[]): TreeItem[] {
    const tree: TreeItem[] = [];
    const queueMap: Map<number | null, QueueItem> = new Map();

    for (const item of queue) {
        queueMap.set(item.id, item);
    }

    for (const item of queue) {
        const parent = item.parentId !== null && queueMap.get(item.parentId);
        if (parent) {
            parent.children.push(item);
        } else {
            tree.push(item as any);
        }
    }
    return tree;
}