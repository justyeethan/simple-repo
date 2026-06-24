import Image from "next/image";

export default function Home() {
  const labelColor = "#58a6ff";
  const accentColor = "#7ee787";

  return (
    <main
      style={{
        fontFamily:
          '"SF Mono", Monaco, Menlo, Consolas, "Courier New", monospace',
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        lineHeight: 1.6,
        fontSize: 14,
      }}
    >
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        a.terminal-link {
          color: #c9d1d9;
          text-decoration: none;
          border-bottom: 1px dashed #484f58;
        }
        a.terminal-link:hover {
          color: #58a6ff;
          border-bottom-color: #58a6ff;
        }
        .neofetch {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: center;
        }
        .ascii-art {
          color: #58a6ff;
          white-space: pre;
          font-size: 12px;
          line-height: 1.2;
        }
        @media (max-width: 600px) {
          .neofetch {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .ascii-art {
            font-size: 10px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 720, width: "100%" }}>
        {/* Neofetch-style header */}
        <div className="neofetch">
          <Image
            src={"/avatar.png"}
            alt="<avatar>
            <avatar/>"
            width={140}
            height={140}
            style={{ borderRadius: 8 }}
          />

          <div>
            <div style={{ color: accentColor, marginBottom: 4 }}>
              <span style={{ color: "#ff7b72" }}>ethan.yee</span>
              <span style={{ color: "#c9d1d9" }}>@</span>
              <span style={{ color: "#ff7b72" }}>portfolio</span>
            </div>
            <div style={{ color: "#484f58", marginBottom: 8 }}>
              ───────────────────────
            </div>
            <div>
              <span style={{ color: labelColor }}>Name</span>: Ethan Yee
            </div>
            <div>
              <span style={{ color: labelColor }}>Role</span>: Software Engineer
            </div>
            <div>
              <span style={{ color: labelColor }}>Company</span>: Untitled Cloud
              Company
            </div>
            <div>
              <span style={{ color: labelColor }}>Location</span>: Seattle,
              Washington
            </div>
            <div>
              <span style={{ color: labelColor }}>Shell</span>: zsh 5.9
            </div>
            <div>
              <span style={{ color: labelColor }}>Editor</span>: nvim
            </div>
            <div style={{ marginTop: 8, display: "flex", gap: 4 }}>
              {[
                "#0d1117",
                "#ff7b72",
                "#7ee787",
                "#f0c674",
                "#58a6ff",
                "#bc8cff",
                "#39c5cf",
                "#c9d1d9",
              ].map((c) => (
                <span
                  key={c}
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: c,
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={{ color: "#484f58", margin: "2rem 0" }}>
          ─────────────────────────────────────────────
        </div>

        {/* Contact section */}
        <div>
          <div>
            <span style={{ color: labelColor }}>$</span> cat contact.txt
          </div>
          <div>
            <span style={{ color: labelColor }}>email</span>:
            theethan5753@gmail.com
          </div>
          <div>
            <span style={{ color: labelColor }}>github</span>:{" "}
            <a className="terminal-link" href="https://github.com/justyeethan">
              github.com/justyeethan
            </a>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <span style={{ color: labelColor }}>$</span>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#c9d1d9",
              width: 8,
              height: 16,
              marginLeft: 2,
              verticalAlign: "middle",
              animation: "blink 1s steps(2) infinite",
            }}
          />
        </div>
      </div>
    </main>
  );
}
