export class Theme {

  private color: string;
  private font: string;

  private setColor;

  constructor(color, font) {

    this.color = color;
    this.font = font;


  }


  public sColor(value) {
    this.setColor = value;
  }






  public applyColor(): void {
    this.setColor(this.color);
  }

  public applyFont(): void {
    return;
  }

}