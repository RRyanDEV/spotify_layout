export default function PaperStripCard({ key, src, ...props }) {
  return (
    <div key={key}>
      <iframe
        class="h-20"
        src={src}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
