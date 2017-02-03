export default class Character {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly thumbnail: string;
    readonly detailsUri: string;
    readonly comics: ReadonlyArray<string>;
    readonly series: ReadonlyArray<string>;

    constructor(id: number,
                name: string,
                description: string,
                thumbnail: string,
                detailsUri: string,
                comics: ReadonlyArray<string>,
                series: ReadonlyArray<string>) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnail = thumbnail;
        this.detailsUri = detailsUri;
        this.comics = comics;
        this.series = series;
    };
};