import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
})
export class HoverBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeBackgroundColor('#FFFFCC');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeBackgroundColor(null);
  }

  private changeBackgroundColor(color: string | null): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
