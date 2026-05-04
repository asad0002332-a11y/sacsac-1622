import { useEffect } from "react";

const BASE_URL = "https://schoolagecalculator.online";

const faqs = [
  {
    q: "What age does a child start school in the US?",
    a: "In the United States, children typically start Kindergarten at age 5. Most states require children to turn 5 by September 1st of the school year, though cutoff dates vary by state — some use August 1, October 1, or even December 1. Children enter Grade 1 at age 6 and graduate high school (Grade 12) at around age 17–18.",
  },
  {
    q: "What age does school start in the UK?",
    a: "In England and Wales, children start Reception class in September after their 4th birthday. School is compulsory from age 5 through Year 11 (age 16). Many students continue to Year 12 and Year 13 (Sixth Form) until age 18.",
  },
  {
    q: "What grade is my child in by age?",
    a: "In the USA: Kindergarten (age 5–6), Grade 1 (6–7), Grade 2 (7–8), Grade 3 (8–9), Grade 4 (9–10), Grade 5 (10–11), Grade 6 (11–12), Grade 7 (12–13), Grade 8 (13–14), Grade 9 (14–15), Grade 10 (15–16), Grade 11 (16–17), Grade 12 (17–18). Use our free calculator for an exact result based on date of birth and state.",
  },
  {
    q: "What age do children start school in Australia?",
    a: "In Australia, children start school in the year they turn 5, but the exact cutoff date varies by state. In NSW, children must turn 5 by July 31. In Victoria, the cutoff is April 30. In Queensland and WA, it's June 30. The first year of school is called Kindergarten (NSW/ACT), Prep (VIC/QLD/TAS), Pre-primary (WA), Reception (SA), or Transition (NT).",
  },
  {
    q: "What age does kindergarten start in Canada?",
    a: "Most Canadian provinces require children to be 5 years old by December 31 to start Kindergarten. Ontario offers Junior Kindergarten (JK) for 4-year-olds. Alberta's cutoff is March 1, Quebec's is September 30, and Nova Scotia's is October 1.",
  },
  {
    q: "What is the difference between UK year groups and US grades?",
    a: "UK Year 1 is equivalent to US Kindergarten (age 5–6). UK Year 2 = US Grade 1. UK Year 6 = US Grade 5. UK Year 7 = US Grade 6. UK Year 11 = US Grade 10. UK Year 13 = US Grade 12. UK children start formal school (Reception) at age 4, one year earlier than most US states.",
  },
  {
    q: "How do I calculate what grade my child should be in?",
    a: "To calculate your child's grade: (1) Find the kindergarten cutoff date for your state or country. (2) Determine the year your child turned 5 by that date — that's their Kindergarten year. (3) Add years of schooling from that point. Or use our free School Age Calculator — enter the date of birth, select country and state, and get the answer instantly.",
  },
  {
    q: "What is the school starting age in different countries?",
    a: "School starting ages vary by country: USA (age 5), UK (age 4 — Reception), Australia (age 5, varying by state), Canada (age 4–5 depending on province), Germany (age 6), France (age 3 — maternelle), Finland (age 6–7). The UK and Australia start children in formal school earlier than most countries.",
  },
  {
    q: "Can a child start school early or late?",
    a: "Yes. In the USA, many states allow 'redshirting' — delaying Kindergarten by one year if the child is born close to the cutoff date. In the UK, summer-born children (April–August) can defer their Reception year. In Australia, parents can defer entry in most states. Early entry is sometimes possible with school approval.",
  },
  {
    q: "What year will my child graduate from high school?",
    a: "Take the year your child starts Kindergarten and add 13 years. For example, if your child starts Kindergarten in 2024, they'll graduate in 2037. Our free calculator provides the exact graduation year based on date of birth and location.",
  },
  {
    q: "What are the school enrollment age requirements in each US state?",
    a: "Most US states require children to be 5 by September 1 for Kindergarten. Exceptions include: Michigan and New York (December 1), Connecticut and Vermont (January 1), Hawaii and Missouri (July 31), Arkansas and Indiana (August 1). Always check with your local school district as some districts set their own cutoff dates.",
  },
];

