import { motion } from 'framer-motion'

interface RadarChartProps {
  data: {
    label: string
    value: number // 0-100
  }[]
  size?: number
}

const RadarChart = ({ data, size = 300 }: RadarChartProps) => {
  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.35
  const numPoints = data.length
  const angleStep = (2 * Math.PI) / numPoints

  // 计算每个数据点的坐标
  const getPoint = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2 // 从顶部开始
    const distance = (radius * value) / 100
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle),
      labelX: centerX + (radius + 30) * Math.cos(angle),
      labelY: centerY + (radius + 30) * Math.sin(angle),
    }
  }

  // 生成网格线路径
  const gridLevels = 5
  const gridPaths = Array.from({ length: gridLevels }, (_, i) => {
    const level = (i + 1) / gridLevels
    const points = data.map((_, index) => {
      const angle = index * angleStep - Math.PI / 2
      const distance = radius * level
      return {
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle),
      }
    })
    return points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z'
  })

  // 生成数据区域路径
  const dataPoints = data.map((item, index) => getPoint(index, item.value))
  const dataPath = dataPoints
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(' ') + ' Z'

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* 绘制网格线 */}
        {gridPaths.map((path, i) => (
          <path
            key={i}
            d={path}
            fill="none"
            stroke="#FFA851"
            strokeWidth="1"
            strokeOpacity={0.2}
          />
        ))}

        {/* 绘制轴线 */}
        {data.map((_, index) => {
          const angle = index * angleStep - Math.PI / 2
          const endX = centerX + radius * Math.cos(angle)
          const endY = centerY + radius * Math.sin(angle)
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke="#FFA851"
              strokeWidth="1"
              strokeOpacity={0.2}
            />
          )
        })}

        {/* 绘制数据区域 */}
        <motion.path
          d={dataPath}
          fill="#FFA851"
          fillOpacity={0.3}
          stroke="#FFA851"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* 绘制数据点 */}
        {dataPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#FFA851"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}

        {/* 绘制标签 */}
        {data.map((item, index) => {
          const point = getPoint(index, item.value)
          return (
            <text
              key={index}
              x={point.labelX}
              y={point.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium fill-gray-700"
            >
              {item.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

export default RadarChart


