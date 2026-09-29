import Image from "next/image";

export default function OneRepPreview() {
    return <div className="onerep-preview" role="img" aria-label="OneRep dashboard on a phone beside a live workout on an Apple Watch">
        <div className="onerep-preview-grid" aria-hidden="true" />
        <div className="onerep-preview-brand" aria-hidden="true">
            <span className="onerep-preview-name">OneRep</span>
            <span className="onerep-preview-tagline">TRAIN SMARTER</span>
            <svg viewBox="0 0 120 32" fill="none" aria-hidden="true"><path d="M1 17h18l6-9 8 18 9-12 6 4h15l7-15 10 28 8-14h30" stroke="url(#oneRepPulse)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="oneRepPulse"><stop stopColor="#7c90ff"/><stop offset="1" stopColor="#91e4d4"/></linearGradient></defs></svg>
        </div>
        <div className="onerep-device onerep-phone" aria-hidden="true">
            <Image src="/img/onerep-phone-frame.png" alt="" fill sizes="150px" className="onerep-device-frame" />
            <div className="onerep-phone-display"><Image src="/img/onerep-dashboard.png" alt="" fill sizes="140px" /></div>
            <div className="onerep-phone-island" />
        </div>
        <div className="onerep-device onerep-watch" aria-hidden="true">
            <Image src="/img/onerep-watch-frame.png" alt="" fill sizes="140px" className="onerep-device-frame" />
            <div className="onerep-watch-display"><Image src="/img/onerep-watch-screen.png" alt="" fill sizes="126px" /></div>
        </div>
    </div>;
}
