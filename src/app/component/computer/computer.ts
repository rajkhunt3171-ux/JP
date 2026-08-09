import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-computer',
  imports: [],
  templateUrl: './computer.html',
  styleUrl: './computer.scss',
})
export class Computer {
  productList: any[] = [
    {
      img: 'assets/image/product/cpu/cpu_cabinet.png',
      title: 'Minimalist Mid-Tower Desktop Computer Cabinet Case',
      description: 'This sleek ATX mid-tower computer cabinet features a clean, brushed- metal front panel design, perfect for home, office, and business desktop PC builds.Equipped with front - facing USB ports and audio jacks, as well as side - panel ventilation mesh for improved airflow, it provides a solid and professional enclosure for mounting motherboards, power supplies, and storage drives.',
      short_desc: [
        "Sleek Brushed Finish Front Panel for a Professional Minimalist Look",
        "Convenient Front I/O Panel with USB Ports and Audio Jacks",
        "Side Ventilation Mesh Grill for Enhanced Airflow and Heat Dissipation"
      ],
      other_desc: [
        "Compatible with standard ATX, Micro-ATX, and Mini-ITX motherboards",
        "Sturdy steel chassis construction with anti-slip bottom rubber feet",
        "Ample internal space for storage drive bays and standard expansion cards"
      ]
    },
    {
      img: 'assets/image/product/cpu/moniotr.png',
      title: 'Dell Full HD Ultra-Slim Bezel Desktop LED Monitor',
      description: 'This Dell desktop LED monitor offers crisp Full HD clarity with ultra - thin bezels, delivering an immersive, edge- to - edge viewing experience.Designed for productivity, CCTV monitoring, and multimedia playback, it features a sturdy desktop stand, wide viewing angles, and energy - efficient LED backlighting for sharp, vibrant visuals.',
      short_desc: [
        "Full HD LED Display with Vibrant Color Accuracy",
        "Ultra-Thin Micro-Edge Bezel Design for Multi-Monitor Setups",
        "Sturdy Flat Desktop Base Stand with Tilt Adjustment"
      ],
      other_desc: [
        "Ideal for office workstations, home desktop setups, and CCTV surveillance viewing",
        "Flicker-free technology with low blue light filter to reduce eye strain",
        "Includes standard HDMI and VGA connectivity options for seamless device integration"
      ]
    },
    {
      img: 'assets/image/product/cpu/cpu_motherboard.png',
      title: 'CPU Motherboard',
      description: 'This high-performance ASUS dual-socket workstation and server motherboard features dual LGA 2011 CPU sockets designed to support multi- core processors for intensive computing tasks.Equipped with multiple DIMM memory slots and PCI Express expansion slots, it offers extreme processing power, expanded memory bandwidth, and high - speed data throughput for workstations, enterprise servers, and heavy rendering rigs.',
      short_desc: [
        "Dual LGA 2011 CPU Sockets for Multi-Processor Processing",
        "Multiple DDR3 Memory DIMM Slots for High-Capacity RAM Support",
        "Multiple PCIe Expansion Slots for Multi-GPU and Add-On Cards"

      ],
      other_desc: [
        "Integrated aluminum heatsinks over power delivery zones for passive thermal management",
        "Onboard ASPEED chipset for dedicated remote server management and video display",
        "Rich I/O connectivity including USB ports, dual Gigabit LAN, and high-speed SATA interfaces"
      ]
    },
    {
      img: 'assets/image/product/cpu/cpu_smps.png',
      title: 'Standard ATX PC Power Supply Unit (SMPS)',
      description: 'This ATX switched-mode power supply unit (SMPS) delivers efficient, regulated DC power to internal desktop computer components.Featuring a large cooling fan with a protective grill cover and a honeycomb rear ventilation mesh, it ensures steady thermal management and reliable electrical distribution for everyday PC builds.',
      short_desc: [
        "Standard ATX Form Factor Power Supply Unit (SMPS)",
        "Integrated Cooling Fan and Rear Honeycomb Vents for Efficient Heat Dissipation",
        "Bundled Multi-Colored Cable Harness with Standard Power Connectors"
      ],
      other_desc: [
        "Standard 230V AC 3-pin power input socket with voltage compatibility label",
        "Color-coded wire leads for motherboard, CPU, SATA drives, and peripheral power",
        "Essential power distribution component for home, office, and custom desktop builds"
      ]
    },
    {
      img: 'assets/image/product/cpu/cpu_ram.png',
      title: 'GB DDR3 1600MHz PC3-12800U Desktop RAM Memory Modules',
      description: 'This pair of Royemai 4GB DDR3 DIMM memory modules offers a total of 8GB high - speed RAM to boost desktop computer performance, multitasking, and system responsiveness.Designed for standard desktop motherboards, each module operates at 1600MHz with 1.5V voltage, making it an ideal upgrade or replacement solution for everyday computing.',
      short_desc: [
        "4GB DDR3 1600MHz (PC3-12800U) Desktop Memory Modules",
        "Standard 240-Pin Non-ECC Unbuffered DIMM Form Factor",
        "1.5V Operating Voltage with CL11 Latency Timing"
      ],
      other_desc: [
        "Dual-rank (2Rx8) architecture featuring high-quality memory chips mounted on a green PCB",
        "Plug-and-play installation compatible with standard DDR3 desktop motherboards",
        "Enhances system performance, application load times, and multitasking efficiency"
      ]
    },
    {
      img: 'assets/image/product/cpu/logitech_keyboard_wired.png',
      title: 'Logitech Full-Size Wired USB Desktop Keyboard',
      description: 'This Logitech full-size USB wired keyboard features a classic low - profile design built for comfortable, quiet, and reliable daily typing. Outfitted with a standard QWERTY layout, integrated numeric keypad, spillresistant body, and durable keycaps, it offers effortless plug - and - play connectivity for home, office, and commercial computer setups.',
      short_desc: [
        "Full-Size QWERTY Layout with Integrated Numeric Keypad",
        "Plug-and-Play USB Wired Connection for Instant Setup",
        "Low-Profile Quiet Keys with Spill-Resistant Durable Design"
      ],
      other_desc: [
        "Clear status LED indicators for Caps Lock, Num Lock, and Scroll Lock",
        "Comfortable curved spacebar and familiar full-height function keys",
        "Compatible with Windows, Linux, and standard desktop PC setups"
      ]
    },
    {
      img: 'assets/image/product/cpu/logitech_mouse_wired.png',
      title: 'Logitech Full-Size Wired USB Optical Mouse',
      description: 'This Logitech full-size USB wired optical mouse features a comfortable ambidextrous design built for smooth, precise cursor control and daily productivity.Outfitted with high - definition optical tracking, a textured scroll wheel, and plug - and - play USB connectivity, it delivers reliable performance for home, office, and commercial computer environments.',
      short_desc: [
        "Ambidextrous Full-Size Design for Comfortable All-Day Use",
        "High-Definition Optical Tracking for Smooth and Precise Control",
        "Plug-and-Play USB Wired Connection with No Software Required"
      ],
      other_desc: [
        "Textured scroll wheel for effortless line-by-line document and web navigation",
        "Durable matte black finish resistant to wear and fingerprints",
        "Compatible across Windows, macOS, ChromeOS, and Linux desktop systems"
      ]
    },
    {
      img: 'assets/image/product/cpu/power_cable_cpu.png',
      title: '3-Pin Indian Plug to IEC C13 AC Power Cord Cable',
      description: 'This heavy-duty AC power cord features a standard 3-pin Indian wall plug on one end and a female IEC C13 connector on the other.Designed to deliver safe and stable main power to desktop computers, monitors, printers, and SMPS power supplies, it is built with durable PVC insulation and integrated strain relief connectors for long - lasting use.',
      short_desc: [
        "Standard 3-Pin Indian Wall Plug to IEC C13 Female Power Cable",
        "Heavy-Duty Copper Conductor Wire with Molded Strain Relief",
        "Universal AC Power Cable for Computers, Monitors, and Printers"
      ],
      other_desc: [
        "BIS certified 3 - pin plug ensuring grounded, safe electrical conduction",
        "Durable black PVC outer insulation resistant to bending and wear",
        "Plug-and-play power replacement cord for desktop PC SMPS units, monitors, and UPS systems"
      ]
    },
    {
      img: 'assets/image/product/cpu/vga_cable.png',
      title: 'Standard Male-to-Male VGA SVGA Monitor Cable',
      description: 'This high-performance VGA cable features standard 15-pin male SVGA connectors on both ends to deliver clear, reliable analog video display signals.Outfitted with molded blue connector hoods, integrated finger - tightened thumbscrews, and heavy - duty double shielding, it ensures a secure connection between desktop PCs, laptops, DVRs, projectors, and monitors.',
      short_desc: [
        "Standard 15-Pin Male to Male VGA / SVGA Display Cable",
        "Finger-Tightened Thumbscrews for a Secure, Fixed Connection",
        "Double-Shielded Cable Core to Minimize Signal Noise and Interference"
      ],
      other_desc: [
        "Supports high-resolution analog video output for monitors, projectors, and DVR displays",
        "Durable black PVC jacket with reinforced strain relief ends for extended lifespan",
        "Plug-and-play video connection across PCs, laptops, KVM switches, and display monitors"
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
