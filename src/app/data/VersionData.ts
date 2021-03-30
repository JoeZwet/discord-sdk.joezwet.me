class VersionData {
  type: string;
  version: string;
  md5: string;
  size: number;
  publish: Date;

  constructor(type: string, version: string, md5: string, size: number, publish: Date) {
    this.type = type;
    this.version = version;
    this.md5 = md5;
    this.size = size;
    this.publish = publish;
  }
}

export default VersionData;