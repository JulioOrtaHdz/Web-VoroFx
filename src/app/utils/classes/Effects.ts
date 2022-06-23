export class Effects{

    wave(data: any){
        const element = data.currentTarget as HTMLElement;

        if(!element.classList.contains('ripple')){
            element.classList.add('ripple');
        }

        const event = data.event as PointerEvent;

        const rippleContainer = document.createElement('div');
        const rippleEffect = document.createElement('span');

        rippleContainer.classList.add('ripple-container');
        rippleEffect.classList.add('ripple-effect');

        const offset = element.getBoundingClientRect();

        rippleEffect.style.top = (event.pageY - offset.top) + "px";
        rippleEffect.style.left = (event.pageX - offset.left) + "px";

        rippleContainer.classList.add('ripple-effect-animation');

        rippleContainer.appendChild(rippleEffect);
        element.appendChild(rippleContainer);

        setTimeout(()=>{
            rippleContainer.removeChild(rippleEffect);
            element.removeChild(rippleContainer);
        },400);
    }
}