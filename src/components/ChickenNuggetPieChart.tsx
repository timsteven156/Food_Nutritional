// components/ChickenNuggetPieChart.js
const ChickenNuggetPieChart = () => {
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

      {/* Carbohydrates (40%) */}
      <path
        d="M16 2 A 14 14 0 0 1 29.29 16.71 L 16 16 Z"
        fill="#ffcc00"
      ></path>

      {/* Protein (30%) */}
      <path
        d="M29.29 16.71 A 14 14 0 0 1 22.22 27.78 L 16 16 Z"
        fill="#66b3ff"
      ></path>

      {/* Fat (20%) */}
      <path
        d="M22.22 27.78 A 14 14 0 0 1 9.78 27.78 L 16 16 Z"
        fill="#ff6666"
      ></path>

      {/* Other (10%) */}
      <path
        d="M9.78 27.78 A 14 14 0 0 1 2.71 16.71 L 16 16 Z"
        fill="#99ff99"
      ></path>

      {/* Central Circle for Aesthetics */}
      <circle r="8" cx="16" cy="16" style={{ fill: "rgba(255, 255, 255, 0.2)", strokeWidth: 0 }}></circle>

      {/* Text Labels */}
      <text x="16" y="5" textAnchor="middle" fontSize="2" fill="#000">40% Carbs</text>
      <text x="24" y="20" textAnchor="middle" fontSize="2" fill="#000">30% Protein</text>
      <text x="14" y="29" textAnchor="middle" fontSize="2" fill="#000">20% Fat</text>
      <text x="7" y="20" textAnchor="middle" fontSize="2" fill="#000">10% Other</text>
    </svg>
  );
};

export default ChickenNuggetPieChart;
