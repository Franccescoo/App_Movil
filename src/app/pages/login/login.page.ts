import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  @ViewChild(IonModal) modal: IonModal;

  message = '';
  name: string;

  cancelar() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirmar() {
    this.modal.dismiss(this.name, 'confirmar');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirmar') {
      this.message = `Hola, ${ev.detail.data}!`;
    }
  }
}
