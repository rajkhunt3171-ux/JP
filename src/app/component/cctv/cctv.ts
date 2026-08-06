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
      title: 'Dahua HD Bullet Security Camera',
      description: 'A Dahua HD bullet surveillance camera designed for reliable outdoor and indoor security monitoring. It features high-definition video capture, built-in infrared LEDs for enhanced night vision, and a weather-resistant housing that delivers dependable 24/7 surveillance in various environments.',
      short_desc: [
        "High-definition video recording for clear surveillance footage",
        "Built-in infrared LEDs for superior night vision performance",
        "Weather-resistant bullet design suitable for indoor and outdoor installation"
      ],
      other_desc: [
        "Adjustable mounting bracket allows flexible viewing angle installation.",
        "Durable metal housing provides long-lasting protection against harsh weather conditions.",
        "Compatible with most HDCVI DVR systems for seamless integration and reliable video transmission."
      ]
    },
    {
      img: 'assets/image/product/cctv/prama_hdcvi_dom.png',
      title: 'PRAMA HD Dom CCTV Camera',
      description: 'High-quality PRAMA HD Dome CCTV Camera designed for reliable indoor and outdoor surveillance. It delivers clear video quality with infrared night vision, durable construction, and wide-angle coverage for homes, offices, shops, and commercial spaces.',
      short_desc: [
        "HD video recording with crystal-clear image quality.",
        "Built-in IR LEDs for superior night vision.",
        "Weather-resistant and durable dome design."
      ],
      other_desc: [
        "Suitable for homes, offices, retail stores, warehouses, and commercial buildings.",
        "Supports 24/7 continuous monitoring with low-light performance.",
        "Easy installation and compatible with most DVR surveillance systems."
      ]
    },
    {
      img: 'assets/image/product/cctv/prama_hdcvi_bullet.png',
      title: 'PRAMA HD Bullet CCTV Camera',
      description: 'The PRAMA HD Bullet CCTV Camera is designed to provide reliable outdoor and indoor surveillance with crystal-clear video quality. Featuring advanced infrared night vision, weather-resistant housing, and a durable bullet design, it ensures continuous security monitoring for homes, offices, shops, warehouses, and commercial properties.',
      short_desc: [
        "High-definition video recording for sharp and detailed surveillance.",
        "Built-in IR night vision for clear monitoring in complete darkness.",
        "Weatherproof bullet design suitable for indoor and outdoor installation."
      ],
      other_desc: [
        "Ideal for homes, offices, retail stores, factories, warehouses, and parking areas.",
        "Provides 24/7 reliable surveillance with excellent low-light performance.",
        "Compatible with most DVR surveillance systems for easy installation and seamless integration."
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_2mp_colour_flash_dom.png',
      title: 'Dahua 2MP Full-Color Fixed-focal Eyeball Dome Camera',
      description: 'The Dahua 2MP Full-Color Dome Camera delivers high-quality 1080p HD video surveillance with vibrant color imagery even in complete darkness. Equipped with a built-in warm LED light illuminator and advanced lowlight sensor technology, this camera provides reliable 24/7 color monitoring. Its durable dome housing makes it ideal for indoor and outdoor security setups in residential or commercial environments.',
      short_desc: [
        "2MP Full HD Resolution (1080p)",
        "24/7 Full-Color Night Vision with Warm LED",
        "Compact Indoor Eyeball Dome Design"
      ],
      other_desc: [
        "Built-in microphone for real-time audio recording",
        "Smart Light technology automatically adjusts illuminator intensity",
        "IP67 weather-resistant casing for durable outdoor performance"
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_2mp_colour_flash_bullet.png',
      title: 'Dahua 2MP Full-Color Fixed-focal Bullet Camera',
      description: 'The Dahua 2MP Full-Color Bullet Camera offers high-definition 1080p surveillance video with clear, vivid color imagery around the clock. Featuring a built-in warm LED light illuminator and high-sensitivity optical sensor, this camera captures detailed full-color footage even in total darkness. Designed with a robust bullet housing and adjustable wall mount, it is wellsuited for perimeter and outdoor security monitoring.',
      short_desc: [
        "2MP Full HD Resolution (1080p)",
        "24/7 Full-Color Night Vision with Warm LED Light",
        "Durable Indoor Bullet Form Factor"
      ],
      other_desc: [
        "Built-in microphone for synchronized audio monitoring",
        "Smart Light technology to prevent overexposure in dark settings",
        "IP67 weather-resistant housing for reliable outdoor operation"
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_ip_dom.png',
      title: 'Dahua 2MP IR Fixed-focal Eyeball Dom Network Camera',
      description: '"The Dahua 2MP Eyeball Dome Camera provides sharp 1080p HD video surveillance for reliable indoor and outdoor security. Equipped with Smart IR technology, it ensures clear black-and-white night vision coverage in lowlight and pitch-black environments. Its compact, vandal-resistant dome housing offers flexible mounting options for home or office monitoring.',
      short_desc: [
        "2MP Full HD Resolution (1080p)",
        "Smart IR Night Vision Technology",
        "Sleek Eyeball Dome Casing for Ceiling or Wall Mounting"
      ],
      other_desc: [
        "Built-in IR LEDs for clear illumination in total darkness",
        "3-Axis adjustment for flexible angle positioning",
        "Weather-resistant construction suitable for indoor/outdoor installation"
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_ip_bullet.png',
      title: 'Dahua 2MP IR Fixed-focal Bullet Network Camera',
      description: 'The Dahua 2MP IR Bullet Camera offers high-definition 1080p video surveillance designed for reliable long-range outdoor monitoring. Equipped with built-in IR LEDs and Smart IR technology, it delivers clear black-and-white night vision even in complete darkness. Its weather-resistant bullet housing and adjustable mounting bracket ensure durable performance for home or business security.',
      short_desc: [
        "2MP Full HD Resolution (1080p)",
        "Smart IR Night Vision Illumination",
        "Sturdy Outdoor/Indoor Bullet Design"
      ],
      other_desc: [
        "Integrated infrared LEDs for long-distance night visibility",
        "Flexible mounting bracket for easy wall or ceiling installation",
        "IP67 weather-resistant casing for reliable operation in harsh weather"
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_imou_indoor.png',
      title: 'Imou Ranger 2 Indoor Wi-Fi Pan & Tilt Security Camera',
      description: 'The Imou Ranger 2 Indoor Wi-Fi Camera provides complete 360degree coverage for comprehensive indoor home monitoring. Featuring smart tracking and AI human detection, it instantly detects movement and sends realtime alerts directly to your smartphone. With clear HD video resolution and twoway audio support, it offers a seamless and interactive security solution for keeping an eye on pets, family, or home spaces.',
      short_desc: [
        "1080p Full HD Video with 360Â° Pan & Tilt Coverage",
        "AI Human Detection & Smart Motion Tracking",
        "Two-Way Audio Communication with Built-In Mic & Speaker"
      ],
      other_desc: [
        "IR night vision for clear surveillance in complete darkness",
        "Privacy Mode to physically shield the lens via the Imou app",
        "Flexible storage options including MicroSD card, NVR, or Cloud"
      ]
    },
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
