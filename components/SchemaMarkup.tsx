export default function SchemaMarkup() {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PALM",
      url: "https://palmai.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://palmai.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };
  
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PALM",
      url: "https://palmai.com",
      description:
        "PALM offers modern palmistry-inspired online palm readings by photo for self-reflection and personal insight.",
    };
  
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "PALM Full Palm Reading Report",
      description:
        "Personalized palmistry-inspired report covering love, career, personality, emotional patterns, palm line observations, and life path reflection.",
      brand: {
        "@type": "Brand",
        name: "PALM",
      },
      offers: {
        "@type": "Offer",
        price: "99",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "10000",
      },
    };
  
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I get a free palm reading online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. PALM lets you upload your palm photo and receive a free palmistry-inspired preview before unlocking the full personalized report.",
          },
        },
        {
          "@type": "Question",
          name: "How does palm reading by photo work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You upload a clear palm photo. PALM studies visible palm lines and patterns inspired by traditional palmistry to create a personalized reading.",
          },
        },
        {
          "@type": "Question",
          name: "Is this palm reading a guaranteed prediction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. PALM readings are for entertainment, self-reflection, and personal insight only. They are not guaranteed future predictions or professional advice.",
          },
        },
        {
          "@type": "Question",
          name: "How do I receive my full palm report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After successful payment, your full personalized palm report is displayed instantly and can be downloaded as a PDF.",
          },
        },
      ],
    };
  
    const schemas = [
      websiteSchema,
      organizationSchema,
      productSchema,
      faqSchema,
    ];
  
    return (
      <>
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </>
    );
  }