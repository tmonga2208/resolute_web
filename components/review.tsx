import { Star } from 'lucide-react'

type ClientReviewProps = {
  rating?: number
  title?: string
  content: string
}

export function ClientReviewCard({ 
  rating = 5, 
  title = "Client Review.", 
  content 
}: ClientReviewProps) {
  return (
    <div className="max-w-md bg-white font-mont p-6 shadow-md">
      <div className="flex flex-col gap-2">
        {/* Star Rating */}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? "fill-teal-500 text-teal-500" : "text-gray-300"}`}
            />
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        
        {/* Content */}
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  )
}
