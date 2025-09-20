export type ServiceCategory =
  | "womens-color"
  | "womens-haircuts-styling"
  | "nails"
  | "mens-haircuts-color";

export interface SalonService {
  name: string;
  slug: string; // e.g. south-jordan-balayage
  category: ServiceCategory;
  priceFrom?: string;
  // Optional copy overrides for unique page content
  copy?: Partial<ServiceCopy>;
}

export interface ServiceCopy {
  intro: string;
  sections: { heading: string; content: string }[];
  faqs: { q: string; a: string }[];
}

// Utility to create a South Jordan focused slug from a service label
const makeSlug = (label: string) => {
  const normalized = label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return `south-jordan-${normalized}`;
};

export const SERVICES: SalonService[] = [
  // Women's Color
  { name: 'Balayage', slug: makeSlug('balayage'), category: 'womens-color', priceFrom: '$195+' },
  { name: 'Full Highlights', slug: makeSlug('full highlights'), category: 'womens-color', priceFrom: '$145+' },
  { name: 'Partial Highlights', slug: makeSlug('partial highlights'), category: 'womens-color', priceFrom: '$100+' },
  { name: 'All Over Hair Color with Highlights', slug: makeSlug('all over hair color with highlights'), category: 'womens-color', priceFrom: '$195+' },
  { name: 'All Over Hair Color with Partial Highlights', slug: makeSlug('all over hair color with partial highlights'), category: 'womens-color', priceFrom: '$145+' },
  { name: 'All Over Hair Color', slug: makeSlug('all over hair color'), category: 'womens-color', priceFrom: '$110+' },
  { name: 'All Over Hair Color with 7 Foils', slug: makeSlug('all over hair color with 7 foils'), category: 'womens-color', priceFrom: '$125+' },
  { name: '7 Foils with Style', slug: makeSlug('7 foils with style'), category: 'womens-color', priceFrom: '$70+' },
  { name: 'All Over Blonde Hair', slug: makeSlug('all over blonde hair'), category: 'womens-color', priceFrom: '$180+' },
  { name: 'Blonde Root Touch Up', slug: makeSlug('blonde root touch up'), category: 'womens-color', priceFrom: '$130+' },
  { name: 'Toner and Gloss', slug: makeSlug('toner and gloss'), category: 'womens-color', priceFrom: '$65+' },
  { name: 'Root Touch Up', slug: makeSlug('root touch up'), category: 'womens-color', priceFrom: '$80+' },
  { name: 'Root Touch Up with Partial Highlights', slug: makeSlug('root touch up with partial highlights'), category: 'womens-color', priceFrom: '$130+' },
  { name: 'Color Remover', slug: makeSlug('color remover'), category: 'womens-color', priceFrom: '$75+' },
  { name: 'Camo Color', slug: makeSlug('camo color'), category: 'womens-color', priceFrom: '$40+' },

  // Women's Haircuts & Styling
  { name: "Women's Haircut and Style", slug: makeSlug('womens haircut and style'), category: 'womens-haircuts-styling', priceFrom: '$51+' },
  { name: 'Dry Cut', slug: makeSlug('dry cut'), category: 'womens-haircuts-styling', priceFrom: '$41+' },
  { name: "Kid's Haircut", slug: makeSlug('kids haircut'), category: 'womens-haircuts-styling', priceFrom: '$36+' },
  { name: 'Shampoo and Style', slug: makeSlug('shampoo and style'), category: 'womens-haircuts-styling', priceFrom: '$36+' },
  { name: 'Brazilian Blowout', slug: makeSlug('brazilian blowout'), category: 'womens-haircuts-styling', priceFrom: '$265+' },
  { name: 'Olaplex Treatment', slug: makeSlug('olaplex treatment'), category: 'womens-haircuts-styling', priceFrom: '$45+' },
  { name: 'Deep Conditioner', slug: makeSlug('deep conditioner'), category: 'womens-haircuts-styling', priceFrom: '$30+' },
  { name: 'Deep Conditioner w/Style', slug: makeSlug('deep conditioner with style'), category: 'womens-haircuts-styling', priceFrom: '$45+' },
  { name: 'Curl Set Refresh (No Shampoo)', slug: makeSlug('curl set refresh no shampoo'), category: 'womens-haircuts-styling', priceFrom: '$25+' },
  { name: 'Hair Extensions', slug: makeSlug('hair extensions consultation'), category: 'womens-haircuts-styling' },

  // Nails
  { name: 'Acrylic Nails Full Set', slug: makeSlug('acrylic nails full set'), category: 'nails', priceFrom: '$60+' },
  { name: 'Gel Manicure', slug: makeSlug('gel manicure'), category: 'nails', priceFrom: '$40+' },
  { name: 'Pedicure', slug: makeSlug('pedicure'), category: 'nails', priceFrom: '$45+' },

  // Men
  { name: "Men's Haircut", slug: makeSlug('mens haircut'), category: 'mens-haircuts-color', priceFrom: '$31+' },
  { name: "Men's All Over Hair Color", slug: makeSlug('mens all over hair color'), category: 'mens-haircuts-color', priceFrom: '$50+' },
  { name: "Men's All Over Blonde with Toner", slug: makeSlug('mens all over blonde with toner'), category: 'mens-haircuts-color', priceFrom: '$140+' },
  { name: "Men's Highlights", slug: makeSlug('mens highlights'), category: 'mens-haircuts-color', priceFrom: '$70+' },
];

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  'womens-color': "Women's Color",
  'womens-haircuts-styling': "Women's Haircuts & Styling",
  'nails': 'Nails',
  'mens-haircuts-color': "Men's Haircuts & Color",
};

