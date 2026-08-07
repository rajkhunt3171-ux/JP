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
      img: 'assets/image/product/cctv/cctv_camera_stand.png',
      title: 'Universal Extended Wall Mount Bracket for Security Cameras',
      description: 'This heavy-duty adjustable mounting bracket is designed to extend and position security cameras away from walls for optimal surveillance coverage. Crafted from durable weather-resistant alloy with a clean white finish, it features an adjustable tilt head and telescopic arm to position bullet cameras or camera housings precisely where needed.',
      short_desc: [
        "Extendable Wall Mount Bracket for CCTV Bullet Cameras",
        "Adjustable Tilt & Swivel Head for Precise Camera Angle Positioning",
        "Heavy-Duty Weather-Resistant Construction for Indoor/Outdoor Use"
      ],
      other_desc: [
        "Integrated internal cable management pathway to conceal and protect wiring",
        "Universal mounting plate compatible with standard dome, bullet, and housing cameras",
        "Solid round base plate with pre-drilled holes for secure wall mounting"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_dvr_rack.png',
      title: 'Wall Mount CCTV DVR / NVR Security Enclosure Rack',
      description: 'This heavy-duty wall-mount CCTV rack cabinet is designed to securely house and protect DVRs, NVRs, power supplies, and network equipment. Built with a sturdy steel frame, a key- lockable front door with a glass viewing window, and side ventilation slots, it prevents unauthorized tampering while ensuring proper airflow to prevent device overheating.',
      short_desc: [
        "Lockable Front Door with Glass Window & Keys Included",
        "Sturdy Powder-Coated Metal Frame for Wall Mounting",
        "Built-In Ventilation Vents and Top Cable Entry Port"
      ],
      other_desc: [
        "Protects DVR/NVR units and power equipment from theft and dust accumulation",
        "Pre-cut cable entry ports on top and bottom for neat wire management",
        "Ideal for home, office, and commercial security system setups"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_junction_box.png',
      title: 'Weatherproof CCTV Security Camera Junction Box Set',
      description: 'This set of durable PVC CCTV junction boxes provides a secure, weatherproof enclosure for concealing and protecting camera wiring, video baluns, and power connectors.Designed for easy mounting behind bullet or dome security cameras, these base enclosures hide messy cables while protecting connections from rain, dust, and physical tampering.',
      short_desc: [
        "Weatherproof Plastic Junction Box Enclosures for CCTV Cameras",
        "Conceals and Protects Connectors, Cables, and Power Leads",
        "Durable PVC Construction for Indoor & Outdoor Installations"
      ],
      other_desc: [
        "Knockout cable entry slots for neat and flexible wire management",
        "Provides a flat, stable mounting surface for dome and bullet cameras",
        "Helps prevent connection corrosion and tampering in outdoor security setups"
      ]
    },
    {
      img: 'assets/image/product/cctv/wd_hdd.png',
      title: 'Western Digital Internal Hard Drive Series Collection',
      description: 'This lineup features Western Digital 3.5-inch internal hard drives designed for specialized computing, storage, and surveillance workloads. The range includes color-coded series such as WD Purple for continuous CCTV recording, WD Blue and Black for PC performance, WD Red for NAS systems, and WD Gold for enterprise storage.',
      short_desc: [
        "3.5-Inch Internal SATA Hard Disk Drives",
        "Tailored Drives for Surveillance, Desktop, NAS, and Enterprise Use",
        "High-Capacity Reliable Storage Solutions from Western Digital"
      ],
      other_desc: [
        "WD Purple specifically engineered for 24/7 NVR and DVR security systems",
        "Standard SATA interface compatible with PCs, DVRs, servers, and enclosures",
        "Built for high workload rates, continuous durability, and long-term data retention"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_speaker.png',
      title: 'High-Sensitivity CCTV Security Audio Pickup Microphone',
      description: 'This compact dome-shaped audio pickup microphone is designed to add real- time sound monitoring to CCTV security systems and DVR setups. Featuring a high - sensitivity condenser unit housed in a discrete ceilingmountable shell, it captures clear audio over wide room areas while minimizing background noise for enhanced surveillance detail.',
      short_desc: [
        "High-Sensitivity Audio Pickup Microphone for CCTV Systems",
        "Compact Half-Sphere Design Ideal for Ceiling/Wall Mounting",
        "3-Wire Lead Output for Power, Ground, and Audio Signal"
      ],
      other_desc: [
        "Color-coded wire leads (Red/Black/White or Yellow) for straightforward connection to 12V DC power and DVR audio inputs",
        "Low-noise preamplifier circuitry for crisp sound capture across indoor spaces",
        "Ideal for office, retail, counter-top, and room audio surveillance installations"
      ]
    },
    {
      img: 'assets/image/product/cctv/pow_switch.png',
      title: 'CP Plus 8-Port PoE Switch with Uplink & SFP Ports',
      description: 'This CP Plus 8-Port PoE Switch provides a reliable power and data transmission solution for IP surveillance networks and connected devices. Featuring Power over Ethernet(PoE) ports alongside dedicated Ethernet uplink and SFP fiber ports, it simplifies cabling by delivering both power and highspeed network connectivity through a single Ethernet cable.',
      short_desc: [
        "8-Port Power over Ethernet (PoE) Network Switch",
        "Dedicated RJ45 Uplink Ports and SFP Slot for Flexible Expansion",
        "Sturdy Metal Housing with LED Status Indicators"
      ],
      other_desc: [
        "Transmits power and data simultaneously over standard Cat5e/Cat6 ethernet cables",
        "Integrated PoE Watchdog function to detect and reboot unresponsive cameras automatically",
        "Plug-and-play setup ideal for IP camera systems, access points, and VoIP devices"
      ]
    },
    {
      img: 'assets/image/product/cctv/pow_switch_junction.png',
      title: 'Lockable Outdoor / Indoor Wall Mount PoE Switch Enclosure Box',
      description: 'This heavy-duty lockable metal enclosure box is designed to safely house PoE switches, power supplies, and network connectors.Featuring a secure key- lock mechanism, a durable powder - coated finish, and integrated ventilation holes for effective heat dissipation, it protects critical networking hardware from unauthorized access, dust, and physical damage.',
      short_desc: [
        "Lockable Key-Entry Mechanism for Enhanced Hardware Security",
        "Heavy-Duty Metal Construction with Integrated Cooling Vents",
        "Ideal for Housing PoE Switches, Power Adapters, and Wiring"
      ],
      other_desc: [
        "Decorative geometric pattern with central ventilation grid for optimum airflow",
        "Wall-mountable design for clean and compact network hardware installation",
        "Protects networking equipment from dust, tampering, and physical interference"
      ]
    },
    {
      img: 'assets/image/product/cctv/solar_camera.png',
      title: 'Solar Powered Outdoor Wireless Pan & Tilt Security Camera',
      description: 'This eco-friendly solar-powered outdoor security camera offers 100% wire - free surveillance powered by a top- mounted high - efficiency solar panel and rechargeable battery.Featuring 360 - degree pan and tilt coverage, bright LED spotlights for full - color night vision, and PIR motion detection, it provides reliable 24 / 7 security for remote outdoor locations without requiring electrical wiring.',
      short_desc: [
        "Solar Powered & Battery Operated for Wire-Free Installation",
        "360Â° Pan & Tilt Coverage with Full HD Resolution",
        "Smart PIR Motion Detection & Full-Color Night Vision"
      ],
      other_desc: [
        "Integrated high-efficiency solar panel for continuous, maintenance-free charging",
        "Built-in spotlights and IR LEDs for vivid color monitoring even in pitch darkness",
        "Weatherproof design with two-way audio support and remote mobile app control"
      ]
    },
    {
      img: 'assets/image/product/cctv/tp_link_router.png',
      title: 'TP-Link Dual-Antenna Wireless N Wi-Fi Router',
      description: 'This TP-Link Dual-Antenna Wireless Wi-Fi Router offers fast and reliable wireless coverage for everyday home and office networking needs. Featuring two high- gain external antennas for extended signal range and stability, it delivers smooth high - speed internet connectivity for streaming, web browsing, and connecting multiple smart devices simultaneously.',
      short_desc: [
        "High-Speed Wireless N Connection for Seamless Internet Access",
        "Dual High-Gain Antennas for Enhanced Wi-Fi Coverage & Range",
        "Intuitive LED Indicator Panel for Real-Time Network Status Monitoring"
      ],
      other_desc: [
        "Sleek and compact white housing with ventilation slots for efficient heat dissipation",
        "Supports multiple operating modes including Router, Access Point, and Range Extender",
        "Easy setup and network management via mobile app or web interface"
      ]
    },
    {
      img: 'assets/image/product/cctv/sim_card_router.png',
      title: 'Tenda 4G LTE Wi-Fi Router with SIM Card Slot',
      description: 'This Tenda 4G LTE Wi-Fi Router provides high-speed wireless internet access anywhere using a SIM card or standard broadband connection. Equipped with four high-gain external antennas for extended coverage and signal strength, it converts 4G cellular signals into a reliable Wi-Fi network for remote locations, homes, offices, and temporary setups.',
      short_desc: [
        "Integrated SIM Card Slot for Direct 4G LTE Plug-and-Play Internet",
        "Four High-Gain External Antennas for Extended Wi-Fi Range",
        "LED Status Indicators for Cellular Signal, Wi-Fi, and Power"
      ],
      other_desc: [
        "Supports 4G mobile network connectivity without requiring fixed-line broadband",
        "Stylish white chassis with top ventilation lattice for efficient heat management",
        "Ideal for remote homes, surveillance sites, small offices, and temporary events"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_3_1_cable.png',
      title: 'CCTV 3+1 Coaxial Camera Power & Video Cable Coil',
      description: 'This CCTV 3+1 composite cable coil combines a central coaxial video signal line with three insulated power/ audio copper wire leads inside a single durable outer sheath.Designed to streamline surveillance system wiring, it allows simultaneous transmission of high - definition video signals alongside DC power and audio through one cable run.',
      short_desc: [
        "3+1 Composite Structure (Video Coaxial + 3 Insulated Power Leads)",
        "High-Conductivity Copper Cores for Low Signal Distortion",
        "Durable White PVC Outer Sheath for Long-Lasting Protection"
      ],
      other_desc: [
        "Eliminates the need for running separate power and video cables during camera installation",
        "Color-coded internal leads for quick and accurate wiring identification",
        "Ideal for analog, HD-TVI, and AHD CCTV camera installations"
      ]
    },
    {
      img: 'assets/image/product/cctv/cctv_cat_6_cable.png',
      title: 'Cat6 FTP Ethernet Network Cable Coil for IP CCTV & Data',
      description: 'This High-Performance Cat6 FTP Network Cable Roll is designed for high - speed data transmission and IP security camera installations.Featuring 4 twisted pairs of copper conductors with foil shielding and a central spline separator, it delivers superior protection against electromagnetic interference (EMI) and crosstalk for reliable Gigabit Ethernet and PoE performance.',
      short_desc: [
        "Cat6 4-Pair Shielded Twisted Pair (FTP) Network Cable",
        "Foil Shielding & Internal Spline to Reduce Crosstalk and Interference",
        "Ideal for IP CCTV Cameras, PoE Switches, and High-Speed LAN Wiring"
      ],
      other_desc: [
        "Color-coded twisted pairs (Blue, Orange, Green, Brown) for easy RJ45 crimping",
        "Supports Power over Ethernet (PoE/PoE+) for simultaneous power and data transfer",
        "Durable grey PVC outer jacket suitable for indoor network installations"
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
