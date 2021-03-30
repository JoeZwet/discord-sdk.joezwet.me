class LabelsData {
  latest: string;
  recommended: string;
  bleeding: string;

  constructor(latest: string, recommended: string, bleeding: string) {
    this.latest = latest;
    this.recommended = recommended;
    this.bleeding = bleeding;
  }
}

export default LabelsData;