const schemas = [
  // 1. WebApplication
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${BASE_URL}/#webapp`,
    "name": "School Age Calculator",
    "url": BASE_URL,
    "description": "Free school age calculator for USA, UK, Australia and Canada. Find your child's grade level, enrollment year, and graduation year by date of birth.",
    "applicationCategory": "EducationalApplication",
    "applicationSubCategory": "Calculator",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Calculate school grade by date of birth",
      "US state-by-state kindergarten cutoff dates — all 50 states",
      "UK year group and Key Stage calculator",
      "Australia school starting age by state and territory",
      "Canada province and territory kindergarten age calculator",
      "Graduation year calculator",
      "School enrollment year calculator",
      "Redshirting eligibility check"
    ],
    "screenshot": `${BASE_URL}/og-image.png`,
    "creator": {
      "@type": "Organization",
      "name": "School Age Calculator",
      "url": BASE_URL
    }
  },

  // 2. FAQPage
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/#faq`,
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  },

  // 3. Organization
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "School Age Calculator",
    "alternateName": "SAC",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      "url": `${BASE_URL}/logo.svg`,
      "contentUrl": `${BASE_URL}/logo.svg`,
      "width": 512,
      "height": 512,
      "caption": "School Age Calculator Logo"
    },
    "description": "Free online tool to calculate school starting age and grade level for USA, UK, Australia, and Canada.",
    "email": "hello@schoolagecalculator.online",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jersey City",
      "addressRegion": "NJ",
      "postalCode": "07302",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hello@schoolagecalculator.online",
        "telephone": "+97450195474",
        "availableLanguage": ["English"],
        "areaServed": ["US", "GB", "AU", "CA"]
      }
    ],
    "knowsAbout": [
      "School enrollment ages",
      "Kindergarten cutoff dates",
      "US school grade levels",
      "UK year groups",
      "Australian school starting age",
      "Canadian kindergarten age"
    ]
  },

  // 4. WebPage (homepage)
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/#webpage`,
    "url": BASE_URL,
    "name": "School Age Calculator — Find Your Child's Grade (USA, UK, Australia, Canada)",
    "description": "Free School Age Calculator: instantly find what grade your child is in, when they start school, and their graduation year. Covers all 50 US states, UK year groups, Australian states, and Canadian provinces.",
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    },
    "about": {
      "@id": `${BASE_URL}/#webapp`
    },
    "breadcrumb": {
      "@id": `${BASE_URL}/#breadcrumb`
    },
    "inLanguage": "en",
    "dateModified": new Date().toISOString().split("T")[0],
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": [BASE_URL]
      }
    ]
  },

  // 5. WebSite with SearchAction (Sitelinks Searchbox)
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": "School Age Calculator",
    "description": "Free school age and grade level calculator for parents, educators and guardians.",
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  },

  // 6. BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "School Age Calculator",
        "item": `${BASE_URL}/#calculator`
      }
    ]
  },

  // 7. HowTo (step-by-step use of the calculator — rich result eligible)
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${BASE_URL}/#howto`,
    "name": "How to Calculate Your Child's School Grade",
    "description": "Use the free School Age Calculator to find your child's current grade level, school enrollment year, and graduation year in seconds.",
    "image": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/og-image.png`,
      "width": 1200,
      "height": 630
    },
    "totalTime": "PT1M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "School Age Calculator",
        "url": BASE_URL
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter your child's date of birth",
        "text": "Type or select your child's full date of birth (day, month, year) in the date of birth field.",
        "url": `${BASE_URL}/#calculator`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Select your country",
        "text": "Choose from USA, UK, Australia, or Canada using the country selector.",
        "url": `${BASE_URL}/#calculator`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Select your state or province",
        "text": "For USA, pick your state (cutoff dates vary). For Australia, pick your state or territory. For Canada, pick your province.",
        "url": `${BASE_URL}/#calculator`
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Click Calculate",
        "text": "Press the Calculate button to instantly see your child's current grade level, school type, enrollment year, and graduation year.",
        "url": `${BASE_URL}/#calculator`
      }
    ]
  },

  // 8. ItemList — Guide pages (sitelinks eligible)
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#guides`,
    "name": "School Age Guides by Country",
    "description": "Detailed guides on school starting ages, grade levels, and enrollment rules for the USA, UK, Australia, and Canada.",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "US School Starting Ages — Complete State-by-State Guide",
        "url": `${BASE_URL}/guides/usa`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "UK School Year Groups Explained — Ages, Key Stages & Year Numbers",
        "url": `${BASE_URL}/guides/uk`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "When Does My Child Start School in Australia? — Complete State Guide",
        "url": `${BASE_URL}/guides/australia`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Canada Kindergarten Age by Province — What Every Parent Needs to Know",
        "url": `${BASE_URL}/guides/canada`
      }
    ]
  }
];

export default function SchemaMarkup() {
  useEffect(() => {
    schemas.forEach((schema, i) => {
      const id = `schema-homepage-${i}`;
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, i) => {
        const s = document.getElementById(`schema-homepage-${i}`);
        if (s) s.remove();
      });
    };
  }, []);

  return null;
}
