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
    {
      img: 'assets/image/product/cctv/dahua_imou_outdoor.png',
      title: 'Imou Cruiser Outdoor Wi-Fi Pan & Tilt Security Camera',
      description: 'The Imou Cruiser Outdoor Wi-Fi Camera delivers 360-degree pan and tilt coverage with vivid full- color night vision for complete outdoor perimeter security.Featuring dual external antennas for extended wireless range, smart AI human detection, and active deterrence with built -in spotlights and siren, it effectively monitors and protects your property against intruders in all weather conditions.',
      short_desc: [
        "Full HD Resolution with 360Â° Pan & Tilt Coverage",
        "Smart Full-Color Night Vision with Built-In Spotlights",
        "IP66 Weatherproof Casing with Dual Wi-Fi Antennas"
      ],
      other_desc: [
        "Active deterrence feature featuring integrated spotlights and a 110dB security siren",
        "Smart AI human detection with real-time motion tracking and instant app alerts",
        "Supports two-way audio and flexible local MicroSD, NVR, or Cloud storage options"
      ]
    },
    {
      img: 'assets/image/product/cctv/bnc_connector_wirless.png',
      title: 'BNC Male Connector to Screw Terminal Balun Adaptor',
      description: 'These BNC Male Video Balun Connectors enable fast, tool-free connection of coaxial video signals to twisted pair cabling or custom wires without soldering.Featuring a standard male BNC interface on one end and a green screw terminal block on the other, they ensure stable, secure video signal transmission for CCTV, DVRs, and security camera installations.',
      short_desc: [
        "Standard Male BNC Connector to 2-Pin Screw Terminal",
        "Solderless Design for Easy and Quick CCTV Cabling",
        "Gold-Plated Pin for Superior Signal Transmission"
      ],
      other_desc: [
        "Screw-terminal connection ensures tight, long-lasting cable retention",
        "Compatible with CAT5/CAT6 network cables or two-wire video cables",
        "Durable molded plastic housing with twist-lock metal BNC mechanism"
      ]
    },
    {
      img: 'assets/image/product/cctv/bnc_connector_wired.png',
      title: 'BNC Male to BNC Male Coaxial Patch Extension Cable',
      description: 'This pre-formed BNC male to BNC male coaxial patch cable provides a reliable plug-and-play solution for transmitting video signals between security cameras, DVRs, monitors, and video splitters. Featuring nickelplated twist-lock BNC connectors with gold-plated contact pins and molded strain relief boots, it ensures high-quality signal integrity and long-lasting durability in CCTV installations.',
      short_desc: [
        "Dual Male BNC Connectors for Direct Plug-and-Play Setup",
        "Gold-Plated Center Pins for Optimal Signal Clarity",
        "Flexible Coaxial Cable with Molded Strain Relief Boots"
      ],
      other_desc: [
        "Secure twist-lock bayonet coupling prevents accidental disconnections",
        "High-density shielding reduces interference and signal degradation",
        "Ideal for connecting CCTV cameras, DVR systems, video monitors, and SDI equipment"
      ]
    },
    {
      img: 'assets/image/product/cctv/dc_connector_wireless.png',
      title: 'DC Power Male and Female Plug to Screw Terminal Adapter Pair',
      description: 'This pair of 12V DC power connectors includes one male plug and one female jack, providing a convenient, solderless solution for power connections in CCTV and LED lighting setups. Equipped with green 2-pin screw terminal blocks marked with clear polarity (+/-), these adapters allow easy connection of bare power wires to standard 5.5mm x 2.1mm DC power sockets and plugs without soldering.',
      short_desc: [
        "12V DC Male & Female Power Adapters (5.5mm x 2.1mm)",
        "Solderless Screw Terminal Block with Clearly Marked Polarity",
        "Ideal for CCTV Cameras, LED Strip Lights, and Power Supply Routing"
      ],
      other_desc: [
        "Screw terminals ensure a tight, reliable wire connection for steady power delivery",
        "Heavy-duty molded plastic construction with strain relief for long-lasting durability",
        "Compatible with 12V / 24V low-voltage DC power applications"
      ]
    },
    {
      img: 'assets/image/product/cctv/dc_connector_wired.png',
      title: '12V Male DC Power Pigtail Connector Cable',
      description: 'This 12V DC Male Power Pigtail Cable features a pre-stripped, color- coded red and black wire lead connected to a standard male DC barrel plug. Designed for fast and convenient power wiring, it is ideal for connecting CCTV cameras, power supply boxes, LED light strips, and custom low - voltage electronic circuits.',
      short_desc: [
        "Standard 5.5mm x 2.1mm Male DC Barrel Connector",
        "Pre-Stripped and Tinned Red/Black Color-Coded Lead Wires",
        "Ideal for CCTV Power Wiring, DVRs, and LED Lighting"
      ],
      other_desc: [
        "Red positive and black negative leads for easy polarity identification",
        "Molded connector housing with flexible strain relief for improved longevity",
        "Ensures reliable low-voltage DC power transmission across various security setups"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_video_balloon.png',
      title: 'Passive HD CCTV Video Balun Transceiver Pair',
      description: 'This pair of passive HD video balun transceivers allows highdefinition CCTV video signals to be transmitted over cost-effective UTP twistedpair cable instead of heavy coaxial wiring. Featuring push-terminal blocks for quick, tool-free installation and flexible BNC pigtails for tight spaces, it delivers clear video transmission with strong anti-interference capabilities.',
      short_desc: [
        "Supports HD-TVI, HD-CVI, AHD, and CVBS Analog Formats",
        "Tool-Free Push-Terminal Connection for UTP Cabling",
        "Flexible BNC Pigtail Cables for Easy Installation Behind DVRs"
      ],
      other_desc: [
        "Built-in transient suppression protection against power surges and static interference",
        "Passive design requires no additional power supply",
        "Ensures long-distance, noise-free video transmission over CAT5/CAT6 cables"
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_dvr_all_chenal.png',
      title: 'Dahua High-Definition Network / Digital Video Recorder',
      description: 'This Dahua Video Recorder offers robust management and recording solutions for residential and commercial security camera systems. Featuring high- efficiency video compression technology and multi - channel video input support, it delivers smooth live viewing, continuous high - definition recording, and easy footage playback across connected surveillance cameras.',
      short_desc: [
        "Multi-Channel HD Video Recording & Live Display",
        "Advanced H.265+ Video Compression to Maximize Storage Efficiency",
        "Supports Remote Monitoring via Smartphone & PC Apps"
      ],
      other_desc: [
        "HDMI and VGA simultaneous video outputs for local display connection",
        "SATA HDD interface supporting high-capacity storage for long-term video retention",
        "Intelligent search and playback features for quick event retrieval"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_smps_all_chenal.png',
      title: 'CCTV Camera Centralized Power Supply Box',
      description: 'This centralized CCTV Power Supply Unit is designed to deliver stable and reliable power to multiple security cameras from a single location. Encased in a durable metal housing with cooling vents to prevent overheating, it simplifies power management and eliminates the need for individual power adapters at each camera installation site.',
      short_desc: [
        "Centralized Power Distribution for CCTV Security Systems",
        "Heavy-Duty Metal Enclosure with Integrated Ventilation Vents",
        "Heavy-Duty Cables with Strain Relief Connectors"
      ],
      other_desc: [
        "Built-in overcurrent, overvoltage, and short-circuit protection",
        "Protects connected cameras from power surges and electrical noise",
        "Suitable for wall mounting in commercial and residential security setups"
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_imou_indoor.png',
      title: '',
      description: '',
      short_desc: [
      ],
      other_desc: [
      ]
    },
    {
      img: 'assets/image/product/cctv/dahua_imou_indoor.png',
      title: '',
      description: '',
      short_desc: [
      ],
      other_desc: [
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
