export enum FileFlags {
    // 空文件
    EMPTY_FILE ="EMPTY_FILE",

    // 正在读取中
    READING = "READING",

    // 文件读取失败
    READ_FILED = "READ_FILED",

    // 正在上传中
    UPLOADING = "UPLOADING",

    // 正在加载中
    LOADING = "LOADING",

    // 完成
    COMPILED = "COMPILED",

    // 分片文件
    SLICE_FILE = "SLICE_FILE",

    // 组合中的文件
    COMPOSE_FILE = "COMPOSE_FILE",

    // 取消的
    CANCELED = "CANCELED",

    // 什么都没有的或不可用的
    NIL = "NIL",

    // 不知道是什么
    UKNOWN = "UKNOWN"
}
