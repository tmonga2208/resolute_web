import Image from "next/image"

type TestimonialProps = {
  imageSrc?: string
  title: string
  content: string
}

export function SimpleTestimonialCard({ imageSrc, title, content }: TestimonialProps) {
  return (
    <div className="my-4 rounded-lg max-w-md">
      <div className="flex flex-col items-start gap-3">
        {/* Smaller image placeholder or actual image */}
          {imageSrc ? (
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          )}
        </div>

        {/* Title */}
        <h3 className="text-teal-700 text-lg font-mont font-bold">{title}</h3>

        {/* Content */}
        <p className="text-gray-700 text-sm leading-relaxed font-mont">{content}</p>
    </div>
  )
}