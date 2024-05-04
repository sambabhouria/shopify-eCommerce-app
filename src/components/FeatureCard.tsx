import { FC } from 'react'
import { FeatureItem } from '../models/FeatureItem'

const FeatureCard: FC<FeatureItem> = ({ icon, desc, title }) => (
  <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla">
    {icon}
    <div>
      <h2 className="font-medium text-xl">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
)

export default FeatureCard
