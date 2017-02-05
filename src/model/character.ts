export class Character {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly thumbnail: string;
    readonly comics: ReadonlyArray<string>;
    readonly series: ReadonlyArray<string>;
    readonly urls: ReadonlyArray<Character.Url>;

    constructor(id: number,
                name: string,
                description: string,
                thumbnail: string,
                comics: ReadonlyArray<string>,
                series: ReadonlyArray<string>,
                urls: ReadonlyArray<Character.Url>) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnail = thumbnail;
        this.comics = comics;
        this.series = series;
        this.urls = urls;
    };

    public static NULL = new Character(0, 'NULL', '', '', [], [], []);
}

export namespace Character {
    export interface Url {
        readonly type: string;
        readonly url: string;
    }
}