import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, HostListener, ViewChild, ViewContainerRef } from "@angular/core";
// import { rejects } from "assert";
import { Subject } from "rxjs";
import { ModalComponent } from "../modal/modal.component";

@Component({
    template: ''
})
export class Modal {
    componentRef: any;
    @ViewChild("modal", { read: ViewContainerRef, static: true }) modalContainerRef: ViewContainerRef | undefined;

    // subject: any;
    subject = new Subject<boolean>();


    constructor(public resolve: ComponentFactoryResolver) { }

    launchModal(content: any) {
        this.modalContainerRef?.clear();

        this.componentRef = this.modalContainerRef?.createComponent(
            this.resolve.resolveComponentFactory(ModalComponent)
        );

        this.componentRef.instance.father = this;

        if(content.isObject){
            this.componentRef.instance.convert(content);    
        }else{
            this.componentRef.instance.content = content;
        }

        return true;
    }

    // Evento emitido cuando el modal se cierra
    closeModal() { } 

    // Evento emitido cuando se presiona el botón "Cancelar"
    cancelModal() { }

    // Evento emitido cuando se presiona el botón "Más información"
    infoModal() { }

    // Evento emitido cuando se presiona el botón "Aceptar"
    acceptModal() { }

    // Evento emitido cuando se presiona el botón "Aceptar salir"
    acceptleftModal() {
        this.subject.next(true);
        this.destroyModal();
    }

    // Evento emitido cuando se presiona el botón "Cancelar"
    cancelLeftModal() {
        this.subject.next(false);
        this.destroyModal();
    }

    // Funcion que destruye el modal
    destroyModal() {
        this.componentRef.destroy();
        this.modalContainerRef?.clear();
    }

    // Evento configurable para verificar la salida de la ruta a otra (caso que haya un cambio sin guardar)
    iCanGoOut(): boolean {
        return true;
    }

    // El modal se dispara cuando deseas salir de la ruta sin guardar cambios
    thereAreChange(): boolean {
        if (this.iCanGoOut()) {
            return false;
        } else {
            this.launchModal({
                tittle: '¡Aviso!',
                text: [
                    'Aún tienes cambios que no has guardado.',
                    '¿Deseas salir de todos modos?'
                ],
                acceptleftModal: true,
                cancelLeftModal: true,
                closeOnClickOutside: true,
                dialog: true
            });
            return true;
        }
    }

    // Modal por defecto de mantenimiento
    modalMaintenaince() {
        this.launchModal({
            tittle: '¡Aviso!',
            text: [
                'Este espacio se encuentra en mantenimiento.',
                'Por favor, intentelo más tarde.'
            ],
            closeButton: true,
            closeOnClickOutside: false
        })
    }

    // Modal por defecto de token expirado
    modalToken(expired: boolean = false) {
        let message;
        message = [
            'El token es inválido'
        ];
        if(expired){
            message = [
                'El token ha expirado.'
            ];
        }
        this.launchModal({
            tittle: '¡ERROR!',
            text: message,
            closeButton: true
        });
    }

    // Se borran los datos guardados del registro al salir de la página
    @HostListener('window:beforeunload', ['$event'])
    unloadHandler(event: Event) {
        localStorage.removeItem('tokenRegister');
        localStorage.removeItem('user');
    }

}