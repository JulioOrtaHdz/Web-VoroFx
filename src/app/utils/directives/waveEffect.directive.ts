import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { Effects } from '../classes/Effects';

@Directive({
    selector: '[waveEffect]'
})
export class WaveEffectDirective extends Effects {
    constructor(private _elementRef: ElementRef) {
        super();
    }

    @Output()
    public waveEffect = new EventEmitter<any>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        
        let name = this._elementRef ? this._elementRef.nativeElement.tagName.toLowerCase() : '';

        let flag = false;

        if (name == "button" || name == "img" || name == "a" || name == "div" || name == "label") {
            flag = true;
            if (this._elementRef.nativeElement.contains(targetElement)) {
            
                let element = this._elementRef.nativeElement;

                var dataToSend = {
                    event,
                    currentTarget: element,
                    target: targetElement
                };
                this.wave(dataToSend);
                this.waveEffect.emit(dataToSend);

            }
        }
    }
}
