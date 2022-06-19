
export class QueueItem {
    public children: QueueItem[] = [];
    constructor(public id: number, public parentId: number | null, public message: string) {}
}
export class TreeItem {
    public parentId: number | null = null;
    
    public children: TreeItem[] = [];
    constructor(public id: number, public message: string, child?: TreeItem) {
        if (child) {
            this.addChild(child);
        }
    }
    public addChild(child: TreeItem) {
        this.children.push(child);
    }
}

function createQueue(id: number, parentId: number | null, message: string): QueueItem {
    return new QueueItem(id, parentId, message);
}

function createTree(id: number, message: string, child?: TreeItem): TreeItem {
    return new TreeItem(id, message, child);
}

export const queue = [
    createQueue(0, null, "root"),
    createQueue(1, 0, 'Hello'),
    createQueue(2, 0, 'World'),
    createQueue(3, 1, 'Hello'),
    createQueue(4, 1, 'World'),
    createQueue(5, 2, 'Hello'),
    createQueue(6, 2, 'World'),
    createQueue(7, 3, 'Hello'),
];

export const tree = [
    createTree(1, 'Hello',
        createTree(2,'World',
            createTree(3, "H", 
                createTree(4, "W", 
                    createTree(5, "HH")
                )
            )
        )
    ),
]
