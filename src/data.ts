
export type Category = 'GD&T' | 'DFMA' | 'Manufacturing' | 'Standards' | 'Fits & Limits' | 'Metrology';

export interface Topic {
  id: string;
  title: string;
  category: Category;
  description: string;
  standardRef: string; // e.g., "ASME Y14.5-2018 Section 5.4.1"
  symbol?: string; // SVG path or similar identifier
  content: string;
  blueprintType: 'flatness' | 'straightness' | 'position' | 'circularity' | 'perpendicularity' | 'parallelism' | 'profile' | 'datum' | 'fits' | 'welding' | 'thread' | 'metrology' | 'surface-finish' | 'modifiers' | 'injection-molding' | 'sheet-metal' | 'generic';
  relatedTopics?: string[]; // IDs of related topics
}

export const topics: Topic[] = [
  {
    id: 'flatness',
    title: 'Flatness',
    category: 'GD&T',
    description: 'Flatness is a condition of a surface or derived median plane having all elements in one plane.',
    standardRef: 'ASME Y14.5-2018, Section 5.4.2',
    symbol: '⏥',
    content: `
      Flatness is a form control. It specifies a tolerance zone defined by two parallel planes within which the surface must lie.
      
      **Key Characteristics:**
      - Does not control size.
      - Does not require a datum reference.
      - Applied to a surface, not a feature of size (unless applied to a derived median plane).
      
      **Application:**
      Commonly used for sealing surfaces, mounting surfaces, or where two parts must slide against each other without binding.
    `,
    blueprintType: 'flatness',
    relatedTopics: ['straightness', 'perpendicularity', 'surface-finish']
  },
  {
    id: 'straightness',
    title: 'Straightness',
    category: 'GD&T',
    description: 'Straightness is a condition where an element of a surface, or an axis, is a straight line.',
    standardRef: 'ASME Y14.5-2018, Section 5.4.1',
    symbol: '⎯',
    content: `
      Straightness can be applied to a surface element or an axis (feature of size).
      
      **Surface Straightness:**
      - Controls the form of a line on the surface.
      - Tolerance zone is two parallel lines.
      
      **Axis Straightness:**
      - Controls the straightness of the axis (e.g., a pin or shaft).
      - Tolerance zone is a cylinder (when the diameter symbol is present).
      - Can be applied at MMC (Maximum Material Condition).
    `,
    blueprintType: 'straightness',
    relatedTopics: ['flatness', 'position', 'machining-tolerances']
  },
  {
    id: 'position',
    title: 'Position',
    category: 'GD&T',
    description: 'Position is the location of one or more features of size relative to one another or to one or more datums.',
    standardRef: 'ASME Y14.5-2018, Section 7',
    symbol: '⌖',
    content: `
      Position is the most widely used GD&T symbol. It controls the location and orientation of features of size (holes, slots, pins).
      
      **Key Characteristics:**
      - Requires datums.
      - Controls location, orientation, and spacing.
      - Can use MMC, LMC, or RFS modifiers.
      
      **Tolerance Zone:**
      Typically a cylinder (for holes) or a width (for slots) centered at the true position.
    `,
    blueprintType: 'position',
    relatedTopics: ['perpendicularity', 'iso-14405-modifiers', 'machining-tolerances', 'fits-and-limits']
  },
  {
    id: 'perpendicularity',
    title: 'Perpendicularity',
    category: 'GD&T',
    description: 'Perpendicularity is the condition of a surface, axis, or line being at a 90-degree angle to a datum plane or axis.',
    standardRef: 'ASME Y14.5-2018, Section 6.3.1',
    symbol: '⟂',
    content: `
      Perpendicularity is an orientation control. It controls how much a feature can deviate from a perfect 90-degree angle relative to a datum.
      
      **Surface Perpendicularity:**
      - Tolerance zone is two parallel planes perpendicular to the datum.
      
      **Axis Perpendicularity:**
      - Tolerance zone is a cylinder perpendicular to the datum plane.
    `,
    blueprintType: 'perpendicularity',
    relatedTopics: ['flatness', 'position']
  },
  {
    id: 'dfma-intro',
    title: 'Introduction to DFMA',
    category: 'DFMA',
    description: 'Design for Manufacture and Assembly (DFMA) is an engineering methodology that focuses on reducing time-to-market and total production costs.',
    standardRef: 'Industry Best Practice',
    content: `
      **DFM (Design for Manufacture):**
      Focuses on selecting the most cost-effective raw materials and processes to be used in production.
      
      **DFA (Design for Assembly):**
      Focuses on reducing the number of parts in a product and ensuring that the remaining parts are easy to assemble.
      
      **Core Principles:**
      1. Minimize part count.
      2. Standardize parts and materials.
      3. Design for efficient joining (snap fits vs. screws).
      4. Minimize reorientation during assembly.
    `,
    blueprintType: 'generic',
    relatedTopics: ['injection-molding-dfm', 'sheet-metal-dfm', 'machining-tolerances']
  },
  {
    id: 'machining-tolerances',
    title: 'Standard Machining Tolerances',
    category: 'Manufacturing',
    description: 'General guidelines for achievable tolerances in standard machining processes.',
    standardRef: 'ISO 2768',
    content: `
      **ISO 2768-1 (General Tolerances):**
      Defines general tolerances for linear and angular dimensions without individual tolerance indications.
      
      - **Fine (f):** Precision machining (CNC grinding, fine turning).
      - **Medium (m):** Standard machining (Milling, turning).
      - **Coarse (c):** Rough machining, casting.
      - **Very Coarse (v):** Sand casting, flame cutting.
      
      **Rule of Thumb:**
      Tighter tolerances cost exponentially more. Only specify tight tolerances where functionally necessary (e.g., bearing fits).
    `,
    blueprintType: 'generic',
    relatedTopics: ['surface-finish', 'iso-14405-modifiers', 'dfma-intro', 'fits-and-limits']
  },
  {
    id: 'injection-molding-dfm',
    title: 'Injection Molding DFM',
    category: 'DFMA',
    description: 'Design guidelines for plastic injection molded parts to ensure moldability and quality.',
    standardRef: 'Industry Standard',
    content: `
      **Wall Thickness:**
      - Maintain uniform wall thickness to prevent sink marks and warping.
      - Recommended range: 1.5mm - 3.0mm for most thermoplastics.
      
      **Draft Angles:**
      - Essential for ejecting the part from the mold.
      - Minimum 0.5° for vertical walls.
      - 1° - 2° is standard.
      - Add 1° for every 0.025mm of texture depth.
      
      **Ribs:**
      - Used for stiffness.
      - Thickness should be 50-60% of the main wall thickness to avoid sink marks.
    `,
    blueprintType: 'injection-molding',
    relatedTopics: ['dfma-intro', 'surface-finish']
  },
  {
    id: 'sheet-metal-dfm',
    title: 'Sheet Metal DFM',
    category: 'DFMA',
    description: 'Design rules for sheet metal fabrication including bending, punching, and welding.',
    standardRef: 'Industry Standard',
    content: `
      **Bend Radius:**
      - Minimum bend radius depends on material thickness and type.
      - Generally, Min Radius = Material Thickness (1T).
      
      **Hole Placement:**
      - Keep holes at least 2T away from bend lines to prevent distortion.
      
      **Relief Cuts:**
      - Corner reliefs are necessary to prevent tearing when bending flanges.
    `,
    blueprintType: 'sheet-metal',
    relatedTopics: ['dfma-intro', 'machining-tolerances']
  },
  {
    id: 'surface-finish',
    title: 'Surface Finish Symbols',
    category: 'Manufacturing',
    description: 'Understanding surface texture symbols and Ra values.',
    standardRef: 'ASME Y14.36M',
    symbol: '√',
    content: `
      **Ra (Average Roughness):**
      The arithmetic average of the absolute values of the profile height deviations from the mean line.
      
      **Common Values (µm):**
      - **25:** Flame cut
      - **12.5:** Sawing, drilling
      - **6.3:** Milling, turning (rough)
      - **3.2:** Milling, turning (finish)
      - **1.6:** Grinding
      - **0.8:** Fine grinding, lapping
      
      **Symbol Structure:**
      The checkmark symbol indicates the surface requirement. Numbers above indicate the maximum roughness.
    `,
    blueprintType: 'surface-finish',
    relatedTopics: ['machining-tolerances', 'flatness']
  },
  {
    id: 'iso-14405-modifiers',
    title: 'ISO 14405 Linear Size Modifiers',
    category: 'Standards',
    description: 'Understanding ISO 14405-1 modifiers for linear size (LP, LS, GG, GX, etc.) and their impact on inspection.',
    standardRef: 'ISO 14405-1:2016',
    symbol: 'Ⓘ',
    content: `
      ISO 14405-1 establishes the default specification operator for linear size and provides a set of modifiers to define the size of a feature of size (cylinder, two parallel opposite planes, etc.) unambiguously.

      ### Common Modifiers

      **Local Size Modifiers:**
      - **(LP) Two-point size:** The distance between two opposite points on the feature. This is often the default inspection method (e.g., using calipers or a micrometer).
      - **(LS) Local size:** A general term for size at a specific cross-section.

      **Global Size Modifiers (Association Criteria):**
      These modifiers define how the ideal feature is fitted to the real extracted surface.
      
      - **(GG) Least-squares association:** The size of the perfect feature fitted to the extracted data such that the sum of the squares of the deviations is minimized (Gaussian). Used for average size.
      - **(GX) Maximum inscribed:** The size of the largest perfect feature that can fit *inside* the real hole. Useful for assembly (mating shaft).
      - **(GN) Minimum circumscribed:** The size of the smallest perfect feature that can fit *outside* the real shaft. Useful for assembly (mating hole).
      
      **Calculated Size Modifiers:**
      - **(CC) Circumference diameter:** The diameter calculated from the measured circumference (e.g., using a Pi tape).
      - **(CA) Area diameter:** The diameter calculated from the measured cross-sectional area.
      
      **Envelope Requirement:**
      - **(E):** The Envelope Requirement (Taylor Principle). It states that the feature must not violate the perfect form boundary at Maximum Material Condition (MMC). In ASME Y14.5, this is Rule #1 (default), but in ISO, it must be specified with the (E) symbol unless the drawing invokes a standard that makes it default.

      ### Why use them?
      Ambiguity in "Diameter 10 +/- 0.1" can lead to measurement disputes. 
      - A micrometer measures **(LP)**.
      - A coordinate measuring machine (CMM) might calculate **(GG)** by default.
      - A functional gauge checks **(E)** or **(GX)**.
      
      Specifying these modifiers ensures the inspection method matches the functional requirement.
    `,
    blueprintType: 'modifiers',
    relatedTopics: ['position', 'machining-tolerances', 'metrology-cmm']
  },
  {
    id: 'fits-and-limits',
    title: 'Engineering Fits (ISO 286)',
    category: 'Fits & Limits',
    description: 'System of limits and fits for mating parts, defining clearance, transition, and interference fits.',
    standardRef: 'ISO 286-1 / ANSI B4.1',
    symbol: 'H7/g6',
    content: `
      Engineering fits define the relationship between two mating parts, typically a hole and a shaft.
      
      **Types of Fits:**
      1. **Clearance Fit:** The shaft is always smaller than the hole. There is always a gap. Used for sliding or rotating parts.
      2. **Transition Fit:** The shaft may be larger or smaller than the hole. Can result in either clearance or interference. Used for accurate location where disassembly is possible.
      3. **Interference Fit (Press Fit):** The shaft is always larger than the hole. Requires force or thermal expansion to assemble. Used for permanent assembly.
      
      **Hole Basis System (Most Common):**
      The hole diameter is kept constant (e.g., H7), and the shaft diameter is varied to achieve the desired fit.
      - **H7/g6:** Precision sliding fit.
      - **H7/k6:** Transition fit (locating).
      - **H7/p6:** Interference fit (light press).
    `,
    blueprintType: 'fits',
    relatedTopics: ['machining-tolerances', 'position']
  },
  {
    id: 'metrology-cmm',
    title: 'Coordinate Measuring Machines (CMM)',
    category: 'Metrology',
    description: 'Principles of CMM inspection, probe compensation, and sampling strategies for verifying complex geometries.',
    standardRef: 'ISO 10360',
    content: `
      A Coordinate Measuring Machine (CMM) is a device that measures the geometry of physical objects by sensing discrete points on the surface of the object with a probe.
      
      **Key Concepts:**
      - **Probe Compensation:** Correcting for the radius of the stylus tip. The machine records the center of the stylus, but the surface is one radius away.
      - **Alignment (3-2-1 Rule):**
        1. **Plane (3 points):** Establishes the primary datum (levels the part).
        2. **Line (2 points):** Establishes the secondary datum (rotates the part).
        3. **Point (1 point):** Establishes the tertiary datum (sets the origin).
      
      **Sampling Strategy:**
      The number and distribution of points affect accuracy.
      - **Discrete Pointing:** Touching individual points. Slower but often more accurate for simple features.
      - **Scanning:** Dragging the probe across the surface. Collects high-density data (thousands of points) for form evaluation (flatness, profile).
    `,
    blueprintType: 'metrology',
    relatedTopics: ['iso-14405-modifiers', 'position', 'profile']
  },
  {
    id: 'welding-symbols',
    title: 'Welding Symbols',
    category: 'Manufacturing',
    description: 'Standard symbols for specifying weld type, size, length, and other processing information.',
    standardRef: 'AWS A2.4 / ISO 2553',
    symbol: '⋀',
    content: `
      Welding symbols provide a shorthand way to convey complete welding information on engineering drawings.
      
      **Basic Structure:**
      - **Reference Line:** Horizontal line where information is placed.
      - **Arrow:** Points to the joint to be welded.
      - **Tail:** Used for additional references (process, spec).
      
      **Arrow Side vs. Other Side:**
      - Symbols **below** the reference line apply to the **arrow side**.
      - Symbols **above** the reference line apply to the **other side**.
      
      **Common Symbols:**
      - **Fillet Weld:** Triangular symbol.
      - **Groove Welds:** V, U, J, Bevel symbols.
      - **Field Weld:** Flag symbol (indicates welding happens at the installation site).
      - **Weld All Around:** Circle at the junction of the arrow and reference line.
    `,
    blueprintType: 'welding',
    relatedTopics: ['sheet-metal-dfm']
  },
  {
    id: 'thread-dimensioning',
    title: 'Screw Thread Representation',
    category: 'Manufacturing',
    description: 'Designating metric and unified screw threads on engineering drawings.',
    standardRef: 'ISO 965 / ASME B1.1',
    content: `
      **Metric Threads (ISO):**
      Format: **M[Diameter] x [Pitch] - [Tolerance Class]**
      - *Example:* **M10 x 1.5 - 6g**
      - **M:** Metric thread profile.
      - **10:** Nominal diameter (mm).
      - **1.5:** Pitch (mm). (Coarse pitch is often omitted, e.g., M10).
      - **6g:** Tolerance class (6 = grade, g = position). 'g' is for external threads (bolts), 'H' is for internal threads (nuts).
      
      **Unified Threads (ASME):**
      Format: **[Diameter] - [Threads Per Inch] [Form] - [Class]**
      - *Example:* **1/4 - 20 UNC - 2A**
      - **1/4:** Nominal diameter (inch).
      - **20:** Threads per inch (TPI).
      - **UNC:** Unified National Coarse (UNF = Fine).
      - **2A:** Class of fit (1 = loose, 2 = standard, 3 = tight). 'A' = external, 'B' = internal.
    `,
    blueprintType: 'thread',
    relatedTopics: ['fits-and-limits', 'machining-tolerances']
  }
];
