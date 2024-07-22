const PieChart = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      style={{ maxWidth: "200px", maxHeight: "200px" }}
    >
      {/* Background Circle */}
      <circle r="16" cx="16" cy="16" style={{ fill: "rgba(255, 255, 255, 0.2)", strokeWidth: 0 }}></circle>

      {/* Carbohydrates (70%) */}
      <path
        d="M16 2 A 14 14 0 0 1 30 16 L 16 16 Z"
        fill="#ffcc00"
        transform="rotate(0 16 16)"
      ></path>

      {/* Protein (12%) */}
      <path
        d="M16 2 A 14 14 0 0 1 28.48 20.8 L 16 16 Z"
        fill="#66b3ff"
        transform="rotate(252 16 16)"
      ></path>

      {/* Fat (5%) */}
      <path
        d="M16 2 A 14 14 0 0 1 21.8 28.48 L 16 16 Z"
        fill="#ff6666"
        transform="rotate(324 16 16)"
      ></path>

      {/* Other (13%) */}
      <path
        d="M16 2 A 14 14 0 0 1 16 30 L 16 16 Z"
        fill="#99ff99"
        transform="rotate(342 16 16)"
      ></path>

      {/* Central Circle for Aesthetics */}
      <circle r="8" cx="16" cy="16" style={{ fill: "rgba(255, 255, 255, 0.2)", strokeWidth: 0 }}></circle>

      {/* Text Labels */}
      <text x="16" y="5" textAnchor="middle" fontSize="2" fill="#000">70% Carbs</text>
      <text x="24" y="20" textAnchor="middle" fontSize="2" fill="#000">12% Protein</text>
      <text x="14" y="29" textAnchor="middle" fontSize="2" fill="#000">5% Fat</text>
      <text x="7" y="20" textAnchor="middle" fontSize="2" fill="#000">13% Other</text>
    </svg>
  );
};

export default PieChart;
