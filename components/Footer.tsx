export default function Footer() {
    const mainLinks = [
      ["Home", "/"],
      ["Start Reading", "/#upload"],
      ["Full Report", "/#report"],
      ["FAQ", "/#faq"],
      ["Contact", "/contact"],
    ];
  
    const seoLinks = [
      ["Free Palm Reading", "/free-palm-reading"],
      ["Online Palm Reading", "/online-palm-reading"],
      ["Palm Reading by Photo", "/palm-reading-by-photo"],
      ["Love Palm Reading", "/love-palm-reading"],
      ["Career Palm Reading", "/career-palm-reading"],
      ["Palm Reading India", "/palm-reading-india"],
      ["Palm Reading Chennai", "/palm-reading-chennai"],
    ];
  
    const legalLinks = [
      ["Privacy", "/privacy-policy"],
      ["Terms", "/terms"],
      ["Refunds", "/refund-policy"],
      ["Delivery", "/shipping-policy"],
    ];
  
    return (
      <footer className="bg-[#fff8e8] px-5 py-8 text-[#421b0d]">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-[#eadcc6] bg-white/70 px-6 py-6 shadow-xl shadow-orange-100/40">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                color: "#421b0d",
              }}
            >
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "999px",
                  background: "#f6b94b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                🖐️
              </span>
  
              <span>
                <strong
                  style={{
                    display: "block",
                    letterSpacing: "0.18em",
                    fontSize: 18,
                  }}
                >
                  PALM
                </strong>
                <span style={{ fontSize: 14, color: "#823616" }}>
                  Modern Palmistry
                </span>
              </span>
            </a>
  
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "22px",
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              {mainLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: "#823616",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
  
            <a
              href="/#upload"
              style={{
                background: "#087c54",
                color: "white",
                padding: "12px 22px",
                borderRadius: "999px",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Start Free Reading
            </a>
          </div>
  
          <div
            style={{
              marginTop: 24,
              paddingTop: 20,
              borderTop: "1px solid #eadcc6",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#421b0d",
                margin: 0,
              }}
            >
              Popular Palm Reading Pages
            </p>
  
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              {seoLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: "#823616",
                    fontSize: 13,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
  
          <div
            style={{
              marginTop: 20,
              paddingTop: 18,
              borderTop: "1px solid #eadcc6",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              {legalLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: "#823616",
                    fontSize: 13,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
  
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "#823616",
                opacity: 0.75,
              }}
            >
              For entertainment and self-reflection only. Not professional advice.
            </p>
          </div>
        </div>
  
        <div
          className="mx-auto max-w-7xl"
          style={{
            marginTop: 18,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 12,
            color: "#823616",
            opacity: 0.75,
          }}
        >
          <p>© {new Date().getFullYear()} PALM. All rights reserved.</p>
        </div>
      </footer>
    );
  }