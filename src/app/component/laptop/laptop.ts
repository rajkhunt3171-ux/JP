import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-laptop',
  imports: [],
  templateUrl: './laptop.html',
  styleUrl: './laptop.scss',
})
export class Laptop {
  productList: any[] = [
    {
      img: 'assets/image/product/laptop/lenovo.png',
      title: "Lenovo Slim & Portable Windows Laptop",
      description: "This Lenovo portable laptop offers a sleek, modern design featuring a crisp display with slim side bezels and an integrated HD webcam. Built for productivity, business, and daily computing, it comes equipped with a full- size keyboard with a dedicated numeric keypad, a smooth multi - touch trackpad, and a lightweight metallic - grey chassis.",
      short_desc: [
        "Slim & Lightweight Design for On-the-Go Productivity",
        "Full-Size Keyboard with Dedicated Integrated Numpad",
        "Vivid Display with Narrow Bezels and Built-in Webcam"
      ],
      other_desc: [
        "Pre-installed with Windows OS for seamless office software and web browsing execution",
        "Spacious, smooth precision touchpad located below the ergonomic palm rest",
        "Ideal for students, remote professionals, and everyday home office computing"
      ]
    },
    {
      img: 'assets/image/product/laptop/dell.png',
      title: "Dell Inspiron Full HD Business & Student Laptop",
      description: "This sleek Dell laptop features a vibrant Full HD display with narrow side bezels and an integrated HD webcam for clear video conferencing. Engineered for smooth daily productivity, business tasks, and multimedia consumption, it comes with a full-size keyboard including a numeric keypad, a large precision touchpad, and a premium silver-finished chassis.",
      short_desc: [
        "Full HD Display with Ultra-Narrow Side Bezels",
        "Full-Size Ergonomic Keyboard with Integrated Numeric Keypad",
        "Sleek and Portable Silver Finish Form Factor"
      ],
      other_desc: [
        "Large precision touchpad offering responsive multi-touch gesture navigation",
        "Built-in HD webcam and microphone for video calls and remote work meetings",
        "Designed for business professionals, students, and general everyday computing"
      ]
    },
    {
      img: 'assets/image/product/laptop/hp.png',
      title: "HP Slim & Lightweight Full HD Windows Laptop",
      description: "This sleek HP laptop features a vibrant Full HD micro-edge display with minimal side bezels and an integrated HD webcam for video calls. Built for work, study, and daily productivity, it includes a full - size keyboard   with a dedicated numeric keypad, a smooth multi - touch touchpad, and a modern silver - finished chassis.",
      short_desc: [
        "Micro-Edge Full HD Display for Immersive Visuals",
        "Full-Size Keyboard with Integrated Numeric Keypad",
        "Slim, Lightweight, and Portable Silver Body"
      ],
      other_desc: [
        "Integrated HD webcam with dual-array microphones for clear online video meetings",
        "Spacious precision touchpad supporting multi-gesture controls",
        "Ideal for students, office tasks, remote work, and home entertainment"
      ]
    },
    {
      img: 'assets/image/product/laptop/apple.png',
      title: "Apple MacBook Air Liquid Retina Display Laptop in Midnight",
      description: "This Apple MacBook Air features a strikingly thin and lightweight design in a dark Midnight finish, showcasing a high - resolution Liquid Retina display with slim bezels and a camera notch.Designed for ultimate portability and high performance, it includes a backlit Magic Keyboard, a large Force Touch trackpad, and efficient fanless operation.",
      short_desc: [
        "Ultra-Thin and Lightweight Aluminum Design in Midnight Finish",
        "High-Resolution Liquid Retina Display with Narrow Bezels & Camera Notch",
        "Backlit Magic Keyboard with Large Force Touch Trackpad"
      ],
      other_desc: [
        "Silent, fanless architecture delivering powerful efficiency and long battery life",
        "Integrated FaceTime HD camera and studio-quality microphone array for clear video calls",
        "Ideal for creative professionals, students, and seamless macOS multitasking"
      ]

    },
    {
      img: 'assets/image/product/laptop/hdmi_to_vga_convertor.png',
      title: "HDMI Male to VGA Female Video Converter Adapter Cable",
      description: "This HDMI to VGA converter adapter seamlessly connects HDMIcompatible source devices such as laptops, desktop PCs, TV boxes, and gaming consoles to VGA - enabled monitors, projectors, and displays.Featuring a goldplated HDMI connector for optimal signal transfer and a durable black ABS housing, it provides a simple plug - and - play solution for expanding or mirroring your video display.",
      short_desc: [
        "HDMI Male to VGA Female Active Video Converter Adapter",
        "Gold-Plated HDMI Connector for Superior Signal Transmission",
        "Plug-and-Play Operation with No External Power or Software Needed"
      ],
      other_desc: [
        "Connects HDMI source devices (laptops, PCs, media players) to VGA monitors or projectors",
        "Integrated screw threads on VGA port ensure a secure and stable cable link",
        "Compact and lightweight design for easy portability in laptop bags or travel kits"
      ]
    },
    {
      img: 'assets/image/product/laptop/logitech_keyboard.png',
      title: "Logitech MK270 Wireless Keyboard and Mouse Combo",
      description: "This Logitech wireless keyboard and mouse combo features a   full - size layout with dedicated hotkeys for media control, productivity, and instant internet access.Equipped with a matching compact wireless optical mouse with teal accents, it utilizes a reliable 2.4 GHz USB receiver to deliver a clutter - free, plug - and - play desktop setup for office and home work.",
      short_desc: [
        "Full-Size Wireless Keyboard with Dedicated Media Hotkeys",
        "Compact Wireless Optical Mouse with Distinctive Teal Accents",
        "Reliable 2.4 GHz Wireless USB Plug-and-Play Connection"
      ],
      other_desc: [
        "8 dedicated shortcut keys for media control, volume, email, and web navigation",
        "Spill-resistant keyboard design with sturdy tilt legs and long battery life",
        "Ambidextrous mouse shape providing smooth optical tracking and comfortable grip"
      ]
    }
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
