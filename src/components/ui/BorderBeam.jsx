const BorderBeam = ({
  duration = 12,
  colorFrom = '#FD6703',
  colorTo = '#ff7e29',
  borderWidth = 1.5,
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
          background: `conic-gradient(from var(--border-beam-angle, 0deg), transparent 80%, ${colorFrom}, ${colorTo}, transparent 100%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: `border-beam-spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
};

export default BorderBeam;
