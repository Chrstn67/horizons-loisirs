/**
 * Petit jeu d'icones en SVG inline (style trait), sans dependance externe.
 * Chaque icone est dessinee dans une viewBox 24x24.
 */
const PATHS = {
  handshake: (
    <path d="M8 12l2 2 3-3 3 3 2-2M2 13l4-4 3 1 3-2 3 2 3-1 4 4-3 4-3-2-3 2-3-2-3 2-3-4z" />
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  map: (
    <>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  heart: (
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.5a3 3 0 0 1 0 6M21 20c0-2.5-1.3-4.7-3.5-5.6" />
    </>
  ),
  family: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <path d="M7 11c0-2.5 1.5-4 5-4s5 1.5 5 4" />
      <circle cx="6" cy="9.5" r="1.8" />
      <path d="M3.5 15.5c0-1.8 1-2.8 2.5-2.8s2.5 1 2.5 2.8" />
      <circle cx="18" cy="9.5" r="1.8" />
      <path d="M15.5 15.5c0-1.8 1-2.8 2.5-2.8s2.5 1 2.5 2.8" />
      <rect x="7.5" y="12.5" width="9" height="7" rx="1.5" />
      <path d="M10.5 19.5v-3.5M13.5 19.5v-3.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </>
  ),
  home: <path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6" />,
  cake: (
    <>
      <path d="M4 21h16M5 21v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
      <path d="M4 15c1.3 1.2 2.7 1.2 4 0s2.7-1.2 4 0 2.7 1.2 4 0 2.7-1.2 4 0" />
      <path d="M12 9V6M9 6.5c0-1 1-1.5 1.5-3 .5 1.5 1.5 2 1.5 3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-down": <path d="M12 5v14M6 13l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 13l4 4 10-11" />,
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
  ),
  star: (
    <path d="M12 4l2.4 5 5.6.5-4.3 3.7 1.4 5.4L12 15.8 6.9 18.6l1.4-5.4L4 9.5 9.6 9z" />
  ),
  wave: (
    <path d="M2 10c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="4" y="9" width="4" height="12" />
      <circle cx="6" cy="6" r="2" />
    </>
  ),
  facebook: (
    <path d="M14 8h2V5h-2c-2 0-3 1.4-3 3.2V10H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.3.2-.5.6-.5z" />
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46M14 4c.3 2 1.7 3.5 4 3.7" />,
  phone: (
    <path d="M6 4h3l2 5-2 1.5a11 11 0 0 0 4.5 4.5L19 17l-1.5 3a2 2 0 0 1-2.2 1A15 15 0 0 1 4 8.7 2 2 0 0 1 5 6.5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.5 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  tent: <path d="M12 4L3 20h18zM12 4v16M12 20l-4-6M12 20l4-6" />,
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-6.7-9-6.7z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  mountain: <path d="M3 20l6-11 4 6 2-3 6 8z" />,
  leaf: (
    <path d="M4 20c0-8 6-14 16-14 0 10-6 15-14 15-1 0-2-.4-2-1zM7 17c3-4 6-6 10-8" />
  ),
};

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.8,
  className = "",
  ...rest
}) {
  const glyph = PATHS[name] || null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  );
}
