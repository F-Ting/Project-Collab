export class Project {
    constructor(
        public _id: number,
        public name: string,
        public description: string,
        public owner: string,
        public email: string,
        public github: string,
        public url: string,
        public startDate: string,
        public status: string,
        public img?: string,
      ) {}
  }
