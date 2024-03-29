export class CatalogItem {
  _id: number;
  _title: string;
  _tags: string[];
  constructor(id: number, title: string, tags: string[]) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg: string) {
    return this._tags.includes(arg);
  }
}

export class Scroll extends CatalogItem {
  _lastCleaned;
  _catalogItem: CatalogItem;
  constructor(id: number, title: string, tag: string[], dateLastCleaned) {
    super(id, title, tag);
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dateLastCleaned;
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

class ChronoUnit {
  static DAYS;
}

export default {};
