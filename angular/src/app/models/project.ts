export class Project {
    constructor(
      public _id: number,
      public title: string,
      public description: string,
      public owner: string,
      public img?: string
    ) {}
  }