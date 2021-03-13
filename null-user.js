export default class NullUser {
  constructor() {
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}
