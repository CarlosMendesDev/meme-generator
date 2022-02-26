class MeMeGenerate {
  constructor() {
    this.file = [];
    this.topText = '';
    this.bottomText = '';
  }

  getFile() {
    return this.file;
  }

  getTopText() {
    return this.topText;
  }

  getBottomText() {
    return this.bottomText;
  }

  setFile(file) {
    this.file = file;
  }

  setTopText(text) {
    this.topText = text;
  }

  setBottomText(text) {
    this.bottomText = text;
  }
}

export default new MeMeGenerate();
