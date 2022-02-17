import { v4 as uuidV4 } from "uuid";

class User {
  created_at: Date;
  updated_at: Date;
  id: string;
  name: string;
  email: string;
  admin: boolean;

  constructor(id?: string) {
    this.admin = false;

    if (id) {
      this.id = id;
    } else {
      this.id = uuidV4();
    }
  }
}

export { User };
