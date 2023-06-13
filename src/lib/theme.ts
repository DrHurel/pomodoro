export class Theme {

  private color: string;
  private font: string;
  private root;

  constructor(color, font) {

    this.color = color;
    this.font = font;


  }


  public setRoot(root): void {
    this.root = root;
  }

  public applyTheme(): void {
    this.root.style.setProperty('--primary', this.color);
    this.root.style.setProperty('--font', this.font);

  }


}