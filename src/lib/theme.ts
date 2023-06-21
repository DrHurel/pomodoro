export class Theme {

  private color: string;
  private font: string;
  private root: HTMLElement;

  private setColor;

  constructor(color, font) {

    this.color = color;
    this.font = font;


  }


  public sColor(value) {
    this.setColor = value;
  }

  public sRoot(root: HTMLElement): void {
    this.root = root;
  }


  public applyColor(): void {
    this.setColor(this.color);
    this.root.style.setProperty('--primary', this.color);
  }

  public applyFont(): void {

    this.root.style.setProperty('--font', this.font);
  }

} 