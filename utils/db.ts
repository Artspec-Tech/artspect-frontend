import Dexie, { Table } from "dexie";

export interface Video {
  name: string;
  arrayBuffer: ArrayBuffer;
}

export class VideoDexie extends Dexie {
  public videos!: Table<Video>;
  constructor() {
    super("VideoDexie");
    this.version(4).stores({
      videos: "++id, name, arrayBuffer",
    });
  }
}

export const db = new VideoDexie();
