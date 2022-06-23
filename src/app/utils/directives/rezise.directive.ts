import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[resize]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public resize = new EventEmitter<any>();

    @HostListener('window:resize', ['$event'])
    public resizeFunction(event: Event): void {
        if(!this._elementRef.nativeElement){
            return;
        }

        this.resize.emit(this._elementRef.nativeElement);
    }
}
