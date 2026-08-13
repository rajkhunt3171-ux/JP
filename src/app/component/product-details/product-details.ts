import { Component, Input } from '@angular/core';
import { Service } from '../../shared/service/service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  @Input() productData: any;

  constructor(
    public sharedService: Service,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() { }

  redirectToWhatsApp(productName: any) {
    const phoneNumber = '+918469492080';
    const message = `Hi,\nWe need more information about your product ${productName}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
}
