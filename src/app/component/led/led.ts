import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-led',
  imports: [],
  templateUrl: './led.html',
  styleUrl: './led.scss',
})
export class Led {
  productList: any[] = [
    {
      img: 'assets/image/product/led/32_inch_tv.png',
      title: "32-Inch Smart HD LED Television with Dual Desktop Stands",
      description: "This 32-inch HD LED television features a sleek bezel-less design engineered to deliver an immersive entertainment experience. Outfitted with dual sturdy legs for stable table- top placement, it provides vibrant visual output, sharp contrast, and versatile connectivity for home theater systems, set - top boxes, streaming devices, and gaming consoles.",
      short_desc: [
        "32-Inch Widescreen HD LED Television Display",
        "Modern Near Bezel-Less Design for Maximum Screen Space",
        "Dual Sturdy Table-Top Legs for Secure Placement"
      ],
      other_desc: [
        "Supports multiple input ports including HDMI, USB, and AV connectors for seamless device integration",
        "Compact form factor ideal for bedrooms, small living rooms, dorms, and office displays",
        "Energy-efficient LED backlighting delivering clear picture clarity and balanced contrast"
      ]
    },
    {
      img: 'assets/image/product/led/43_inch_tv.png',
      title: "43-Inch Full HD Smart LED Television with Dual Stand",
      description: "This 43-inch Full HD LED television offers a sleek, ultra-thin bezel design engineered for an immersive wide- screen viewing experience. Equipped with dual v - shaped base legs for stable tabletop placement, it displays rich color contrast and sharp image clarity, making it ideal for streaming movies, set - top box entertainment, and console gaming.",
      short_desc: [
        "43-Inch Widescreen Full HD LED Display Panel",
        "Ultra-Slim Bezel Design for Maximum Viewing Area",
        "Dual V-Shaped Base Stand Legs for Stable Table Placement"
      ],
      other_desc: [
        "Multiple connectivity ports including HDMI, USB, and AV inputs for external media devices",
        "Delivers crisp audio output and vivid color performance for everyday home entertainment",
        "Versatile size ideal for living rooms, bedrooms, lounges, and commercial waiting areas"
      ]
    },
    {
      img: 'assets/image/product/led/50_inch_tv.png',
      title: "50-Inch 4K Ultra HD Smart LED Television with Stand",
      description: "This 50-inch 4K Ultra HD Smart LED television features an expansive, ultra-thin bezel design built to provide a cinema-like home viewing experience. Supported by dual robust V-shaped desktop stands, it produces crystal-clear resolution, deep contrast, and vivid color detail for movies, sports, streaming services, and video games.",
      short_desc: [
        "50-Inch Large Widescreen 4K UHD Smart LED Panel",
        "Near Bezel-Less Frame Design for Immersive Visual Experience",
        "Dual Heavy-Duty V-Shaped Base Legs for Secure Placement"
      ],
      other_desc: [
        "Equipped with comprehensive HDMI, USB, and audio output ports for external media gear",
        "Delivers crisp audio performance and high dynamic picture depth across wide viewing angles",
        "Ideal focal piece for modern living rooms, home theater rooms, and lounge spaces"
      ]
    },
    {
      img: 'assets/image/product/led/55_inch_tv.png',
      title: "55-Inch 4K Ultra HD Smart LED Television with Stand",
      description: "This 55-inch 4K Ultra HD Smart LED television delivers a bigscreen, cinematic viewing experience with vibrant color performance and razorsharp picture detail. Designed with ultra-narrow bezels and dual sturdy V-shaped desktop stands, it is perfect for streaming 4K content, watching sports, and gaming in modern living rooms and home entertainment setups.",
      short_desc: [
        "55-Inch Big-Screen 4K UHD Smart LED Display Panel",
        "Ultra-Thin Bezel-Less Frame for Immersive Viewing Experience",
        "Dual Heavy-Duty V-Shaped Base Stand Legs for Stable Placement"
      ],
      other_desc: [
        "Multiple connectivity ports including HDMI, USB, and audio output interfaces for external devices",
        "High dynamic range and contrast for realistic picture quality across wide viewing angles",
        "Ideal centerpiece for spacious living rooms, home theaters, and entertainment centers"
      ]
    },
    {
      img: 'assets/image/product/led/tv_remote.png',
      title: "One For All Universal Smart TV Remote Control",
      description: "This One For All universal TV remote control features an ergonomic handheld design with dedicated app shortcut buttons for Netflix, Prime Video, and Rakuten TV. Built for seamless control over televisions and smart TV interfaces, it offers a full numeric keypad, directional navigation pad, media playback buttons, and quick access controls in a durable black casing.",
      short_desc: [
        "Ergonomic Handheld Universal Remote Control for Smart TVs",
        "Dedicated One-Touch Streaming App Buttons for Netflix and Prime Video",
        "Full Numeric Keypad and Directional Navigation Pad"
      ],
      other_desc: [
        "Integrated media playback controls for rewind, play, pause, fast-forward, and stop",
        "Dedicated volume and channel rocker buttons with mute control",
        "Universal brand compatibility engineered for quick setup with multiple TV models"
      ]
    },
    {
      img: 'assets/image/product/led/hdmi_cables.png',
      title: "High-Speed 4K HDMI 2.0 Male to Male Cable",
      description: "This high-speed HDMI 2.0 cable features gold-plated male connectors housed in durable aluminum alloy casings, engineered for ultra-highdefinition audio and video transmission. Capable of supporting 4K resolution at 60Hz, high dynamic range (HDR), and multi-channel digital audio, it offers a reliable plug-and-play solution for connecting laptops, PCs, gaming consoles, and set-top boxes to modern HDTVs, monitors, and projectors.",
      short_desc: [
        "High-Speed HDMI 2.0 Male to Male Audio/Video Cable",
        "Gold-Plated Connectors with Premium Aluminum Alloy Housings",
        "Supports 4Kx2K Ultra HD Resolution and High-Speed Bandwidth"
      ],
      other_desc: [
        "Thick, durable black PVC cable jacket with reinforced strain relief for long-lasting flexibility",
        "Universal compatibility with 4K TVs, monitors, gaming consoles, AV receivers, and projectors",
        "Delivers crisp digital video and multi-channel surround sound without signal loss"
      ]
    },
    {
      img: 'assets/image/product/led/tv_wall_mount.png',
      title: "Heavy-Duty Fixed LED TV Wall Mount Bracket",
      description: "This heavy-duty fixed TV wall mount bracket is constructed from high-grade cold-rolled steel to provide maximum strength and stable support for LED, LCD, and Smart TVs. Featuring a low-profile slim design, it mounts televisions close to the wall for a sleek, modern aesthetic while offering multiple VESA mounting hole patterns for broad compatibility.",
      short_desc: [
        "Heavy-Duty Solid Steel Construction with Matte Black Finish",
        "Universal VESA Compatibility for LED, LCD, and Smart TVs",
        "Low-Profile Slim Design for Flush Wall Installation"
      ],
      other_desc: [
        "Dual vertical mounting brackets with open back-plate for easy cable routing and management",
        "Pre-drilled multi-hole pattern to accommodate various screen sizes and wall stud spacing",
        "Ideal space-saving solution for living rooms, bedrooms, offices, and conference rooms"
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