export function getServicesByCategory(category: ServiceCategory): SalonService[] {
  return SERVICES.filter((s) => s.category === category);
}

export function getServiceBySlug(slug: string): SalonService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// ---------------------------
// Category base copy (500+ words when combined with overrides)
// ---------------------------

const colorBase = (serviceName: string): ServiceCopy => ({
  intro:
    `${serviceName} uses professional salon color to change your shade safely and predictably. We talk through your goal, check your hair history, and pick a formula and technique that fits the look—whether that’s a single shade, highlights, or hand‑painted dimension.`,
  sections: [
    {
      heading: `Customized Formulation & Tone Control`,
      content:
        `Your stylist selects precise formulations to achieve the right depth and reflect. We balance undertones, neutralize brassiness, and choose developers that respect the cuticle. If lightening is involved, we use bond‑building additives and low‑heat processing to maintain integrity. Expect a clean, modern color result that photographs beautifully in natural light.`,
    },
    {
      heading: `Application Techniques That Protect Hair`,
      content:
        `We tailor placement to your face shape and haircut. Foils, open‑air painting, root melts, tip‑outs, and zone toning are used as needed to create seamless dimension. Sectioning patterns are designed to grow out softly, keeping your color wearable for weeks longer.`,
    },
    {
      heading: `Maintenance & Appointment Cadence`,
      content:
        `Maintenance depends on your natural level and desired finish. Solid shades and gray coverage generally need a refresh every 4–6 weeks; lived‑in color and balayage usually stretch to 8–12 weeks. We map an easy plan and recommend in‑between glosses to keep tone bright.`,
    },
    {
      heading: `Aftercare That Extends Longevity`,
      content:
        `Protect your investment with sulfate‑free cleansers, cool water, and UV/heat protection. Weekly hydrating masks and bond‑repair treatments preserve elasticity. We personalize at‑home routines so your shade stays shiny and true from one visit to the next.`,
    },
  ],
  faqs: [
    {
      q: `How long does ${serviceName.toLowerCase()} take?`,
      a: `Timing varies by density and starting level, but most color sessions run 1.5–3 hours. Transformations or major lightening may require multiple visits for the healthiest path to your goal.`,
    },
    {
      q: `Will my hair stay healthy?`,
      a: `Yes. We use professional lighteners, bond builders, gentle developers, and conservative heat. Your stylist monitors elasticity and adjusts processing to protect your cuticle.`,
    },
  ],
});

