// app/components/Pricing.tsx
export default function MotionWeb() {
    return (
      <section className="w-full px-16 mt-4 mb-4 py-8">
      <div className="aspect-video w-full h-full overflow-hidden rounded-lg">
        {/* Autoplaying, muted, looped Vimeo embed */}
        <iframe
          src="https://player.vimeo.com/video/1123336804?background=1&autoplay=1&loop=1&muted=1"   //https://vimeo.com/1123336804?fl=ip&fe=ec
          className="w-full h-full rounded-2xl"  
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="piotrmacai.com & ainsider.co"
        />
      </div>
    </section>
    );
  }