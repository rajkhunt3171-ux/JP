import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-cctv',
  imports: [],
  templateUrl: './cctv.html',
  styleUrl: './cctv.scss',
})
export class Cctv {
  productList: any[] = [
    {
      img: 'assets/image/product/cctv/dahua_hdcvi_camera_dom.png',
      title: 'Dahua HD IR Dome Security Camera',
      description: 'A compact Dahua dome surveillance camera designed for indoor and outdoor security monitoring. It features high-definition video capture, built-in infrared LEDs for night vision, and a durable vandal-resistant housing for reliable 24/7 surveillance.',
      short_desc: [
        "High-definition video recording",
        "Built-in infrared LEDs for clear night vision",
        "Compact dome design suitable for indoor and outdoor installation"
      ],
      other_desc: [
        "Wide-angle lens provides broad area coverage.",
        "Weather-resistant and durable housing for long-lasting performance.",
        "Compatible with most DVR/NVR surveillance systems for easy integration."
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_hdcvi_camera_bullet.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    {
      img: 'assets/image/product/cctv/prama_hdcvi_dom.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    {
      img: 'assets/image/product/cctv/prama_hdcvi_bullet.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    {
      img: 'assets/image/product/cctv/dahua_2mp_colour_flash_dom.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    {
      img: 'assets/image/product/cctv/dahua_2mp_colour_flash_bullet.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    {
      img: 'assets/image/product/cctv/dahua_ip_dom.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    {
      img: 'assets/image/product/cctv/dahua_ip_bullet.png',
      title: '',
      description: '',
      short_desc: [],
      other_desc: []
    },
    // {
    //   img: '',
    //   title: '',
    //   description: '',
    //   short_desc: [],
    //   other_desc: []
    // },
  ]

  constructor(
    private modalService: NgbModal
  ) { }

  productDetails(produtData: any) {
    console.log(produtData);

    const modalRef = this.modalService.open(ProductDetails, {
      size: 'xl',
      backdrop: true,
      centered: true,
    });
    modalRef.componentInstance.productData = produtData;
  }
}