const womensCutBase = (serviceName: string): ServiceCopy => ({
  intro:
    `${serviceName} is a haircut with shaping and styling to suit your face shape and hair texture. We keep it simple: a clean cut that air‑dries well and styles quickly at home.`,
  sections: [
    {
      heading: `Consultation & Face‑Framing`,
      content:
        `We learn about your lifestyle, cowlicks, and preferred part, then map out fringe, layers, and weight removal. Our goal is a shape that air‑dries well and blow‑dries quickly, with face‑framing that complements your bone structure.`,
    },
    {
      heading: `Precision Techniques`,
      content:
        `We combine blunt cutting for strong lines with slide, point, and texturizing techniques for softness and movement. Curl patterns are respected; density is balanced to prevent heavy ends or stringy mid‑lengths.`,
    },
    {
      heading: `Home Styling Education`,
      content:
        `You leave with a quick routine: product cocktail, brush choice, and drying sequence. We provide options for low‑heat styling to protect shine and reduce frizz.`,
    },
  ],
  faqs: [
    { q: `How often should I book?`, a: `Most haircuts look best with a 6–10 week cadence. Fringe trims and dustings can extend wear if you prefer longer gaps.` },
    { q: `Do you cut curly hair?`, a: `Yes. We adjust elevation and tension for curls and often refine the shape dry to honor the natural pattern.` },
  ],
});

const nailsBase = (serviceName: string): ServiceCopy => ({
  intro:
    `${serviceName} is a straightforward nail service with careful prep, clean shaping, and durable polish or enhancement. We keep things hygienic and comfortable while making your hands look neat and polished.`,
  sections: [
    { heading: `Cleanliness & Safety`, content: `Implements are cleaned and disinfected to state standards, single‑use items are disposed of after every guest, and stations are sanitized between appointments.` },
    { heading: `Detail Work`, content: `Cuticles are groomed gently, sidewalls are refined, and free edges are shaped for symmetry. We prioritize thin, natural‑looking overlays that feel comfortable day one.` },
    { heading: `Durability & Shine`, content: `Our gel and acrylic systems cure to a strong, glossy finish that resists chipping. We offer neutral, sheer, and bold options with durable topcoats.` },
  ],
  faqs: [
    { q: `How long will it last?`, a: `Gel manicures typically wear 2–3 weeks; acrylic sets are usually filled at 2–3 weeks depending on growth and lifestyle.` },
    { q: `Do you remove product safely?`, a: `Yes. We use controlled filing and soak‑off methods to protect the natural nail plate.` },
  ],
});

const mensBase = (serviceName: string): ServiceCopy => ({
  intro:
    `${serviceName} focuses on a clean shape that grows out well and takes little effort to style. You get crisp edges, soft blends, and product recommendations that match how you actually wear your hair.`,
  sections: [
    { heading: `Consultation & Head Shape`, content: `We map growth patterns, crown behavior, and recession to create a shape that holds as it grows out. Clippers and shears are blended for clean transitions.` },
    { heading: `Low‑Maintenance Styling`, content: `We select products that match your hair density and finish preference—matte, natural, or shine—so styling takes under two minutes.` },
    { heading: `Natural‑Looking Color`, content: `For gray blending or tonal shifts, we use fast processing formulas that soften grays or adjust depth without obvious demarcation.` },
  ],
  faqs: [
    { q: `How often should I come in?`, a: `Most short cuts look sharp on a 3–5 week schedule; longer styles can stretch to 6–8 weeks.` },
    { q: `Will color look obvious?`, a: `No. We formulate to match skin tone and use low‑contrast blending for a believable, subtle result.` },
  ],
});

