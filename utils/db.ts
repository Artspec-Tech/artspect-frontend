import Dexie, { Table } from "dexie";

export interface Video {
  name: string;
  blob: Blob;
}

export class VideoDexie extends Dexie {
  public videos!: Table<Video>;
  constructor() {
    super("VideoDexie");
    this.version(1).stores({
      videos: "++id, name, blob",
    });
  }
}

export const db = new VideoDexie();
