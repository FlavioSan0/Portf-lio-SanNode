export default function TechGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="sannode-grid absolute inset-0 opacity-70" />
      <div className="sannode-grid-mask absolute inset-0" />
    </div>
  );
}