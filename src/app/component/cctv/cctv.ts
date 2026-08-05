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
      img: 'dahua_dome_bullet_camera.jpg',
      title: 'Dahua Dome & Bullet CCTV Security Camera Series',
      description: 'Dahua Dome and Bullet CCTV cameras provide reliable indoor and outdoor surveillance solutions for homes, offices, and commercial spaces. Dome cameras are designed for compact, vandal-resistant indoor or ceiling-mounted use, while Bullet cameras excel in long-range outdoor monitoring with weatherproof protection (IP67).',
      short_desc: [
        'HD & IP High Resolution Options (2MP, 4MP, 5MP to 8MP/4K)',
        'Night Vision & WizSense Full-Color Technology for clear night video',
        'Built-in Audio Microphone for audio recording support',
        'IP67 Weatherproof and IK10 Vandal-Resistant Housing',
        'Smart Motion Detection (SMD) & AI Intrusion Alerts'
      ],
      other_desc: [
        'Dome Cameras: Ideal for ceiling mounting indoors with a discreet look and impact protection.',
        'Bullet Cameras: Best for outdoor walls, perimeters, and long-distance night vision monitoring.',
        'Dual Technology Support: Available in both HDCVI (Analog) and IP/Network configurations.',
        'H.265+ Compression: Maximizes DVR/NVR storage efficiency and reduces bandwidth consumption.',
        'Remote Access: Supports live streaming and smart notifications via the DMSS mobile app.'
      ]
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
