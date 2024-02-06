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

export class Scroll {
  _id: number;
  _lastCleaned;
  _catalogItem: CatalogItem;
  constructor(id: number, title: string, tags: string[], dateLastCleaned) {
    this._id = id;
    this._catalogItem = new CatalogItem(null, title, tags);
    this._lastCleaned = dateLastCleaned;
  }

  get id() {
    return this._catalogItem.id;
  }

  get title() {
    return this._catalogItem.title;
  }

  hasTag(arg: string): boolean {
    return this._catalogItem.hasTag(arg);
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

// 클라이언트 코드 ...
type RecordType = {
  id: number;
  catalogData: {
    title: string;
    tags: string[];
  };
  lastCleaned: string;
};

class LocalDate {
  static parse(str: string) {}
}

const aDocument: RecordType[] = [];
const scrolls = aDocument.map(
  (record) =>
    new Scroll(
      record.id,
      record.catalogData.title,
      record.catalogData.tags,
      LocalDate.parse(record.lastCleaned)
    )
);
