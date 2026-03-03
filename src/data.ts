
export type Category = 'GD&T' | 'DFMA' | 'Manufacturing' | 'Standards';

export interface Topic {
  id: string;
  title: string;
  category: Category;
  description: string;
  standardRef: string; // e.g., "ASME Y14.5-2018 Section 5.4.1"
  symbol?: string; // SVG path or similar identifier
  content: string;
  blueprintType: 'flatness' | 'straightness' | 'position' | 'circularity' | 'perpendicularity' | 'parallelism' | 'profile' | 'datum' | 'generic';
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
    relatedTopics: ['perpendicularity', 'iso-14405-modifiers', 'machining-tolerances']
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
    relatedTopics: ['surface-finish', 'iso-14405-modifiers', 'dfma-intro']
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
    blueprintType: 'generic',
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
    blueprintType: 'generic',
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
    blueprintType: 'generic',
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
    blueprintType: 'generic',
    relatedTopics: ['position', 'machining-tolerances']
  }
];