// Targeted overrides for specific services to ensure uniqueness and accuracy
export function getCopyForService(service: SalonService): ServiceCopy {
  const name = service.name;
  let base: ServiceCopy;

  switch (service.category) {
    case 'womens-color':
      base = colorBase(name);
      break;
    case 'womens-haircuts-styling':
      base = womensCutBase(name);
      break;
    case 'nails':
      base = nailsBase(name);
      break;
    case 'mens-haircuts-color':
      base = mensBase(name);
      break;
    default:
      base = { intro: `${name} at Hair Elegance.`, sections: [], faqs: [] };
  }

  // Service‑specific enhancements
  const overrides: Record<string, Partial<ServiceCopy>> = {
    // COLOR SERVICES
    'Balayage': {
      intro: 'Balayage is hand‑painted lightening. We sweep lightener onto the surface of the hair to create soft brightness that fades lighter toward the ends with no harsh lines.',
      sections: [
        { heading: 'What it is', content: 'A freehand technique that mimics natural, sun‑lightened hair. It keeps depth near the root and places lighter pieces where your hair would naturally catch light.' },
        { heading: 'How we do it', content: 'We paint sections in open air or with wraps for control, then gloss to refine tone. Placement is customized around your haircut and parting.' },
        { heading: 'Maintenance', content: 'Most guests refresh every 8–12 weeks with a gloss in between to keep the tone fresh.' },
      ],
    },
    'Full Highlights': {
      intro: 'A full highlight uses foils across the entire head to add brightness from root to ends.',
      sections: [
        { heading: 'What it is', content: 'Foils placed through the top, sides, crown, and underneath for even, overall lightness.' },
        { heading: 'How we do it', content: 'Fine weaves or slices for coverage, careful foil tension for clean lift, and a finishing gloss for tone and shine.' },
        { heading: 'Maintenance', content: 'Typical upkeep is 8–10 weeks, with a gloss between visits to prevent brassiness.' },
      ],
    },
    'Partial Highlights': {
      intro: 'A partial highlight brightens the most visible areas—the top, crown, and face frame—while leaving the underneath darker for natural contrast.',
      sections: [
        { heading: 'What it is', content: 'Foils focused on the part line, front, and crown to lift brightness where you see it most.' },
        { heading: 'How we do it', content: 'Fine weaves for a blended look or bolder slices for pop. Finished with a gloss that sets the exact tone you want.' },
        { heading: 'Maintenance', content: 'Usually 8–12 weeks, depending on your starting level and desired brightness.' },
      ],
    },
    'All Over Hair Color': {
      intro: 'All‑over color is one shade applied roots to ends. It evens out tone, deepens or darkens your color, or covers gray in a single step.',
      sections: [
        { heading: 'What it is', content: 'A single permanent or demi‑permanent shade from scalp to ends for a uniform result.' },
        { heading: 'How we do it', content: 'Formula is chosen for coverage and shine, applied with clean sectioning for even saturation, then rinsed and conditioned for softness.' },
        { heading: 'Maintenance', content: 'Root regrowth is generally 4–6 weeks. Ends are refreshed as needed to keep the tone rich and glossy.' },
      ],
    },
    'Root Touch Up': {
      intro: 'A root retouch colors the new growth only. It refreshes gray coverage or keeps your base shade consistent.',
      sections: [
        { heading: 'What it is', content: 'Color applied to ½–1 inch of new growth only, matched to your existing shade.' },
        { heading: 'Maintenance', content: 'Most guests book every 4–6 weeks depending on growth and gray percentage.' },
      ],
    },
    'Toner and Gloss': {
      intro: 'A gloss (toner) adjusts tone and adds shine without making your hair darker or lighter.',
      sections: [
        { heading: 'What it is', content: 'A short‑processing, demi‑permanent formula that refines warmth and boosts reflection.' },
        { heading: 'When to use it', content: 'Great between highlight appointments or after any lightening to perfect the shade.' },
      ],
    },
    'Brazilian Blowout': {
      intro: 'A Brazilian Blowout is a smoothing treatment that reduces frizz and cuts blow‑dry time.',
      sections: [
        { heading: 'What it is', content: 'A professional treatment that smooths the cuticle without permanently straightening your natural texture.' },
        { heading: 'How we do it', content: 'Clarify, apply the smoothing solution, blow‑dry, seal with a flat iron, then rinse and condition.' },
        { heading: 'Longevity', content: 'Results can last up to 12 weeks with sulfate‑free care.' },
      ],
    },
    'Hair Extensions': {
      intro: 'Extensions add length and/or fullness using color‑matched hair that blends with your own.',
      sections: [
        { heading: 'What it is', content: 'Professional extension hair attached with a method suited to your lifestyle and hair type.' },
        { heading: 'Consultation required', content: 'We color‑match, choose method and length, and outline cost and upkeep before booking the install.' },
      ],
    },
    'Gel Manicure': {
      intro: 'A gel manicure is a thin, flexible gel polish cured under LED for a glossy, chip‑resistant finish.',
      sections: [
        { heading: 'What it is', content: 'Prep, cuticle care, shaping, and gel color cured in layers with a durable top coat.' },
        { heading: 'Wear time', content: 'Typically 2–3 weeks depending on lifestyle.' },
      ],
    },
    'Acrylic Nails Full Set': {
      intro: 'An acrylic full set builds length and strength with a sculpted enhancement and a clean, slim profile.',
      sections: [
        { heading: 'What it is', content: 'Acrylic is applied over forms or tips, then shaped to your preferred length and style.' },
        { heading: 'Maintenance', content: 'Plan for fills every 2–3 weeks as your nails grow.' },
      ],
    },
    'Men\'s Haircut': {
      sections: [
        { heading: 'Sharp Lines, Soft Blends', content: 'We refine perimeters, taper the neckline, and create clean transitions so the cut grows out neatly and maintains its shape between visits.' },
      ],
    },
    'All Over Blonde Hair': {
      intro: 'All‑over blonde lightens your entire head to a light shade, then refines the tone with a gloss.',
      sections: [
        { heading: 'What it is', content: 'Global lightening to reach a uniform blonde result, followed by a toner for the exact shade you want.' },
        { heading: 'Maintenance', content: 'Expect root maintenance every 4–6 weeks and gloss refreshes to keep the tone clean.' },
      ],
    },
    'Blonde Root Touch Up': {
      intro: 'Lightens only the new growth for guests who already wear an all‑over blonde.',
      sections: [
        { heading: 'What it is', content: 'Careful application at the scalp to lift new growth to match existing blonde, then a gloss for tone.' },
        { heading: 'Timing', content: 'Best maintained every 4–6 weeks to avoid banding and to keep lift even.' },
      ],
    },

    'All Over Hair Color with Highlights': {
      intro: 'Combines a solid base shade with highlights for brightness and dimension.',
      sections: [
        { heading: 'What it is', content: 'A single‑process base for coverage or depth, plus foils for lightness where it counts.' },
      ],
    },
    'All Over Hair Color with Partial Highlights': {
      intro: 'A full base color with a partial highlight focused on the top and front for a bright but manageable look.',
      sections: [
        { heading: 'What it is', content: 'Solid color throughout with strategic foils around the part and face for lift.' },
      ],
    },
    'All Over Hair Color with 7 Foils': {
      intro: 'A solid all‑over color with seven foils placed for a little extra brightness—often around the face.',
      sections: [
        { heading: 'What it is', content: 'Single‑process base with a few foils to break up the color and add dimension.' },
      ],
    },
    '7 Foils with Style': {
      intro: 'Seven foils to add a small amount of brightness, finished with a blow‑dry style.',
      sections: [
        { heading: 'What it is', content: 'A quick pick‑me‑up for subtle sparkle or face‑framing lightness without a full highlight.' },
      ],
    },
    // WOMEN'S CUTS/STYLING
    "Women's Haircut and Style": {
      intro: 'A full haircut with shampoo, cut, and blow‑dry styling. We design a shape that works for your texture and daily routine.',
      sections: [
        { heading: 'What it is', content: 'Consultation, cleansing, precision cut, and a finished style with simple tips to recreate it at home.' },
      ],
    },
    'Dry Cut': {
      intro: 'A haircut performed mostly on dry hair to refine shape and see how it naturally falls.',
      sections: [
        { heading: 'What it is', content: 'Ideal for curl patterns or fine‑tuning layers and face‑framing with accuracy.' },
      ],
    },
    "Kid's Haircut": {
      intro: 'A simple, age‑appropriate haircut for children with gentle techniques and quick styling.',
      sections: [
        { heading: 'What it is', content: 'Clean up ends, add light layers or shaping, and keep things comfortable and efficient.' },
      ],
    },
    'Shampoo and Style': {
      intro: 'A relaxing cleanse and blow‑dry style for a polished, ready‑to‑go finish.',
      sections: [
        { heading: 'What it is', content: 'Shampoo, conditioner, and a smooth blow‑dry with optional iron work as needed.' },
      ],
    },
    'Olaplex Treatment': {
      intro: 'A bond‑building treatment that helps reinforce hair from the inside out after color or heat styling.',
      sections: [
        { heading: 'What it is', content: 'Targets broken disulfide bonds to improve strength and reduce breakage.' },
        { heading: 'When to add it', content: 'Great during lightening or as a standalone treatment when hair feels fragile.' },
      ],
    },
    'Deep Conditioner': {
      intro: 'A rich conditioning treatment to add moisture, softness, and slip to dry or coarse hair.',
      sections: [
        { heading: 'What it is', content: 'A concentrated mask worked through mid‑lengths and ends to smooth the cuticle and reduce frizz.' },
      ],
    },
    'Deep Conditioner w/Style': {
      intro: 'A deep conditioning mask followed by a full blow‑dry style.',
      sections: [
        { heading: 'What it is', content: 'Moisture boost plus a polished finish—great before events or photos.' },
      ],
    },
    'Curl Set Refresh (No Shampoo)': {
      intro: 'A curl‑focused styling service on dry hair without a shampoo—great for refreshing definition between wash days.',
      sections: [
        { heading: 'What it is', content: 'Light re‑wetting, product application, and diffusing to revive curl pattern.' },
      ],
    },
    // MEN'S
    "Men's All Over Hair Color": {
      intro: 'A single shade applied roots to ends for men—used to darken, even out tone, or fully cover gray.',
      sections: [
        { heading: 'What it is', content: 'Uniform color with a natural finish. We can keep it soft or deliver full coverage depending on your preference.' },
      ],
    },
    "Men's All Over Blonde with Toner": {
      intro: 'Lightens the whole head and refines tone with a toner for a clean blonde result.',
      sections: [
        { heading: 'What it is', content: 'Scalp lightening with controlled processing and a gloss to set the final shade.' },
      ],
    },
    "Men's Highlights": {
      intro: 'Selective foils add lightness and texture without a drastic change—great for movement and a sun‑touched look.',
      sections: [
        { heading: 'What it is', content: 'Light foiling through the top and front for lift that looks natural and grows out cleanly.' },
      ],
    },
  };

  const merged: ServiceCopy = {
    intro: service.copy?.intro || base.intro,
    sections: [...base.sections, ...(service.copy?.sections || []), ...(overrides[service.name]?.sections || [])],
    faqs: [...base.faqs, ...(service.copy?.faqs || []), ...(overrides[service.name]?.faqs || [])],
  };

  return merged;
}


