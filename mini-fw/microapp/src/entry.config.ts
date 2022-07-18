export interface IEntryConfig {
    entry: string;
    container: string;
    name?: string;
    activeRule?: string;
}

export const entries: IEntryConfig[] = [
    {
        name: "spa",
        container: "#spa",
        entry: "//127.0.0.1:5500/example/simple-example",
        activeRule: "/spa",
    },
    {
        name: "mpa",
        container: "#mpa",
        entry: "http://127.0.0.1:5500/example/mpa-example",
        activeRule: "/mpa",
    }
];