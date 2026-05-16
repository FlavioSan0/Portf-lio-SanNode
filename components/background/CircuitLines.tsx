export default function CircuitLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="sannode-circuit sannode-circuit-left"
        viewBox="0 0 420 720"
        fill="none"
      >
        <path
          className="sannode-circuit-path"
          d="M20 90H130C146.569 90 160 103.431 160 120V190C160 206.569 173.431 220 190 220H310"
        />
        <path
          className="sannode-circuit-path sannode-delay-1"
          d="M70 330H165C181.569 330 195 343.431 195 360V465C195 481.569 208.431 495 225 495H380"
        />
        <path
          className="sannode-circuit-path sannode-delay-2"
          d="M5 590H95C111.569 590 125 576.569 125 560V530C125 513.431 138.431 500 155 500H260"
        />

        <circle className="sannode-node" cx="20" cy="90" r="4" />
        <circle className="sannode-node sannode-delay-1" cx="310" cy="220" r="4" />
        <circle className="sannode-node sannode-delay-2" cx="380" cy="495" r="4" />
      </svg>

      <svg
        className="sannode-circuit sannode-circuit-right"
        viewBox="0 0 420 720"
        fill="none"
      >
        <path
          className="sannode-circuit-path sannode-delay-2"
          d="M400 110H285C268.431 110 255 123.431 255 140V210C255 226.569 241.569 240 225 240H90"
        />
        <path
          className="sannode-circuit-path"
          d="M420 405H330C313.431 405 300 391.569 300 375V345C300 328.431 286.569 315 270 315H150"
        />
        <path
          className="sannode-circuit-path sannode-delay-1"
          d="M390 610H265C248.431 610 235 596.569 235 580V535C235 518.431 221.569 505 205 505H40"
        />

        <circle className="sannode-node" cx="90" cy="240" r="4" />
        <circle className="sannode-node sannode-delay-1" cx="150" cy="315" r="4" />
        <circle className="sannode-node sannode-delay-2" cx="390" cy="610" r="4" />
      </svg>
    </div>
  );
}